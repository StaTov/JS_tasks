function counter() {
    let count = 0;
    function increment(){
        count++
        console.log(count)
    }

    const message = `I have ${count.value}`;

    function hello(){
        console.log(message)
    }
    return [increment, hello]
}

const [count, hi] = counter()
count()
count()
count()
hi()
// ===============================================

console.log(true || false)  //
console.log(true && false)  //
console.log(1 && 0 || 2)    //

// ===============================================
