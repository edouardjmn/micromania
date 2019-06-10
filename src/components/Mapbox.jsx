import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
	accessToken: "pk.eyJ1IjoiZWRvdWFyZGptbiIsImEiOiJjandxaWtianYwNDJ6NDRwNWpwZWVzd3BiIn0.eYMQVdo8RE8D_LvVu8rwOg"
})

class Mapbox extends React.Component {

	constructor() {
		super();

		this.state = {
			store: {}
		}
	}

	handleClick(store) {
		this.setState({
			store: store
		})
	}

	render() {
		const currentStore = this.state.store;

		return(

			<Map
				style="mapbox://styles/mapbox/light-v9"
				containerStyle={{
					height: "100vh",
					width: "100vw"
				}}
				center={(currentStore.lng && currentStore.lat) ? [currentStore.lng, currentStore.lat] : [2.36238, 48.8333247]}
				onClick={this.handleOutsideClick}
			>
				<Layer
					type="symbol"
					id="marker"
					layout={{ "icon-image": "marker-15" }}
				>
					{this.props.stores.map((store, index) => (
						<Feature key={index} coordinates={[store.lng, store.lat]} onClick={this.handleClick.bind(this, store)}/>
					))}
				</Layer>

				{Object.keys(this.state.store).length > 0 && (
					<Popup coordinates={[currentStore.lng, currentStore.lat]}>
						<div><b>{currentStore.name}</b></div>
						<div>
							{currentStore.address}, {currentStore.zipcode} {currentStore.city}
						</div>
					</Popup>
				)}

			</Map>
		)
	}
}

export default Mapbox