import { cn } from "@/lib/utils";
import { Inter, Barlow } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "600" });

export default function Navbar() {
  return (
    <header className="bg-gray-200 p-2 flex justify-around items-center">
      <div className={cn(barlow.className, "text-2xl")}>
        Invoice<span className="text-green-500 underline">Gen</span>
      </div>
      <div className="flex items-center gap-10">
        <h1>Content</h1>
        <h1>About</h1>
      </div>
    </header>
  );
}
