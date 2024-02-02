import { Link } from "react-router-dom";
import { Topic } from "../types/topic";
import { TopicItem } from "../components/TopicItem";

const mockData: Topic[] = [
  { id: 1, title: "Topic 1", messageCount: 3, timeOfLastMessage: "2024-01-19" },
  { id: 2, title: "Topic 2", messageCount: 5, timeOfLastMessage: "2024-01-18" },
  { id: 3, title: "Topic 3", messageCount: 5, timeOfLastMessage: "2024-01-15" },
  { id: 4, title: "Topic 4", messageCount: 6, timeOfLastMessage: "2024-01-11" },
  { id: 5, title: "Topic 5", messageCount: 1, timeOfLastMessage: "2024-01-10" },
];

export const TopicPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center bg-cyan-500">
      <div className="flex h-screen w-3/4 flex-col rounded-sm bg-slate-100 p-10 ">
        {mockData.map((topic) => (
          <Link to={`topic/${topic.id}`} key={topic.id}>
            <TopicItem topic={topic} />
          </Link>
        ))}
      </div>
    </div>
  );
};
