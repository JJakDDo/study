const fn = require("./fn");

// test("1은 1이다.", () => {
//   expect(1).toBe(1);
// });

// test("2 더하기 3은 5다.", () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test("3 더하기 3은 5가 아니다.", () => {
//   expect(fn.add(3, 3)).not.toBe(5);
// });

// test("이름과 나이를 전달받아서 객체를 반환해라", () => {
//   expect(fn.makeUser("Mike", 30)).toBe({
//     name: "Mike",
//     age: 30,
//   });
// });
// test("이름과 나이를 전달받아서 객체를 반환해라", () => {
//   expect(fn.makeUser("Mike", 30)).toEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

// test("에러 발생", () => {
//   expect(() => fn.throwErr().toThrow("xx"));
// });

// 비동기 콜백
// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   fn.getName(callback);
// });

// 비동기 프로미스 return 필요
// test("3초 후에 받아온 나이는 30", () => {
//   // return fn.getAge().then((age) => {
//   //   expect(age).toBe(30);
//   // });

//   return expect(fn.getAge()).resolves.toBe(30);
// });

//비동기 async await
// test("3초 후에 받아온 나이는 30", async () => {
//   // const age = await fn.getAge();
//   // expect(age).toBe(30);
//   await expect(fn.getAge()).resolves.toBe(30);
// });

// 테스트 전후 작업
// let num = 0;
// beforeEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이다.", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });
// test("0 더하기 2은 2이다.", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });
// let user;
// beforeAll(async () => {
//   user = await fn.connectUserDb();
// });

// afterAll(() => {
//   return fn.disconnectDb();
// });

// test("이름은 Mike", () => {
//   expect(user.name).toBe("Mike");
// });

// test("나이는 30", () => {
//   expect(user.age).toBe(30);
// });

// test("성별은 남성", () => {
//   expect(user.gender).toBe("male");
// });

// describe("Car 관련 작업", () => {
//   let car;
//   beforeAll(async () => {
//     car = await fn.connectCarDb();
//   });

//   afterAll(() => {
//     return fn.disconnectCarDb();
//   });

//   test("이름은 z4", () => {
//     expect(car.name).toBe("z4");
//   });

//   test("브랜드는 bmw", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("색상은 red", () => {
//     expect(car.color).toBe("red");
//   });
// });

// Mock Functions
// const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1);
//   });
// }

// forEachAdd1([10, 20, 30]);

// test("함수 호출은 3번 됩니다", () => {
//   expect(mockFn.mock.calls.length).toBe(3);
// });

// test("전달된 값은 11, 21, 31 입니다.", () => {
//   expect(mockFn.mock.calls[0][0]).toBe(11);
//   expect(mockFn.mock.calls[1][0]).toBe(21);
//   expect(mockFn.mock.calls[2][0]).toBe(31);
// });

// const mockFn = jest.fn((num) => num + 1);

// mockFn(10);

// test("함수 호출은 3번 됩니다.", () => {
//   console.log(mockFn.mock.results);
// });

const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
});
