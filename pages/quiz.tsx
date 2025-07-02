import { useState } from "react";
import { useRouter } from "next/router";
import {
  genreMap,
  moodMap,
  chaosMap,
  pitchMap,
  timeMap,
} from "../data/quizMappings";

export default function QuizPage() {
  const router = useRouter();

  const [selectedGenre, setSelectedGenre] = useState("RPG");
  const [selectedMood, setSelectedMood] = useState("chill");
  const [selectedChaos, setSelectedChaos] = useState("chaotic");
  const [selectedPitch, setSelectedPitch] = useState("retro");
  const [selectedTime, setSelectedTime] = useState("short");

  const handleSubmit = () => {
    router.push({
      pathname: "/result",
      query: {
        genre: genreMap[selectedGenre] || "action",
        mood: moodMap[selectedMood] || "",
        chaos: chaosMap[selectedChaos] || "",
        pitch: pitchMap[selectedPitch] || "",
        time: timeMap[selectedTime] || "",
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#fff6e5]">
      <div className="p-6 max-w-xl mx-auto text-center font-['Press_Start_2P'] text-[#222222]">
        <h1 className="text-3xl font-bold mb-8">🎮 GameGuru 🎮</h1>

        <div className="grid gap-6">
          <Question
            label="Choose a Genre"
            options={Object.keys(genreMap)}
            value={selectedGenre}
            onChange={setSelectedGenre}
          />

          <Question
            label="What's your mood?"
            options={Object.keys(moodMap)}
            value={selectedMood}
            onChange={setSelectedMood}
          />

          <Question
            label="How chaotic do you feel?"
            options={Object.keys(chaosMap)}
            value={selectedChaos}
            onChange={setSelectedChaos}
          />

          <Question
            label="What art style do you want?"
            options={Object.keys(pitchMap)}
            value={selectedPitch}
            onChange={setSelectedPitch}
          />

          <Question
            label="How long do you want to play?"
            options={Object.keys(timeMap)}
            value={selectedTime}
            onChange={setSelectedTime}
          />

          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
          >
          Get Recommendations 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

function Question({ label, options, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded border border-gray-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}