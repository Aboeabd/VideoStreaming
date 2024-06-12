import React from 'react';

class UploadVideo extends React.Component {
    state = { file: null, uploadStatus: '' };

    handleFileChange = (event) => {
        this.setState({ file: event.target.files[0] });
    }

    handleUpload = (event) => {
        event.preventDefault();

        const file = this.state.file;
        const formData = new FormData();
        formData.append('file', file);

        fetch('https://localhost:3000/api/Video/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                this.setState({ uploadStatus: 'Upload successful!' });
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({ uploadStatus: 'Upload failed.' });
            });
    }

    render() {
        return (
            <div>
                <h2>Upload Video</h2>
                <form onSubmit={this.handleUpload}>
                    <input type="file" onChange={this.handleFileChange} />
                    <button type="submit">Upload</button>
                </form>
                {this.state.uploadStatus && <p>{this.state.uploadStatus}</p>}
            </div>
        );
    }
}

export default UploadVideo;
