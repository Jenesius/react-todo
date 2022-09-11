import "./index.css";
import {useState} from "react";
import InputText from "../input-text";

function WidgetNewItem({saveItem}) {

    const [isActive, setIsActive] = useState(false);
    const [formValue, setFormValue] = useState("");

    function handleResize() {
        setIsActive(!isActive);
    }

    function handleSaveItem() {
        saveItem({
            label: formValue
        })
    }

    return (
        <div className= "widget-new-item" >
            <div className = "item-header" onClick = {handleResize}>
                <p className= "item-header__label">New Item</p>

                <span  className = {`item-header__icon ${(isActive)? 'icon-plus': 'icon-minus'}`} ></span>
            </div>

            {
                (isActive)
                    ? (
                        <div className = "item-body">
                            <InputText label = "Task Label" value={formValue} handle={setFormValue}/>
                            <div>
                                <button className= "button button_md button_primary" onClick={handleSaveItem}>Add</button>
                            </div>

                        </div>
                    )
                    : null
            }

        </div>
    )
}
export default WidgetNewItem