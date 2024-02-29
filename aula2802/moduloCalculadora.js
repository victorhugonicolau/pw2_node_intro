 module.exports = {
    calculadora(n1, n2, op) {
        switch (op) {
            case "+":
                return ((` ${n1} ${op} ${n2} = ${(n1 + n2)}    `))
                break;
            case "-":
                return ((` ${n1} ${op} ${n2} = ${(n1 - n2)}     `))
                break;
            case "*":
                return ((` ${n1} ${op} ${n2} = ${(n1 * n2)}       `))
                break;
            case "/":
                return ((` ${n1} ${op} ${n2} = ${(n1 / n2)}  `))
                break;
            default:
                return ((` Operação Invalida `))
                break
        }
    
    },
    cientifica(n1,n2,op) {
        switch(op){
            case "sr":
                return(`Raiz quadrada: ${n1} + ${n2} = ${Math.sqrt(n1+n2)}`)
                default:
                    return(`Invalida Operation`)
        }
    }
 }
 