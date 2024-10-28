import { useCallback } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useAPI = () => {
  const fetchData = async (res: Response) => {
    let content = "";

    try {
      content = await res.text();
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      return JSON.parse(content);
    } catch (error) {
      console.error(error);
    }
  };

  const httpGet = useCallback(async (path: string) => {
    const url = path.startsWith("/") ? path : `/${path}`;
    const completeURL = `${baseURL}${url}`;

    const res = await fetch(completeURL);

    return fetchData(res);
  }, []);

  const httpPost = useCallback(async (path: string, body: unknown) => {
    const url = path.startsWith("/") ? path : `/${path}`;
    const completeURL = `${baseURL}${url}`;

    const res = await fetch(completeURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return fetchData(res);
  }, []);

  return {
    httpGet,
    httpPost,
  };
};
