export interface IRoles {
  reader: boolean;
  admin?: boolean;
}

export class IUser {
  email: string;
  uid: string;
  roles: IRoles;

  constructor(authData) {
    this.email = authData.email
    this.uid = authData.uid
    this.roles = { reader: true }
  }
}
