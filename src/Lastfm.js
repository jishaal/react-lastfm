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

    render() {
        console.log("render");
        if(this.state.data.length > 0){
            var TrackNodes = this.state.data.map(function (track, i) {

              return (
                <LastCard artist={track.artist['#text']} title={track.name} cover={track.image[3]['#text']} key={i} />
              );
            });
        }

        return <div>{TrackNodes}</div>;
    }
}

React.render(
  <LastFm apiKey={"9d92732638e517cb06c246ca143e766e"} username={"j-dawg-bo"} />,
    document.getElementById('react')
);
