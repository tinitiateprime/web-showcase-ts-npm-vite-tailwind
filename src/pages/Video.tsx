import { Video as VideoIcon } from "lucide-react";

const Video = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <VideoIcon /> Video
      </h1>
      <video controls className="w-full mt-4 rounded shadow">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </div>
  );
};

export default Video;
