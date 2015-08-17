import './demo.css';

import React from 'react';

import Wallop from 'Wallop';
import hljs from 'highlight.js';

var wallop;

export default React.createClass({
	componentDidMount() {
		wallop = new Wallop(document.querySelector('.Wallop'));
	hljs.initHighlightingOnLoad();
	},

  render() {
    return (
    	<div className="Wallop">
    		<div className="Wallop-item">Hello</div>
    		<div className="Wallop-item">World</div>
    		<button className="Wallop-buttonPrevious">Previous</button>
    		<button className="Wallop-buttonNext">Next</button>
    	</div>
    )
  }
});
