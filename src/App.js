import Home from "./components/pages/Home";
import Car from "./components/pages/Car";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div style={{overflow: 'hidden', height: '2em'}}>
        <nav class="nav">
          <a href="/" role='button'>
            <span>Home</span>
          </a>

        </nav>
      </div>


      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cars/:id"
            element={<Car />}
          />

        </Routes>
      </main>
      {/* could be footer */}
    </Router>
  );
}

export default App
