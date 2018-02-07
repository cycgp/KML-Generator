import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './TutorialDialog.css'

export default class TutorialDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state={
	    	open: this.props.open,
			new: true,
		}
	}
	componentWillReceiveProps(nextProps) {
		if(this.state.new === true) {
	  	  this.setState({
			  open: nextProps.open,
			  new: false,
		  });
		}
    }
	handleClose = () => {
    	this.setState({open: false});
  	};
  render() {
    const actions = [
      <FlatButton
        label="Happy Drawing!"
        primary={true}
        onClick={this.handleClose}
		style={{color:'white',backgroundColor:'rgba(255,255,255,0.3)',paddingBottom:'30px'}}
      />,
    ];

    return (
      <div>
        <Dialog
          title="KML Generator Tutorial"
		  titleStyle={{textAlign:'center'}}
          actions={actions}
          modal={true}
          open={this.state.open}
		  overlayStyle={{backgroundColor:'rgba(0,0,0,0)'}}
		  paperClassName="tutorialPaper"
        >
		<span>
			1. Click on the map to draw, traces will be recorded in the right panel and show on the map by red lines with circles.
		</span>
		<span>
			<br/><br/>2. Click on the float buttton below to reload and clear all records.
		</span>
		<span>
			<br/><br/>3. Press "Download KML" when you finish drawing to generate KML file.
		</span>
        </Dialog>
      </div>
    );
  }
}
