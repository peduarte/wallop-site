import './styles/styles.css';

import React from 'react';

import Readme from './components/readme/';
import Demo from './components/demo';
import Infobar from './components/info-bar';
import More from './components/more';
import Footer from './components/footer';

import docs from './data/readme.json';

React.render(
	<div>
    <Infobar />
		<Demo />
  	<Readme data={docs} />
    <More />
    <Footer />
  </div>,
  document.body
);
