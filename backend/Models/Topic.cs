namespace DiscussionForum.Models
{
  public class Topic
  {
    public int Id { get; set; }
    public required string Title { get; set; }

    public int AccountId { get; set; }
    public required Account Account { get; set; }

    public ICollection<Message> Messages { get; set; } = new List<Message>();
  }
}