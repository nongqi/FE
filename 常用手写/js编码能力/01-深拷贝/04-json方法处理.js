
/**
 * （2-1）如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象
 * （2-2）如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象
 * （2-3）如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失
 * （2-4）如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null；
 * （2-5）无法处理function，无法处理循环引用对象
 * @param {*} obj 
 * @returns 
 */
function clone(obj) {
  var copyObjStr = JSON.stringify(obj),
    //json字符串转json对象
    result = JSON.parse(copyObjStr);
  return result;
}
