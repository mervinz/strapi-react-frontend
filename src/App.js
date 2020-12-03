import React from "react";
import ShowTask from "./componets/ShowTask";

const fechedTasks = [
  {
    id: 1,
    name: "web",
    description: "describe web",
    completed: "false",
    pinned: "false",
  },
  {
    id: 1,
    name: "web",
    description: "describe web",
    completed: "false",
    pinned: "false",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container w-auto h-8 bg-whie">
        Lorem ipsum dolor sit amet.
      </div>
      <div className="flex mt-6 p-4">
        <div className="w-1/6 flex-col">
          <div className="block items-center justify-between">
            my text
          </div>
        </div>
        <div className="w-2/3"><ShowTask tasks={fechedTasks} /></div>
        <div className="w-1/6"></div>
      </div>

    </div>
  );
}

export default App;
