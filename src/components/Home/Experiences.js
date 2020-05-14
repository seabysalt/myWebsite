import React, { Component } from 'react';
import Map from './Map';
import { EXPERIENCES } from '../../data/Experiences';

class Experiences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstMount: true,
			experience: [],
			country: '',
			countries: ['Germany', 'Tanzania', 'France', 'Spain', 'USA', 'UK', 'Ecuador'],
		};
		this.seeExperience = this.seeExperience.bind(this);
	}

	seeExperience(name) {
		let experience = [];
			EXPERIENCES.forEach((eachExperience) => {
				if (eachExperience.country === name) experience.push(eachExperience);
			});
			this.setState(
				{ experience: experience, firstMount: false, country: name },
			);
	}

	render() {
		const experience = this.state.experience;
		const countries = this.state.countries;
		return (
			<div id="experiences" ref={this.props.experiences}>
				<div className="map">
					<div className="map_countries">
						{countries.map((eachCountry, index) => {
							return (
								<p
									className={`${this.state.country === eachCountry ? 'active' : 'inactive'}`}
									onClick={() => this.seeExperience(eachCountry)} style={{cursor:'pointer'}} key={eachCountry}
								>
									{eachCountry}
								</p>
							);
						})}
					</div>
					<Map seeExperience={this.seeExperience} country={this.state.country} />
				</div>
				<div className="text">
					{this.state.firstMount ? (
						<h2>Click on the locations to get to know me</h2>
					) : (
						<div className="experience">
							<h2>{this.state.country}</h2>
							{experience.map((eachExperience, index) => {
								return (
									<div className="experience_details" key={index}>
										<p className="experience_details_year">{eachExperience.year}</p>
										<p className="experience_details_institution">
											{eachExperience.institution}
										</p>
										<p className="experience_details_title">{eachExperience.title}</p>
									</div>
								)
							})}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Experiences;
