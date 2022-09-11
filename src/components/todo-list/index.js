import "./index.css";

import {useEffect, useRef, useState} from "react";
import EmptyBlock from "../empty-block";
import WidgetNewItem from "../widget-new-item";
import WidgetTask from "../widget-task";
import dataService from "../../assets/js/data-service";
const dragState = {
    startOffset: null,
    currentIndex: null
}
const blockSize = 40;
function TodoList() {

    const [array, setArray] = useState(dataService.readData());

    const refDragContainer = useRef();

    function createItem(data) {
        const itemId = array.reduce((acc, item) => {
            return item.id > acc ? item.id : acc;
        }, 0)
        data.id = itemId + 1;
        setArray([...array, data]);
    }
    function closeItem(itemId) {
        setArray(array.filter(a => a.id !== itemId));
    }

    useEffect(() => {
        dataService.writeData(array);
    }, [array])

    const startOffset = null;



    function handleDragStart(id, e, index) {
        console.log("Start id", id, index);
        dragState.currentIndex = index;
        console.log("Start offset:", refDragContainer.current.offsetTop)
        dragState.startOffset = refDragContainer.current.offsetTop;

    }
    function handleDragMove(e, index) {

        let currentPosition = Math.floor((e.clientY - dragState.startOffset) / blockSize)
        if (dragState.currentIndex   === currentPosition) return console.log(dragState.currentIndex,currentPosition);

        console.log('Change',dragState.currentIndex, index);
        e.preventDefault();

        const tmp = array[dragState.currentIndex];
        array[dragState.currentIndex] = array[currentPosition];
        array[currentPosition] = tmp;

        dragState.currentIndex = currentPosition;
        setArray([...array]);

    }


    return (
        <div className= "container-list">
            <p className = "container-title">Todo List</p>

            {
                (!array.length)
                ? (<EmptyBlock/>)
                : (<div></div>)
            }

            <div className="list-task" ref={refDragContainer}>
                {
                    array.map((v, index) => (
                        <WidgetTask onDragStart={e =>handleDragStart(v.id, e, index)}  key = {index} {...v} onClose={closeItem.bind(null, v.id)}
                            onDragMove={e => handleDragMove(e, index)}
                        />
                    ))
                }
            </div>

            <WidgetNewItem saveItem={createItem}/>

        </div>
    )
}

export default TodoList