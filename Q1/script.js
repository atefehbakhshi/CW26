"use strict";
class University {
    constructor(name,unit,capacity){
        this.className=name;
        this.classUnit=unit;
        this.classCapacity=capacity
    }
}
const softEngineeringClass= new University('softEngineering',3,50);
console.log(JSON.stringify(softEngineeringClass));
const networkClass = new University('network',3,30);
console.log(JSON.stringify(networkClass));

// part 2
softEngineeringClass.book=true;
console.log(JSON.stringify(softEngineeringClass));
networkClass.project=true;
console.log(JSON.stringify(networkClass));

