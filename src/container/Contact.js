import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';

import Navbar from '../components/General/Navbar';
import Footer from '../components/General/Footer';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			didMount: false,
			lastScrollTop: 0,
			scrollUp: false,
			width: 0,
			height: 0,
			postMessage: false,
			name: '',
			email: '',
			message: '',
			alert: false,
			missing: '',
		};
		this.top = React.createRef();
		window.addEventListener('resize', this.update);
	}

	componentDidMount() {
		this.startAtTop();
		setTimeout(() => {
			this.setState({ didMount: true });
		}, 0);
		this.setState(this.props.location.state);
		window.addEventListener('scroll', this.listenScrollEvent);
		this.update();
	}

	startAtTop = () => window.scrollTo(0, this.top.current.offsetTop);

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

	jumpToExperiences = () => {
		this.props.history.push({
			pathname: '/',
			state: { loadOnMount: 'experiences' },
		});
	};

	jumpToProjects = () => {
		this.props.history.push({
			pathname: '/',
			state: { loadOnMount: 'projects' },
		});
	};

	main = () => {
		this.props.history.push({
			pathname: '/',
			state: { loadOnMount: 'top' },
		});
	};

	contact = () => {
		this.startAtTop();
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	submit = () => {
		const success = (
			<div className="contact_background postMessage">
				<h2>Thank you so much!</h2>
				<h2>I will be in touch with you soon!</h2>
			</div>
		);
		const failure = (
			<div className="contact_background postMessage">
				<h2>Oh no!</h2>
				<h2>Looks like something went wrong!</h2>
			</div>
		);
		if (this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
			emailjs
				.send(
					'gmail',
					'female_power_developer',
					{ from_name: this.state.name, message_html: this.state.message, reply_to: this.state.email },
					'user_iQYwlLHDNsJiXI4DxxOew'
				)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						this.setState({ postMessage: success });
					},
					(err) => {
            console.log('FAILED...', err);
            this.setState({ postMessage: failure });
					}
				);
		} else {
			let missing = '';
			if (this.state.name === '') {
				missing = 'name';
			} else if (this.state.email === '') {
				missing = 'email';
			} else if (this.state.message === '') {
				missing = 'message';
			}
			this.setState({ missing: missing }, () => this.setState({ alert: true }));
		}
	};

	render() {
		return (
			<div id="home">
				<Navbar
					jump={this.jumpToExperiences}
					jump2={this.jumpToProjects}
					top={this.top}
					scrollUp={this.state.scrollUp}
					showContact={false}
					main={() => this.main()}
					colorTitle="#333333"
					colorMenu="#333333"
					hoverColor="#5C4346"
				/>
				<div className="home_content contact">
					<div className="contact_details">
						{!this.state.postMessage ? (
							<div className="contact_background">
								<h2>Let's stay in touch!</h2>
								<div className="contact_form">
									<form action="Contact" method="post">
										<label htmlFor="">Your name</label>
										<input
											type="text"
											name="name"
											value={this.state.name}
											id="1"
											onChange={this.handleChange}
										/>
										<label htmlFor="">Your email</label>
										<input
											type="email"
											name="email"
											value={this.state.email}
											id="2"
											onChange={this.handleChange}
										/>
										<label htmlFor="">Your message</label>
										<textarea
											className="message"
											type="text"
											onChange={this.handleChange}
											name="message"
											value={this.state.message}
											id="3"
										/>
									</form>
									{this.state.alert ? (
										<div className="alert">
											<p>Oh! Looks like your {this.state.missing} is missing!</p>
										</div>
									) : null}
									<button type="submit" onClick={() => this.submit()}>
										Share with me!
									</button>
								</div>
							</div>
						) : (
							this.state.postMessage
						)}
					</div>
					<img src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589300626/Images/Touch4_i8rwor.jpg" alt="ContactImage" />
				</div>
				<Footer contact={this.contact} />
			</div>
		);
	}
}

export default withRouter(Contact);
