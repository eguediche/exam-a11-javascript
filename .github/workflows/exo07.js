// ex07.js

function isNationalIDValid(name, age, zip, password) {
	if(name =! ""){
      name = "true"
    }
    if(age <= 18, age >= 65){
      age = "true"
    }
    if(zip <= 0, age >= 99999){
      zip = "true"
    }
    if(password =! "qwerty", "azerty", 1234){
      password = "true"
    }
    
  if(name = "true", age = "true", zip = "true", password = "true"){
    return true
  }
  else{
    return false
  }
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true