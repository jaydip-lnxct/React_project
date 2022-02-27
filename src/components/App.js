import React from 'react'
import Menu from './Menu'

const App=()=>{ 
    const Loop=(props)=>{
        let MyArray=[]
        for(var i=0;i<=props;i++){
        MyArray.push(<Menu/>)
    }
    return MyArray
}
    return(
        <>
        {Loop(1000)}
        </>
    )
}
export default App