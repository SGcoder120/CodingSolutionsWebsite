import React, { useState } from 'react';
import './YoutubeBlock.css'; // Assuming you have a CSS file for styling

const videos = [
  { id: 'LGdPMf-SgBA', title: 'React Portfolio' },
  { id: 'yxbhtFruNOM', title: 'Latex in React' },
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
      <p className="youtube-heading">Here are some nice resources I used</p>

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
      
      <div className='youtube-block-container' style={{ paddingTop: '40px', textAlign: 'center' }}>
        <iframe 
            className="youtube-block"
            title="YouTube Video Player"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoIdUrl.split('/').pop()}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </div>

    </div>
    
  );
}

export default YoutubeBlock;