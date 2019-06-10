import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

let converter = require('json-2-csv');

function mapStateToProps(state) {
	return {
		stores: state.stores 
	}
}

class DownloadConnected extends React.Component {

	constructor() {
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

		if (this.props.stores.length > 0) {
			converter.json2csv(this.props.stores, function(err, csv) {
				if(err) console.log(err)

				console.log(csv)
			})
		}

	}

	render() {
		const stores = this.props.stores
		return(
			<Button 
				variant="contained" 
				colory="primary" 
				disabled={ (stores.length > 0) > 0 ? false : true }
				action={this.handleClick}>Download history
			</Button>
		)
	}

}

const Download = connect(mapStateToProps)(DownloadConnected);

export default Download;