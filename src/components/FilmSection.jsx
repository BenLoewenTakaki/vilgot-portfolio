import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideos, getVideoDetails } from '../utils/youtubeApi';
import { FilmIcon, CameraIcon, DocumentaryIcon, PlayIcon } from './CustomSVGs';

const FilmSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const FEATURED = ['F-yxTNIjHWI','Ba9PBpk_xk4','5jz7sYMs0GA'];

    useEffect(() => {
        const load = async () => {
            try {
                let data = await fetchYouTubeVideos();
                if (!data?.length) {
                    data = await Promise.all(FEATURED.map(id => getVideoDetails(id)));
                }
                setVideos(data);
            } catch (e) {
                setError(e.message);
                setVideos([
                    { id:'F-yxTNIjHWI', title:'Short Film 1', description:'Creative storytelling showcase' },
                    { id:'Ba9PBpk_xk4', title:'Short Film 2', description:'Experimental film techniques' },
                    { id:'5jz7sYMs0GA', title:'Short Film 3', description:'Latest creative work' }
                ]);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) {
        return (
            <section id="films" className="film-section">
                <div className="container">
                    <div className="loading">
                        <FilmIcon size={40} color="var(--primary-green)" />
                        Loading Vilgot's films...
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="films" className="film-section">
            <div className="container">
                <div className="section-header">
                    <h2>Short Films</h2>
                    <p className="section-subtitle">
                        Exploring visual storytelling through compelling short films and digital content
                    </p>
                </div>
                <div className="video-grid">
                    {videos.map((v, i) => (
                        <div key={v.id||i} className="video-card">
                            <div className="video-container">
                                <iframe
                                    width="100%" height="250"
                                    src={`https://www.youtube.com/embed/${v.id}`}
                                    title={v.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ borderRadius:'10px 10px 0 0' }}
                                />
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{v.title}</h3>
                                <p className="video-description">
                                    {v.description || 'Watch this creative short film by Vilgot Pettersson'}
                                </p>
                                <a
                                    href={`https://youtu.be/${v.id}`}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                        color:'var(--primary-blue)',
                                        textDecoration:'none',
                                        fontWeight:'600',
                                        fontSize:'0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <PlayIcon size={16} color="var(--primary-blue)" />
                                    Watch on YouTube
                                </a>
                            </div>
                        </div>
                    ))}
                    <div className="video-card">
                        <div className="video-placeholder">
                            <div style={{ textAlign:'center' }}>
                                <FilmIcon size={80} color="white" />
                                <div style={{ marginTop: '1rem' }}>More Films Coming Soon</div>
                            </div>
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">Future Projects</h3>
                            <p className="video-description">
                                Stay tuned for upcoming creative works and collaborations.
                            </p>
                            <a
                                href="https://www.youtube.com/@Vilgotstuff"
                                target="_blank" rel="noopener noreferrer"
                                style={{
                                    color:'var(--primary-blue)',
                                    textDecoration:'none',
                                    fontWeight:'600',
                                    fontSize:'0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <CameraIcon size={16} color="var(--primary-blue)" />
                                Subscribe on YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilmSection;