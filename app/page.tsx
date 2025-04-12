import RootLayout from './(grid)/layout'
import '../lib/fontawesome' // make sure the path is correct
import Hero from './components/Hero'
import { getGamesByIds, searchGames } from "./api/api";
import Image from 'next/image'
import SwiperCard from './components/SwiperCard'
import GamesSlider from './components/GameSlider'
import connect from "../app/actions/cannot";

export default async function Home () {
  // fetch the data from API
  await connect();
  const data = await searchGames("", 2, [], 9);
  const ps5 = await searchGames(
    "",
    1,
    [
      { filterName: "platforms", option: "187" },
      {
        filterName: "ordering",
        option: "-metacritic",
      },
    ],
    10
  );
  const pc = await searchGames("", 1, [{ filterName: "platforms", option: "4" }], 10);
  const { results } = data.data;
  const customGames = await getGamesByIds(["799265", "58550", "2462", "494384", "452642", "452634"]);

  return ( 
    <RootLayout>
      <Hero />
      <GamesSlider title="Top Games for PS5" games={ps5.data.results} />

    </RootLayout>
  )
}
