import React, {useState} from "react";

import DashboardThemeContext from './DashboardThemeContext'
import {updateNest} from 'functions.js'


const DashboardThemeProvider = (props) => {
    const [name, setName] = useState('xxx')
    const [menuData, setMenuData] = useState({
        menuWidth:300,
        headerHeight:90,
    })
    // const updateNest = (key, val) =>{
    //     let varArr = key.split('.')

    //     // if(eval(varArr[0]) instanceof  Array){
    //     //     var newState = [...eval(varArr[0])];   
    //     // }else{
    //     //     var newState = Object.assign({}, eval(varArr[0]));    
    //     // }

    //     // var targeting = newState
    //     // for(var i=1; varArr.length>i; i++){
    //     //     if(i+1 === varArr.length){
    //     //         targeting[varArr[i]] = val
    //     //     }else{
    //     //         targeting = targeting[varArr[i]]
    //     //     }
    //     // }

    //     window['set'+varArr[0].charAt(0).toUpperCase() + varArr[0].slice(1)](updateNestVal(window[varArr[0]]), key, val)
    // }


    const contexData = {
        name, setName,
        menuData, setMenuData,
    }
    return (
        <DashboardThemeContext.Provider value={contexData}>
            {props.children}
        </DashboardThemeContext.Provider>

    )
}


export default DashboardThemeProvider