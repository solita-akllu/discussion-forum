import { Link } from "react-router-dom";
import { Topic } from "../types/topic";
import { TopicItem } from "../components/TopicItem";
import { useState, useEffect } from "react";
import { getTopics } from "../services/Topic";

export const TopicPage = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topics = await getTopics();
        setTopics(topics);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopics();
  }, []);

  console.log(topics);

  return (
    <div className="flex h-screen w-screen justify-center bg-cyan-500">
      <div className="flex h-screen w-3/4 flex-col rounded-sm bg-slate-100 p-10 ">
        {topics.map((topic) => (
          <Link to={`topic/${topic.id}`} key={topic.id}>
            <TopicItem topic={topic} />
          </Link>
        ))}
      </div>
    </div>
  );
};
