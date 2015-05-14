import React from 'react';
import LastInfo from './LastInfo.js';
import LastCover from './LastCover.js';

export class LastCard extends React.Component {

    render() {
        return
        <div className='card'>
            <LastCover cover={this.props.cover} />
            <LastInfo artist={this.props.artist} title={this.props.title}/>
        </div>
    }
}
