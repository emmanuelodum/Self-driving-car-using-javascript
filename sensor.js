class Sensor{
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.rayLenght = 100;
        this.raySpread = Math.PI / 4;

        this.rays = [];
    }

    update() {
        this.rays = [];
        for (let i = 0; i < this.raysCount; i++){
            const rayAngle = lerp(
                this.raySpread / 2,
                -this.raySpread / 2,
                i / (this.rayCount - 1)
            );
        }
    }
}