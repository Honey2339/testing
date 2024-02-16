import { InputNoFocus } from "@/components/ui/inputnofocus";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";

const space_grok1 = Space_Grotesk({ weight: ["500"], subsets: ["latin"] });
const space_grok2 = Space_Grotesk({ weight: ["400"], subsets: ["latin"] });

export default function Paper() {
  const colorPalettes = {
    palette1: {
      backgroundColor: "#e6e6e6",
      textColor: "#333333",
    },
    palette2: {
      backgroundColor: "#f0f0f0",
      textColor: "#666666",
    },
    palette3: {
      header: { backgroundColor: "#eb7f13", textColor: "#ffffff" },
    },
  };
  const selectedPalette = colorPalettes.palette1;
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="mt-10 h-[800px] w-[600px] shadow-2xl">
        <div
          className="flex justify-between h-15 p-10"
          style={{
            backgroundColor: selectedPalette.backgroundColor,
            color: selectedPalette.textColor,
          }}
        >
          <h1>Your Name</h1>
          <h1 className={cn(space_grok1.className, "text-3xl")}>INVOICE</h1>
        </div>
        <div className="pt-10 pl-10 ml-1 flex gap-2 items-center">
          <h1 className={cn(space_grok1.className, "text-base")}>BILL TO : </h1>
          <p className="text-xs">E-101 VGN STAFFORD</p>
        </div>
        <div className="pl-10 ml-1 flex gap-2 items-center">
          <h1 className={cn(space_grok1.className, "text-base")}>PAY TO : </h1>
          <p className="text-xs mt-2 max-w-36">
            E-101 VGN STAFFORD , CHENNAI INDIA
          </p>
        </div>
        <div className="pl-10 ml-1 mt-3">
          <div className="flex gap-2 items-center">
            <h1 className={cn(space_grok2.className, "text-sm")}>Bank : </h1>
            <p className="text-xs">Your Bank</p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className={cn(space_grok2.className, "text-sm")}>
              Account Name :{" "}
            </h1>
            <p className="text-xs">Your Account</p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className={cn(space_grok2.className, "text-sm")}>
              Account Number :{" "}
            </h1>
            <p className="text-xs">Your Account Number</p>
          </div>
        </div>
        <div className="ml-1 p-10">
          <div className="flex justify-center pr-5">
            <div className="break-all">
              <h1
                className={cn(space_grok1.className, "text-base mb-2 w-60")}
                style={{
                  backgroundColor: selectedPalette.backgroundColor,
                  color: selectedPalette.textColor,
                }}
              >
                Description
              </h1>
              <p className="text-sm max-w-60">Content Writing</p>
            </div>
            <div className="flex">
              <div className="flex flex-col break-all">
                <h1
                  className={cn(space_grok1.className, "text-base mb-2 w-20")}
                  style={{
                    backgroundColor: selectedPalette.backgroundColor,
                    color: selectedPalette.textColor,
                  }}
                >
                  Rate
                </h1>
                <p className="text-sm max-w-20">$100/hr</p>
              </div>
              <div className="flex flex-col break-all">
                <h1
                  className={cn(space_grok1.className, "text-base mb-2 w-20")}
                  style={{
                    backgroundColor: selectedPalette.backgroundColor,
                    color: selectedPalette.textColor,
                  }}
                >
                  Hours
                </h1>
                <p className="text-sm max-w-20">4</p>
              </div>
              <div className="flex flex-col break-all">
                <h1
                  className={cn(
                    space_grok1.className,
                    "text-base mb-2 max-w-20"
                  )}
                  style={{
                    backgroundColor: selectedPalette.backgroundColor,
                    color: selectedPalette.textColor,
                  }}
                >
                  Amount
                </h1>
                <p className="text-sm">$200.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-10 pr-10 ml-1">
          <div className="h-[0.5px] w-auto bg-black mb-3"></div>
          <div className="flex justify-between">
            <h1 className={cn(space_grok1.className, "text-base")}>Total</h1>
            <p className="text-sm">$200.00</p>
          </div>
        </div>
        <footer className="absolute bottom-5 w-[600px] text-center mb-4">
          <div
            className="h-15 p-10"
            style={{
              backgroundColor: selectedPalette.backgroundColor,
              color: selectedPalette.textColor,
            }}
          >
            <h1 className="font-semibold">Thank You!</h1>
          </div>
        </footer>
      </div>
    </main>
  );
}
