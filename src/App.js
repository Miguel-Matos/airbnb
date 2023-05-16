import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card 
        title="Life Lessons with Katie Zaferes"
        stars={5.0}
        reviews={6}
        country="USA"
        price={136}
        image="img1.png"
      />
    </div>
  );
}

export default App;
