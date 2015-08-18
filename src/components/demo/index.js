import './style.css';

import React from 'react';

import Wallop from 'Wallop';
import hljs from 'highlight.js';

import img1 from '../../images/raptorcat.gif';
import img2 from '../../images/sloppyswimmer.gif';
import img3 from '../../images/wool.gif';
import img4 from '../../images/sportyslob.gif';
import img5 from '../../images/fuzzy3.gif';

var wallop;

export default React.createClass({
  componentDidMount() {
    wallop = new Wallop(document.querySelector('.Wallop'));
  hljs.initHighlightingOnLoad();
  },

  render() {
    return (
      <div className="Demo">
        <div className="Wallop">
          <div className="Wallop-item Wallop-item--current"><img src={img1}/></div>
          <div className="Wallop-item"><img src={img2}/></div>
          <div className="Wallop-item"><img src={img3}/></div>
          <div className="Wallop-item"><img src={img4}/></div>
          <div className="Wallop-item"><img src={img5}/></div>
          <button className="Wallop-buttonPrevious">Previous</button>
          <button className="Wallop-buttonNext">Next</button>
        </div>
      </div>
    )
  }
});
