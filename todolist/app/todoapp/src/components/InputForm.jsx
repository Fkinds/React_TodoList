import React, {useState} from 'react';

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (event) => {
        event.prevetDefault();
        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                completed: false
            },
        ]);
        setInputText("");
    };

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </div>
    )
};
