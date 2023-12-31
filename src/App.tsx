const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <div className="pink-circle"></div>
        <div className="prompt">
          <div className="prompt-title">Today's Prompt: </div>
          <p className="prompt-body">Write a story about a person who is in a coma.</p>
        </div>
        <div className="timer">
          <p>Time until next prompt:</p>
          <p>00:00:00</p>
        </div>
      </main>
      <footer>&copy; 2023 Emma Gerigscott - Ladies IT Department</footer>
    </div>
  );
};

export default App;
