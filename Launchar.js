class Launchar{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.01,
            length: 10
        }
        this.bodyA = body;
        this.pointB = anchor;
        this.launchar = Constraint.create(options);
        World.add(world, this.launchar);
    }
    attach(body) {
        this.launchar.bodyA = body;
    }
    fly(){
        this.launchar.bodyA = null
    }
    display(){
        if(this.launchar.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}