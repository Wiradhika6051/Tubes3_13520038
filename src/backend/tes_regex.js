//const pattern = /\s*(\d{0,2}([\s+]|(-))\d{0,2}([\s+]|-)\d{0,4})?\s*.*/
const pattern = /^\s*((\d{0,2}\-\d{0,2}\-\d{0,4}\s*)?)([a-zA-Z].*|$)/
//const obj = pattern.test("15  02 -  2002     HIV")
//const obj_real = pattern.exec("15            02   2002          HIV  3")
let query = "15%20%2001-%2020012"
query = " 15-01-2022    "
query = query.replace(/%20/gi," ")
console.log("a : "+query)
const obj = pattern.test(query)
const obj_real = pattern.exec(query)
const test_date = /^(\s*(\d{0,2}\-\d{0,2}\-\d{0,4})|^$)/.exec("covid 19-20-2002")
if(test_date==null)
 console.log("aaa")
else{
console.log(test_date[0])
}
console.log(obj)
obj ? console.log(obj_real[0]) : console.log("noice1")
const test_name = /^(\s*(\d{0,2}\-\d{0,2}\-\d{0,4})|^$)/.exec("covid 19-20-2002")


const pat= /[AGCT]+$/
if(pat.test("aaAGcT s")){
    console.log("hah")
}
else{
    console.log("hehoh")
}
/* 
yg valid:
tanggal nama
tanggal
nama
*/