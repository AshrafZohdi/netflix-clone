import Image from "next/image";

const MediaCard = ({ item }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 cursor-pointer">
      <Image
        src={item.poster}
        alt={item.title}
        width={300}
        height={450}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.genre}</p>
      </div>
    </div>
  );
};

export default MediaCard;
