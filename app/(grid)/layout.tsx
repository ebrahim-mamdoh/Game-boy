import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import GridContainer from "../components/defaults/GridContainer";
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaming Boi",
  description: "A blog about gaming",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className=" text-black grid h-screen  ">
      <GridContainer cols={12}>
        <div className="bg-red-300 hidden lg:flex col-span-2">sidBar</div>
        <div className="bg-gray-400 col-span-full lg:col-span-10">this is the rest</div>
      </GridContainer>
    </main>
  );
}
