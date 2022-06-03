import React, { useState } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import './Dashboard.css';

const Dashboard = () => {
    const tasksMock = [
        { id: '1', title: 'Daily meeting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '2', title: 'Retrospective', description: 'Excepteur sint occaecat cupidatat non proident.' },
        { id: '3', title: 'Demo session', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { id: '4', title: 'Daily meeting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '5', title: 'Retrospective', description: 'Excepteur sint occaecat cupidatat non proident.' },
        { id: '6', title: 'Demo session', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }
    ];

    const [allTasks, setAllTasks] = useState(tasksMock);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    const setTasksInProgress = (id) => {
        const task = allTasks.filter(item => item.id === id);
        setPendingTasks([ ...pendingTasks, ...task ]);

        const q = allTasks.filter(item => item.id !== id);
        setAllTasks([...q]);
    };

    const setTaskInDone = (id) => {
        const task = pendingTasks.filter(item => item.id === id);
        setDoneTasks([...doneTasks, ...task]);

        const w = pendingTasks.filter(item => item.id !== id);
        setPendingTasks([...w]);
    };

    const deleteTask = (id) => {
        const q = allTasks.filter(item => item.id !== id);
        setAllTasks([...q]);
    };

    return (
        <div className='dashboard_container'>
            <TodoList title='All tasks' tasks={allTasks} type="warning" updateTask={setTasksInProgress} removeTask={deleteTask} />
            <TodoList title='In progress' tasks={pendingTasks} type="info" updateTask={setTaskInDone} />
            <TodoList title='Tasks done' tasks={doneTasks} type="success" />
        </div>
    );
};

export default Dashboard;