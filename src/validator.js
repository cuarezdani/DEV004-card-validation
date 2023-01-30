const validator = {

  
  isValid(cardNumber)  {
    
    {
      const reversed = cardNumber.toString().split('').reverse(); //"split('')" divide la cadena en un array de caracteres
      let total = 0;    // "cardNumber.toString()" convierte un número en una cadena de caracteres "reverse()" invierte el orden de los elementos en el array
                      
      for (let i = 0; i < reversed.length; i++) { // i < reversed.length" es la condición que determina cuándo se detiene el bucle. Continúa hasta que "i" sea menor que la longitud del array "reversed i++" es el incremento de "i" en 1 en cada iteración del bucle
        let current = parseInt(reversed[i]); // reversed[i]" se refiere al elemento en la posición "i" en el array "reversed parseInt(reversed[i])" convierte el elemento en un número entero usando la función "parseInt() parseInt(reversed[i])" convierte el elemento en un número entero usando la función "parseInt()
        if (i % 2 === 1) { // La estructura "if" se ejecuta solo si el resultado de la comparación es verdadero, es decir, si "i % 2" es igual a 1. Esto significa que la acción dentro de la estructura "if" solo se ejecuta para los índices impares de "i" en el array "reversed"
          current *= 2;  // El resultado es que el valor de "current" se multiplica por 2 y se almacena de nuevo en "current". Esta operación se realiza en cada iteración del bucle que cumple la condición especificada en la estructura "if"
          if (current > 9) {
            current -= 9;
          }
        }
        total += current;
        
      }
      if(total % 10 === 0){
        return true
      } else {
        return false
      }      

    }
    
   
  },


  maskify(cardNumber) {


    // Ocultar todos los dígitos excepto los últimos 4
    let maskedNumber = "";  //"= ''" asigna una cadena vacía a la variable "maskedNumber"
    const lastFourDigits = cardNumber.slice(-4);  //  el método "slice()" para extraer una porción del valor de "cardNumber". El argumento "-4" significa que se está tomando los últimos 4 caracteres de "cardNumber"
    for (let i = 0; i < cardNumber.length - 4; i++) {  // i < cardNumber.length - 4" es la condición de parada del bucle. El bucle continuará hasta que "i" sea mayor o igual a "cardNumber.length - 4, i++" es el incremento de "i" en cada iteración del bucle
      maskedNumber += "#";  // += '#'" utiliza el operador de asignación de adición para agregar un símbolo "#" a "maskedNumber"
    }
    return maskedNumber + lastFourDigits;
  }


  // ...
};

export default validator;

