import getLatestPrompt from "./services/promptAPI";
import { useEffect, useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");

  const generatePrompt = async () => {
    const text = await getLatestPrompt();
    setPrompt(text);
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <div className="prompt">
      <div className="prompt-text">{prompt}</div>
      <div className="blue-circle"></div>
    </div>
  );
};

export default Prompt;
