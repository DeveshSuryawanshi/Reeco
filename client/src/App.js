import './App.css';
import MainRoutes from './RoutesAndNavigation/MainRoutes';
import Navbar from './RoutesAndNavigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
