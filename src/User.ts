import faker from "faker";
import { Mappable } from "./CustomMap";

// OPTIONAL: implement Mappable interface to point error in the class and have more precise error message
export class User implements Mappable {
    // initialize value on declaration line when the value is HARD-CODED
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = "red";

    // initialization inside of constructor
    constructor() {
        this.name = faker.name.firstName();

        // to initialize object it's a little bit weird
        // this.location.lat = ... --> ERROR: cannot read property lat of null
        // Right way:
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `User Name ${this.name}`;
    }

}