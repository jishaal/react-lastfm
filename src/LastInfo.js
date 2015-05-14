import React from 'react';

export class LastInfo extends React.Component {
  render() {
    return
      <div className='content'>
        <span className='title'>{this.props.title}</span>
        <span className='artist'>this.props.artist</span>
      </div>
  }
}
