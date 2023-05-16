import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const elem = data.map(info => {
    return <Card 
      id={info.id}
      info={info}
    />
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='cardStack'>
        {elem}
      </div>

    </div>
  );
}

export default App;
