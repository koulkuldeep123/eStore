import './App.css';
import CatNav from './component/CatNav';
import MainComponent from './component/MainComponent';
import TopNav  from './component/TopNav';

function App() {

  return (
    <div className='App'>
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  )
}

export default App
