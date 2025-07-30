import React from "react";


const InputField = React.forwardRef(function({type,inputRef,name,className,id,placeholder,...rest},ref){
    return(
           <div>
        < input ref={ref} type={type} name={name} className={className} id={id} placeholder={placeholder} {...rest}  />
    </div>
    )

} )

export default React.memo(InputField);
