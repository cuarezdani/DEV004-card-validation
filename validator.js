const validator = {

  
  isValid(cardNumber)  {
    
    {
      const reversed = cardNumber.toString().split('').reverse();
      let total = 0;
    
      for (let i = 0; i < reversed.length; i++) {
        let current = parseInt(reversed[i]);
        if (i % 2 === 1) {
          current *= 2;
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
    let maskedNumber = "";
    const lastFourDigits = cardNumber.slice(-4);
    for (let i = 0; i < cardNumber.length - 4; i++) {
      maskedNumber += "#";
    }
    return maskedNumber + lastFourDigits;
  }


  // ...
};

export default validator;

