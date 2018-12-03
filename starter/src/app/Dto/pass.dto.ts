export class PassDto {
    oldpassword: string;
    newpass: string;
  
    constructor(oldp: string, np: string) {
        this.oldpassword = oldp;
        this.newpass = np;
  
    }
  }