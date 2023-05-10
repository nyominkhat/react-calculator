/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Button, Card, Metric } from "@tremor/react";

function App() {
  const [number, setNumber] = useState("");
  const [calculate, setCalculate] = useState("");
  const [isEq, setIsEq] = useState(false);

  const handleClick = (e) => {
    setIsEq(false);

    let value = e.currentTarget.value;

    setCalculate(calculate.concat(e.currentTarget.value));

    if (value === "/") {
      value = "÷";
    }
    if (value === "*") {
      value = "×";
    }

    setNumber(number.concat(value));
  };

  // handle equation
  const handleEqu = () => {
    try {
      setCalculate(eval(calculate).toString());
      setNumber(eval(calculate).toString());
    } catch (error) {
      setCalculate("Invalid!");
    }

    setIsEq(true);
  };

  // handle clean all
  const handleClean = () => {
    setNumber("");
    setCalculate("");
  };

  // handle delete
  const handleDel = () => {
    setCalculate(calculate.slice(0, -1));
    setNumber(calculate.slice(0, -1));
  };

  return (
    <div className="bg-slate-100">
      <main className="container flex items-center justify-center h-screen mx-auto select-none">
        <Card className="max-w-md py-10 mx-auto select-none bg-sky-100">
          <Card className="h-20 mb-5 overflow-hidden text-right">
            <Metric className="overflow-hidden">
              {isEq ? calculate : number}
              {number === "" && "0"}
            </Metric>
          </Card>

          <div className="grid grid-cols-4 gap-3 ">
            <Button onClick={handleClean} className="font-bold rounded-full">
              AC
            </Button>
            <Button onClick={handleDel} className="font-bold rounded-full">
              del
            </Button>
            <Button
              value="/"
              onClick={handleClick}
              className="col-span-2 font-bold rounded-full"
            >
              &divide;
            </Button>
            <Button
              value="7"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              7
            </Button>
            <Button
              value="8"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              8
            </Button>
            <Button
              value="9"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              9
            </Button>
            <Button
              value="*"
              onClick={handleClick}
              className="font-bold rounded-full "
            >
              &times;
            </Button>
            <Button
              value="4"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              4
            </Button>
            <Button
              value="5"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              5
            </Button>
            <Button
              value="6"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              6
            </Button>
            <Button
              value="-"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              -
            </Button>
            <Button
              value="1"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              1
            </Button>
            <Button
              value="2"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              2
            </Button>
            <Button
              value="3"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              3
            </Button>
            <Button
              value="+"
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              +
            </Button>
            <Button
              value="0"
              onClick={handleClick}
              className="col-span-2 font-bold rounded-full"
            >
              0
            </Button>
            <Button
              value="."
              onClick={handleClick}
              className="font-bold rounded-full"
            >
              .
            </Button>
            {/* equal btn */}
            <Button onClick={handleEqu} className="font-bold rounded-full">
              &#61;
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}

export default App;
