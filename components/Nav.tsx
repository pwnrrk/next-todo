import Link from "next/link";
import { useEffect, useState } from "react";
import Switch from "./Switch";

export default function Nav() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("darkmode") === "1");
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark", "bg-neutral-800", "text-slate-300");
    } else {
      document.body.classList.remove(
        "dark",
        "bg-neutral-800",
        "text-slate-300"
      );
    }
    localStorage.setItem("darkmode", isDarkMode ? "1" : "0");
  }, [isDarkMode]);

  return (
    <nav className="flex items-center p-3 shadow">
      <div className="flex-1 text-2xl font-bold">
        <Link href="/">Todo app</Link>
      </div>
      <div className="flex-none">
        <Switch
          onChange={() => setDarkMode(!isDarkMode)}
          checked={isDarkMode}
        />{" "}
        Dark Mode
      </div>
    </nav>
  );
}
