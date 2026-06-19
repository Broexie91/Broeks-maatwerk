const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

  // HTML inschakelen in Markdown bestanden
  const md = markdownIt({ html: true, breaks: false, linkify: true });
  eleventyConfig.setLibrary("md", md);

  // Kopieer assets (CSS, JS, afbeeldingen) direct naar de output map
  eleventyConfig.addPassthroughCopy("src/assets");

  // Eleventy configuratie: input- en outputmappen
  return {
    dir: {
      input:    "src/pages",      // Markdown-pagina's
      layouts:  "../layouts",     // HTML-layouts (relatief aan input)
      output:   "_site",          // Gebouwde website
      data:     "../_data",       // Globale data (optioneel)
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine:     "njk",
    templateFormats: ["md", "html", "njk"],
  };
};
