import "./music.scss";

const Music = () => {
  return (
    <div className="music" id="music">
      <h2>Top Tracks</h2>
      <iframe
        className="spotify-player"
        src="https://open.spotify.com/embed/artist/5jK1BdSQerlxAhyHMKpXe6?utm_source=generator&theme=0"
        width="100%"
        height="340"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Music;
