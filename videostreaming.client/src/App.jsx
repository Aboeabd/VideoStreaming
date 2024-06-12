import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import UploadVideo from './UploadVideo';
import ListVideos from './ListVideos';
import Stream from './PlayVideo';

function NavigationBar() {
    const [videoName, setVideoName] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setVideoName(event.target.value);
    };

    const handleButtonClick = () => {
        navigate(`/stream/${videoName}`);
    };

    return (
        <nav>
            <ul>
                <li><Link to="/upload">Upload Video</Link></li>
                <li><Link to="/list">List Videos</Link></li>
                <li>
                    <input type="text" value={videoName} onChange={handleInputChange} placeholder="Find video by name" />
                    <button onClick={handleButtonClick}>Play Video</button>
                </li>
            </ul>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div>
                <NavigationBar />

                <Routes>
                    <Route path="/upload" element={<UploadVideo />} />
                    <Route path="/list" element={<ListVideos />} />
                    <Route path="/stream/:name" element={<Stream />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
