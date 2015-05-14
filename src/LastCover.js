import React from 'react';

export default class LastCover extends React.Component {
  render() {
    return (
        <div className='cover' style={ {backgroundImage: 'url(' + this.props.cover + ')' }}></div>
    )
  }
}
