import React, { useEffect, useState } from 'react';
import { fetchArtistInfo, fetchArtistTopTracks } from '../utils/spotifyApi';
import { MusicIcon, LoadingSpinner } from './CustomSVGs';

const MusicSection = () => {
    const [artistInfo, setArtistInfo] = useState(null);
    const [topTracks, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Vilgot's Spotify IDs for embeds
    const VILGOT_ARTIST_ID = '6LaOs4jd5zMkzmVd6eYyPV';
    const VILGOT_POPULAR_TRACK_ID = '5tQsAhDYE1S3xiECT9URij';

    useEffect(() => {
        const getMusicData = async () => {
            try {
                const [artist, tracks] = await Promise.all([
                    fetchArtistInfo(),
                    fetchArtistTopTracks()
                ]);
                setArtistInfo(artist);
                setTopTracks(tracks.slice(0, 3));
            } catch (error) {
                console.error('Error fetching music data:', error);
            } finally {
                setLoading(false);
            }
        };
        getMusicData();
    }, []);

    return (
        <section id="music" className="music-section">
            <div className="container">
                <div className="section-header">
                    <h2>Music & Sound</h2>
                    <p className="section-subtitle">Original music and creative soundscapes</p>
                </div>
                
                {/* Featured Track Embed */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '3rem',
                    marginBottom: '3rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <MusicIcon size={80} color="white" />
                        <h3 style={{ 
                            color: 'white', 
                            fontSize: '1.8rem', 
                            fontWeight: '600',
                            marginTop: '1rem'
                        }}>
                            Featured Track
                        </h3>
                    </div>
                    
                    {/* Spotify Track Embed */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginBottom: '2rem' 
                    }}>
                        <iframe 
                            src={`https://open.spotify.com/embed/track/${VILGOT_POPULAR_TRACK_ID}?utm_source=generator&theme=0`}
                            width="100%" 
                            height="352" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            style={{ 
                                borderRadius: '12px',
                                maxWidth: '500px'
                            }}
                        ></iframe>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <a 
                            href="https://open.spotify.com/artist/6LaOs4jd5zMkzmVd6eYyPV?si=qZsiarjKRVeZzm92RT_4Wg"
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                background: 'var(--primary-yellow)',
                                color: 'var(--dark)',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                display: 'inline-block'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            View Full Artist Profile
                        </a>
                    </div>
                </div>

                {/* Artist Profile Embed */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '3rem',
                    marginBottom: '3rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <h3 style={{ 
                        color: 'white', 
                        fontSize: '1.8rem', 
                        fontWeight: '600',
                        marginBottom: '2rem',
                        textAlign: 'center'
                    }}>
                        Artist Profile
                    </h3>
                    
                    {/* Spotify Artist Embed */}
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}>
                        <iframe 
                            src={`https://open.spotify.com/embed/artist/${VILGOT_ARTIST_ID}?utm_source=generator&theme=0`}
                            width="100%" 
                            height="352" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            style={{ 
                                borderRadius: '12px',
                                maxWidth: '500px'
                            }}
                        ></iframe>
                    </div>
                </div>

                {/* Additional Info with loading state */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    {loading ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <LoadingSpinner size={30} color="white" />
                            <span style={{ color: 'white' }}>Loading music data...</span>
                        </div>
                    ) : (
                        <>
                            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                                About the Music
                            </h4>
                            <p style={{ 
                                color: 'rgba(255, 255, 255, 0.8)', 
                                lineHeight: '1.6',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                My musical work explores the intersection of visual storytelling and sonic landscapes. 
                                My compositions often serve as soundtracks to my films, creating immersive artistic experiences that 
                                blur the boundaries between cinema and music.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MusicSection;