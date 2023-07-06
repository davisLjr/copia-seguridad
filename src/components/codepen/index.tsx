import React, { useState } from 'react';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prism-themes/themes/prism-dracula.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import styles from './CodeEditor.module.scss';

const CodeEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const [isResultExpanded, setIsResultExpanded] = useState(false);

  const handleHtmlChange = (value: string) => {
    setHtmlCode(value);
  };

  const handleCssChange = (value: string) => {
    setCssCode(value);
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
          onValueChange={language === 'html' ? handleHtmlChange : handleCssChange}
          highlight={(code) => highlight(code, language === 'html' ? languages.html : languages.css)}
          padding={10}
          placeholder={`Ingrese su código ${language === 'html' ? 'HTML' : 'CSS'} aquí`}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            outline: 'none',
            border: 'none',
            backgroundColor: '#1a1830',
            color: 'white',
            overflow: 'auto',
            borderRadius: '0.5rem',
            minHeight: '400px',
          }}
        />
      </div>
    </div>
  );

  const renderResult = () => (
    <div className={`${styles.result} ${isResultExpanded ? styles.expanded : ''}`}>
      <button
        type="button"
        className={`btn btn-outline-primary btn-icon ml-2 ${styles.shut}`}
        aria-label="Botón"
        onClick={handleExpandResult}
        title='contraer'
      >
        <span className="material-icons-round">
          close_fullscreen
        </span>
      </button>
      <style>{cssCode}</style>
      <div className='resultado' dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
    </div>
  );

  return (
    <div>
      <div className="row">
        <div className="col-12 mb-4">
          <nav className="tabs-slider px-0">
            <ul className="nav nav-pills tabs">
              <li className="nav-item mb-2">
                <button
                  className={`nav-link ${activeTab === 'html' ? 'active' : ''}`}
                  onClick={() => handleTabClick('html')}
                >
                  index.html
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'css' ? 'active' : ''}`}
                  onClick={() => handleTabClick('css')}
                >
                  style.css
                </button>
              </li>
            </ul>
          </nav>

          {activeTab === 'html' ? (
            renderCodeEditor('html', htmlCode)
          ) : (
            renderCodeEditor('css', cssCode)
          )}
        </div>

        <div className="col-md-12">
          <div className={styles.mainResult}>
            <div className="d-flex align-items-center">
              <h3 className="mt-2 mb-2">Resultado</h3>
              <span
                data-direction="bottom"
                data-tooltip='Para una mejor visualización, utiliza el botón de expandir.'
                className="icon-box p-0 mt-2 ml-2"
              >
                <span className="material-icons-round">help</span>
              </span>
              {!isResultExpanded && (
                <button
                  type="button"
                  className={`btn btn-outline-primary btn-sm btn-icon ml-2 ${styles.shut}`}
                  aria-label="Botón"
                  onClick={handleExpandResult}
                  title='expandir'
                >
                  <span className="material-icons-round">
                    open_in_full
                  </span>
                </button>
              )}
            </div>

            {renderResult()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
