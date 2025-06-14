import axios from 'axios';

const BASE = 'https://api.spotify.com/v1';
const TOKEN = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

const ARTIST_ID = '5QQx2VGYI89iqfKXguMhr2';
const POPULAR_TRACK_ID = '4A8rJva0iMWMXzeBMS1S4x';

const STATIC_TRACK = {
  id: POPULAR_TRACK_ID,
  name: 'Popular Single',
  artists: ['Vilgot Pettersson'],
  external_urls: { spotify: `https://open.spotify.com/track/${POPULAR_TRACK_ID}` },
  album: { name: 'Single Release', images: [{ url: '' }] }
};
const STATIC_ARTIST = {
  id: ARTIST_ID,
  name: 'Vilgot Pettersson',
  external_urls: { spotify: `https://open.spotify.com/artist/${ARTIST_ID}` },
  followers: { total: 0 },
  genres: ['Alternative', 'Indie'],
  images: [{ url: '' }]
};

export const fetchArtistInfo = async () => {
  try {
    if (!TOKEN) return STATIC_ARTIST;
    const res = await axios.get(`${BASE}/artists/${ARTIST_ID}`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return res.data;
  } catch {
    return STATIC_ARTIST;
  }
};

export const fetchArtistTopTracks = async () => {
  try {
    if (!TOKEN) return [STATIC_TRACK];
    const res = await axios.get(`${BASE}/artists/${ARTIST_ID}/top-tracks`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      params: { market: 'US' }
    });
    return res.data.tracks || [STATIC_TRACK];
  } catch {
    return [STATIC_TRACK];
  }
};

export const fetchTrackDetails = async (trackId = POPULAR_TRACK_ID) => {
  try {
    if (!TOKEN) return STATIC_TRACK;
    const res = await axios.get(`${BASE}/tracks/${trackId}`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return res.data;
  } catch {
    return STATIC_TRACK;
  }
};

export const fetchArtistAlbums = async () => {
  try {
    if (!TOKEN) return [];
    const res = await axios.get(`${BASE}/artists/${ARTIST_ID}/albums`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      params: { include_groups: 'album,single', market: 'US', limit: 10 }
    });
    return res.data.items || [];
  } catch {
    return [];
  }
};

export const fetchSpotifyTracks = async (playlistId) => {
  if (!playlistId) return await fetchArtistTopTracks();
  try {
    if (!TOKEN) return [STATIC_TRACK];
    const res = await axios.get(`${BASE}/playlists/${playlistId}/tracks`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return res.data.items?.map(i => i.track) || [STATIC_TRACK];
  } catch {
    return [STATIC_TRACK];
  }
};

export const searchSpotifyTracks = async (query) => {
  try {
    if (!TOKEN) return [STATIC_TRACK];
    const res = await axios.get(`${BASE}/search`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
      params: { q: query, type: 'track' }
    });
    return res.data.tracks.items || [STATIC_TRACK];
  } catch {
    return [STATIC_TRACK];
  }
};