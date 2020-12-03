import React from 'react'

class CompleteTasks extends React.Component{
    state={
        show:false
    }
    render(){
        const { tasks } = this.props;
        const {show} = this.state
        console.log("taskname log", this.props);
          return(
              
              <div>
                  {tasks.map((event) => (
                      <p></p>
                       ))
                      }
              </div>
          )

    }
}
      
export default CompleteTasks;