import style from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const HowToUse = () => {
  const codeString = `export const App = () => {
  return (
    <div>
      <Reveal width="100%" delay={0}>
        <h1 className="header">Reveal Animation</h1>)}
      </Reveal>
      <Reveal width="100%" delay={150}>
        <a href="https://github.com/firatmio/reveal-animation">Learn More</a>
      </Reveal>
    </div>
  );
};`;

  return (
    <div className={style.howToUse}>
      <h1>Reveal Animation Usage</h1>

      <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
