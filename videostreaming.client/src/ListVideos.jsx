import React from 'react';

class ListVideos extends React.Component {
    componentDidMount() {
        fetch('https://localhost:3000/api/Video/list')
            .then(response => response.json())
            .then(videos => this.setState({ videos }))
            .catch(error => console.error('Error:', error));
    }

    state = { videos: [] };

    render() {
        return (
            <div>
                <h2>List of Videos</h2>
                <ul>
                    {this.state.videos.map(video => (
                        <li key={video.id}>{video.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListVideos;
