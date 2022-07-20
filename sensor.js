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

            const start = { x: this.car.x, y: this.car.y };
            const end = {
                x: this.car.x -
                    Math.sin(rayAngle) * this.rayLenght,
                y: this.car.y -
                    Math.cos(rayAngle) * this.rayLenght
            };
            this.rays.push([start, end]);
        }
    }
}