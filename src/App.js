import React from "react";
import ShowTask from "./componets/ShowTask";
import CreateTask from "./componets/ CreateTask";
import profilePic from './images/tasks.jpg'

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
// const [showModal, setShowModal] = React.useState(false);

function App() {
  return (
    <div className="App">
      <div className="container flex mx-auto h-8 mt-4 items-center bg-white">
        <div className="w-1/4 flex">
          <div className="text-red-600 text-5xl">Qua</div>
          <div className="text-yellow-500 text-5xl">trix</div>
        </div>
        <div className="w-1/2 flex items-center justify-between  text-gray-600 shadow-sm ">
        <div className="space-x-4">
        <a href="#">
          <button className="text-2xl place-items-center hover:text-red-700">
            All tasks
          </button>
          </a>
          <a href="#">
          <button className="text-2xl place-items-center hover:text-red-700">
            complete tasks
          </button>
          </a>
          <a href="#">
          <button className="text-2xl place-items-center hover:text-red-700">
            pinned tasks
          </button>
          </a>
        </div>
          <div
            className="px-3 h-8 inline-flex items-center mr-2 text-xs leading-5 f
          ont-semibold rounded-full bg-red-800 text-white"
          >
            <CreateTask />
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center">
          
          <img className="h-10 w-10 border-3 rounded-full" src={profilePic} />
            {/* <img className="rounded-full h-8 w-8" src="./images/tasks.jpg" alt="mypic" /> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto flex mt-6 p-4">
        <div className="w-1/6 flex-col">
          <div className="block space-x-2 items-center justify-between">
            <div> </div>
            <div className="h-8 border-l-2 px-4 border-red-600 hover:text-red-900 text-red-400">
              My tasks
            </div>
            <div className="h-8 border-l-2 px-4  border-gray-400">
              Projects
            </div>
          </div>
        </div>
        <div className="w-2/3 inline-block items-end justify-between ">
          
          
          <ShowTask tasks={fechedTasks} />
        </div>
        <div className="w-1/6">
          
        </div>
      </div>
    </div>
  );
}

export default App;
