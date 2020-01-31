class A {
  constructor() {
    this.nameA = 'a';
  }

  validateA() {
    console.log('A');
  }
}

class B extends A {
  constructor() {
    super();
    this.nameB = 'b';
  }

  validateB() {
    console.log("B");
  }
}

class C extends B {
  constructor() {
    super();
    this.nameC = 'c';
  }

  validateC() {
    console.log('C');
  }
}

function findMembers(obj, propName, funcName) {
  // const ret = [];
  // for (const k in obj) {
  //   const funcs = Reflect.ownKeys(obj);
  //   console.log(funcs);
  // funcs.forEach(str => {
  //   if (str.indexOf(funcName) !== -1) {
  //     ret.push(str);
  //   }
  // });
  // if (k.indexOf(propName) !== -1) {
  //   ret.push(k);
  // }
  // }
  // if (obj.__proto__ !== null) {
  //   findMembers(obj.__proto__, propName, funcName);
  // }
  // return ret;
  const _find = function (obj) {
    if (obj.__proto__ === null) {
      console.log('111');
      return [];
    }
    const propertyNames = Object.getOwnPropertyNames(obj);
    const targetNames = propertyNames.filter(name => {
      return name.indexOf(propName) !== -1 || name.indexOf(funcName) !== -1;
    });
    return [...targetNames, ..._find(obj.__proto__)];
  }
  return _find(obj);
}

var c = new C();
const memebers = findMembers(c, 'name', 'validate');
console.log(memebers);
