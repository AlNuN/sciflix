import React from 'react';
import { VideoCardContainer } from './styles';
import { getYouTubeId, getYouTubeThumb } from '../../../../hooks/youTubeTools';

function VideoCard({
  videoTitle, videoURL, categoryColor, img,
}) {
  const image = img !== undefined ? img : getYouTubeThumb(getYouTubeId(videoURL));
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <div>
        <h3>
          {videoTitle}
        </h3>
      </div>
    </VideoCardContainer>
  );
}

export default VideoCard;
