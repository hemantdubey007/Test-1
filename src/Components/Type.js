import './Type.css'

function Type({lable, id, selected, setPassword}){
    function clickHandler(e){
        setPassword((prevState) => {
            const data = [...prevState];
            data[id].selected = e.target.checked

            return data;
        })
    }

    return(
        <div>
            <input type='checkBox' defaultChecked = {true} changing = {clickHandler}/>
            <lable>{lable}</lable>
        </div>
    )
}

export default Type;