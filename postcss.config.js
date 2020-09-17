const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    // Jekyll output directory
    "./_site/**/*.html",
    "./_site/**/*.js",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("cssnano")(),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
