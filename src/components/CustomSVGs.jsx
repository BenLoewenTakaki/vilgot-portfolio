import React from 'react';

// Grain Pattern for Hero background
export const GrainPattern = () => (
  <svg 
    width="100%" 
    height="100%" 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      opacity: 0.3,
      pointerEvents: 'none'
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/>
        <circle cx="80" cy="50" r="0.8" fill="rgba(255,255,255,0.08)"/>
        <circle cx="50" cy="80" r="1.2" fill="rgba(255,255,255,0.12)"/>
        <circle cx="10" cy="60" r="0.6" fill="rgba(255,255,255,0.06)"/>
        <circle cx="90" cy="10" r="0.9" fill="rgba(255,255,255,0.09)"/>
        <circle cx="60" cy="30" r="0.7" fill="rgba(255,255,255,0.07)"/>
        <circle cx="30" cy="90" r="1.1" fill="rgba(255,255,255,0.11)"/>
        <circle cx="75" cy="75" r="0.5" fill="rgba(255,255,255,0.05)"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grain)"/>
  </svg>
);

// Film and Video Icons
export const FilmIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3H22V21H2V3Z" stroke={color} strokeWidth="2"/>
    <path d="M7 3V21" stroke={color} strokeWidth="2"/>
    <path d="M17 3V21" stroke={color} strokeWidth="2"/>
    <path d="M2 9H7" stroke={color} strokeWidth="2"/>
    <path d="M2 15H7" stroke={color} strokeWidth="2"/>
    <path d="M17 9H22" stroke={color} strokeWidth="2"/>
    <path d="M17 15H22" stroke={color} strokeWidth="2"/>
  </svg>
);

export const CameraIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 4H9.5L7 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7H17L14.5 4Z" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="13" r="3" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const DocumentaryIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M14 2V8H20" stroke={color} strokeWidth="2"/>
    <path d="M16 13H8" stroke={color} strokeWidth="2"/>
    <path d="M16 17H8" stroke={color} strokeWidth="2"/>
    <path d="M10 9H8" stroke={color} strokeWidth="2"/>
  </svg>
);

export const PlayIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,3 19,12 5,21" fill={color}/>
  </svg>
);

// Social Media Icons
export const LinkedInIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="2" y="9" width="4" height="12" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M17.5 6.5H17.51" stroke={color} strokeWidth="2"/>
  </svg>
);

export const YouTubeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42C22.351 5.61 21.73 4.99 20.92 4.8C19.46 4.5 12 4.5 12 4.5S4.54 4.5 3.08 4.8C2.27 4.99 1.649 5.61 1.46 6.42C1.17 7.88 1.17 12 1.17 12S1.17 16.12 1.46 17.58C1.649 18.39 2.27 19.01 3.08 19.2C4.54 19.5 12 19.5 12 19.5S19.46 19.5 20.92 19.2C21.73 19.01 22.351 18.39 22.54 17.58C22.83 16.12 22.83 12 22.83 12S22.83 7.88 22.54 6.42Z" stroke={color} strokeWidth="2" fill="none"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill={color}/>
  </svg>
);

// Music Icons
export const MusicIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18V5L21 3V16" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="6" cy="18" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="18" cy="16" r="3" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const LoadingSpinner = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .spinner {
          animation: spin 2s linear infinite;
          transform-origin: center;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
    <circle className="spinner" cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="10" fill="none"/>
  </svg>
);

// Project Icons
export const MagazineIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5C4 4.44772 4.44772 4 5 4H12L14 6H19C19.5523 6 20 6.44772 20 7V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V5Z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 10H16" stroke={color} strokeWidth="2"/>
    <path d="M8 13H13" stroke={color} strokeWidth="2"/>
    <path d="M8 16H11" stroke={color} strokeWidth="2"/>
  </svg>
);

export const PhotographyIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="13" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M7 6L8.5 4H15.5L17 6" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="17.5" cy="8.5" r="0.5" fill={color}/>
  </svg>
);

// Additional utility icons that might be useful
export const ArrowIcon = ({ size = 24, color = "currentColor", direction = "right" }) => {
  const rotation = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  };
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
    >
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2"/>
    </svg>
  );
};

export const ExternalLinkIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V7C4 6.44772 4.44772 6 5 6H11" stroke={color} strokeWidth="2"/>
    <path d="M15 3H21V9" stroke={color} strokeWidth="2"/>
    <path d="M10 14L21 3" stroke={color} strokeWidth="2"/>
  </svg>
);