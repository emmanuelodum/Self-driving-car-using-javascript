class Sensor{
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLenght = 100;
        this.raySpread = Math.PI / 4;

        this.rays = [];
    }
}