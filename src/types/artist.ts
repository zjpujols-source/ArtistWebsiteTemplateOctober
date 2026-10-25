export type TabType = 'music' | 'videos' | 'live' | 'shop' | 'contact';

export interface SocialLink {
  id: string;
  platform:
    | 'instagram'
    | 'spotify'
    | 'youtube'
    | 'tiktok'
    | 'apple-music'
    | 'soundcloud'
    | 'bandcamp'
    | 'audiomack'
    | 'twitter'
    | string;
  url: string;
  label: string;
  isStreaming?: boolean;
}

export interface Track {
  id: string;
  title: string;
  previewUrl?: string;
}

export interface Release {
  id: string;
  title: string;
  type: 'single' | 'album' | 'ep';
  releaseDate?: string;
  coverArt?: string;

  // Optional track information for audio previews
  tracks?: Track[];

  // Streaming / digital platform links
  spotifyUrl?: string;
  appleMusicUrl?: string;
  youtubeMusicUrl?: string;
  youtubeUrl?: string;
  amazonMusicUrl?: string;
  deezerUrl?: string;
  tidalUrl?: string;
  soundcloudUrl?: string;
  bandcampUrl?: string;
  audiomackUrl?: string;
  pandoraUrl?: string;
  iheartUrl?: string;
  itunesUrl?: string;
  songlinkUrl?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail?: string;
}

export interface ArtistConfig {
  artistName: string;

  // Hero assets (supports local /hero-video.mp4 or remote CDN URLs)
  heroVideoUrl: string;
  heroImage: string;
  profileImage: string;

  // Social & streaming links
  socials: SocialLink[];

  tabs: {
    music: {
      enabled: boolean;
      title: string;
      releases: Release[];
    };

    videos: {
      enabled: boolean;
      title: string;
      items: VideoItem[];
    };

    live: {
      enabled: boolean;
      title: string;
      status?: 'active' | 'coming_soon';
    };

    shop: {
      enabled: boolean;
      title: string;
      status?: 'active' | 'coming_soon';
    };

    contact: {
      enabled: boolean;
      title: string;
      managementEmail?: string;
    };
  };
}
