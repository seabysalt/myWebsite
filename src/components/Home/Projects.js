import React, { Component } from 'react';

import { PROJECTS } from '../../data/Projects';
import Box from '../General/Box';
import ExpandedBox from '../General/ExpandedBox';

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openProject: 0,
			firstItems: PROJECTS,
			lastItems: [],
			width: 0,
		};
		this.openProject = this.openProject.bind(this);
		window.addEventListener('resize', this.update);
	}

	componentDidMount() {
		this.update();
  }

	update = () => {
		this.setState({
			width: window.innerWidth,
		});
	};

	openProject = (id) => {
		if (id === this.state.openProject) {
			this.setState({ openProject: 0 });
		} else {
			let split = 0;
			if (this.state.width >= 1200) {
				if (id <= 2) {
					split = 2;
				} else {
					split = PROJECTS.length;
				}
			} else if (this.state.width >= 900) {
        if (id % 2) {
          split = id;
        } else { split = id+1}
			} else if (this.state.width < 900) {
				split = id;
			} else {
				split = PROJECTS.length;
			}

			let firstHalf = PROJECTS.slice(0, split);
			let secondHalf = PROJECTS.slice(split, PROJECTS.length);

			this.setState({ firstItems: firstHalf, lastItems: secondHalf, openProject: id }, () => this.props.jumpToProjectDetails());

		}
	};

	render() {
		return (
			<div id="projects" ref={this.props.projects}>
				<div className="projects_overview">
					<div className="projects_overview_title">
						<h2>My Projects</h2>
					</div>
					{this.state.firstItems.map((eachProject, index) => {
						return <Box item={eachProject} openProject={this.openProject}/>;
					})}
					{this.state.openProject !== 0 ? <ExpandedBox item={PROJECTS[this.state.openProject-1]} projectDetails={this.props.projectDetails}/> : null}
					{this.state.lastItems.map((eachProject, index) => {
						return <Box item={eachProject} openProject={this.openProject} />;
					})}
				</div>
			</div>
		);
	}
}