import "./App.css";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";

function App() {
  return (
    <>
      <div className="top-page">
        <header>
          <img className="logo" src={logo} alt="logo" />
        </header>
        <img className="illustration" src={illustration} alt="illustration" />
      </div>
      <main>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle te-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button>Register</button>
      </main>
      <footer>
        <button>
          <i class="fa-brands fa-facebook-f"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>
        <button>
          <i class="fa-brands fa-instagram"></i>
        </button>
      </footer>
    </>
  );
}

export default App;
