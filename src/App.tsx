import Timer from "./Timer";
import Prompt from "./Prompt";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Prompt />
        <Timer />
      </main>
      <footer>&copy; 2023 Emma Gerigscott - Ladies IT Department</footer>
    </div>
  );
};

export default App;
