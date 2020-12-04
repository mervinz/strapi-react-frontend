import React,{Component} from "react";
import Axios from 'axios';
import   fetchedTasks from '../App'


class ShowTask extends Component {

  // async componentDidMount(){
  //   let getTasks = await Axios({
  //     method:'GET',
  //     url:'https://strapi-task-tracker-app.herokuapp.com/tasks'
  //      //url: process.env.REACT_APP_URL + `/tasks`
  //   })
  //   const fetchedTasks = getTasks.data;
  //   console.log("tasks tasks tasks", getTasks)
  //   console.log("fechedTasks",fechedTasks.data)
  //   this.setState({ fechedTasks: fechedTasks })
  // }
  state = {
    fechedTasks: []
  }
  constructor(){
    super();
    this.getTasks();
  }

// life cyle request
 getTasks = async ()=> {
    let data = await Axios({
      method:'GET',
      url:'https://strapi-task-tracker-app.herokuapp.com/tasks'
       //url: process.env.REACT_APP_URL + `/tasks`
    }).then(({ data }) => data);
    let fechedTasks = data;
    console.log("tasks tasks tasks", fechedTasks)
    this.setState({ fechedTasks:  fechedTasks })
  }
  render(){
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
                    {this.state.fechedTasks.map((event) => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">
                              {event.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{event.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <svg
                        className=" transform rotate-90 fill-current h-4 w-4"
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="879.000000pt"
                          height="1280.000000pt"
                          viewBox="0 0 879.000000 1280.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                          >
                            <path
                              d="M4382 12789 c-759 -73 -1589 -348 -2390 -791 -725 -401 -1269 -840
-1631 -1317 -205 -271 -275 -402 -332 -626 -28 -109 -33 -318 -10 -400 49
-177 170 -298 358 -359 50 -17 57 -24 144 -143 81 -113 96 -138 129 -239 52
-155 95 -231 209 -373 110 -138 142 -194 149 -261 5 -58 -13 -97 -78 -165
-107 -111 -261 -450 -324 -714 -90 -369 -44 -673 135 -895 195 -243 503 -393
949 -463 166 -26 750 -26 965 0 719 87 1351 256 2028 544 62 27 111 42 116 37
6 -7 1867 -3594 2570 -4954 95 -184 130 -232 405 -550 350 -405 995 -1114
1004 -1105 2 2 -10 45 -26 97 -56 172 -129 435 -232 838 -170 664 -261 963
-329 1092 -21 40 -193 370 -381 733 -189 363 -558 1072 -820 1575 -678 1299
-1343 2576 -1373 2636 l-26 50 152 89 c275 161 668 435 937 653 427 347 773
722 1020 1107 85 132 221 398 259 508 71 202 96 442 67 622 -35 213 -111 369
-246 505 -279 283 -726 430 -1306 430 l-182 0 -48 58 c-27 31 -94 107 -149
167 -226 248 -313 367 -369 504 l-31 76 3 211 c3 246 -9 329 -63 442 -65 137
-175 220 -391 295 -242 84 -557 116 -862 86z"
                            />
                          </g>
                        </svg>
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
}

export default ShowTask;
