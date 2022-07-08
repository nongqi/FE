class Publisher {
  constructor() {
    this.observers = [];
  }

  // 新增订阅者
  add(observer) {
    this.observers.push(observer);
  }

  // 移除订阅者
  remove(observer) {
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  // 通知所有订阅者
  notify() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class Observer {
  constructor() {}

  update() {}
}

class PrdPublisher extends Publisher {
  constructor() {
    super();
    this.prdState = null;
    this.observers = [];
  }

  getState() {
    return this.prdState;
  }

  setState(state) {
    this.prdState = state;
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = {};
  }

  update(publisher) {
    this.prdState = publisher.getState();
    this.work()
  }

  // work方法，一个专门搬砖的方法
  work() {
    // 获取需求文档
    const prd = this.prdState
    // 开始基于需求文档提供的信息搬砖。。。
    console.log('996 begins...')
}
} 


// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver()
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver()
// 创建订阅者：测试同学小B
const B = new DeveloperObserver()
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher()
// 需求文档出现了
const prd = {
    // 具体的需求内容
    
}
// 韩梅梅开始拉群
hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd)