import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FilmIcon, PlayIcon } from './CustomSVGs';

const FilmSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const PLAYLIST_ID = 'PLIgpUGl6OROSOsNjlZBKuIlqSWmD2vMFK';

    useEffect(() => {
        const fetchPlaylistVideos = async () => {
            try {
                const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
                if (API_KEY) {
                    const response = await axios.get(
                        `https://www.googleapis.com/youtube/v3/playlistItems`,
                        {
                            params: {
                                part: 'snippet',
                                playlistId: PLAYLIST_ID,
                                maxResults: 50,
                                key: API_KEY
                            }
                        }
                    );
                    
                    const videoData = response.data.items.map(item => ({
                        id: item.snippet.resourceId.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnail: item.snippet.thumbnails.medium.url
                    }));
                    setVideos(videoData);
                } else {
                    // Fetch without API - use direct playlist embed
                    // For now, manually add video IDs from the playlist
                    console.warn('No YouTube API key found. Using fallback method.');
                    setVideos([
                        { id: 'VIDEO_ID_1', title: 'Short Film 1', description: 'Creative storytelling' },
                        { id: 'VIDEO_ID_2', title: 'Short Film 2', description: 'Visual narrative' },
                        { id: 'VIDEO_ID_3', title: 'Short Film 3', description: 'Experimental work' },
                    ]);
                }
            } catch (error) {
                console.error('Error fetching playlist:', error);
                // Fallback videos on error
                setVideos([
                    { id: 'VIDEO_ID_1', title: 'Short Film 1', description: 'Creative storytelling' },
                    { id: 'VIDEO_ID_2', title: 'Short Film 2', description: 'Visual narrative' },
                    { id: 'VIDEO_ID_3', title: 'Short Film 3', description: 'Experimental work' },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylistVideos();
    }, []);

    if (loading) {
        return (
            <section id="films" className="film-section">
                <div className="container">
                    <div className="loading">
                        <FilmIcon size={40} color="var(--primary-blue)" />
                        Loading films...
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="films" className="film-section">
            <div className="container">
                <div className="section-header">
                    <h2>Film, TV, Digital</h2>
                    <p className="section-subtitle">
                    </p>
                </div>
                <div className="video-scroll-container">
                    <div className="video-scroll">
                        {videos.map((v, i) => (
                            <div key={v.id || i} className="video-card-scroll">
                                <div className="video-container">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        src={`https://www.youtube.com/embed/${v.id}`}
                                        title={v.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '10px 10px 0 0' }}
                                    />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">{v.title}</h3>
                                    <p className="video-description">
                                        {v.description?.slice(0, 80) || 'Watch this short film'}...
                                    </p>
                                    <a
                                        href={`https://youtu.be/${v.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="video-link"
                                    >
                                        <PlayIcon size={16} color="var(--primary-blue)" />
                                        Watch
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmSection;