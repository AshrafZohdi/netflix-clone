export async function GET() {

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Comedy, Sci-Fi",
      poster: "/images/Inception.webp",
      videoUrl: "https://www.youtube.com/watch?v=1Cj5az2VuIU",  // Example link
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi, Comedy",
      poster: "/images/Interstellar.webp",
      videoUrl: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    },
    {
      id: 3,
      title: "Batty Man",
      genre: "Adventure, Comedy",
      poster: "/images/FeaturedMovie.webp",
      videoUrl: "https://www.youtube.com/watch?v=cs96KVyCuz4",
    },
  ];

  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
