"use client";
import { useState, useEffect } from "react";
import MediaGrid from "../components/MediaGrid";

const Series = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("/api/shows");
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">TV Shows</h1>
      <MediaGrid items={shows} />
    </div>
  );
};

export default Series;
