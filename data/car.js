class Car {
    #brand;
    #model;
    speed= 0;
    isTrunkOpen = false;
    acceleration = 0;

    constructor (carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
}

displayInfo() {

    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
    console.log(`${this.#brand} ${this.#model} speed:${this.speed}km/h TrunkStatus: ${trunkStatus}`);
}

 get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }


go () {
    if(!this.isTrunkOpen && this.speed<200){
    this.speed+= 5;
    }
}

brake(){
    this.speed-=5;
    if(this.speed<0){
        this.speed=0;
    };
}

openTrunk(){
    if(this.speed === 0){
        this.isTrunkOpen = true;
    }
}

closeTrunk(){
    if(this.isTrunkOpen === true){
        this.isTrunkOpen = false;
    }
}
}

class RaceCar extends Car{
    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
        this.speed += this.acceleration;

        if (this.speed>300){
            this.speed = 300;
        }
    }

    openTrunk() {
        console.log('Race cars do not have a trunk');
    }

    closeTrunk() {
        console.log('Race cars do not have a trunk');
    }

    displayInfo() {
  console.log(`${this.brand} ${this.model} speed:${this.speed}km/h TrunkStatus: no trunk`);
}
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const car2 = new Car ({
    brand: 'Tesla',
    model: 'Model 3'
});

const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20,
})

car1.go();
car1.go();
car1.go();
car1.brake();
car1.openTrunk();

car2.brake();
car2.brake();
car2.openTrunk();
car2.closeTrunk();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.closeTrunk();
raceCar.brake();

car1.displayInfo();
car2.displayInfo();
raceCar.displayInfo();

