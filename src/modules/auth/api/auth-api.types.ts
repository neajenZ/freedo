// типы должны соответвовать полям, которые прописаны в свагере
// вставить потом в редакс хуки вместо <void, void>
// export type RegisterResponse = {};
export type RegisterRequest = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

// export type LoginResponse = {};
// export type LoginRequest = {};
