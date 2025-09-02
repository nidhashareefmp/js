//you can store function inisde object called methods

//".this " -keyword =its refers the object itself.(used to access properties and )

const car = {
    brand: "toyota",
    start: function(){
        // console.log('car started');
                console.log(`${this.brand} is started`);

        
    }
}

car.start();