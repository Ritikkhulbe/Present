import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

const Video = () => {


  const { taskNumber } = useParams();
  console.log("this is "+ taskNumber)
      
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {

    const fetchVideoUrl = async () => {
      try {
        console.log(taskNumber);
        const response = await axios.get(`http://localhost:${import.meta.env.VITE_BACKEND_PORT}/api/video/${taskNumber}`);
        setVideoUrl("https://www.youtube.com/embed/" + response.data.videoUrl + "?rel=0");
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };
    fetchVideoUrl();
  }, [taskNumber]);

  return (
    <div className="app">
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video;