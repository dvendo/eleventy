/**
 * @file Defines the chained template for basic post content
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/data-global/ Using data in 11ty}
 */
exports.data = {
  layout: 'layouts/base'
}

/**
 * The content of the post template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
exports.render = function (data) {
  return `<article>
    <header id="article_header">
      <h1>${data.title}</h1>
      <time>${this.pageDate(data)}</time>
    </header>
    ${data.content}
  </article>`
}