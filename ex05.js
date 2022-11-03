let num= document.getElementById("tnum")
let sl= document.getElementById("slnum")
let dvres= document.getElementById("res")
let arr= []

function sameNumber(a, n){
   if (a.indexOf(Number(n)) != -1){
      return true
   } else {
      return false
   }
}
   
function bigsmallNumber(n){
   if (n <= 100 && n >= 1){
     return true
   } else {
      return false
   }
}
      
function add(){
   if (num.value.length == 0){
      alert("erro! digite um número")
   } else {
      if (!sameNumber(arr, num.value) && bigsmallNumber(Number(num.value))){
         arr.push(Number(num.value))
         let op= document.createElement("option")
         op.innerText= `número ${num.value} cadastrado`
         sl.appendChild(op)
         dvres.innerHTML= ""
      } else {
        alert("erro! número inválido ou já encontrado na lista")
      }
   }
}

function final(){
 
   dvres.innerHTML= ""
   let total= arr.length
   let maior= arr[0]
   let menor= arr[0]
   let soma= 0
   let media= 0
   for (i in arr){
      soma += arr[i]
      if (arr[i] > maior){
         maior = arr[i]
      }
      if (arr[i] < menor){
         menor= arr[i]
      }
   }
   media= soma / total
   dvres.innerHTML+= `<p>Ao todo temos ${total} números cadastrados</p>`
   dvres.innerHTML+= `<p>O maior número digitado foi ${maior}</p>`
   dvres.innerHTML+= `<p>O menor número digitado foi ${menor}</p>`
   dvres.innerHTML+= `<p>A soma de todos os valores é igual a ${soma}</p>`
   dvres.innerHTML+= `<p>A média dos valores é ${media}</p>`
}