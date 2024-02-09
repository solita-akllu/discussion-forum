import { useEffect, useState } from "react";
import { Topic } from "../types/topic";
import { getTopics } from "../services/Topic";

export const useTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const topics = await getTopics();
        setTopics(topics);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("Unexpected error while fetching topics");
        setTopics([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { topics, loading };
};
