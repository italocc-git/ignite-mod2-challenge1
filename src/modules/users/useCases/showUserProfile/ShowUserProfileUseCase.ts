import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userFoundedById = this.usersRepository.findById(user_id);

    if (!userFoundedById)
      throw new Error("User doesn´t exists try another one");

    return userFoundedById;
  }
}

export { ShowUserProfileUseCase };
