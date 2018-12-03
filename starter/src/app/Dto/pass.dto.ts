export class PassDto {
    password: string;
    newpassword: string;
  
    constructor(oldp: string, np: string) {
        this.password = oldp;
        this.newpassword = np;
  
    }
  }