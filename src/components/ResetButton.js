import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Delete from 'material-ui/svg-icons/action/delete';
import ToolTip from './ToolTip'
const style = {
  position: 'fixed',
  marginRight: 20,
  bottom: '45px',
  right: '50px',
};

class ResetButton extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			visible: false,
		}
	}
	handleMouseOver() {
		this.setState({
			visible: true,
		})
	}
	handleMouseLeave() {
		this.setState({
			visible: false,
		})
	}
	handleOnclick(){
		window.location.reload(true)
	}
	render() {
		return (
		  <div>
		    <FloatingActionButton secondary={true} style={style} onClick={() => this.handleOnclick()} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()}>
		      <Delete />
		    </FloatingActionButton>
			<ToolTip visible={this.state.visible} />
		  </div>
		)
	}
}

export default ResetButton;
