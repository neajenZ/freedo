export type RegisterRequest = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

// export type LoginResponse = {};
export type LoginRequest = {
  email: string;
  password: string;
};
