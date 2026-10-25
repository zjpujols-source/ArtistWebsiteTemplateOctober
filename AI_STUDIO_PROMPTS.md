# AI Studio Prompt Pack

Use these prompts in order. Do not combine them into one giant request.

## Prompt 1 — Inspect only

You are working with an existing approved artist website template. Do not modify any files yet. Inspect the project structure, identify the main app entry point, identify the artist configuration file, and identify the reusable UI components. Read `AI_STUDIO_RULES.md` and treat it as the project preservation contract. Report what you found and make no code changes.

## Prompt 2 — Validate the master template

Run the existing project's typecheck/build process. If there are errors, fix ONLY the actual errors using the smallest possible surgical changes. Do not redesign, refactor unrelated code, replace components, remove functionality, or change the visual layout. If there are no errors, make no changes. After the project works, stop.

## Prompt 3 — Create and Publish a New Artist Site

Copy and fill out the prompt below to generate a new artist website that automatically builds and deploys to Cloudflare via GitHub:

```markdown
Create a new website for artist [ARTIST NAME] using the Github artist template from October (ArtistWebsiteTemplateOctober).

### Artist Information & Links
- Artist Name: [ARTIST NAME]
- Apple Music: [APPLE MUSIC URL]
- Spotify: [SPOTIFY URL]
- YouTube Channel: [YOUTUBE CHANNEL URL]
- Instagram: [INSTAGRAM URL]
- TikTok: [TIKTOK URL]
- SoundCloud: [SOUNDCLOUD URL - Optional]
- Bandcamp: [BANDCAMP URL - Optional]
- Audiomack: [AUDIOMACK URL - Optional]

### Music Videos (YouTube)
- [YOUTUBE VIDEO 1 URL]
- [YOUTUBE VIDEO 2 URL]
- [YOUTUBE VIDEO 3 URL]
- [YOUTUBE VIDEO 4 URL]

### Background Video & Media
- Hero background clip: located in ~/Downloads with CLIP in the title (e.g. [Artist]CLIP.mov), or provide a direct Cloudflare CDN video URL. If local, transcode with ffmpeg into web-optimized H.264 mp4 without audio (public/hero-video.mp4) and extract a sharp still frame (public/hero-poster.jpg).

### Music Releases & Streaming Modal
- Research the artist's full discography using Deezer, Apple Music, and Spotify APIs.
- Include 5+ releases in chronological order (specifically including the 4 most recent releases).
- For each release, download high-resolution cover art (1000x1000) to public/covers/.
- Include EVERY available platform in the StreamModal for each release:
  - Spotify
  - Apple Music
  - YouTube Music
  - YouTube Video / Visualizer (where available)
  - SoundCloud
  - Bandcamp
  - Audiomack
  - Amazon Music
  - Deezer
  - Tidal
  - Pandora
  - iHeartRadio
  - iTunes Store

*(Note: All platform logos are pre-baked in PlatformIcons.tsx. Never draw or generate SVGs—only populate the URL fields).*

### Cloudflare & GitHub Requirements
1. Initialize a new folder named [ArtistName] copied from ArtistWebsiteTemplateOctober.
2. In wrangler.jsonc, set name to lowercase slug and ENSURE the build hook is present:
   "build": { "command": "npm run build" }
   (This is mandatory so Cloudflare Workers/Pages never fails with a missing dist directory).
3. Update index.html, metadata.json, and package.json with the artist's details.
4. Verify build locally with `npm run lint` and `npm run build`.
5. Create a new public repository on GitHub under zjpujols-source/[ArtistName] and push the code to main.
6. Start the local server on an open port (e.g. 3001) to verify everything renders properly.
```
