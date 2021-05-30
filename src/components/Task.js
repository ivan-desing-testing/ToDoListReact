import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Task extends Component{

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {title, description, id} = this.props.task;
        return <div class="box" >
            <tr>
                <div style={this.styleCompleted()}>
                    <th>{id}</th>
                    <th>{title}</th>
                    <th>{description}</th>
                </div>
                <th>
                    <input type="checkbox" onChange={this.props.checkDone.bind(this,id)}/>
                </th>
                <th>
                    <button class="button is-danger is-outlined" onClick={this.props.deleteTask.bind(this,id)}>
                        Delete
                    </button>
                </th>
            </tr>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;