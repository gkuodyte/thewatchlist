import logo from './logo.svg';
import './App.css';
import './index.css';
import SearchMovie from "./searchMovie";

function App() {
  return (
    <div className="container">
      <header className="title">
        React Movie Search
      </header>
      <SearchMovie/>
    </div>
  );
}
export default App;
