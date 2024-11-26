export type FormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};

export type userForm = {
  text: string;
  textarea: string;
};

export type CreatePostResponse = {
  success: boolean;
  message: string;
};
