import React from 'react';
import LastInfo from './LastInfo.js';
import LastCover from './LastCover.js';

export default class LastCard extends React.Component {
	constructor(props){
		super(props)
	}
    render() {
        return (
	        <div className='card'>
	            <LastCover cover={this.props.cover} />
	            <LastInfo artist={this.props.artist} title={this.props.title} date={this.props.date}/>
	        </div>
        )
    }
}
