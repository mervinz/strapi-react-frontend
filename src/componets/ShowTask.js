import React from "react";

function ShowTask(props) {
  const { tasks } = props;
  console.log("taskname log", props);
  //const taskName = props.tasks[0].name;
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      pinned tasks
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      complete task
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                      {/* <span className="sr-only">Edit</span> */}
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks.map((event) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {/* <div className="flex-shrink-0 h-10 w-10">
                            <input type="checkbox"></input>
                          </div> */}
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">
                            {event.name}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              {event.name}
                            </div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{event.description}</div>
                        {/* <div className="text-sm text-gray-500">
                          {event.description}
                        </div> */}
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        pinned
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          complete
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm  font-medium">
                        <div
                          className="px-2 inline-flex text-xs leading-5 font-semibold text-white bg-indigo-900 items-center rounded-full hover:text-indigo-900"
                        >
                          mark complete
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTask;
