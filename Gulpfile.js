const gulp = require("gulp");
const watch = require("gulp-watch");
const ts = require("gulp-typescript");
const browserify = require("gulp-browserify");

const compileTypeScripts = function() {
	return gulp.src("src/typescripts/**/*.ts")
		.pipe(ts({
			"module": "amd",
			"target": "es5",
			"noImplicitAny": false,
			"rootDir": "src/typescripts"
		}))
		.pipe(gulp.dest("build/js"));
}

const browserifyApplication = function() {
	return gulp.src("build/js/application.js")
		.pipe(browserify())
		.pipe(gulp.dest("public/js"));
}

gulp.task("compile", function() {
	return compileTypeScripts();
});

gulp.task("concat", ["compile"], function(argument) {
	return browserifyApplication();
});

gulp.task("build", ["concat"]);
gulp.task("default", ["build"]);
gulp.task("watch", function() {
	gulp.watch("src/typescripts/**/*.ts", ["build"]);
});
