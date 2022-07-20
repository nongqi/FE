/*
 * @Author: nongqi
 */
// compile 编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function。

// parse：
// 会用正则等方式将 template 模板中进行字符串解析，得到指令、class、style等数据，形成 AST

// optimize：
// optimize 主要作用就跟它的名字一样，用作「优化」。
// 为后面 patch  做准备（静态节点可以跳过对比）
// 经过 optimize 这层的处理，每个节点会加上 static 属性，用来标记是否是静态的

// generate
// generate 会将 AST 转化成 render funtion 字符串，最终得到 render 的字符串以及 staticRenderFns 字符串