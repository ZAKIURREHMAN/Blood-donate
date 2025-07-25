import React from "react";


const InputField = React.memo(function({type,name,className,id,placeholder}){
    return(
           <div>
        < input type={type} name={name} className={className} id={id} placeholder={placeholder}  />
    </div>
    )

} )

export default InputField