import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  let data =
    "https://fr.web.img6.acsta.net/pictures/19/05/03/09/51/0733619.jpg";
    let firstname= "Sawsen"
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Footer>
            <Image />
          </Card.Footer>
        </Card.Body>
      </Card>
      {firstname ? <h1>Hello {firstname} </h1>: <h1>Hello there</h1> }
      {firstname && <img src={data} alt="" width={250}/> }
    </div>
  );
}

export default App;
