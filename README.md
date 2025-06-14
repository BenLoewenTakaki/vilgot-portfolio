# Vilgot Portfolio Website

This is a portfolio website for Vilgot, a film student at Bath Spa University. The website showcases his short films, side projects, and music available on Spotify.

## Features

- **Short Films**: Displays a list of short films created by Vilgot using the YouTube API.
- **Side Projects**: Highlights various side projects, including a magazine he created.
- **Music Section**: Integrates with the Spotify API to showcase music tracks available on Spotify.
- **Responsive Design**: The website is designed to be responsive and user-friendly.

## Technologies Used

- React
- Vite
- YouTube API
- Spotify API
- CSS

## Color Scheme

- Primary Color: #00bcff
- Secondary Color: #0BDA51
- Accent Color: #FAFA33

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd vilgot-portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API keys:
   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   VITE_SPOTIFY_ACCESS_TOKEN=your_spotify_access_token_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the website.

## Deployment

This project is configured for deployment on Render using the included `render.yaml` file.

### Render Deployment Steps:

1. Connect your GitHub repository to Render
2. Set the following environment variables in Render:
   - `VITE_YOUTUBE_API_KEY`: Your YouTube API key
   - `VITE_SPOTIFY_ACCESS_TOKEN`: Your Spotify access token
3. Deploy using the `render.yaml` configuration

The application will build automatically and be available at your Render URL.

### Local Build Testing:

```bash
npm run build
npm run preview
```

## License

This project is open-source and available under the MIT License.