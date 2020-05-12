import React, { Component } from 'react'

export default class Box extends Component {
  constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		};
  }

  toggle(id) {
    this.props.openProject(id);
    this.setState({clicked: !this.state.clicked});
  }
  
  render() {
    const item = this.props.item
    return (
      <div className={`${this.state.clicked && 'box_clicked'} box`} style={{backgroundColor: item.color, width: '100px', cursor:'pointer'}}
      onClick={() => this.toggle(item.id)} key={item.id}>
        <img className="box_image" src={item.imageUrl} alt=""/>
      </div>
    )
  }
}
