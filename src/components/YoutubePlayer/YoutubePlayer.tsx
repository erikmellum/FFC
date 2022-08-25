import React, {useState, useRef, useEffect} from 'react';
import {IonModal} from "@ionic/react";
import './YoutubePlayer.scss';

// @ts-ignore
export const YoutubePlayer = ({missionary}) => {
    const [showPlayer, setShowPlayer] = useState(false);
    const [youTubeVideoID, setYouTubeVideoID] = useState<String>('');
    const modal = useRef<HTMLIonModalElement>(null);
    useEffect(() => {
        getYouTubeVideoID();
    }, []);
    const getYouTubeVideoID = () => {
        var videoId = '';
        if (missionary.youtube_video != null) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = missionary.youtube_video.match(regExp);
            if (match && match[2].length === 11) {
                videoId = match[2];
            }
        }
        setYouTubeVideoID(videoId);
    };

    // @ts-ignore
    return <>
        <p>
            <button className={`link-button ${youTubeVideoID ? "ion-show" : "ion-hide"}`} onClick={() => setShowPlayer(true)}>
                <span>View Missionary Video</span>
            </button>
        </p>
        <IonModal id="player-modal" ref={modal} isOpen={showPlayer} onDidDismiss={() => setShowPlayer(false)}>
            <div className="wrapper">
                <iframe
                    id="player"
                    style={{width: "100%", height: "100%"}}
                    src={`https://www.youtube.com/embed/${youTubeVideoID}?theme=dark&autoplay=1&autohide=0&cc_load_policy=1&modestbranding=1&fs=0&showinfo=0&rel=0&iv_load_policy=3&mute=0&loop=1`}
                    title={missionary.title}
                    frameBorder="0"
                    allowFullScreen
                    sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
                />
                {" "}
            </div>
        </IonModal>
    </>
};

export default YoutubePlayer;