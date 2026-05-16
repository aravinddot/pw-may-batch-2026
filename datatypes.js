

// 1) primitive data types
// 2) Non primitive data types or reference data types


// i) string
// ii) number
// iii) boolean
// iv) null
// v) undefined


// i) array
// ii) object
// iii) function


// string - stores text data

const value = "playwright is powerful automation tool"


// number - numeric values

const num = 10.12


// boolean - true or false

const condition = true


// null - intentionally give an empty value

let nullType = null

nullType = "middle name"


// undefined

let newValue;



// i) array - to store multiple values

            // 0            1   2      3    4           5
const arr = ["playwright", 5, true, null, undefined, ["microsoft", "USA"]]
                                                        // 0        1

console.log(arr[5][0]); // microsoft
console.log(arr[0]);  //playwright



// ii) object - collection of key value pairs


const obj = {
    name: "playwright",
    age: 6,
    popular: true,
    key: {
        company: "microsoft"
    }
}


// dot notation


console.log(obj.name);

console.log(obj.age);

console.log(obj.key.company);


// bracket notation

//val - name, age, popular

console.log(obj["name"]);

console.log(obj['age']);

console.log(obj['key']['company']);



// function - implement a logic inside the function and reuse across framework


function printValues() {
    console.log("playwright automation tool");
    
} 

printValues()

printValues()


