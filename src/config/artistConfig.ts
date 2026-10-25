import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION — CHANGE THESE FOR EACH NEW ARTIST
  // ============================================================
  artistName: "ARTIST NAME",

  // ============================================================
  // HERO — KEEP THESE FILE NAMES THE SAME
  // Replace the actual files in /public for each artist,
  // or provide a direct remote Cloudflare R2 / CDN video URL.
  // ============================================================
  heroVideoUrl: "/hero-loop.webp",
  heroImage: "/hero-poster.jpg",
  profileImage: "",

  // ============================================================
  // SOCIALS & STREAMING LINKS
  // Pre-baked verified SVGs exist for: spotify, apple-music,
  // youtube, soundcloud, bandcamp, audiomack, instagram, tiktok.
  // ============================================================
  socials: [
    {
      id: "instagram",
      platform: "instagram",
      url: "",
      label: "Instagram"
    },
    {
      id: "spotify",
      platform: "spotify",
      url: "",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "",
      label: "YouTube"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "release-1",
          title: "SONG TITLE",
          type: "single",
          coverArt: "",
          spotifyUrl: "",
          appleMusicUrl: "",
          youtubeMusicUrl: "",
          soundcloudUrl: "",
          bandcampUrl: "",
          audiomackUrl: "",
          deezerUrl: "",
          tidalUrl: ""
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "video-1",
          title: "VIDEO TITLE",
          youtubeId: "",
          thumbnail: ""
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
