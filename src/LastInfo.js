import React from 'react';

export default class LastInfo extends React.Component {
  render() {

    return (
      <div className='content'>
        <span className='title' title={this.props.title}> {this.props.title}</span>
        <span className='artist'>by {this.props.artist}</span>
        <span className='date'>{this.props.date}</span>
      </div>
  	)
  }
}
