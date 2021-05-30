import {React,Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

import tasks from './sample/task.json'

// Components

import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Posts from './components/Posts.js';


class App extends Component {
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render(){
    return <div>
      <Router>

        <nav class="navbar is-link">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <Link class="navbar-item" to="/">Home</Link>
            <Link class="navbar-item" to="/posts">Posts</Link>
          </div>
        </nav>

        <Route exact path="/" render={() => {
          return <div>
          <TaskForm addTask={this.addTask} />
          <Tasks 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask} 
            checkDone={this.checkDone}
          />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
  }
}

export default App;
