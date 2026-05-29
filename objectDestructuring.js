const tool = {
    name: 'playwright',
    age: 6,
    company: 'microsoft',
    country: 'usa',
    city: "silicon valley"

}

const {name: toolName, country, city = "Newyork"} = tool

console.log(toolName);

console.log(country);

console.log(city);



// const tool = {
//   name: "playwright",
//   age: 6,
//   info: {
//     company: "microsoft",
//     country: "usa",
//     city: "silicon valley",
//   },
// };



// const {name, info: {company, city}} = tool

// console.log(company);
// console.log(city);

