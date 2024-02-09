import axios from "axios";
import { Account } from "../types/account";

type LoginRequestBody = {
  username: string;
};

const BASE_URL = "https://localhost:7219/api/auth";

export const login = async (data: LoginRequestBody) => {
  const response = await axios.post<Account>(`${BASE_URL}/login`, data);
  return response.data;
};
