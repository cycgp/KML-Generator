import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import './TraceList.css'

class TraceList extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			traces:this.props.traces
		}
	}
	render(){
		return (
				<div>
				    <List>
						{
							this.state.traces.map(({ id, trace }) => (
								<div>
									<Divider/>
									<ListItem className="listItem" key={id} primaryText={trace[0].toString()} leftIcon={<ActionGrade />} />
									<Divider/>
								</div>))
						}
				    </List>
				</div>
		)
	}
}

export default TraceList;
