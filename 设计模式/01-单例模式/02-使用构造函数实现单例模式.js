/*
 * @Author: nongqi
 */

function SingleDog() {
    
}

SingleDog.getInstance = (function() {
    let instance = null;
    return function () {
        if(!instance) {
            instance = new SingleDog();
        }
        return instance
    }
})()

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
console.log(s1 === s2);

