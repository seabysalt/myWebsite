import React, { Component } from 'react';

export default class Scroll extends Component {
	render() {
		return (
			<div className="scroll" onClick={() => this.props.jump()} style={{cursor:'pointer'}}>
				<p>Scroll</p>
				<div className="arrow-animation">
					<div className="arrow arrow-first"></div>
					<div className="arrow arrow-second"></div>
				</div>
			</div>
		);
	}
}
