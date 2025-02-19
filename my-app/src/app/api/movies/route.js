export async function GET() {
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", poster: "/my-app/src/app/images/inception.webp" },
    { id: 2, title: "Interstellar", genre: "Sci-Fi, Drama", poster: "/my-app/src/app/images/interstellar.webp" },
    { id: 3, title: "The Dark Knight", genre: "Action, Thriller", poster: "/my-app/src/app/images/FeaturedMovie.webp" },
  ];

  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
