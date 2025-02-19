"use client";
import { useState, useEffect } from "react";
import MediaGrid from "../components/MediaGrid";

const Movies = () => {
  const [movies, setMovies] = useState([]); // Ensure initial state is an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/my-app/src/app/api/movies/route.js");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Movies</h1>
      {loading ? <p className="text-gray-400">Loading...</p> : <MediaGrid items={movies} />}
    </div>
  );
};

export default Movies;
