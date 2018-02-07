import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
	  position: "absolute",
	  top: "45%",
	  right: "50%",
  },
};

class RefreshIndicatorComponent extends React.Component {
	constructor(props){
		super(props)
		this.state={
			status: this.props.status,
		}
	}
	componentWillReceiveProps(nextProps) {
  	  this.setState({status: nextProps.status});
    }
	render () {
		return (
		  <div style={style.container}>
		    <RefreshIndicator
				size={40}
				left={-20}
				top={10}
				status={this.state.status}
		    />
		  </div>
		)
	}
}

export default RefreshIndicatorComponent;
