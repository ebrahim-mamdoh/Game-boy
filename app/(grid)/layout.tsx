import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";

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
    <main className="text-black grid h-screen">
      <GridContainer cols={12}>
        {/* Sidebar */}
        <SideBar />
        {/* المحتوى الرئيسي */}
        <div className="bg-gray-400 col-span-full lg:col-span-10 p-4">
          {children} {/* سيتم ملء المحتوى هنا */}
        </div>
      </GridContainer>
    </main>
  );
}
