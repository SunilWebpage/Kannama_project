import { useState, useRef, useEffect } from "react";
import "./songs.css";
import "./message.css"; // Reusing leaf animations if not duplicated
import { assetPath } from "../utils/assets";

const songs = [
    { id: 1, title: "Un Kanney Aayiram Kadha Pesudhey", src: assetPath("/assets/songs/Un_Kanney_Aayiram_Kadha_Pesudhey.mp3"), artist: "Pradheep Kumar", genre: "Melody" },
    {id:2,title:"Neeyum Naanum Anbe",src:assetPath("/assets/songs/Neeyum Naanum Anbe.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:3,title:"Kannana-Kanne",src:assetPath("/assets/songs/Kannana-Kanne.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:4,title:"Un-Vizhigalil",src:assetPath("/assets/songs/Un-Vizhigalil.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:5,title:"Oh-Penne",src:assetPath("/assets/songs/Oh-Penne.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:6,title:"Nenjukulla-Nee",src:assetPath("/assets/songs/Nenjukulla-Nee.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:7,title:"Athana-Azhagaiyum",src:assetPath("/assets/songs/Athana-Azhagaiyum.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:8,title:"Agasatha",src:assetPath("/assets/songs/Agasatha.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:9,title:"Railin Oligal",src:assetPath("/assets/songs/Railin Oligal.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:10,title:"Kannamma",src:assetPath("/assets/songs/Kannamma.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:11,title:"Unnai OruPathi",src:assetPath("/assets/songs/Unnai OruPathi.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:12,title:"Azhago-Azhagu",src:assetPath("/assets/songs/Azhago-Azhagu.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:13,title:"Mundhinam-Parthene",src:assetPath("/assets/songs/Mundhinam-Parthene.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:14,title:"Thangame",src:assetPath("/assets/songs/Thangame.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:15,title:"Enna_Naan_Seiven",src:assetPath("/assets/songs/Enna_Naan_Seiven.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:16,title:"Sirukki-Vaasam",src:assetPath("/assets/songs/Sirukki-Vaasam.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:17,title:"Kaarkuzhal-Kadavaiye",src:assetPath("/assets/songs/Kaarkuzhal-Kadavaiye.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:18,title:"Ennadi-Maayavi-Nee",src:assetPath("/assets/songs/Ennadi-Maayavi-Nee.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:19,title:"Naan-Nee",src:assetPath("/assets/songs/Naan-Nee.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:20,title:"Azhagiye",src:assetPath("/assets/songs/Azhagiye.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
    {id:21,title:"Verattama-Veratturiye",src:assetPath("/assets/songs/Verattama-Veratturiye.mp3"),artist:"Pradheep Kumar",genre:"Melody"},
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
    }, [song.src, onToggle]);

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
    const featuredPhoto = assetPath('/assets/images/img-1.jpeg' );
    const playerBackground = "";

    const handleToggle = (id) => {
        setPlayingId(prev => (prev === id ? null : id));
    };

    return (
        <div className="songs-container">
            <header className="songs-header">
                <h1 className="songs-title">Songs For You Kannama</h1>
                <p className="songs-subtitle">This are the songs that i feel inside when i think of you</p>
            </header>

           
                <div className="polaroid p12  top-350 right-154 h-500 fixed">
                    <img src={featuredPhoto} alt="Happy Moments" className="w-100 h-500" />
                </div>



               
           

            <div className="player-wrapper" style={{ backgroundImage: `url(${playerBackground})` }}>


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



                <button className='button'>
                    <a href="/photos">Click here to see photos</a>
                </button>


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

export default Songs;
