import React from 'react';
import update from '../../assets/update.svg';
import close from '../../assets/close.svg';
import check from '../../assets/check.svg';
import move from '../../assets/move.svg';
import './TodoList.css';

const TodoList = ({title, tasks, type, updateTask, removeTask}) => {
    const handleUpdate = (taskId) => {
        updateTask(taskId);
    };

    const handleDelete = (taskId) => {
        removeTask(taskId);
    };

    const handleDone = (taskId) => {
        updateTask(taskId);
    };

    const returnClass = () => {
        switch (type) {
            case 'success':
                return 'success_todolist';

            case 'info':
                return 'info_todolist';

            case 'warning':
                return 'warning_todolist';

            default:
                return 'todolist';
        }
    };

    const returnIcons = (taskId) => {
        switch (type) {
            case 'success':
                return (
                    <span>
                        <img src={check} alt="done" />
                    </span>
                );

            case 'info':
                return (
                    <span>
                        <img className='hover' src={update} alt="update" onClick={() => handleDone(taskId)}/>
                    </span>
                );

            case 'warning':
                return (
                    <span>
                        <img className='hover' src={move} alt="progress" onClick={() => handleUpdate(taskId)} />
                        <img className='hover' src={close} alt="delete" onClick={() => handleDelete(taskId)} />
                    </span>
                );

            default:
                return 'todolist';
        }
    };

    return (
        <section className={returnClass()}>
            <div className='todolist_header'>
                <p className='todolist_header_title'>{title}</p>
                <p className='todolist_header_description'>{tasks.length} tasks</p>
            </div>

            <div className='todolist_list'>
                {
                    tasks.map(task => (
                        <div className='todolist_list_item' key={task.id}>
                            <p className='todolist_item_title'>{task.title} - {returnIcons(task.id)}</p>
                            <p className='todolist_item_description'>{task.description}</p>
                        </div>
                    ))
                }
                {
                    tasks.length === 0 &&
                    <div className='todolist_empty'>
                        <p>Start do something !!</p>
                    </div>
                }
            </div>
        </section>
    );
};

export default TodoList;