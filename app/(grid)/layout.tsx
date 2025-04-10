import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";
import NavBar from "../components/nav/NavBar";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import Hero from "../components/Hero";

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

    <main className="background grid min-h-screen h-full">
      <GridContainer cols={12}>  
        <SideBar />
        {/* المحتوى الرئيسي */}
        <MaxWidthWrapper className=" col-span-full lg:col-span-10 p-4">
          <NavBar/>
          {children} {/* سيتم ملء المحتوى هنا */}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
