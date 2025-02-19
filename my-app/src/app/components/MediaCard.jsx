// components/MediaCard.js
import Image from "next/image";

const MediaCard = ({ item }) => {
  // item = { id, title, genre, poster, videoUrl }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 cursor-pointer">
      {/* Poster */}
      <Image
        src={item.poster}
        alt={item.title}
        width={300}
        height={450}
        className="w-full h-60 object-cover"
      />
      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.genre}</p>
        {/* Watch Now Button (opens videoUrl in a new tab) */}
        {item.videoUrl && (
          <a
            href={item.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Watch Now
          </a>
        )}
      </div>
    </div>
  );
};

export default MediaCard;
