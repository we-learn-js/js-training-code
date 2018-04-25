

class Person {
  setCar(carInstance) {
    this.car = carInstance;
  }

  setPublicTransportCredit(publicTransportCredit) {
    this.publicTransportCredit = publicTransportCredit;
  }

  goToAddress(address) {
    if (this.car) {
      console.log(`Go by car, managing traffic, stop lights, etc`);
    } else if (this.publicTransportCredit > 0) {
      this.publicTransportCredit--;
      console.log(
        `Go by public Transportation, going to bus stop, paying, etc`
      );
    } else {
      console.log(`Go by foot, managing sidewalks, stop lights, etc`);
    }
  }
}

const destination = "Plaça Catalunya, Barcelona";
const person = new Person();

person.goToAddress(destination);

person.setPublicTransportCredit(8);
person.goToAddress(destination);

person.setCar({});
person.goToAddress(destination);

person.setCar(null);
person.goToAddress(destination);

/*
// OUTPUT
"Go by foot, managing sidewalks, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
"Go by car, managing traffic, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
*/
