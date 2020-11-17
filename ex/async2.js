function aFunc() {
    setTimeout(function () {
        console.log('a');
    },1700)
}

function bFunc() {
    setTimeout(function () {
        console.log('b');
    },1000)
}

function cFunc() {
    setTimeout(function () {
        console.log('c');
    },500)
}

function callbackFunc() {
    setTimeout(function () {
        console.log('a');
        setTimeout(function () {
            console.log('b');
            setTimeout(function () {
                console.log('c');
            },500)       
        },1000)    
    },1700)
    //callback hell 
    // promise / async, await / lib async
}

// aFunc();
// bFunc();
// cFunc();
callbackFunc();