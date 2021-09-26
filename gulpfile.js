var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var buffer = require("vinyl-buffer");
var sass = require("gulp-sass")(require("sass"));

var paths = {
  pages: ["src/*.html"]
};

gulp.task("copy-html", () => {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

gulp.task("sass", () => {
  return gulp.src("src/sass/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html", "sass"), () => {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .transform("babelify", {
        presets: ["es2015"],
        extensions: [".ts"],
      })
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(buffer())
      .pipe(gulp.dest("dist"));
  })
);

gulp.task("watch", () => {
  gulp.watch(
    ["src/*.html", "src/sass/*.scss", "src/ts/**/*.ts"],
    gulp.series('default')
  )
});
