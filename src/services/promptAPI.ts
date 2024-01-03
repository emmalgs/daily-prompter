const getPrompt = async () => {
  const response = await fetch(import.meta.env.VITE_PROMPT_URL);
  const data = await response.json();
  return data.prompt;
}

export default getPrompt;