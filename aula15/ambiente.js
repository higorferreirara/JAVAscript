var num = [5,8,2,9,3]
num[6] = 2
num.push(1)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)

for( let pos = 0; pos <= num.length; pos++){
    console.log(num[pos])
}
for(let pos in num){
    console.log(num[pos])
}

var a = num.indexOf(8)
console.log(a)