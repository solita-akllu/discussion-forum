import axios from "axios";
import { Topic } from "../types/topic";

const BASE_URL = "https://localhost:7219/api/topic";

export const getTopics = async () => {
  const response = await axios.get<Topic[]>(BASE_URL);
  return response.data;
};
