import getPrompt from "./services/promptAPI";
import { useEffect, useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState('');

  const generatePrompt = async () => {
    const prompt = await getPrompt();
    setPrompt(prompt);
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <div className="prompt">
      <div className="blue-circle">
        <div className="prompt-text">{prompt}</div>
      </div>
    </div>
  );
};

export default Prompt;
