function Student(fullName, city){

    this.fullName = fullName;

    this.city = city

}

 

const stdElon = new Student("Elon Musk", "LA");

console.log(stdElon);

 

const stdBill = new Student("Bill gates", "LA");

console.log(stdBill);

 

const stdSundar = new Student("Sundar", "LA");

console.log(stdSundar);

 

console.log("====== Prototype ========");

 

Student.prototype.country = "USA";

console.log(` ${stdElon.fullName}, ${stdElon.country}  `);

console.log(` ${stdSundar.fullName}, ${stdSundar.country}  `);

 

const array = ["Elon", "Sundar", "Stew"];

array.pop