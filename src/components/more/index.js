import './style.css';

import React from 'react';

import data from '../../data/project.js';

export default React.createClass({
  render() {
    var readmeUrl = 'https://github.com/peduarte/wallop/blob/master/README.md';
    return (
      <div className="More">
        <div className="Container">
          <h3>More</h3>
          <p>Please check the <a href={readmeUrl}>README</a> for more information on the API, contributing and license.</p>
          <p>Images courtesy of <a href="https://dribbble.com/TonyBabel">TonyBabel</a></p>
        </div>
      </div>
    )
  }
});
