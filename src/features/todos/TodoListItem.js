import React from'react';

import { ReactComponent as TimesSolid } from './times-solid.svg'
import { availableColors, capitalize } from '../filters/colors';


const TodoListItem = ({ todo, onColorChange, onCompletedChange, onDelete}) =>{


    return(
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className='toggle'
                        type="checkbox"
                        checked={completed}
                        onChange={handleCompletedChange}
                    />
                    <div className="todo-text">{text}</div>
            </div>
            <div className="segment buttons">
                <select
                    className='colorPicker'
                    value={color}
                    style={{color}}
                    onChange={handleColorChange}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={onDelete}
                    >
                        <TimesSolid />
                    </button>
            </div>
            </div>
        </li>
    )
}

export default TodoListItem;
