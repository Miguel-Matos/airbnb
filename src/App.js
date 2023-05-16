import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const elem = data.map(info => {
    return <Card 
      title={info.title}
      // description={info.description}
      price={info.price}
      image={info.coverImg}
      stars={info.stats.rating}
      reviews={info.stats.reviewCount}
      country={info.location}
    />
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      {elem}
    </div>
  );
}

export default App;
