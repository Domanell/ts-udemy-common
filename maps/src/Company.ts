import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color: 'red';

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<h1>Company Name: ${this.companyName}</h1>
        <p>Catchphrase: ${this.catchPhrase}</p>`
    }
}