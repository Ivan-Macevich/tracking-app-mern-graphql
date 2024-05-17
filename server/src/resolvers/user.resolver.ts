import { PassportContext } from "graphql-passport";
import User from "../models/user.model.js";
import { ErrorMessages } from "../types/errors.enum.js";
import { UserType } from "../types/user.type.js";
const userResolver = {
  Query: {
    user: async (_: any, { userId }: { userId: string }) => {
      try {
        const user = await User.findById(userId);
        return user;
      } catch (e) {
        throw new Error(ErrorMessages.USER_NOT_FOUND);
      }
    },
    authUser: async (_: any, __: any, context: any) => {
        try {
            const user = await context.getUser();
            return user;
        } catch (err) {
            console.error("Error in authUser: ", err);
            throw new Error("Internal server error");
        }
    }
  },
};
