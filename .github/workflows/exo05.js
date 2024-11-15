// ex05.js

function isEnoughMoney(price, wallet) {
	if(price <= wallet){
      return "true"
    }
  else{
    return "false"
  }
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true
// ne pas oublier le <= car sinon 25€ en price et 25€ en wallet nous retourne false.