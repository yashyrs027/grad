import React from "react";
import { Trash2 } from "lucide-react";

import { useRef, useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const inputRef = useRef();

  function add() {
    let value = inputRef.current.value;

    if (value === "") {
      return;
    }
    const val = {
      title: value,
      done: false,
    };

    setListTodo((a) => {
      return [...a, val];
    });

    inputRef.current.value = "";
  }
  function deleteTodo(index) {
    setListTodo((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  }

  return (
    <div className="  bg-black min-h-screen flex justify-center items-center">
      <div className="bg-white w-[450px] min-h-[500px] rounded-4xl p-5">
        <h1 className="text-5xl font-bold text-center text-blue-500 mb-10">
          To-Do List
        </h1>

        <div className="flex gap-3 mb-8">
          <input
            ref={inputRef}
            type="text"
            placeholder="Jaldi Kaam bolo"
            className="flex-1 bg-gray-100 p-4 rounded-full outline-none"
          />

          <button
            onClick={add}
            className="bg-red-400 text-white px-8 rounded-full"
          >
            ADD
          </button>
        </div>

        <div className=" flex flex-col gap-4">
          {listTodo.map((x, index) => {
            return (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={x.done}
                    onChange={() => {
                      const updatedTodos = [...listTodo];
                      updatedTodos[index].done = !updatedTodos[index].done;
                      setListTodo(updatedTodos);
                    }}
                  />

                  <div
                    className={`text-xl ${
                      x.done ? "line-through text-gray-400" : "text-black"
                    }`}
                  >
                    {x.title}
                  </div>
                </div>
                <button >
                  <Trash2 onClick={() => deleteTodo(index)} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
