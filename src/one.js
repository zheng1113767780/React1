import Two from './Two'
const x = 100;
console.log("x:", x)
const test = (num) => {
    console.log("text函数哈哈哈" + num);
}
test("y:", Two.y);

function testable(target) {
    target.isTestable = true;
}
@testable
class MyTestableClass { }
console.log("装饰器语法", MyTestableClass.isTestable)

