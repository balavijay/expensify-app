const person = {
    name: 'Bala',
    age: 30,
    location : {
        city: 'Blr',
        temperture: 94.2
    }
};



const {name, age } = person;
const {city :c , temperture: t } = person.location;


console.log(`${name} is ${age}`);
console.log(`${c} is ${t}`);


const book = {
    title: 'Beyond birth and death',
    author: 'wuht dow',
    publisher: {
        name: 'Srila Prabhupada'
    }
}

const {name:pubishername ='SP'} = book.publisher; 

console.log(pubishername);

const address = ['#17 S Juniper St', undefined, 'KA',undefined];
const [street, city = 'Blru' ,  , pincode = '51'] = address;

console.log(`You are in ${city}  ${pincode}  `);

const items = ['Coffee Hot', '$2.25', '$5', '$10'];
const [drink, small, , large] = items;

console.log(`${drink}  small(${small}), large(${large})`);