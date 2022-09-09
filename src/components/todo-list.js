import {useState} from "react";

function TodoList() {

    const [array, setArray] = useState([]);

    const [inputValue, setInputValue] = useState('');

    function createItem() {
        setArray([...array, inputValue]);
        setInputValue('');
    }

    return (
        <div>
            <p>Todo List</p>

            <div className="container-list">
                {
                    array.map((v, index) => (
                        <div key = {index}>{v}</div>
                    ))
                }
            </div>

            <div className = "container-new-item">
                <input placeholder = "New Item" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button onClick={createItem}>Create</button>
            </div>
        </div>
    )
}

export default TodoList