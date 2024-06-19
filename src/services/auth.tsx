import axios from "axios";

axios.create({
  baseURL: "https://mocki.io/v1/d391c619-7161-45a9-a3a0-8124ef3ac599",
});

export type IUser = {
  email: string;
  password: string;
  userId: string;
  userName: string;
  message?: any;
};

export function validateData(
  user: IUser,
  payload: {
    userName: string;
    password: string;
  }
) {
  if (user.password === payload.password) {
    return user;
  } else {
    return {
      error: null,
      message: "Invalid Username or password",
    };
  }
}

export const userLogin = async (payload: {
  userName: string;
  password: string;
}) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/d391c619-7161-45a9-a3a0-8124ef3ac599"
    );

    const user = response.data.filter(
      (user: IUser) => user.userName === payload.userName
    );

    if (user.length > 0) {
      return validateData(user[0], payload);
    } else {
      return {
        error: null,
        message: "No User Found!",
      };
    }
  } catch (err: any) {
    return {
      error: err,
      message: "Something went wrong!",
    };
  }
};
