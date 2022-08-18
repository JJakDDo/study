const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({
    name,
    age,
  }),
  throwErr: () => new Error("xx"),
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 3000);
    });
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = fn;
