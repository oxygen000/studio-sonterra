import React from "react";
import NavBar from "./components/NavBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex ">
     <NavBar/>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}
