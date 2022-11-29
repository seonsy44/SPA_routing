import Route from './router/Route';
import Router from './router/Router';
import Routes from './router/Routes';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
