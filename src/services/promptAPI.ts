const getLatestPrompt = async () => {
  let prompt = ''
  await fetch(import.meta.env.VITE_PROMPT_API_URL)
    .then((response) => response.text())
    .then((data) => {
      const text = data;
      prompt = text;
    })
    .catch((error) => {
      console.error('Error:', error);
      return 'Error fetching data';
    });
  return prompt;
}

export default getLatestPrompt;
