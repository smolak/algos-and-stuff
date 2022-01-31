const person = {
  firstName: "Jacek",
  lastName: "Smolak",
};

const greetingsHandler = {
  get(target, prop) {
    if (prop === "firstName") {
      return `My name is ${target[prop]}.`;
    }

    return `${target[prop]} is my last name.`;
  },

  set() {
    throw new Error("No can do.");
  },
};

const greeter = new Proxy(person, greetingsHandler);

console.log(greeter.firstName);
console.log(greeter.lastName);

try {
  greeter.foo = "bar";
} catch (e) {
  console.log(e.message);
}
