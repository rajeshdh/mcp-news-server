import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const hnClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export const fetchTopStoryIds = async (): Promise<number[]> => {
  const { data } = await hnClient.get<number[]>("/topstories.json");
  return data.slice(0, 20); // limit for demo
};

export const fetchStoryById = async (id: number) => {
  const { data } = await hnClient.get(`/item/${id}.json`);
  return data;
};
