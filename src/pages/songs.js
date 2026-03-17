import { useState, useRef, useEffect } from "react";
import "./songs.css";
import "./message.css"; // Reusing leaf animations if not duplicated

const songs = [
    { id: 1, title: "Un Kanney Aayiram Kadha Pesudhey", src: "/assets/songs/Un_Kanney_Aayiram_Kadha_Pesudhey.mp3", artist: "Jakes Bejoy", genre: "Melody" },
    { id: 2, title: "Levitating",       src: "/assets/songs/levitating.mp3", artist: "Dua Lipa", genre: "Pop" },
    { id: 3, title: "Stay",             src: "/assets/songs/stay.mp3", artist: "The Kid LAROI", genre: "Pop" },
    { id: 4, title: "Heat Waves",       src: "/assets/songs/heat-waves.mp3", artist: "Glass Animals", genre: "Indie" },
    { id: 5, title: "As It Was",        src: "/assets/songs/as-it-was.mp3", artist: "Harry Styles", genre: "Pop" },
];

function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

function SongRow({ song, isPlaying, onToggle }) {
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);   // 0–100
    const [current, setCurrent]   = useState(0);
    const [duration, setDuration] = useState(0);

    // Create audio once
    useEffect(() => {
        const audio = new Audio(song.src);
        audioRef.current = audio;

        audio.addEventListener("timeupdate", () => {
            setCurrent(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100 || 0);
        });
        audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
        audio.addEventListener("ended", () => onToggle(null));

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, [song.src]);

    // Sync play/pause from parent
    useEffect(() => {
        if (!audioRef.current) return;
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    const handleSeek = (e) => {
        const bar   = e.currentTarget;
        const rect  = bar.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        const time  = ratio * audioRef.current.duration;
        audioRef.current.currentTime = time;
        setCurrent(time);
        setProgress(ratio * 100);
    };

    return (
        <li className="song-item" style={{ background: isPlaying ? "rgba(26, 115, 232, 0.05)" : "transparent" }}>
            {/* Play / Pause */}
            <button onClick={() => onToggle(song.id)} className="play-btn">
                {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Info + progress */}
            <div className="song-info">
                <div className="song-top-row">
                    <span className="song-title" style={{ color: isPlaying ? "#1a73e8" : "#2d3e50" }}>
                        {song.title}
                    </span>
                    <span className="song-metadata">{song.artist} · {song.genre}</span>
                </div>

                {/* Progress bar */}
                <div className="progress-track" onClick={handleSeek}>
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                    <div className="progress-thumb" style={{ left: `${progress}%` }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            const bar = e.currentTarget.parentElement;
                            const move = (ev) => {
                                const rect  = bar.getBoundingClientRect();
                                const ratio = Math.min(Math.max((ev.clientX - rect.left) / rect.width, 0), 1);
                                audioRef.current.currentTime = ratio * audioRef.current.duration;
                            };
                            const up = () => {
                                window.removeEventListener("mousemove", move);
                                window.removeEventListener("mouseup", up);
                            };
                            window.addEventListener("mousemove", move);
                            window.addEventListener("mouseup", up);
                        }}
                    />
                </div>

                {/* Time */}
                <div className="song-time-row">
                    <span className="song-time">{formatTime(current)}</span>
                    <span className="song-time">{formatTime(duration)}</span>
                </div>
            </div>
        </li>
    );
}

function Songs() {
    const [playingId, setPlayingId] = useState(null);

    const handleToggle = (id) => {
        setPlayingId(prev => (prev === id ? null : id));
    };

    return (
        <div className="songs-container">
            <header className="songs-header">
                <h1 className="songs-title">Musical Melodies</h1>
                <p className="songs-subtitle">Songs that make the heart dance</p>
            </header>

           
                <div className="song-featured-photo absolute">
                    <img src="/assets/collage-1.png" alt="Happy Moments" />
                </div>

               
           

            <div className="player-wrapper">

                <div className="song-featured-photo absolute right-264">
                    <img src="/assets/nature-1.png" alt="Peaceful Nature" />
                </div>


                <ul className="songs-list">
                    {songs.map(song => (
                        <SongRow
                            key={song.id}
                            song={song}
                            isPlaying={playingId === song.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </ul>
            </div>

            {/* Nature Decorations */}
            <div className="nature-leaf leaf-1">🍃</div>
            <div className="nature-leaf leaf-2">🌿</div>
            <div className="nature-leaf leaf-3">🌱</div>
            <div className="nature-leaf leaf-4">🍀</div>
            <div className="nature-leaf flower-1">🌸</div>
            <div className="nature-leaf flower-2">🌼</div>
            <div className="nature-leaf flower-3">🌺</div>
            <div className="nature-leaf flower-4">🌻</div>
            <div className="nature-leaf flower-5">🌹</div>
            <div className="nature-leaf flower-6">🌷</div>
        </div>
    );
}

// Keep the old styles object as a fallback or if needed, but we'll move most to CSS
// I've simplified it to avoid conflicts with the new CSS approach
const styles = {}; 

export default Songs;