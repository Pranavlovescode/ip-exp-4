class Father {
    constructor() {
        this.fatherName = "Father";
    }
    tallHeight =()=>{
        console.log("My height is 6 feet");
    }
}

class Son extends Father{
    super(){
        this.sonName = "Son";
    }
    smart =()=>{
        console.log("I am smart");
    }
}

let son = new Son();
son.tallHeight();
son.smart();