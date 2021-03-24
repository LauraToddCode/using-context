import React from "react";

function Input() {
    return (
        <div>
            <p>What's your favourite season?</p>
            <select>
                <option value="">Choose Destination</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
            </select>
        </div>
    )
}

export default Input;