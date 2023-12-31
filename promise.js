## Promise

console.log(1);

const promise = new Promise((res, rej) => {
    console.log(2);
    res(3);
})

setTimeout(() => {
    console.log(4);
}, 2000);

setTimeout(() => {
    console.log(5);
}, 1000);

console.log(6);

promise.then((res) => console.log(res))
// ===================================================================

const promise1 = new Promise((res, rej) => {
    res(1);
})

promise1
    .then((p => p + 1))
    .catch((p => p + 1))
    .then((p => p + 1))
    .finally((p => p + 1))
    .then((p) => console.log(p)) 
// ===================================================================

const promise2 = new Promise((res, rej) => {
    rej(2);
})

promise2
    .then((p) => p + 1)
    .catch((p) => p + 1)
    .then((p) => p + 1)
    .then((p) => console.log(p))
// ===================================================================

const foo = async () => {
    console.log('async function foo'); //
    return 100;
}

const bar = async () => {
    console.log('console inside bar'); //
    const r = await foo();
    console.log(r); //
    foo().then(res => console.log(res));
    console.log('1', await 'console.log immediately after await'); //
};

bar();
// ===================================================================
