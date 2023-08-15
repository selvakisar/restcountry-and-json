// Comapre two Json same properties  without order
// Code
let details1 = { age:21,name: "selva",email:"selva@gmail.com",mobile:"9767785765"}
let details2 = { mobile:"9767785765",age: 21,name: "selva",email:"selva@gmail.com"}
let flag = true
for (let e in details1)
{
    if (details1[e]!==details2[e])
    {
        flag=false;
        break
        
    }
}
flag?console.log("Equall"):console.log("Not Equall")
// Out put  
//           Equall
