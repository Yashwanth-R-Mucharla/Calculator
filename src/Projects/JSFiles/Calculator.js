import React from "react";
import '../CSSFiles/Calculator.css';
import { useState } from "react";

const Calculator=()=>{
    
    const [curDis, setDis] = useState(null);
    if(curDis === null){
        setDis("0");
    }
    const handleAC=()=>{
        setDis("0");
        
    }
    function handleExp(num){
        //console.log(num);
        //exp = exp.concat(num);
        if(curDis === "0"){
            setDis(num);
        }
        
        else{
            var exp = String(curDis);
            //console.log(exp);
            var exp2 = String(num);
            var exp3 = exp+exp2;
            setDis(exp3);
            /*console.log(exp3);
            console.log(typeof(exp));
            console.log(typeof(exp3));*/
        }
        //console.log(curDis);
        //console.log(exp);
    }
    function handleChange(event){
        console.log(event.target.value);
    }
    const handleEval=()=>{
        try{
            var sol = (eval(curDis));
            if(sol=== 0){
                handleAC();
            }
            else{
                setDis(sol);
            }
        }
        catch(error){
            console.error("Error occured during evaluation");
            console.error(error);
            handleAC();
        }
    }
    
    return(
        <div className="whole">
            <center>
            <div className="outline">
                <div className="display-div">
                    <text className="display" onChange={handleChange}>{curDis}</text>
                </div>
                <div>
                    <table className="tableClass">
                        <tbody>
                            <tr>
                                <td className="td"><button className="AC" onClick={handleAC}>AC</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp("(")}>{"("}</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(")")}>{")"}</button></td>
                                <td className="td" style={{backgroundColor:"orange"}}><button className="lastkey" onClick={()=>handleExp("%")}>÷</button></td>
                            </tr>
                            <tr>
                                <td className="td"><button className="AC" onClick={()=>handleExp(7)}>7</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(8)}>8</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(9)}>9</button></td>
                                <td className="td" style={{backgroundColor:"orange"}}><button className="lastkey" onClick={()=>handleExp("*")}>x</button></td>
                            </tr>
                            <tr>
                                <td className="td"><button className="AC" onClick={()=>handleExp(6)}>6</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(5)}>5</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(4)}>4</button></td>
                                <td className="td" style={{backgroundColor:"orange"}}><button className="lastkey" onClick={()=>handleExp("-")}>-</button></td>
                            </tr>
                            <tr>
                                <td className="td"><button className="AC" onClick={()=>handleExp(3)}>3</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(2)}>2</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(1)}>1</button></td>
                                <td className="td" style={{backgroundColor:"orange"}}><button className="lastkey"onClick={()=>handleExp("+")}>+</button></td>
                            </tr>
                            <tr>
                                
                                <td className="td" colSpan="2"><button className="AC" onClick={()=>handleExp(0)}>0</button></td>
                                <td className="td"><button className="AC" onClick={()=>handleExp(".")}>.</button></td>
                                <td className="td" style={{backgroundColor:"orange"}}><button className="lastkey" onClick={handleEval}>=</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            </center>
        </div>
    )
}

export default Calculator;