const minifyCSS = require('gulp-minify-css');
const paths = require('./helper/paths');

const name = "styles";

module.exports = function (gulp) {
  return {
    name: name,
    fn: function () {
      return gulp.src(paths.src(name))
          .pipe(minifyCSS())
          .pipe(gulp.dest(paths.release(name)));
    },
    watch: true
  };
};