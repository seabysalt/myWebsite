import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class ExpandedBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			playerWidth: 0,
		};
		window.addEventListener('resize', this.update);
	}

	componentDidMount() {
		this.update();
	}

	update = () => {
		this.setState({
			width: window.innerWidth,
			playerWidth: 0.35 * window.innerWidth,
		});
	};

	render() {
		const item = this.props.item;
		const color = this.props.item.titleColor;
		return (
			<div
				className="expandedBox"
				ref={this.props.projectDetails}
				style={{ borderTopColor: color, borderBottomColor: color }}
			>
				<div className="video">
					<ReactPlayer url={item.demoLink} playing width={this.state.playerWidth} />
				</div>
				<div className="info">
					<h3 style={{ color: color }}>{item.title}</h3>
					<h5 style={{ color: color }}>{item.subtitle}</h5>
					<div className="info_details">
						<div className="info_detail">
							<p className="info_detail_head">Tech Stack</p>
							<p className="info_detail_body">{item.techStack}</p>
						</div>
						<div className="info_detail">
							<p className="info_detail_head">Deployed via</p>
							<p className="info_detail_body">{item.deployment}</p>
						</div>
						<div className="info_detail">
							<p className="info_detail_head">Time:</p>
							<p className="info_detail_body">{item.time}</p>
						</div>
						<div className="info_detail">
							<p className="info_detail_head">More info:</p>
							<p className="info_detail_body">{item.description}</p>
						</div>
						<a href={item.githubLink} target="_blank" rel="noopener noreferrer">
							<img
								src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136860/Icons/github_ipuvjy.png"
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
