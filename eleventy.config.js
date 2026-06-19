module.exports = function (eleventyConfig) {

  // Kopieer src/assets naar _site/assets (zodat /assets/css/style.css correct werkt)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Eleventy configuratie: input- en outputmappen
  return {
    dir: {
      input:    "src/pages",    // Pagina-templates
      layouts:  "../layouts",   // HTML-layouts (relatief aan input)
      output:   "_site",        // Gebouwde website
    },
    htmlTemplateEngine:     "njk",
    templateFormats: ["html", "njk"],
  };
};
