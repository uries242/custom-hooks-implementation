import { useState, useEffect } from "react";
import useDebounce from "../components/useDebounce";

const FAKE_DATA = [
  "React",
  "Redux",
  "Router",
  "Node.js",
  "Next.js",
  "Nuxt",
  "JavaScript",
  "Jest",
  "JSON",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Express",
  "Electron",
  "Python",
  "PostgreSQL",
];

function DebounceSearchDemo() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(inputValue, 500);
}

export default DebounceSearchDemo;
