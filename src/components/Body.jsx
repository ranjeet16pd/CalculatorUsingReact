import React, { useState } from "react";

function Body() {
  const [input, setInput] = useState("");
  //   const [result, setResult] = useState("");

  const handleCalculate = (value) => {
    if (value === "=") {
      try {
        const myres = eval(input).toString();
        setInput(myres);
      } catch (error) {
        setInput("Invalid Expression");
      }
    } else if (value === "C") {
      setInput("");
      //   setResult("");
    } else {
      setInput((preInput) => preInput + value);
    }
  };

  return (
    <>
      <div className="text-center pb-10  h-screen w-screen text-white bg-slate-600 flex flex-col justify-center items-center">
        <div className="wrappers rounded-3xl py-1 bg-neutral-300 w-96 h-96 ">
          <input
            type="text"
            className="h-10 bg-red-200 text-lg text-black border rounded border-black  w-80 mr-4 "
            value={input}
            readOnly
          />

          <div className="but   ml-6 mt-6  grid grid-cols-3 gap-5 pt-5 text-white ">
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("1");
                }}
              >
                1
              </button>
            </div>

            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("2");
                }}
              >
                2
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("3");
                }}
              >
                3
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("4");
                }}
              >
                4
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("5");
                }}
              >
                5
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("6");
                }}
              >
                6
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("7");
                }}
              >
                7
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("8");
                }}
              >
                8
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("9");
                }}
              >
                9
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("0");
                }}
              >
                0
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("*");
                }}
              >
                X
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("+");
                }}
              >
                +
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("-");
                }}
              >
                -
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("/");
                }}
              >
                /
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("=");
                }}
              >
                =
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("%");
                }}
              >
                %
              </button>
            </div>
            <div className="btn-1 rounded-full w-3/5 bg-gray-950 ">
              <button
                onClick={() => {
                  handleCalculate("C");
                }}
              >
                C
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
            <h1>Created By Ranjeet</h1>
        </div>
      </div>
    </>
  );
}

export default Body;
