import React from 'react';
import ReactDom from 'react-dom';

const Index = () => {
	return <div>HELLO REACT!</div>;
}

ReactDom.render(<Index />, document.getElementById('index'));
