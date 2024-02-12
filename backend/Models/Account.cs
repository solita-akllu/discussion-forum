namespace DiscussionForum.Models
{
  public class Account
  {
    public int Id { get; set; }
    public required string Name { get; set; }

    public ICollection<Topic> Topics = new List<Topic>();
  }
}