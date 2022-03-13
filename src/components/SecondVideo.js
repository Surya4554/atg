import React, {useState} from 'react';
import {item} from './Api2.js';
import Button from './button.js';
import './SecondVideo.css';

const SecondVideo = () =>{
  const [data, setdata] = useState(item);
  const [categoryList, setCategoryList] = useState(item.image);

    return(
        <div>
        <h1 className='YT'>Shop More YT videos</h1>
        <h2 className='YT2'>Checkout my favourites products from youtube videos</h2>
          
        {item.map(curElem => {
          return <div className='main-video'>
                 <div className='child-video'> 
                  <video className='video' autoPlay controls muted loop > 
                  <source src={curElem.category} type="video/mp4" />
                  </video> 
                  <h3 className='video-text2'>Whatsapp Guys How Do You Likle this Video I Think Helpful</h3>
                  </div>
                  <h2>Product in this Video</h2>
             <div className='img-cont'>     {curElem.image.map(v => <img src={v}/>)}  </div>
                  <Button name="View tagged Products" />
              </div> 
      })}
         </div>
          
        )
}
export default SecondVideo;
