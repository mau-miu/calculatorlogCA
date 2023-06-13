import React from 'react';
import {message, notification} from 'antd';
import {countAnd} from "../core";
import {countOr} from "../core";
import {countNot} from "../core";
import {countShef} from "../core";
import {countPirs} from "../core";
import {countXor} from "../core";
import {countImpl} from "../core";
import {countInvImpl} from "../core";
import {countEkv} from "../core";

const Keyboard = (props) => {



    const addToExpression = (variable) => {
        var buff = props.expression;
        buff = buff + variable;
        props.changeExpression(buff);
        console.log(buff);
        console.log('')
    }

    const deleteLastSymbol = () => {
        if(props.expression) {
            var buf = props.expression;
            buf = buf.substring(0, buf.length - 1);
            props.changeExpression(buf);
        }
       else{
           message.error('Пусто!')
        }

    }

    const count = (e) =>{
       if(props.expression)
       {
           if(props.expression.includes('\u2227')){
               const result = countAnd()
               message.success(result)
           }
           else if(props.expression.includes('\u2228')){
               const result = countOr()
               message.success(result)
           }
           else if(props.expression.includes('\u00AC')){
               const result = countNot()
               message.success(result)
           }
           else if(props.expression.includes('\u2223')){
               const result = countShef()
               message.success(result)
           }
           else if(props.expression.includes('\u2193')){
               const result = countPirs()
               message.success(result)
           }
           else if(props.expression.includes('\u2295')){
               const result = countXor()
               message.success(result)
           }
           else if(props.expression.includes('\u2192')){
               const result = countImpl()
               message.success(result)
           }
           else if(props.expression.includes('\u2190')){
               const result = countInvImpl()
               message.success(result)
           }
           else if(props.expression.includes('\u27F7')){
               const result = countEkv()
               message.success(result)
           }
           else{
               message.success('Ваш ')
           }
       }
        else
           message.error('Пусто!')
    }



    return (
       <>
           <div className="operators">
               {
                   props.variables.map(variable =>
                       <button onClick={()=>{addToExpression(variable)}}>{variable}</button>)}
               <button onClick={()=>{deleteLastSymbol()}}>DEL</button>
           </div>
           <div className="digits">
               {
                   props.operations.map(oper =>
                       <button onClick={()=>{addToExpression(oper)}}>{oper}</button>
                   )}
               <button onClick={()=>{count(props.expression)}}>=</button>
           </div>
           <div className="digits">
               {
                   props.numbers.map(num =>
                       <button onClick={()=>{addToExpression(num)}}>{num}</button>

                   )}
           </div>

       </>

    );
};

export default Keyboard;
