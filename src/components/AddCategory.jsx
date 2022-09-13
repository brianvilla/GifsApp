import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onClickMic = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;

    recognition.onresult = (event) => {
      for (const result of event.results) {
        setInputValue(result[0].transcript.replace(".", ""));
      }
    };

    recognition.start();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (inputValue.length <= 1) return;

    onAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className="input-group input-group-lg mb-5">
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={onChangeInputValue}
          className="form-control fw-normal p-4"
        />
        <button
          onClick={onClickMic}
          type="button"
          className="btn btn-secondary btn-lg p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-mic"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </button>
        <button type="submit" className="btn btn-primary btn-lg fw-semibold">
          Add Category
        </button>
      </form>
    </>
  );
};
