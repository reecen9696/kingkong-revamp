import Carousel from "./carousel";

const VideoSection: React.FC = () => {
  return (
    <div className="p-8">
      <video
        width="1200"
        height="315"
        src="https://kingkong.co/wp-content/uploads/2021/05/hero-bg-video-2021.mp4"
        title="Promotional video"
        autoPlay
        loop
        muted
        playsInline
        className="rounded-lg"
      />
    </div>
  );
};

export default VideoSection;
