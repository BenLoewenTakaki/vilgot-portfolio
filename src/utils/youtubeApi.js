import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Vilgot's specific video IDs from the provided links
const VILGOT_VIDEOS = [
	{
		id: 'F-yxTNIjHWI',
		title: 'Short Film 1',
		description: "Vilgot's creative short film showcasing visual storytelling",
	},
	{
		id: 'Ba9PBpk_xk4',
		title: 'Short Film 2',
		description: 'Experimental filmmaking with innovative techniques',
	},
	{
		id: '5jz7sYMs0GA',
		title: 'Short Film 3',
		description: 'Latest creative work from Vilgot Pettersson',
	},
];

// Vilgot's channel ID (replace with actual)
const VILGOT_CHANNEL_ID = 'UCyourChannelIdHere';

export const getChannelVideos = async (channelId = VILGOT_CHANNEL_ID) => {
	try {
		if (!API_KEY) {
			console.log('YouTube API key not found, using static video data');
			return VILGOT_VIDEOS;
		}
		const res = await fetch(
			`${BASE_URL}/search?key=${API_KEY}&channelId=${channelId}&part=snippet&order=date&maxResults=10&type=video`
		);
		const data = await res.json();
		if (data.items?.length) {
			return data.items.map((item) => ({
				id: item.id.videoId,
				title: item.snippet.title,
				description: item.snippet.description,
				thumbnail: item.snippet.thumbnails.medium?.url,
			}));
		}
		return VILGOT_VIDEOS;
	} catch {
		return VILGOT_VIDEOS;
	}
};

export const getPlaylistVideos = async (playlistId) => {
	try {
		if (!API_KEY) return VILGOT_VIDEOS;
		const res = await fetch(
			`${BASE_URL}/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=10`
		);
		const data = await res.json();
		return data.items || VILGOT_VIDEOS;
	} catch {
		return VILGOT_VIDEOS;
	}
};

export const fetchYouTubeVideos = async (channelId) => {
	return await getChannelVideos(channelId);
};

export const getVideoDetails = async (videoId) => {
	try {
		if (!API_KEY) {
			return VILGOT_VIDEOS.find((v) => v.id === videoId) || VILGOT_VIDEOS[0];
		}
		const res = await fetch(
			`${BASE_URL}/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`
		);
		const data = await res.json();
		if (data.items?.length) {
			const v = data.items[0];
			return {
				id: v.id,
				title: v.snippet.title,
				description: v.snippet.description,
				thumbnail: v.snippet.thumbnails.medium?.url,
				viewCount: v.statistics?.viewCount,
			};
		}
		return VILGOT_VIDEOS.find((v) => v.id === videoId) || VILGOT_VIDEOS[0];
	} catch {
		return VILGOT_VIDEOS.find((v) => v.id === videoId) || VILGOT_VIDEOS[0];
	}
};