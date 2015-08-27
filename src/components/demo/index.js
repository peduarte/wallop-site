import './style.css';

import React from 'react';

import Wallop from 'Wallop';
import hljs from 'highlight.js';
import classie from 'classie';

import img1 from '../../images/raptorcat.gif';
import img2 from '../../images/sloppyswimmer.gif';
import img3 from '../../images/wool.gif';
import img4 from '../../images/sportyslob.gif';
import img5 from '../../images/fuzzy3.gif';

var wallop;
var itemIndexStore;

export default React.createClass({
  componentDidMount() {
    wallop = new Wallop(document.querySelector('.Wallop'));
    hljs.initHighlightingOnLoad();

    wallop.on('change', function(event) {
      classie.remove(document.body, 'is-currentItem--' + itemIndexStore);
      itemIndexStore = event.detail.currentItemIndex;
      classie.add(document.body, 'is-currentItem--' + event.detail.currentItemIndex);
    });

    window.onkeyup = function(e) {
      switch (e.keyCode) {
        case 37:
          wallop.previous();
          break;
        case 39:
          wallop.next();
          break;
      }
    };
  },

  render() {
    return (
      <div className="Demo">
        <div className="Wallop">
          <div className="Wallop-item Wallop-item--current"><img src={img1}/></div>
          <div className="Wallop-item"><img src={img2}/></div>
          <div className="Wallop-item"><img src={img3}/><div className="Demo-tip">#protip: try using your keyboard arrows</div></div>
          <div className="Wallop-item"><img src={img4}/></div>
          <div className="Wallop-item"><img src={img5}/></div>
          <div className="Wallop-item Wallop-thanks"><p>Thank you for looking & thank you <a href="https://dribbble.com/TonyBabel">TonyBabel</a> for the beautiful gifs</p></div>
          <button className="Wallop-buttonPrevious">Previous</button>
          <button className="Wallop-buttonNext">Next</button>
        </div>
      </div>
    )
  }
});
