import './styles/styles.css';

import React from 'react';

import Readme from './components/readme/readme.js';
import Demo from './components/demo/demo.js';

import data from './data/readme.json';

React.render(
	<div>
		<Demo />
  	<Readme data={data}/>
  </div>,
  document.getElementById('app')
);
