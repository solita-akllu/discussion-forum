namespace DiscussionForum.Models
{
  public class Message
  {
    public int Id { get; set; }
    public required string Content { get; set; }
    public DateTime Timestamp { get; set; }

    public int TopicId { get; set; }
    public required Topic Topic { get; set; }
  }
}