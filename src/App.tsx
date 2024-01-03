import Timer from "./Timer";
import Prompt from "./Prompt";
import Background from "./Background";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>

        <Prompt />
        <Timer />
        <Background />
      </main>
      {/* <footer>&copy; 2023 Emma Gerigscott - Ladies IT Department</footer> */}
    </div>
  );
};

export default App;
