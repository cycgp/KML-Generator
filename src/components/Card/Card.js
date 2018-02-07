import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';
import Directions from 'material-ui/svg-icons/maps/directions';
import Avatar from 'material-ui/Avatar';
import './Card.css';
import TraceList from '../TraceList/TraceList'
import { saveAs } from 'file-saver'
import Dialog from '../Dialog'

const StyledCard = styled(Card)`
	position: absolute;
	top: 100px;
	right: 20px;
	width: 300px;
`;

const StyledCardText = styled(CardText)`
	padding: 0px !important;
`

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
	  open: false,
    };
  }

  componentWillReceiveProps() {
	this.setState({open: false});
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleOnclick (traces) {
	if (traces.length === 0) {
		this.setState({open: true});
	} else {
		var data = new FormData();
		data.append( "json", JSON.stringify(traces));

	    let url = "https://vertsnaty.appspot.com";
		// let url = "http://localhost:8080"
	    let init = {
	  	  method: 'POST',
	  	  headers: {
			  "cache-control": "no-cache",
		  },
	  	  body: data,
	    	};

		fetch(url, init)
		  .then(function(response){
			return response.blob()
		  })
		  .then(blob => saveAs(blob, 'userTrace.kml'))
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  });
	}
  }

  render() {
    return (
      <StyledCard expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
		  className={`CardHeader`}
          title="Record of Traces"
		  subtitle={"Total traces: " + this.props.traceCount}
		  subtitleStyle={{"textAlign":"left"}}
          avatar={
			  <Avatar
				  icon={<Directions />}
				  color="#fff"
		          size={35}
			  />}
          actAsExpander={true}
          showExpandableButton={true}
        />
	<StyledCardText expandable={true} >
			<TraceList traces={this.props.traces}/>
		</StyledCardText>
        <CardActions>
	      <FlatButton label="Download KML" onClick={() => this.handleOnclick(this.props.traces)}/>
        </CardActions>
		<Dialog open={this.state.open}/>
      </StyledCard>
    );
  }
}

// Props 的型態，如果給錯型態，會跳warning。
CardComponent.propTypes = {
	traceCount: PropTypes.number,
    traces: PropTypes.array,
}

// Props 預設值
CardComponent.defaultProps = {
	traceCount: '0',
    traces: [],
}
