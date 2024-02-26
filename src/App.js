import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">To-Do List</h1>
                        </div>
                        <div className="card-body">
                            <TodoForm addTask={addTask} />
                            <TodoList tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;