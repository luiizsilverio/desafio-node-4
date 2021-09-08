import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userJaExiste = this.usersRepository.findByEmail(email)

    if (userJaExiste) {
      throw new Error("Usuário já existe ")
    }

    const user = this.usersRepository.create({ name, email })

    return user
  }
}

export { CreateUserUseCase };
