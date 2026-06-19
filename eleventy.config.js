module.exports = function (eleventyConfig) {

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
    // Markdown bestanden kunnen HTML bevatten
    markdownTemplateEngine: "njk",
    htmlTemplateEngine:     "njk",
    templateFormats: ["md", "html", "njk"],
  };
};
