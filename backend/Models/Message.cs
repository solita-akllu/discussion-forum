namespace DiscussionForum.Models
{
  public class Message
  {
    public int Id { get; set; }
    public string Content { get; set; } = string.Empty;

    public int TopicId { get; set; }
    public Topic Topic { get; set; } = null!;
  }
}