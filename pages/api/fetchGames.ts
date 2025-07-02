import type { NextApiRequest, NextApiResponse } from "next";

const RAWG_API_KEY = process.env.RAWG_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genre = "action", mood = "", chaos = "", pitch = "", time = "" } = req.query;

  const search = [mood, chaos, pitch, time].filter(Boolean).join(" ");
  const url = `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&genres=${genre}&search=${search}&page_size=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch games" });
  }
}
