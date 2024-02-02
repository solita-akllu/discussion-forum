import { PiChatsLight } from "react-icons/pi";
import { Topic } from "../types/topic";

type Props = {
  topic: Topic;
};

export const TopicItem = ({ topic }: Props) => {
  return (
    <div className="mt-4 flex border-b-2 px-8 py-4 hover:bg-slate-200">
      <div className="flex self-center justify-self-center pr-5">
        <PiChatsLight size={40} className="text-cyan-500" />
      </div>
      <div className="flex w-full flex-col">
        <h2 className="text-3xl text-gray-900">{topic.title}</h2>
        <div className="flex justify-between pt-8 text-lg text-gray-500">
          <span>Messages: {topic.messageCount}</span>
          {topic.timeOfLastMessage && (
            <span>Time of the last message: {topic.timeOfLastMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
};
