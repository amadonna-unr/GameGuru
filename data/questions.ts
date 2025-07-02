export type QuizQuestion = {
    id: string;
    question: string;
    options: string[];
  };
  
  export const questions: QuizQuestion[] = [
    {
      id: "mood",
      question: "What's your current energy level?",
      options: ["💤 Low", "🙂 Chill", "⚡ Cracked"],
    },
    {
      id: "genre",
      question: "What genre are you feeling?",
      options: ["Shooter", "RPG", "Puzzle", "Horror", "Simulation"],
    },
    {
      id: "time",
      question: "How long do you want to play?",
      options: ["< 1 hour", "1–3 hours", "All night"],
    },
    {
      id: "chaos",
      question: "How chaotic are you feeling?",
      options: ["👼 Peaceful", "😈 Maximum Mayhem"],
    },
  ];