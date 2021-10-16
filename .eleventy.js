const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    eleventyConfig.addFilter("postDate", (Dateobj) => {
      return DateTime.fromJSDate(Dateobj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
          input: "src",
          output: "public"
        }
      }
}