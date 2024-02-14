import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <main className="h-screen">
      <div className="text-center h-[500px] flex flex-col justify-center">
        <div>
          <h1
            className={cn(
              roboto.className,
              "text-zinc-800 lg:text-5xl sm:text-2xl"
            )}
          >
            Simplify your billing process{" "}
            <span className="text-lime-500 underline">Effortlessly</span>
          </h1>
          <p className="text-zinc-800 font-semibold lg:text-4xl max-sm:text-sm mt-2">
            Create polished invoices in seconds
          </p>
        </div>
        <div>
          <h1 className="text-gray-500 text-xl mt-10">
            Our tool automates the process, allowing you to focus on what truly
            matters, Try it now.
          </h1>
        </div>
        <div className="flex justify-center mt-4 gap-3">
          <Input
            className="max-w-sm p-5 ring-1 ring-green-300"
            placeholder="Enter You Email"
          />
          <Button className="bg-lime-500 p-5 text-black hover:text-white">
            Send
          </Button>
        </div>
      </div>
    </main>
  );
}
