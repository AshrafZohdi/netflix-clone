"use client";
import { useState, useEffect } from "react";
import MediaGrid from "../components/MediaGrid";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data); // Example data => [{ id, title, genre, poster, videoUrl }, ...]
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <p className="text-white">Loading movies...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
    {/* Navbar */}
    <Navbar />
      <div className="mb-6 pt-20 j">
      <MediaGrid items={movies} />
      </div>

    {/* Navbar */}
    <Footer />
    </div>
  );
}
