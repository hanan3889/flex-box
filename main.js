function sayHello() {
  alert("Bonjour");
}

let tab = [13, 17, 9, 3];
console.log(tab);

for (let i = 0; i < tab.length - 1; i++) {
  console.log("valeur de i:" + i);

  for(let j=0; j < tab.length-1-i,j++) {
    console.log("j:" + tab[j] + " compare à j+1: " + tab[j + 1]);
    if (tab[j] > tab[j + 1]) {
      console.log(
        "j:" + tab[i] + " et j+1: " + tab[j + 1]  + "à permuter!"
      );
      let temp = tab[j + 1];
      tab[j + 1] = tab[j];
      tab[j] = temp;
    }
  }
  
  }

  
console.log(tab);
