

export class Calculatrice{

    static getAngle(xy1, xy2) {
        return Math.atan2(xy1.y - xy2.y, xy1.x - xy2.x ) * ( 180 / Math.PI );
    }
}