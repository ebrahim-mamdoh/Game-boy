import RootLayout from "./(grid)/layout";
import "../lib/fontawesome"; // make sure the path is correct
import Hero from "./components/Hero";
import { searchGames } from '@/app/api/api'

export default async function Home() {
   // fetch the data from API
   const { data } = await searchGames('', 1, [], 10);
   const games = data.results;

  return (
    <RootLayout>
      <Hero />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {games.map((game: any) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </RootLayout>
  );
}
