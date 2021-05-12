import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="content-wrap">
          <main>
          <Dictionary />
          </main>
        </div>
      <footer>App built by <a href="https://www.amandacapasso.com/" target="_blank" rel="noreferrer">
      Amanda Capasso</a></footer>
      </div>
    </div>
  );
}

export default App;
