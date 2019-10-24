import React, { Component } from 'react';
import Proptypes from 'prop-types';
import marked from 'marked';
import Prism from 'prismjs';
import 'github-markdown-css';
import 'prismjs/themes/prism-okaidia.css';
import style from './style';
const renderer = new marked.Renderer();
renderer.code = function (code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return `<pre class="${this.options.langPrefix}"><code>${(escaped ? code : escape(code, true))}</code></pre>`;
  }

  return `<pre class="${this.options.langPrefix} ${escape(lang, true)}"><code class="${this.options.langPrefix} ${escape(lang, true)}">${(escaped ? code : escape(code, true))}</code></pre>\n`;
};

marked.setOptions({
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: '',
  highlight: function (code, infostring, escaped) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
  langPrefix: 'language-',
  mangle: true,
  pedantic: false,
  renderer,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class Markdown extends Component {
  render () {
    const { children } = this.props;
    return (
      <div
        className={ `markdown-body ${style.artileContentStyle}` }
        dangerouslySetInnerHTML={{ __html: children && marked(children) }}
      >
      </div>
    );
  }
};

Markdown.propTypes = {
  children: Proptypes.node
};

export default Markdown;
