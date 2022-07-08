/*
 * @Author: nongqi
 */

// 用于判断是否为 proxy 对象
const MY_IMMER = Symbol('my-immer1')

const isProxy = value => !!value && !!value[MY_IMMER]