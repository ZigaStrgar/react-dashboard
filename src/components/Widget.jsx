var React = require('react');

var Widget = React.createClass({
  render:function(){

    var divStyle = {
      marginTop: 15
    };

    var headingStyle = {};

    if(this.props.headingBackground){
      headingStyle.background = this.props.headingBackground;
      headingStyle.color = "#fff";
    }

    return (
      <div style={divStyle} className='panel panel-default'>
        <div style={headingStyle} className='panel-heading'>
          <span>{this.props.text}</span>
          <h3>{this.props.heading}</h3>
        </div>
        <div className='panel-body row'>

        </div>
      </div>
    );
  }
});

module.exports = Widget;
