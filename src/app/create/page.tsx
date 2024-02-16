import React from "react";
import Paper from "./paper";
import Sidebar from "./sidebar";

export default function Create() {
  return (
    <main className="flex justify-around">
      <Sidebar />
      <Paper />
    </main>
  );
}
