const element1 = document.getElementById('element-1')
console.log(element1)

const fruits = ['Apple','Mango','Orange','Banana'];
const finalArr = fruits.map(fruit => `<li>${fruit} </li>`)
console.log(finalArr);

const finalStr = finalArr.join('')
console.log(finalStr);

const ulElem = `<ul>   
${
    fruits.map(fruit => `<li>${fruit} </li>`).join('')
}                                                        
</ul>`
element1.innerHTML = ulElem;

const betterElement = document.getElementById('element-2');
console.log(betterElement);

const mainList = document.createElement('ul');
const list = fruits.map(fruit => {
    const tempElem = document.createElement('li');
    tempElem.innerHTML = fruit;
    return tempElem;
});

list.forEach(li => mainList.appendChild(li));
betterElement.appendChild(mainList); 

/*
Create a person class and display in ordered list task */
const element3 = document.getElementById('element-3')
console.log(element3)
const person = [{
     name: "Nishat",
     age: 24,
     location: "Kolkata",
},{
    name: "Nisha",
    age: 25,
    location: "kata",
},{
    name: "ishat",
    age: 29,
    location: "Kol",
}];
const personArr = person.map(persons => `<li>${persons} </li>`)
console.log(personArr);
var p = JSON.stringify(person);
console.log(p);
const olElem = `<ol>   
${
    
    person.map(persons => `<li>${persons} </li>`).join('')
}                                                        
</ol>`
element1.innerHTML = olElem;

