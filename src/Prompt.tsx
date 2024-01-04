import { createPrompt } from "./services/promptGenerator";
import { useEffect, useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");

  const generatePrompt = async () => {
    const prompt = await createPrompt();
    setPrompt(prompt);
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
