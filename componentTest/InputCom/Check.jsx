import { useEffect } from "react"

export const Check = ({label, bo, setBo}) => {

    // let test = boo === true ? 'checked' : '';

        function test(){

            setBo(!bo)
        }

    
    return (
        <>
            {/* {boo === true ? <input type="checkbox"/> : <input type="checkbox" checked/>} */}
            <input type="checkbox" checked = {bo} onClick={() =>{test()}}/>
            {label}
        </>
    )
}