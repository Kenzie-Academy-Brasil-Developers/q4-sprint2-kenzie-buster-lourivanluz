interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

interface IUserRepo {
  save: (user: IUser) => any;
  reatriverUser: () => any;
  getUserById: (id: string) => any;
}

export { IUser, IUserRepo };
