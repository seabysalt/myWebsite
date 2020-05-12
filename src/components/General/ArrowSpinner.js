import React, { Component } from 'react';

export default class ArrowSpinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			didMount: false,
			hover: false,
			linkStyle: '#ffffff5e',
		};
		this.toggleHover = this.toggleHover.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ didMount: true, hover: false });
		}, 0);
	}

	toggleHover() {
		this.setState({ hover: !this.state.hover }, () => {
			if (this.state.hover) {
				this.setState({ linkStyle: this.props.color });
			} else {
				this.setState({ linkStyle: '#ffffff5e' });
			}
		});
	}

	componentWillUnmount() {
		this.setState({ hover: false });
	}

	render() {
		const linkStyle = this.state.linkStyle;

		return (
			<div
				className="arrow_spinner"
				key={linkStyle}
				onMouseEnter={() => this.toggleHover()}
				onMouseLeave={() => this.toggleHover()}
				onClick={this.props.next}
				style={{ cursor: 'pointer' }}
			>
				<img
					className="arrow_spinner_icon"
					src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136861/Icons/arrow_white_right_eiwtky.png"
					alt="Next"
				/>
				<button className="arrow_spinner_btn" style={{ backgroundColor: linkStyle }}>
					<svg viewBox="0 0 100 100">
						<path
							className="arrow_spinner_stroke"
							d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
							stroke="#fff"
							strokeWidth="5"
							fill-opacity="0"
							stroke-dasharray="301.635, 301.635"
							stroke-dashoffset={this.props.time}
						></path>
					</svg>
				</button>
			</div>
		);
	}
}
