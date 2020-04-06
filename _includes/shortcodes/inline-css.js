/**
 * @file Defines a shortcode for loading inline stylesheets
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

/**
 * A JavaScript Template module for the inline CSS `links`
 * @module _includes/shortcodes/inline-css
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>

  /**
   * HTML `<style>` markup
   * @method
   * @name inlineCSS
   * @param {Object} data 11ty’s data object
   * @return {string} The rendered shortcode
   * @example `${this.inlineCSS(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('inlineCSS', function (data) {
    var root = `
      :root {
        --primary-color: ${data.colors.primary};
      }
    `
    var css = `${this.fileToString('css/index.css')}`;
    (data.page.url === '/')
      ? css += `${this.fileToString('css/home.css')}`
      : '';
    (data.form && data.form !== undefined)
      ? css += `${this.fileToString('css/forms.css')}`
      : css += '';
    return root + css
  })