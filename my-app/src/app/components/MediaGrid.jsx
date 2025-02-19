import MediaCard from "./MediaCard";

const MediaGrid = ({ items = [] }) => {
  if (!items.length) {
    return <p className="text-gray-400 text-center">No content available</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MediaGrid;