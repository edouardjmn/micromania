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

				const uri = "data:text/plain;charset=utf-8," + encodeURIComponent(csv);

				// there should be a batter way to do this, inspired by http://cwestblog.com/2014/10/21/javascript-creating-a-downloadable-file-in-the-browser/
				var downloadBtn = document.createElement('a');
				document.body.appendChild(downloadBtn);
				downloadBtn.href = uri;
				downloadBtn.download = 'micromania.csv';
				downloadBtn.click();
				document.body.removeChild(downloadBtn);
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
				onClick={this.handleClick}>Download history
			</Button>
		)
	}

}

const Download = connect(mapStateToProps)(DownloadConnected);

export default Download;