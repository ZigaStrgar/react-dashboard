var React = require('react');

var BigComponent = React.createClass({
  render: function(){

    divStyle = {
      marginTop: 15
    };

    headingStyle = {
      height: 200
    };

    bodyStyle = {
      background: "#333",
      color: "#fff",
      textAlign: "center",
      marginTop: -2,
    };

    if(this.props.background){
      headingStyle.background = this.props.background;
    }

    return (
      <div className='panel panel-default' style={divStyle}>
        <div className='panel-heading' style={headingStyle}>

        </div>
        <div className='panel-body' style={bodyStyle}>
          <div className='row'>
            <div className='col-xs-4'>
              <h4>{this.props.views}</h4>
              <p>Shot Views</p>
            </div>
            <div className='col-xs-4'>
              <h4>{this.props.likes}</h4>
              <p>Likes</p>
            </div>
            <div className='col-xs-4'>
              <h4>{this.props.comments}</h4>
              <p>Comments</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BigComponent;
