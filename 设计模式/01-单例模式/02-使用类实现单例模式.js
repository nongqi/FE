/*
 * @Author: nongqi
 */
class SingleDog {
    show() {
        console.log('SingDog');
    }

    static getInstance() {
        // 判断是否已经new过1个实例
        if(!SingleDog.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            SingleDog.instance = new SingleDog();
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return  SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
console.log(s1 === s2);
