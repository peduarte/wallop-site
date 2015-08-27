import './style.css';

import React from 'react';

import data from '../../data/project.js';

export default React.createClass({
  render() {
    var readmeUrl = 'https://github.com/peduarte/wallop/blob/master/README.md';
    return (
      <div className="More">
        <div className="Container">
          <h3>About this site</h3>
          <p>This site is built using webpack, React and mdhtmljson for the documentation. Check out the project on <a href="https://github.com/peduarte/wallop-site" target="_blank">github</a>!</p>
          <h3>More</h3>
          <p>Please check the <a href={readmeUrl}>README</a> for more information on the API, contributing and license.</p>
          <p>Images courtesy of <a href="https://dribbble.com/TonyBabel">TonyBabel</a></p>
          <p><a href="https://twitter.com/share" className="twitter-share-button" data-via="peduarte">Tweet</a></p>
          <h3>CI Status</h3>
          <img src="https://travis-ci.org/peduarte/wallop.svg?branch=master" />
        </div>
      </div>
    )
  }
});
