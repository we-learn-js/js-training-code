console.clear() 

class PersonState {
  constructor(person) {
    this.person = person
  }
  goToAddress(address) {
    console.log(`Go by foot, managing sidewalks, stop lights, etc`)
  } 
}
class PersonWithCarState extends PersonState {
  goToAddress(address) {
    console.log(`Go by car, managing traffic, stop lights, etc`)
  }
}
class PersonWithTransportCreditState extends PersonState {
  goToAddress(address) {
    this.person.publicTransportCredit--
    console.log(`Go by public Transportation, going to bus stop, paying, etc`)
  } 
}



class Person {
  constructor () {
    this.updateState()
  }
  
  updateState(){
    if(this.car){
      this.state = new PersonWithCarState(this)
    } else if (this.publicTransportCredit) {
      this.state = new PersonWithTransportCreditState(this)
    } else {
      this.state = new PersonState(this)
    }
  }
  
  setCar(carInstance) {
    this.car = carInstance
    this.updateState()
  }
  
  setPublicTransportCredit(publicTransportCredit) {
    this.publicTransportCredit = publicTransportCredit
    this.updateState()
  }
  
  goToAddress(address) {
    this.state.goToAddress(address)
  }
}

const destination = 'Plaça Catalunya, Barcelona'
const person = new Person()

person.goToAddress(destination)

person.setPublicTransportCredit(8)
person.goToAddress(destination)

person.setCar({})
person.goToAddress(destination)

person.setCar(null)
person.goToAddress(destination)

/* 
// OUTPUT
"Go by foot, managing sidewalks, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
"Go by car, managing traffic, stop lights, etc"
"Go by public Transportation, going to bus stop, paying, etc"
*/

