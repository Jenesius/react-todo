import "./index.css";
function WidgetTask({label, onClose, onDragStart, onDragMove, onDragEnd}) {


    return (
        <div className= "widget-task" draggable onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragMove}>
            <div className = "widget-task-content">
                <span>{label}</span>
            </div>
            <div className= "widget-task-delete" onClick={onClose}>
                <span>Close</span>
            </div>
        </div>
    )
}
export default WidgetTask;