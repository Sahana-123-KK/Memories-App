import "./App.css";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import logo from "./images/memories.png";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="sticky-top appheading">
          <img className="logoimg" src={logo} alt="" /> Memories App
        </h1>
        <div className="container my-3 flexrow">
          <div className="posts">
            <Posts />
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
