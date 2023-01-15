import "./App.css";
import logo from "./helpers/logo.svg";
import Dropdown from "react-bootstrap/Dropdown";
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
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
