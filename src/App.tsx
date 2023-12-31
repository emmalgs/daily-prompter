import Timer from "./Timer";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <div className="pink-circle"></div>
        <div className="prompt">
          <div className="prompt-title">Today's Prompt: </div>
          <p className="prompt-body">Write a story about a person who is in a coma.</p>
        </div>
        <Timer />
      </main>
      <footer>&copy; 2023 Emma Gerigscott - Ladies IT Department</footer>
    </div>
  );
};

export default App;
