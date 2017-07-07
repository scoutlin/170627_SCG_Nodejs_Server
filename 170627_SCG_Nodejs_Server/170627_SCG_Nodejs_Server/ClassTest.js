'use strict'

console.log('fdfsdfdsfdsfwf')



class ClassTest {
    constructor(yeah) {
        this.yeah = 0;
        this.classTest = null
    }

    static get Instance(){
        if (ClassTest.classTest == null) {
            ClassTest.classTest = new ClassTest()
        }
        
        return ClassTest.classTest
    }

    OhYeah(yeah) {
        console.log(yeah);
    }

    static StaticOhYeah(yeah) {
        console.log(yeah);
    }
}

ClassTest.staticVariable001 = 'S1';

module.exports = ClassTest

console.log('fdfsdfdsfdsfwf')