import React from 'react';

class Lastfm extends React.Component {
  render() {
    return <div>HelloWorld: {this.props.name}</div>;
  }
}


React.render(<Lastfm name="Jishaal"/>, document.body);
