import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUSerService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepositories = new UserRepositories();

    if (!email) {
      throw new Error("Email incorrect");
    }
    const userAlreadyExist = await userRepositories.findOne({
      email,
    });
    if (userRepositories) {
      throw new Error("User already exists");
    }

    const user = userRepositories.create({
      name,
      email,
      admin,
    });
    await userRepositories.save(user);

    return user;
  }
}
export { CreateUSerService };
