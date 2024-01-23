import React, {useState} from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import {highlight, languages} from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-dracula.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import styles from "./CodeEditor.module.scss";
import StorybookIframe from "../storybook-iframe";

export const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [iframeCode, setIframeCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  const handleHtmlChange = (value: string) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value: string) => {
    setCssCode(value);
  };

  const handleIframeChange = (value: string) => {
    setIframeCode(value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleExpandResult = () => {
    setIsResultExpanded((prevExpanded) => !prevExpanded);
  };

  const renderCodeEditor = (language: string, code: string) => (
    <div className={styles.codeEditorWrapper}>
      <div className={`${styles.preStyle} ${styles.codeEditor}`}>
        <SimpleCodeEditor
          value={code}
          onValueChange={
            language === "html"
              ? handleHtmlChange
              : language === "css"
              ? handleCssChange
              : handleIframeChange
          }
          highlight={(code) =>
            highlight(
              code,
              language === "html" ? languages.html : languages.css
            )
          }
          padding={10}
          placeholder={`Ingrese su código ${
            language === "html" ? "HTML" : "CSS"
          } aquí`}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            outline: "none",
            border: "none",
            backgroundColor: "#1a1830",
            color: "white",
            overflow: "auto",
            // borderRadius: '1rem',
            minHeight: "34vh",
          }}
        />
      </div>
    </div>
  );

  const renderResult = () => (
    <div
      className={` ${styles.result} ${isResultExpanded ? styles.expanded : ""}`}
    >
      <button
        type="button"
        className={`btn btn-outline-primary btn-icon ml-2 ${styles.shut}`}
        aria-label="Botón"
        onClick={handleExpandResult}
        title="contraer"
      >
        <span className="material-icons-round">close_fullscreen</span>
      </button>
      <style>{cssCode}</style>
      <div
        className="resultado"
        dangerouslySetInnerHTML={{__html: htmlCode}}
      ></div>
    </div>
  );

  return (
    <div className={`${styles.mainEditor}`}>
      <div className={styles.mainResult}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h3 className="mt-2 mb-2 text-white">Preview</h3>
            <span
              data-direction="right"
              data-tooltip="Para una mejor visualización, utiliza el botón de expandir."
              className="icon-box p-0 mt-2 ml-2 text-info"
            >
              <span className="material-icons-round">help</span>
            </span>
          </div>
          {!isResultExpanded && (
            <button
              type="button"
              className={`btn btn-primary btn-sm btn-icon ml-2 ${styles.shut}`}
              aria-label="Botón"
              onClick={handleExpandResult}
              title="expandir"
            >
              <span className="material-icons-round">open_in_full</span>
            </button>
          )}
        </div>

        {renderResult()}
      </div>

      <div>
        <nav className="tabs-slider mt-2 px-0">
          <ul className="nav nav-pills tabs m-0">
            <li className="nav-item mt-2">
              <button
                className={`nav-link text-white ${
                  activeTab === "html" ? "active" : ""
                }`}
                onClick={() => handleTabClick("html")}
              >
                HTML
              </button>
            </li>
            <li className="nav-item mt-2">
              <button
                className={`nav-link text-white ${
                  activeTab === "css" ? "active" : ""
                }`}
                onClick={() => handleTabClick("css")}
              >
                CSS
              </button>
            </li>
            <li className="nav-item mt-2">
              <button
                className={`nav-link text-white ${
                  activeTab === "iframe" ? "active" : ""
                }`}
                onClick={() => handleTabClick("iframe")}
              >
                Storybook
              </button>
            </li>
          </ul>
        </nav>

        {activeTab === "html" ? (
          renderCodeEditor("html", htmlCode)
        ) : activeTab === "css" ? (
          renderCodeEditor("css", cssCode)
        ) : (
          <StorybookIframe />
        )}
      </div>

      <div className={`${styles.figure}`}></div>
    </div>
  );
};
