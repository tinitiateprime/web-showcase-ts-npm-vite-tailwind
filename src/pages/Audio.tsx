import { Music } from "lucide-react";

const Audio = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <Music /> Audio
      </h1>
      <audio controls className="mt-4 w-full">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        Your browser does not support audio.
      </audio>
    </div>
  );
};

export default Audio;
