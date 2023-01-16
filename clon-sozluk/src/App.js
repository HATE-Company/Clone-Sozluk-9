import "./App.css";
import logo from "./helpers/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
import {  BsPerson} from "react-icons/bs";
import {game}  from "./game.svg";
function App() {
  return (
    <div className="App">
      <div className="frame1">
        <div className="frame1-rectangle1">
          <div className="frame1-reactangele1-logo">
            <img src={logo} />
          </div>
          <div className="frame1-rectangle1-rectangle2"></div>
          <div className="frame1-rectangle1-search-text">Search</div>
          <div className="frame1-rectangle1-group1">
            <div className="frame1-rectangle1-group1-vector"></div>
            <div className="frame1-rectangle1-group1-vector-circle"></div>
          </div>
          <div className="frame1-rectangle1-dropdown">
          <Dropdown  className="drop" >
      <Dropdown.Toggle >
     <BsPerson className="drop"/>
      </Dropdown.Toggle>

     
    </Dropdown>

          </div>
          <div className="frame1-rectangle1-rectangle54">
            

          </div>
          <div className="frame1-rectangle1-topics">
  Topics
          </div>
          <div className="frame1-rectangle1-game-vector">
       <game/>
          </div>
          <div className="frame1-rectangle1-game-vector-text">
        Gaming
          </div>
          <div className="frame1-rectangle1-sport-vector-text">
        Sports
          </div>
          <div className="frame1-rectangle1-sport-vector">
        
          </div>

          <div className="frame1-rectangle1-television-vector-text">
        Television
          </div>
          <div className="frame1-rectangle1-television-vector">
            
        
          </div>
          <div className="frame1-rectangle1-celebrity-vector">
            
        
            </div>
            <div className="frame1-rectangle1-celebrity-vector-text">
            Celebrity
        
            </div>
            <div className="frame1-rectangle1-business-vector">
            
        
            </div>
            <div className="frame1-rectangle1-business-vector-text">
          Business
        
            </div>
            <div className="frame1-rectangle1-more-vector">
            
        
            </div>
            <div className="frame1-rectangle1-more-vector-text">
         More
        
            </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
