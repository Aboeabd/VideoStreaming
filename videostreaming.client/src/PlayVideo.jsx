import React from 'react';
import { useParams } from 'react-router-dom';

class PlayVideo extends React.Component {
    state = { videoUrl: '' };

    componentDidMount() {
        const videoName = this.props.name;

        fetch(`https://localhost:3000/api/Video/stream/${videoName}`)
            .then(response => response)
            .then(video => this.setState({ videoUrl: video.url }))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div>
                <h2>Play Video</h2>
                <video controls src={this.state.videoUrl} type="video/mp4" />
            </div>
        );
    }
}

function Stream() {
    let { name } = useParams();
    return <PlayVideo name={name} />
}

export default Stream;
