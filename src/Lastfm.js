import React from 'react';
import LastCard from './LastCard.js';

class LastFm extends React.Component {

    constructor(props){

        super(props)

        let _username = this.props.username,
        _apiKey = this.props.apiKey;

        this.url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${_username}&api_key=${_apiKey}&format=json`;

        this.state = {data: []};

    }

    componentDidMount() {
        console.log("cdm");
        let localLast = this;

        fetch(this.url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                localLast.setState({data: data.recenttracks.track});
                console.log(data);
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    timeSince(date) {
        if (typeof date !== 'object') {
            date = new Date(date);
        }

        var seconds = Math.floor((new Date() - date) / 1000);
        var intervalType;

        var interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            intervalType = 'year';
        } else {
            interval = Math.floor(seconds / 2592000);
            if (interval >= 1) {
                intervalType = 'month';
            } else {
                interval = Math.floor(seconds / 86400);
                if (interval >= 1) {
                    intervalType = 'day';
                } else {
                    interval = Math.floor(seconds / 3600);
                    if (interval >= 1) {
                        intervalType = "hour";
                    } else {
                        interval = Math.floor(seconds / 60);
                        if (interval >= 1) {
                            intervalType = "minute";
                        } else {
                            interval = seconds;
                            intervalType = "second";
                        }
                    }
                }
            }
        }

        if (interval > 1 || interval === 0) {
            intervalType += 's';
        }

        return interval + ' ' + intervalType + ' ago';
    }

    render() {
        console.log("render");
        let lfm = this;
        if(this.state.data.length > 0){
            var TrackNodes = this.state.data.map(function (track, i) {
                while(i < lfm.props.tracks) {
                    var date = track.date ? lfm.timeSince(parseInt(track.date.uts) * 1000 ) : 'Now Playing';
                    return (
                        <LastCard artist={track.artist['#text']} 
                            title={track.name} 
                            cover={track.image[3]['#text']} 
                            date = {date} 
                            key={i} />
                    );
                }               
            });
        }

        return <div>{TrackNodes}</div>;
    }
}

React.render(
  <LastFm apiKey={"9d92732638e517cb06c246ca143e766e"} username={"j-dawg-bo"} tracks={10} />,
    document.getElementById('react')
);
