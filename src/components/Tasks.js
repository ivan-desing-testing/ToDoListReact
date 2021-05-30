import React,{Component} from "react";
import PropTypes from 'prop-types'

import Task from './Task.js'

class Tasks extends Component{
    render() {
        return <div class="section" > <div class="title">Tasks</div> {this.props.tasks.map(task => 
            <table class="table">
                <tbody>
                    <Task 
                        task={task} 
                        key={task.id} 
                        deleteTask={this.props.deleteTask}
                        checkDone={this.props.checkDone}
                    />
                </tbody>
            </table>
        )}
        </div>
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;