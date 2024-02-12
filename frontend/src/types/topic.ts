export type Topic = {
  id: number;
  accountId: number;
  title: string;
  messageCount: number;
  timeOfLastMessage?: string;
};
