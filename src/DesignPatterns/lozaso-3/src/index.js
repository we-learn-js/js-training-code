class PersonCarTransportation {
  goToAddress(address) {
    console.log(`Go by car, managing traffic, stop lights, etc`)
  }
}

class PersonPublicTransportation {
  goToAddress(address) {
    console.log(`Go by public Transportation, going to bus stop, paying, etc`)
  }
}

class PersonWalkTransportation {
  goToAddress(address) {
    console.log(`Go by foot, managing sidewalks, stop lights, etc`)
  }
}

class Person {
  constructor(transportMode) {
    switch (transportMode) {
      case 'car':
        this.transportStrategy = new PersonCarTransportation()
        break
      case 'publicTransports':
        this.transportStrategy = new PersonPublicTransportation()
        break
      default:
        this.transportStrategy = new PersonWalkTransportation()
    }
  }

  goToAddress(address) {
    this.transportStrategy.goToAddress(address)
  }
}

const destination = 'Plaça Catalunya, Barcelona'

new Person('car').goToAddress(destination)
new Person('publicTransports').goToAddress(destination)
new Person().goToAddress(destination)

/*
// OUTPUT
"Go by car, managing traffic, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
"Go by foot, managing sidewalks, stop lights, etc"
*/
