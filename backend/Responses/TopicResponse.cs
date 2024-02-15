namespace backend.Responses
{
  public class TopicDTO
  {
    public int Id { get; set; }
    public required string Title { get; set; }
    public int AccountId { get; set; }
    public int MessageCount { get; set; }
    public string? TimeOfLastMessage { get; set; }
  }
}

