"use client";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import { Button } from "@/components/ui/button";

const space_grok = Space_Grotesk({ weight: ["500"], subsets: ["latin"] });

export default function Sidebar() {
  return (
    <main className="lg:w-[800px] max-sm:w-[500px] p-10">
      <div>
        <h1
          className={cn(
            space_grok.className,
            "text-2xl font-semibold underline"
          )}
        >
          Create Your Invoice
        </h1>
      </div>
      <div className="mt-12">
        <div className="space-y-2">
          <h1>Your Name : </h1>
          <Input placeholder="John..." />
        </div>
        <div className="space-y-2 mt-5">
          <h1>Your Invoice Number : </h1>
          <Input placeholder="#1.." />
        </div>
        <div className="mt-5 space-y-2">
          <h1>Change Color Pallet : </h1>
          <Input />
        </div>
        <div className="mt-5 space-y-2">
          <h1>Select Your Country : </h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">US</SelectItem>
              <SelectItem value="dark">India</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-5 space-y-2">
          <h1>Select A Date</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Date</Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </main>
  );
}
