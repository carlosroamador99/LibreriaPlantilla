export class UserDto{
    name: string;
    email: string;
    password: string;
    phone: string;
    notes: string;

    constructor(n: string, e: string, pass: string, phone: string, notes: string){
        this.name = n;
        this.email = e;
        this.password = pass;
        this.phone = phone;
        this.notes = notes;
    }
}