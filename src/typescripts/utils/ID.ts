class IdUtils {
	public static HEX_CHARS_16 = "0123456789ABCDEF".split("");
	public static HEX_CHARS_22 = "0123456789ABCDEFabcdef".split("");
	public static OCTAL_CHARS = "01234567".split("");
	public static BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
	public static SAFE_BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");

	public randChars(chars: Array<string>, length: number): string {
		const result = [];
		for (let i = 0; i < length; ++i) {
			result.push(chars[Math.floor(Math.random() * chars.length)]);
		}
		return result.join("");
	}

	public hex16(length): string {
		return this.randChars(IdUtils.HEX_CHARS_16, length);
	}

	public hex22(length): string {
		return this.randChars(IdUtils.HEX_CHARS_22, length);
	}

	public hex(length): string {
		return this.hex22(length);
	}

	public octal(length): string {
		return this.randChars(IdUtils.OCTAL_CHARS, length);
	}

	public base64(length): string {
		return this.randChars(IdUtils.BASE_64_CHARS, length);
	}

	public safeBase64(length): string {
		return this.randChars(IdUtils.SAFE_BASE_64_CHARS, length);
	}

	// https://jsfiddle.net/briguy37/2MVFd/
	public uuid() {
		let d = new Date().getTime();
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			const r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	}
}

export default new IdUtils();
