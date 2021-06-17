import { Identifiable, User, UserCreationError } from "@types";

interface Presenter {
  presentUserCreationSuccess(user: Identifiable<User>): void;
  presentUserCreationFailure(error: UserCreationError, user: User): void;
}

export { Presenter };
