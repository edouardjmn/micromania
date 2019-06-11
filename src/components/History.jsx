import React from "react";
import { connect } from "react-redux";
import { removeStore } from "../actions/index";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function mapStateToProps(state) {
	return {
		stores: state.stores
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removeStore: (store) => dispatch(removeStore(store))
	}
}

class HistoryConnected extends React.Component {

	handleRemove(store) {
		this.props.removeStore(store);
	}

	render() {
		return(
			<div>
			{ this.props.stores.map(
				(store, index) => {
					return	(	
						<Card key={index} className='card'>
								<CardContent>
									<b>{store.name}</b><br />
									<span>{store.address}, {store.zipcode} {store.city}</span>
								</CardContent>
								<CardActions>
									<Button size="small" onClick={this.handleRemove.bind(this, store)}>Remove</Button>
								</CardActions>
							</Card>
							)
				}
			)}
			</div>
		)
	}

}

const History = connect(mapStateToProps, mapDispatchToProps)(HistoryConnected)

export default History;

