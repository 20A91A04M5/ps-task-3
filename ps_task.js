
//---Prime or not-----////

function isprime(n){
    if(n<=1){
        return true
    }
    i=2
    while (i<num){
        if(num%i==0){
            return false
        }
        i++
    }
    return true

}
let num=prompt("enter number:-(for prime number ex:- 17....)")
if(isprime(num)){
    console.log("prime number")
}
else{
    console.log("Not a prime")
}

//---- sum of even nubers in range ------------/////

let st=prompt("enter starting number:-(ex:- 1)")
let end=prompt("enter ending number (ex:- 50)")
i=1
s=0
while(i<=end){
    if(i%2==0){
        s=s+i
    }
    i++
}
console.log(s)

///////////------- count no.of digits in a input------------///////

let nu=prompt("enter number (ex:- 12345...)")
let l=nu.length
i=0
c=0
while(i<l){
    c++
    i++
}
console.log(c)

///------ min number in adigits------////

let n=prompt("enter number (ex:- 276489...)")
let le=n.length
let min=n[0]
i=0
while(i<le){
    if(n[i]<=min){
        min=n[i]
    }
    i++
}
console.log(min)

///--------- sum of all odd digits in a number --------/////

let numb=prompt("enter number:- (ex:- 13579....)")
let len=num.length
i=0
s=0
while(i<len){
    if(numb[i]%2!=0){
        s=s+ +numb[i]
    }
    i++
}
console.log(s)

//----- perfect number --------///////

let number=+prompt("enter number:- (ex:- 28 or 6....)")
i=0
s=0
while(i<number){
    if(number%i==0){
        s=s+i
    }
    i++
}
console.log(s)
if(s==number){
    console.log("perfect number")
}else{
    console.log("Not perfect number")
}


