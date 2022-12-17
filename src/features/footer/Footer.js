import React from "react"

import {availableColors, capitalize} from '../filters/colors'


const colorFilters = ({ value: colors, onChange}) =>{
    const renderedColors = availableColors.map((color) =>{
        const checked = colors.includes(color)
        const handleChange = () =>{
            const changeType = checked ? 'removed' : 'added'
            onChange(color, changeType)
        }

        return(
            <label key={color}>
                <input
                    type="checkbox"
                    name="color"
                    checked={checked}
                    onChange={handleChange}
                />
                <span
                    className="color-block"
                    style={{
                        backgroundColor: color,
                    }}>
                </span>
                {capitalize(color)}
            </label>
        )
    })

    return(
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}


const Footer = () =>{
    const colors = []
    const status = StatusFilters.All
    const todosRemaining = 1

    const onColorChange = (color, changeType) => console.log('Color change: ', { color, changeType })
    const onStatusChange = (status) => console.log('Status change: ', status)

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button">Mark All Completed</button>
                <button className="button">Clear Completed</button>
            </div>

            <RemainingTodos count={todosRemaining} />
            <StatusFilter value={status} onChange={onStatusChange} />
            <ColorFilters value={colors} onChange={onColorChange} />
        </footer>
    )
}

export default Footer