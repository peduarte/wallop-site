import './style.css';

import React from 'react';

import data from '../../data/project.js';

export default React.createClass({
  render() {
    var twitterUrl = 'http://twitter.com/' + data.twitterUsername;
    var repoUrl = 'http://github.com/' + data.ghUsername + '/' + data.ghReponame;
    var downloadUrl = repoUrl + '/releases';

    return (
      <div className="Infobar">
        <div className="Container">
          <a href={repoUrl} className="link">GitHub</a>
          <a href={downloadUrl} className="link">Download</a>
          <p className="madeby">by <a href={twitterUrl}>@{data.twitterUsername}</a></p>
        </div>
      </div>
    )
  }
});
