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
