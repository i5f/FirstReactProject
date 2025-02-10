import reactImg from "../assets/react-core-concepts.png"; //reactImg is just a name and can be anything
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
  //return (Math.random() * (max + 1)) | 0; // bitwise OR operator to convert float to int faster
}
// Math.random -> returns a random number between 0(included) and 1(excluded) like it's between 0 and 0.9999...
// multiplying it with (max + 1) rescales it to be between 0 and max
// Math.floor -> rounds it down to the nearest integer since Math.random returns a float value

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

export default Header;
