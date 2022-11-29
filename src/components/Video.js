import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import YouTube from "react-youtube";

function Video({ videoEmbedURL }) {
    
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          mute: 1,
          loop: 1,
          fs: 0
        }
    }
  return (
    <S.Section>
      <VideoContainer>
        <VideoIframe videoId={videoEmbedURL} opts={videoOptions} />
      </VideoContainer>
    </S.Section>
  );
}

export default Video;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const VideoIframe = styled(YouTube)`
  

  > iframe {
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  }
`;
