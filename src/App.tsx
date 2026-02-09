import { FaArrowRight, FaGithub } from "react-icons/fa6";
import "./App.css";
import Reveal from "./Reveal";
import { SiGoogledocs } from "react-icons/si";
import { Route, Routes, useNavigate } from "react-router";
import { HowToUse } from "./how-to-use/page";

function Main() {
  const githubUsername = "firatmio";
  const navigate = useNavigate();
  return (
    <div className="main">
      <Reveal width="100%" delay={0}>
        <img src="/logo-trans.svg" alt="Reveal Animation" width={150} height={150} />
      </Reveal>
      <Reveal width="100%" delay={150}>
        <h1 className="header">Reveal Animation</h1>
      </Reveal>
      <Reveal width="100%" delay={300}>
        <a
          href={`https://github.com/${githubUsername}/reveal-animation`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="github">
            <FaGithub size={36} />
            <span>{githubUsername}/reveal-animation</span>
          </div>
        </a>
      </Reveal>
      <Reveal width="100%" delay={450}>
        <p className="howtouse" onClick={() => navigate("how-to-use")}>
          <span>
            <SiGoogledocs /> How to use
          </span>{" "}
          <FaArrowRight />
        </p>
      </Reveal>
    </div>
  );
}

function App() {
  const githubUsername = "firatmio";
  return (
    <>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<Main />} />

        {/* Gitmek istediğin sayfa */}
        <Route path="/how-to-use" element={<HowToUse />} />
      </Routes>
      <footer>
        <p>&copy; 2026 <a className="username" href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">{githubUsername}</a>.</p>
      </footer>
    </>
  );
}

export default App;
