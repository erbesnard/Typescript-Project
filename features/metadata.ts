import "reflect-metadata";

const plane = {
  color: "red"
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);

Reflect.defineMetadata("note", "hi there 2", plane, "color");

console.log("normal object =", plane);

const note = Reflect.getMetadata("note", plane, "color");
const height = Reflect.getMetadata("height", plane);

console.log("Metadata is = ", note);
console.log("Metadata is = ", height);

console.log("CLASSES NOW");

//
// USE in classes
//

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hi there!")
  fly(): void {
    console.log("vrouuuuuuuuuummmmm");
  }
}

function markFunction(secretInfo: string) {
  return (target: Plane, key: string) => {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log("metadata in classes mark function", secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secondSecret = Reflect.getMetadata("secret", target.prototype, key);
    console.log("Metadata from loop over class", secondSecret);
  }
}
