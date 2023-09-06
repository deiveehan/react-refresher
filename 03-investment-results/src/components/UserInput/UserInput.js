import React, { useState } from "react";

const initialUserInput = {
    'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10,
};

const UserInput = (props) => {

    const [userInput, setUserInput] = useState(initialUserInput);




    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
        props.onCalculate(userInput)
    }

    const resetHandler = (event) => {
        setUserInput(initialUserInput);
    }

    const inputChangeHandler = (input, value) => {
        console.log("id: " + input + "-> Value : " + value)
        setUserInput((prevInput) => ({
            ...prevInput,
            [input]: value,
        }));
    } 

    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input 
                        onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} 
                        value={userInput['current-savings']}
                        type="number" 
                        id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} 
                         value={userInput['yearly-contribution']}

                    type="number" id="yearly-contribution" />
                </p>
                </div>
                <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} 
                            value={userInput['expected-return']}
                        type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input onChange={(event) => inputChangeHandler(event.target.id, event.target.value)}  
                            value={userInput['duration']}
                        type="number" id="duration" />
                </p>
                </div>
                <p className="actions">
                <button type="reset" onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
                </p>
            </form>

        </div>
    );
}

export default UserInput;