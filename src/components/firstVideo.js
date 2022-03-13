import './firstVideo.css';
import React from 'react';

const FirstVideo = () => {
    return (
        <div>
        <div className='video-container'> 
           <h2>Everyday makeup using dupes of high end favourites</h2>
           <video className='video' autoPlay controls muted loop > 
              <source src="./video/video1.mp4" type="video/mp4" />
           </video>
           <h3 className='video-text'>Everything is ok what you want to Do you Like Most video.</h3>
         </div>
        <div className='button'><button className='first-btn' ><i className="fa-brands fa-whatsapp"></i> Save Post on Whatsapp </button>
        </div>
        </div>
    );
}

export default FirstVideo;