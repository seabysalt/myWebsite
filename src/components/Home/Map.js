import React, { Component } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/seabysalt/maps/master/maps.json';

const markers = [
	{ name: 'USA', coordinates: [-122.4312, 37.7739], id: 1 },
	{ name: 'USA', coordinates: [-95.3584, 29.7499], id: 2 },
	{ name: 'France', coordinates: [4.8467, 45.7485], id: 3 },
	{ name: 'Spain', coordinates: [-5.6638, 40.9688], id: 4 },
	{ name: 'Germany', coordinates: [11.5761, 48.1371], id: 5 },
	{ name: 'Tanzania', coordinates: [35.7454, -6.1611], id: 6 },
	{ name: 'UK', coordinates: [-0.118, 51.5098] },
	{ name: 'Ecuador', coordinates: [-78.4678, -0.1806], id: 7 },
];

export default class Map extends Component {
	seeExperience(coordinates) {
		console.log(coordinates);
	}

	render() {
		const country = this.props.country;
		return (
			<div className="map_detail">
				<ComposableMap viewBox="50 0 550 600">
					<Geographies geography={geoUrl} fill="#D6D6DA" stroke="#FFFFFF" strokeWidth={0.5}>
						{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
					</Geographies>
					{markers.map(({ name, coordinates, id }) => (
						<Marker key={id} coordinates={coordinates} onClick={() => this.props.seeExperience(name)} style={{cursor:'pointer'}}>
							<g
								fill="none"
								stroke={`${country === name ? '#ff5b3e' : '#0a0a0a'}`}
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								transform="translate(-12, -24)"
							>
								{country === name ? (
									<path
										d="M12 21.7
            C17.3 17 20 10 20 10
            a9 9 0 1 0-16 0
            c1 3 3.5 8.1 8 11.7
            z"
            fill="#ff5b3e31"
									/>
								) : (
									<path
										d="M12 21.7
                  C17.3 17 20 11 20 10
                  a8 8 0 1 0-16 0
                  c0 3 2.7 6.9 8 11.7
                  z"
                  fill="#fafafa8c"
									/>
								)}
                {country === name ? <circle cx="12" cy="6" r="4" /> : <circle cx="12" cy="10" r="3" />}
							</g>
						</Marker>
					))}
				</ComposableMap>
			</div>
		);
	}
}
