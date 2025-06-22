export function VideoOfHero() {
  return (
    <video width="1100" height="1100" controls preload="auto" autoPlay muted>
      <source src="/video/honey.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}