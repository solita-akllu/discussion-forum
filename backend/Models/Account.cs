namespace DiscussionForum.Models
{
  public class Account
  {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    public ICollection<Topic> Topics = new List<Topic>();
  }
}