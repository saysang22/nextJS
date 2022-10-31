export const InputCom = ({label, widthTest, heightTest, boo}) => {
    return (
        <>
        {
            boo !== false ? <input placeholder={label} style={{width: widthTest, height: heightTest}}/> : null
        }
        
    
        </>
    )
}