const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("postDate", (Dateobj) => {
      return DateTime.fromJSDate(Dateobj).setLocale('fr').toLocaleString(DateTime.DATE_FULL);
    });

    return {
        dir: {
          input: "src",
          output: "public"
        }
      }
}