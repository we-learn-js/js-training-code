console.clear();

class Person {
  constructor(transportMode) {
    this.transportMode = transportMode;
  }

  goToAddress(address) {
    switch (this.transportMode) {
      case "car":
        console.log(`Go by car, managing traffic, stop lights, etc`);
        break;
      case "publicTransports":
        console.log(
          `Go by public Transportation, going to bus stop, paying, etc`
        );
        break;
      default:
        console.log(`Go by foot, managing sidewalks, stop lights, etc`);
    }
  }
}

const destination = "Plaça Catalunya, Barcelona";

new Person("car").goToAddress(destination);
new Person("publicTransports").goToAddress(destination);
new Person().goToAddress(destination);

/* 
// OUTPUT
"Go by car, managing traffic, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
"Go by foot, managing sidewalks, stop lights, etc"
*/
