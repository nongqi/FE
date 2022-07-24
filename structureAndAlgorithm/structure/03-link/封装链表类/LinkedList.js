/*
 * @Author: nongqi
 * @Date: 2022-07-24 15:57:51
 * @LastEditTime: 2022-07-24 19:16:17
 * @LastEditors: nongqi
 * @Description: 实现一个链表类
 */

const { defaultEquals } = require('./utils')
const { Node } = require('./linked-list-models')



class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    /**
     * 向链表尾部添加一个新元素
     */
    push(element) {
        const node = new Node(element);

        let current;
        if (!this.head) {
            this.head = node
        } else {
            current = this.head;
            while (current.next) { // 获取最后一项
                current = current.next
            }

            // 将其next 复制为赋值为新元素，建立连接
            current.next = node

        }

        this.count++;
    }
    /**
     * 从链表的特定位置移除一个元素
     * @param {number} index 
     */
    removeAt(index) {
        // 分为删除第一项和其他项
        if (index >= 0 || index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = this.head.next;
            } else {
                let prev;
                for (let i = 0; i < index; i++) {
                    prev = current;
                    current = current.next;
                }

                // 将 prev 与 current 的下一项连接起来：跳过 current ，从而移除它
                prev.next = current.next;

            }

            this.count--
            return current.element;
        }

        return;
    }
    /**
     * 返回链表中特定位置的元素
     * @param {number} index 元素位置
     */
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;

            for (let i = 0; i < index && node; i++) {
                node = node.next;
            }

            return node
        }
    }

    /**
     * 在指定位置插入元素
     * @param {*} element 
     * @param {*} index 
     */
    insert(element, index) {
        if (index >= 0 || index <= this.count) {
            let current;
            const node = new Node(element)

            if(index === 0) {
                node.next = current;
                this.head = node;
            } else {
                let prev = this.getElementAt(index - 1)
                current = prev.next;
                node.next = current;
                prev.next = node;
            }
            this.count++;
            return true
        }
        return false
    }
}

const list = new LinkedList()
list.push(10)
list.push(15)
// list.removeAt(0)
// console.log(list.getElementAt(0));
list.insert(12, 2)

console.log(list.head);