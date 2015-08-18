import './style.css';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="Container Readme">
        <div dangerouslySetInnerHTML={{ __html: this.props.data.html }}></div>
      </div>
    )
  }
});
