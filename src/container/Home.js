import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

import Cover from '../components/Home/Cover';
import Experiences from '../components/Home/Experiences';
import Projects from '../components/Home/Projects';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			didMount: false,
			lastScrollTop: 0,
			scrollUp: false,
			width: 0,
			height: 0,
			showContact: false,
			loadOnMount: 'top',
		};
		this.top = React.createRef();
		this.experiences = React.createRef();
		this.projects = React.createRef();
		this.projectDetails = React.createRef();
		window.addEventListener('resize', this.update);
	}

	async componentDidMount() {

		setTimeout(() => {
			this.setState({ didMount: true });
		}, 0);

		window.addEventListener('scroll', this.listenScrollEvent);
		this.update();

		this.startAtTop();

		this.scrollOnMount();

		console.log(this.state.loadOnMount);
	}

	scrollOnMount = () => {
		this.setState(this.props.location.state, () => {
			if (this.state.loadOnMount !== 'top') {
				if (this.state.loadOnMount === 'projects') {
					this.jumpToProjects();
				} else {
					this.jumpToExperiences();
				}
			}
		});
	};

	startAtTop = () => window.scrollTo(0, this.top.current.offsetTop);
	jumpToExperiences = () => window.scrollTo(0, this.experiences.current.offsetTop - 85);
	jumpToProjects = () => window.scrollTo(0, this.projects.current.offsetTop);
	jumpToProjectDetails = () => {
		window.scrollTo(0, this.projectDetails.current.offsetTop - this.state.height / 3);
	};

	contact = () => {
		this.props.history.push({
			pathname: '/contact',
		});
	};

	main = () => {};

	listenScrollEvent = (e) => {
		let scrollTop = e.target.scrollingElement.scrollTop,
			lastScrollTop = this.state.lastScrollTop;

		if (scrollTop < lastScrollTop && scrollTop > 94 && !this.state.scrollUp) {
			this.setState({ scrollUp: true, lastScrollTop: scrollTop });
		} else if (scrollTop > lastScrollTop && this.state.scrollUp) {
			this.setState({ scrollUp: false, lastScrollTop: scrollTop });
		} else if (scrollTop < lastScrollTop && scrollTop < 1 && this.state.scrollUp) {
			this.setState({ scrollUp: false, lastScrollTop: scrollTop });
		} else {
			this.setState({ lastScrollTop: scrollTop });
		}
	};

	update = () => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	componentWillUnmount() {
		this.setState({ loadOnMount: 'top' });
	}

	render() {
		return (
			<div id="home">
				<Navbar
					jump={this.jumpToExperiences}
					jump2={this.jumpToProjects}
					top={this.top}
					scrollUp={this.state.scrollUp}
					contact={this.contact}
					showContact={true}
					main={() => this.main()}
					colorTitle="#fafafafa"
					colorMenu="#333333"
					hoverColor="#ff5b3e"
				/>
				<div className="home_content">
					<Cover jumpToExperiences={this.jumpToExperiences} />
					<Experiences experiences={this.experiences} />
					<Projects
						projects={this.projects}
						jumpToProjectDetails={this.jumpToProjectDetails}
						projectDetails={this.projectDetails}
					/>
				</div>
				<Footer contact={this.contact} />
			</div>
		);
	}
}

export default withRouter(Home);
