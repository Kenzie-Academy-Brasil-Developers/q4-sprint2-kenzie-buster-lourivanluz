import { IUser, IUserRepo } from "./interface";
import { User } from "../../entities/User";
import { getRepository, Repository } from "typeorm";

class UserRepo implements IUserRepo {
  private ormRepo: Repository<User>;
  constructor() {
    this.ormRepo = getRepository(User);
  }
  save = async (user: IUser) => {
    const newUser = await this.ormRepo.save(user);
    return this.serializer(newUser);
  };
  reatriverUser = async () => {
    const userList: Array<IUser> = await this.ormRepo.find();
    return userList.map((item) => this.serializer(item));
  };
  getUserById = async (id: string) => {
    const [user]: Array<IUser> = await this.ormRepo.find({ id: id });
    return this.serializer(user);
  };
  serializer = (user: IUser) => {
    const { password, ...formatedUser } = user;
    return formatedUser;
  };
}

export { UserRepo };
