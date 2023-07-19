import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";
import pretty from "pretty";

export const CopyButton = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    const formattedContent = pretty(targetElement.outerHTML, {
      ocd: true,
    });
    copy(formattedContent);

    toast.success("HTML Copiado.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="ml-2">
      <span data-direction="top" data-tooltip="Copy section (HTML)">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-outline-secondary btn-sm btn-icon"
        >
          <span className="material-icons-round">content_copy</span>
        </button>
      </span>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
