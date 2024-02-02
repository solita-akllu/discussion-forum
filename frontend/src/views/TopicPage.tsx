import { Link } from "react-router-dom";
import { PiChatsLight } from "react-icons/pi";

const mockData = [
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
          <Link
            to={`topic/${topic.id}`}
            className="mt-4 flex border-b-2 px-8 py-4 hover:bg-slate-200"
            key={topic.id}
          >
            <div className="flex self-center justify-self-center pr-5">
              <PiChatsLight size={40} className="text-cyan-500" />
            </div>
            <div className="flex w-full flex-col">
              <h2 className="text-3xl text-gray-900">{topic.title}</h2>
              <div className="flex justify-between pt-8 text-lg text-gray-500">
                <span>Messages: {topic.messageCount}</span>
                <span>Time of the last message: {topic.timeOfLastMessage}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
