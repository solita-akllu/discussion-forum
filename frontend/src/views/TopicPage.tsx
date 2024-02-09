import { Link } from "react-router-dom";
import { TopicItem } from "../components/TopicItem";
import { useTopics } from "../hooks/useTopics";

export const TopicPage = () => {
  const { loading, topics } = useTopics();

  console.log(topics);

  return (
    <div className="flex h-screen w-screen justify-center bg-cyan-500">
      <div className="flex h-screen w-3/4 flex-col rounded-sm bg-slate-100 p-10 ">
        {loading ? (
          <span className="text-center text-3xl text-black">Loading...</span>
        ) : (
          <>
            {topics.map((topic) => (
              <Link to={`topic/${topic.id}`} key={topic.id}>
                <TopicItem topic={topic} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
