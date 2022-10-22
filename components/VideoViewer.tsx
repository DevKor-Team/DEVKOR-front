import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface VideoViewerProps {
  url: string;
  width: string;
  height: string;
}

const VideoViewer: React.FC<VideoViewerProps> = ({ url, width, height }) => {
  return (
    <div className="flex justify-center">
      <video autoPlay muted={true} src={url} width={width} height={height}>
        해당 브라우저가 video 기능을 제공하지 않습니다.
      </video>
    </div>
  );
};
export default VideoViewer;
