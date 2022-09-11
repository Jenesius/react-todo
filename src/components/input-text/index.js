import "./index.css";
function InputText({label, value, handle}) {
    return (
        <label className= "wrap-input-text">
            {label}
            <input className= "input-text" type = "text" value = {value} onChange ={e => handle(e.target.value)} />
        </label>
    )
}

export default InputText