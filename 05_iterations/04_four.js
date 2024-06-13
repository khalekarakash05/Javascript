const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "rubby",
    swift: "swift by apple"
}


//for in loop

for (const key in myObject) {
    console.log(`${key} :-> ${myObject[key]}`)
}

//run the for in loop on array
let programming = ["js", "cpp", "rb", "swift", "java"];

for (const key in programming) {
    console.log(programming[key])
}

//map ke uper iteration nahi kiya ja sakta to for in loop nahi chalega

