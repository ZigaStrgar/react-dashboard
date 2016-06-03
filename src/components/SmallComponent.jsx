var React = require('react');

var SmallComponent = React.createClass({
  render: function(){

    var divStyle = {
      marginTop: 15
    };

    var panelStyle = {
      paddingLeft: 20,
      paddingRight: 20
    };

    var spanColor = {

    };

    if(this.props.background){
      panelStyle.background = this.props.background;
      panelStyle.color = "#ffffff";
      spanColor.color = "#fff";
    }

    if(this.props.aligment){
      panelStyle.textAlign = this.props.aligment;
    }

    return (
      <div style={divStyle} className='panel panel-default'>
        <div style={panelStyle} className='panel-body'>
          <h3>{this.props.heading}</h3>
          <span style={spanColor} className='help-block'>{this.props.text}</span>
        </div>
      </div>
    );
  }
});

module.exports = SmallComponent;
