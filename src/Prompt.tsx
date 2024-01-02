import getPrompt from "./services/promptAPI";
import { useEffect, useState } from "react";

const Prompt = () => {
  const [prompt, setPrompt] = useState([]);

  const generatePrompt = async () => {
    const prompt = await getPrompt();
    const promptArray = prompt.split(" ")
    setPrompt(promptArray);
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <div className="prompt">
      <div className="blue-circle"></div>
      <svg viewBox="0 140 300 300" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" textAnchor="middle" dy="3em" className="prompt-body">
          {prompt.slice(0, 5).join(" ")}
        </text>
        <text x="50%" y="50%" textAnchor="middle" dy="5em" className="prompt-body">
          {prompt.slice(5, 10).join(" ")}
        </text>
        <text x="50%" y="50%" textAnchor="middle" dy="7em" className="prompt-body">
          {prompt.slice(10, 15).join(" ")}
        </text>
        <text x="50%" y="50%" textAnchor="middle" dy="9em" className="prompt-body">
          {prompt.slice(15, 20).join(" ")}
        </text>
        <text x="50%" y="50%" textAnchor="middle" dy="11em" className="prompt-body">
          {prompt.slice(20, prompt.length - 1).join(" ")}  
        </text>
        </svg>
    </div>
  );
};

export default Prompt;
