namespace DiscussionForum.Models
{
  public class Topic
  {
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;

    public int AccountId { get; set; }
    public Account Account { get; set; } = null!;
  }
}