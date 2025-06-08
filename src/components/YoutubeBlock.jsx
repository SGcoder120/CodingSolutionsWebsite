import React, { useState } from 'react';
import './YoutubeBlock.css'; // Assuming you have a CSS file for styling

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Video 1' },
  { id: '3JZ_D3ELwOQ', title: 'Video 2' },
  { id: '9bZkp7q19f0', title: 'Video 3' },
];

function YoutubeBlock() {
  const [videoIdUrl, setVideoIdUrl] = useState(videos[0].id);
  
  const handleUrlChange = (e, url) => {
    e.preventDefault();
    setVideoIdUrl(url);
  }

  return (

    <div className="youtube-superblock" >
      <div className="youtube-buttons">
        <ul className="youtube-list">
            {videos.map((video) => (
                <li key={video.id} className="youtube-list-item">
                    <a
                      key={video.id}
                      href={'https://www.youtube.com/embed/' + video.id}
                      className="youtube-button"
                      onClick={(e) => handleUrlChange(e, video.id)}
                    >
                      {video.title}
                    </a>
                </li>
            ))}
        </ul>
      </div>

      <div className='youtube-block-container' style={{ paddingTop: '80px', textAlign: 'center' }}>
        <iframe 
            className="youtube-block"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoIdUrl.split('/').pop()}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </div>

    </div>
    
  );
}

export default YoutubeBlock;