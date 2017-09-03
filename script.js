window.onload = function() {


    // const pi = 3.14;
    // console.log(pi);

    // function calcArea(r) {
    //     const pi = 10;
    //     console.log("area:" + pi * r * r);
    // }
    // calcArea(5);

    //Objects
    var name = "Crystal";
    var belt = "Black";

    var ninja = {
        name,
        belt,
        chop(x) {
            console.log(`you chopped the enemy ${x} times`);
        }
    };

    console.log(ninja.chop(3));

    /*New Strings Methods
        -repeat
        -startsWith
        -endsWith
        -includes
    */

    //Arrow functions

    var ninja = (name) => console.log(`${name}`);


}