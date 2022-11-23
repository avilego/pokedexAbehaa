export const user = {
  username: "javilego",
  password: "12345qaz",
};

export const userDetails: UserEntity = {
  username: "javilego",
  firstName: "Javier",
  lastName: "Leon",
  email: "javi.lego@icloud.com",
};

export interface UserEntity {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
