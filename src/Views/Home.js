import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import oli from './oli.jpg';
import './Home.css';

function Home() {
    return (
      <div className="container">
        <h3 style={{color: '#001326', marginBottom: '38px'}}>Welcome to Ólafur Arnalds Site</h3>
        <img className="oli" src={oli}></img>
      </div>
    );
  }
  
  export default Home;
  