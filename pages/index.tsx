import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-[#fff6e5] text-[#222222]">
      <h1 className="text-4xl font-bold mb-4">🎮 GameGuru</h1>
      <p className="text-lg mb-8">Not sure what to play? Let’s fix that.</p>
      <Link href="/quiz">
        <button className="bg-purple-400 hover:bg-purple-700 text-[#222222] px-6 py-3 rounded-xl text-lg">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}