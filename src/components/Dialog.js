import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */
export default class DialogExampleAlert extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    open: this.props.open,
	  };
	}
  componentWillReceiveProps(nextProps) {
	  if(nextProps.open===true){
		this.setState({open: true});
	  }
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        secondary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h2> No trace found in the map</h2>  Try to draw some traces before downloading KML file!
        </Dialog>
      </div>
    );
  }
}
