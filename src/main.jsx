var React = require('react');
var ReactDom = require('react-dom');
var Widget = require('./components/Widget.jsx');
var SmallComponent = require('./components/SmallComponent.jsx');
var BigComponent = require('./components/BigComponent.jsx');

// Small components
ReactDom.render(<SmallComponent heading='20' text='New followers added this month' />, document.getElementById('new-followers'));
ReactDom.render(<SmallComponent heading='1250 €' text='Average Monthly Income' />, document.getElementById('monthly-income'));
ReactDom.render(<SmallComponent heading='13865 €' text='Yearly Income Goal' />, document.getElementById('yearly-income'));
ReactDom.render(<SmallComponent heading='21°' text='Ljubljana' background='#FF5722' aligment='center' />, document.getElementById('weather'));

// Big components
ReactDom.render(<BigComponent background="#00BCD4" views='15080' likes='12000' comments='5100' />, document.getElementById('first'));
ReactDom.render(<BigComponent background='#673AB7' views='10000' likes='5648' comments='231' />, document.getElementById('second'));

// Widgets
ReactDom.render(<Widget heading='1.5k' text='New visitors' headingBackground='#2196F3' />, document.getElementById('new-visitors'));
ReactDom.render(<Widget heading='50%' text='Bounce rate' headingBackground='#009688' />, document.getElementById('bounce-rate'));
ReactDom.render(<Widget heading='28%' text='Searches' headingBackground='#F44336' />, document.getElementById('searches'));
ReactDom.render(<Widget heading='140.5 kb' text='Traffic' headingBackground='#3F51B5' />, document.getElementById('traffic'));
