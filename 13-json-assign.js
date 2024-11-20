
const jsonString = `
{
  "name": "Aleix Melon",
  "id": "E00245",
  "role": ["Dev", "DBA"],
  "age": 23,
  "doj": "11-12-2019",
  "married": false,
  "address": {
    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
  },
  "referred-by": "E0012"
}`;


const employee = JSON.parse(jsonString);

console.log(employee.role[0]); 


console.log(employee.name.split(" ")[1]); 


console.log(employee.doj.split("-")[2]);
