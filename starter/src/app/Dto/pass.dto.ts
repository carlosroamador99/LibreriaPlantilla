export class PassDto {
    password: string;
    newpass: string;
  
    constructor(p: string, np: string) {
        this.password = p;
        this.newpass = np;
  
    }
  }