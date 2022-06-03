import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from './utils/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
