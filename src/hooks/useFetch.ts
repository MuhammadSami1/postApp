"use client";
import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
