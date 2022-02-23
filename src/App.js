import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="app__container">
      <div className="cards__container">
        <Card title="1" />
        <Card title="2" />
        <Card title="3" />
        <Card title="4" />
        <Card title="5" />
        <Card title="6" />
      </div>
    </div>
  );
}

export default App;
