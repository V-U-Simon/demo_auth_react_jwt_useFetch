import { client } from "./client";
import { LoginParams, Session } from "./types";

async function login({ email, password }: LoginParams): Promise<Session> {
  const response = await client.post("auth/login/", {
    email: email,
    password: password,
  });
  return response?.data;
}

async function registration({ username, email, password }): Promise<Session> {
  const response = await client.post("auth/register/", {
    email: email,
    password: password,
    username: username,
  });
  return response?.data;
}

export const apiAuth = {
  login,
  registration,
};
