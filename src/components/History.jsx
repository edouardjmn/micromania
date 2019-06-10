import React from "react";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function mapStateToProps(state) {
	return {
		stores: state.stores
	}
}

class HistoryConnected extends React.Component {

	render() {
		return(
			<div>
			{ this.props.stores.map(
				(store, index) => {
					return(	<Card key={index} className='card'>
								<CardContent>
									<b>{store.name}</b><br />
									<span>{store.address}, {store.zipcode} {store.city}</span>
								</CardContent>
							</Card>)
				}
			)}
			</div>
		)
	}

}

const History = connect(mapStateToProps)(HistoryConnected)

export default History;

