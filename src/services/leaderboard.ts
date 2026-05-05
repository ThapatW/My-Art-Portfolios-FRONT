const BASE_URL = import.meta.env.VITE_API_URL;

export async function getLeaderboard_simonsay() {
  const res = await fetch(`${BASE_URL}/leaderboard/simonsay`);
  return res.json();
}

export async function submitScore_simonsay(name: string, score: number) {
  const res = await fetch(`${BASE_URL}/leaderboard/simonsay`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score })
  });
  return res.json();
}