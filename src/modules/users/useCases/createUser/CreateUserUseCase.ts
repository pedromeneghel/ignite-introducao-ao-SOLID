import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const userFound = this.usersRepository.findByEmail(email);

    if (userFound) {
      throw new Error("Email already exists");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
