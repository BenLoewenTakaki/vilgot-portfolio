import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({ videoId, width = 640, height = 360 }) => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (playerRef.current && !playerInstanceRef.current) {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          height,
          width,
          videoId,
          playerVars: {
            playsinline: 1,
            modestbranding: 1,
          },
        });
      }
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, [videoId, width, height]);

  return <div ref={playerRef} className="youtube-player" />;
};

export default YouTubePlayer;