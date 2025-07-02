import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Game = {
  name: string;
  background_image: string;
};

export default function ResultPage() {
  const router = useRouter();
  const { genre, mood, chaos, pitch, time } = router.query;

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchGames = async () => {
      try {
        const res = await fetch(
          `/api/fetchGames?genre=${genre}&mood=${mood}&chaos=${chaos}&pitch=${pitch}&time=${time}`
        );
        const data = await res.json();
        setGames(data);
      } catch (err) {
        console.error("Error fetching games:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [router.isReady, genre, mood, chaos, pitch, time]);

  return (
    <div className="bg-[#fff6e5] min-h-screen p-8 font-['Press_Start_2P'] text-black">
      <h1 className="text-2xl mb-6 text-center">🎯 Recommended Games</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div key={game.name} className="bg-white rounded-xl shadow-md p-4">
              <h2 className="text-lg mb-2">{game.name}</h2>
              {game.background_image && (
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-md border border-black"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
