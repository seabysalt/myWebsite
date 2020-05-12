import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="footer">
				<div className="footer_top">
					<div className="footer_wrapper">
						<h5>Sarah Alt</h5>
						<p>Frontend Developer. Psychologist. Entrepreneur.</p>
						<span>
							Website made with <img className="heart" src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136861/Icons/heart_xyxkhw.png" alt="Love" /> in
							Munich, Germany
						</span>
						<div className="footer_contact">
							<a href="https://www.linkedin.com/in/sealt/" target="_blank" rel="noopener noreferrer">
								<img className="social-media-icon" src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136860/Icons/linkedin_w3jpjg.png" alt="LinkedIn" />
							</a>
							<a href="https://www.instagram.com/seabysalt/" target="_blank" rel="noopener noreferrer">
								<img className="social-media-icon" src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136860/Icons/ig_ss7xrz.png" alt="Instagram" />
							</a>
							<a href="https://github.com/seabysalt/" target="_blank" rel="noopener noreferrer">
								<img className="social-media-icon" src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136861/Icons/githubWhite_nlimto.png" alt="Github" />
							</a>
						</div>
						{/* <h6>Currently looking for a job.</h6> */}
            <div className="jobSticker2_wrapper">
              <img className="jobSticker2" src="https://res.cloudinary.com/seabysaltdesign/image/upload/q_auto/v1589136860/Icons/jobSticker2_iok8wr.png" alt="JobSticker" onClick={() => this.props.contact()}/>
            </div>
					</div>
				</div>
				<div className="footer_overlay"></div>
			</div>
		);
	}
}
