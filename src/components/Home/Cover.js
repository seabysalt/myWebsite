import React, { Component } from 'react';
import IntroSlides from './IntroSlides';
import Scroll from '../General/Scroll';

class Cover extends Component {
	constructor(props) {
		super(props);
		this.state = {
      didMount: false,
      startAgain: false,
    };
    this.startAgain = this.startAgain.bind(this)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ didMount: true });
		}, 0);
  }

  startAgain() {
    this.setState({ startAgain: !this.state.startAgain})
  }


	render() {
		return (
			<div id="cover">
				<IntroSlides key={this.state.startAgain} refresh={this.startAgain} width={this.props.width}/>
				<Scroll jump={this.props.jumpToExperiences} />
			</div>
		);
	}
}

export default Cover;
