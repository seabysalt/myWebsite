import React, { Component } from 'react';
/* import ArrowSpinner from '../General/ArrowSpinner'; */
import { INTROS } from '../../data/Intros';
import asyncComponent from '../hoc/asyncComponent';
import Img from 'react-cloudinary-lazy-image';

const AsyncArrowSpinner = asyncComponent(() => {
	return import('../General/ArrowSpinner');
});

class IntroSlides extends Component {
	constructor(props) {
		super(props);
		this.state = {
			didMount: false,
			time: 300,
			slide2: false,
			slide3: false,
			width: this.props.width,
		};
		this.next = this.next.bind(this);
		window.addEventListener('resize', this.update);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ didMount: true });
		}, 0);

		this.myInterval = setInterval(() => {
			this.setState(({ time }) => ({
				time: time - 1,
			}));
			if (this.state.time === 0 && this.state.slide3) {
				clearInterval(this.myInterval);
			}
			if (this.state.time === 0) {
				this.setState({ slide2: true });
			}
			if (this.state.time === -300) {
				this.setState({ slide3: true });
			} else if (this.state.time === -605) {
				clearInterval(this.myInterval);
			}
		}, 30);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	next() {
		if (!this.state.slide2 && !this.state.slide3) {
			this.setState({ slide2: !this.state.slide2 });
		} else if (this.state.slide2 && !this.state.slide3) {
			this.setState({ slide3: !this.state.slide3 });
		} else if (this.state.slide3) {
			this.props.refresh();
		}
	}

	render() {
		let intro;
		if (!this.state.slide2 && !this.state.slide3) {
			intro = INTROS[0];
		} else if (this.state.slide2 && !this.state.slide3) {
			intro = INTROS[1];
		} else if (this.state.slide3) {
			intro = INTROS[2];
		}

		const imageSrc0 = this.state.width > 1199 ? INTROS[0].imageUrlDesktop : INTROS[0].imageUrlMobile;
		const imageSrc1 = this.state.width > 1199 ? INTROS[1].imageUrlDesktop : INTROS[1].imageUrlMobile;
		const imageSrc2 = this.state.width > 1199 ? INTROS[2].imageUrlDesktop : INTROS[2].imageUrlMobile;

		return (
			<div id="introSlides">
				<div className="background">
					<div
						className={`${!this.state.slide3 && 'background_fade-in'} background_color`}
						style={{ backgroundColor: INTROS[0].color }}
					></div>
					<div
						className={`${this.state.slide2 && 'background_fade-in'} background_color`}
						style={{ backgroundColor: INTROS[1].color }}
					></div>
					<div
						className={`${this.state.slide3 && 'background_fade-in'} background_color`}
						style={{ backgroundColor: INTROS[2].color }}
					></div>
				</div>
				<div className="text">
					<h5 className="tracking-in-expand-fwd-top">{intro.subtitle}.</h5>
					{intro.title.map((eachTitle, index) => {
						return <h1 className="tracking-in-expand-fwd-bottom">{eachTitle}</h1>;
					})}
				</div>
				<div className="image">
					<div className={`${this.state.slide2 && 'images2'} images ${this.state.slide3 && 'images3'}`}>
{/* 						<div className={`image_fade-in image_sliding`}>
							<Img
								cloudName={'seabysaltdesign'}
								imageName={'imageSrc0'}
								fluid={{
									maxWidth: 800,
									height: 300,
								}}
								alt={'1'}
							/>
						</div> */}
						<img className={`image_fade-in image_sliding`} src={imageSrc0} alt="Profile_Picture" />
						<img className={`image_fade-in-2 image_sliding`} src={imageSrc1} alt="Profile_Picture" />
						<img className={`image_fade-in-3 image_sliding`} src={imageSrc2} alt="Profile_Picture" />
					</div>
					<div className="image_control">
						<div className="image_control_text">
							<p>0{intro.id}</p>
							<p>/</p>
							<p>03</p>
						</div>
						<AsyncArrowSpinner time={this.state.time} color={intro.color} next={this.next} />
					</div>
				</div>
			</div>
		);
	}
}

export default IntroSlides;
