import ReactAudioPlayer from "react-audio-player";

interface AudioPlayerProps {
    /** Audio source file that is to be played */
    src: string;
    /** Reference to the inner audio element */
    audioRef: React.MutableRefObject<ReactAudioPlayer | null>;
}

export function AudioPlayer({ src, audioRef }: AudioPlayerProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
            }}
            
            >
            <ReactAudioPlayer
                ref={audioRef}
                src={src}
                loop
                volume={0.25}
            />
        </div>
    ); 
}