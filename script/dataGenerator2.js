
var departmentData = [], 
    departments = [
    {depName: "Electronics"},
    {depName: "Office"},
    {depName: "Movies"},
    {depName: "Music"},
    {depName: "Books"},
    {depName: "Home"},
    {depName: "Furniture"},
    {depName: "Christmas"},
    {depName: "Clothing"},
    {depName: "Shoes"},
    {depName: "Jewelry"},
    {depName: "Baby/Toddler"},
    {depName: "Toys"},
    {depName: "Video Games"},
    {depName: "Food"},
    {depName: "Household"},
    {depName: "Pharmacy"},
    {depName: "H & B"},
    {depName: "Sports"},
    {depName: "Fitness"},
    {depName: "Auto/Tires"},
    {depName: "Photo"},
    {depName: "Gifts"},
    {depName: "Sewing"}
]


for(var a =0, b=departments.length; a<b; a++){
    departmentData[a] = {
        markUp: Math.round(Math.random()*999999),
        markDwn: Math.round(Math.random()*999999),
        cstMup: Math.round(Math.random()*999999),
        cstMdn: Math.round(Math.random()*999999),
        nameID: departments[a].depName,
    }
}