export type UserType = {
    id: string;
    username: string;
    name: string;
    password: string;
    profilePicture: string;
    gender: Genders;
    createdAt: Date;
    updatedAt: Date;
}

enum Genders {
    MALE = "MALE",
    FEMALE = "FEMALE"
}