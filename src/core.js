import {message} from "antd";

const dim = 8;

const split = (X, Y) => {
    let Z = [];
    for(let i=0; i<X.length; i++){
        Z.push(X[i]);
        Z.push(Y[i]);
    }
    Z.push(0);
    return Z
}

console.log(dim)


const dec2bin =  (n, R) => {
    let Vector = [];
    for(let i = 0; i<n; i++){
        Vector.unshift(R%2);
        R=Math.floor(R/2);
    }
    return Vector;
}


const clltmt_z = (Memory, R, T) => {
    let tmp_memory = Memory;
    tmp_memory.push(0);
    let Rule = dec2bin(8, R);
    let CA = [tmp_memory];
    let tmprow = [0];
    for(let i=0; i<T; i++){
        for(let j=0; j<tmp_memory.length-2;j++){
            tmprow.push(Rule[Rule.length
                - (CA[i][j] * Math.pow(2,2)
                + CA[i][j + 1] * Math.pow(2, 1)
                + CA[i][j + 2] * Math.pow(2,0) + 1)]);
        }
        tmprow.push(0);
        CA.push(tmprow);
        tmprow=[0]
    }
    return CA;

}

const extract = (S) =>{
    let Y = []
    for(let i=0;i< Math.floor((S.length-1)/2);i++){
        Y.push(S[2 * i + 1])
    }
    return Y
}
const checkValidation = (expression) => {
    if(expression.length!=17){
        message.error("Введены неверные данные");
        return false;
    }
    return true
}

const checkValidationNot = (expression) => {
    if(expression.length!=9){
        message.error("Введены неверные данные");
        return false;
    }
    return true
}

const getXFromExpression = (expression, operator) =>{
    let X = expression.split(operator);
    return X[0];
}

const getYFromExpression = (expression, operator) =>{
    let X = expression.split(operator);
    return X[1];
}

export const countAnd = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else{
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_and = clltmt_z(split(X,Y), 192, 1)
        return extract(M_and[M_and.length-1])
    }
}
export const countOr = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_or = clltmt_z(split(X,Y), 252, 1)
        return extract(M_or[M_or.length-1])
    }
}
export const countNot = (expression, operator) =>{
    if(!checkValidationNot(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = [1,1,1,1,1,1,1,1];
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_not = clltmt_z(split(X,Y), 60, 1)

        return extract(M_not[M_not.length-1])
    }
}
export const countShef = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_shef = clltmt_z(split(X,Y), 63, 1)

        return extract(M_shef[M_shef.length-1])
    }

}
export const countPirs = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_pirs = clltmt_z(split(X,Y), 3, 1)

        return extract(M_pirs[M_pirs.length-1])
    }

}
export const countXor = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_xor = clltmt_z(split(X,Y), 60, 1)

        return extract(M_xor[M_xor.length-1])
    }

}
export const countImpl = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_impl = clltmt_z(split(X,Y), 207, 1)

        return extract(M_impl[M_impl.length-1])
    }

}
export const countInvImpl = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_inv_impl = clltmt_z(split(X,Y), 243, 1)

        return extract(M_inv_impl[M_inv_impl.length-1])
    }

}
export const countEkv = (expression, operator) =>{
    if(!checkValidation(expression))
        message.error("Введите новые данные"+operator)
    else
    {
        let X = Array.from(getXFromExpression(expression, operator));
        let Y = Array.from(getYFromExpression(expression, operator));
        let M_ekv = clltmt_z(split(X,Y), 195, 1)

        return extract(M_ekv[M_ekv.length-1])
    }
}