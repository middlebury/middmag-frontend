const gulp = require('gulp');
const { createConfig } = require('@middlebury/gulp-config');

const { THEME_DIR, IMAGES_DIR } = process.env;

const cmds = createConfig({
  browserSyncOptions: {
    directory: true
  },
  // default config sets images as /img dir
  images: {
    src: './src/images/*.{jpg,png,svg}',
    watch: './src/images/*.{jpg,png,svg}',
    dest: './dist/images'
  },
  twig: {
    parserOptions: {
      filters: require('./twig-filters')
    }
  }
});

const deploy = () => {
  if (!THEME_DIR) {
    throw new Error(`
      Missing THEME_DIR environment variable. Example:

      THEME_DIR=/path/to/theme npm run deploy
    `);
  }

  return gulp
    .src(['./dist/css/*', './dist/js/*', './dist/images/*'], {
      base: './dist'
    })
    .pipe(gulp.dest(THEME_DIR));
};

module.exports = {
  ...cmds,
  deploy
};
