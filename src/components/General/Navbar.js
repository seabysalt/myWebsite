import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			hoverTitle: this.props.colorTitle,
		};
	}

	toggleHover = (x) => {
		this.setState({ hover: !this.state.hover }, () => this.color(x));
	};

	color = (x) => {
		let hoverStyle = this.props.hoverColor;
		if (this.state.hover) {
			if (x === 'experiences') {
				this.setState({ hoverExperiences: hoverStyle });
			} else if (x === 'projects') {
				this.setState({ hoverProjects: hoverStyle });
			} else if (x === 'contacts') {
				this.setState({ hoverContacts: hoverStyle });
			} else if (x === 'main' && !this.props.showContact) {
				this.setState({ hoverTitle: hoverStyle });
			}
		} else {
			this.setState({
				hoverExperiences: this.props.colorMenu,
				hoverProjects: this.props.colorMenu,
				hoverContacts: this.props.colorMenu,
				hoverTitle: this.props.colorTitle,
			});
		}
	};

	render() {
		const hoverExperiences = this.state.hoverExperiences;
		const hoverProjects = this.state.hoverProjects;
		const hoverContacts = this.state.hoverContacts;
		const hoverTitle = this.state.hoverTitle;

		return (
			<div id="navbar" className={`${this.props.scrollUp && 'scrollUp'}`} ref={this.props.top}>
				<h3
					style={{ color: hoverTitle }}
					onClick={() => this.props.main('main')}
					onMouseOver={() => this.toggleHover('main')}
					onMouseLeave={() => this.toggleHover('main')}
				>
					Sarah Alt
				</h3>
				<div className="navbar_sections">
					<p
						onClick={this.props.jump}
						onMouseOver={() => this.toggleHover('experiences')}
						style={{ color: hoverExperiences, borderBottomColor: hoverExperiences }}
						onMouseLeave={() => this.toggleHover('experiences')}
					>
						Experiences
					</p>
					<p
						onClick={this.props.jump2}
						style={{ color: hoverProjects, borderBottomColor: hoverProjects }}
						onMouseOver={() => this.toggleHover('projects')}
						onMouseLeave={() => this.toggleHover('projects')}
					>
						Projects
					</p>
					{this.props.showContact ? (
						<p
							onClick={() => this.props.contact()}
							onMouseOver={() => this.toggleHover('contacts')}
							style={{ color: hoverContacts, borderBottomColor: hoverContacts }}
							onMouseLeave={() => this.toggleHover('contacts')}
						>
							Contact
						</p>
					) : null}
				</div>
			</div>
		);
	}
}

export default Navbar;
