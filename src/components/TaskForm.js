import React, {Component} from 'react'
import '../App.css'

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <div class="section">
                <form class="box" onSubmit={this.onSubmit}>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input 
                                class="input"
                                type="text"
                                name="title"
                                placeholder="Write a task" 
                                onChange={this.onChange} 
                                value={this.state.title}
                            />
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <textarea
                                class="textarea"
                                name="description" 
                                placeholder="Write a description" 
                                onChange={this.onChange} 
                                value={this.state.description}
                            />
                        </div>
                    </div>

                    <input class="button is-link is-outlined" type="submit"  />
                </form>
            </div>
        )
    }
} 