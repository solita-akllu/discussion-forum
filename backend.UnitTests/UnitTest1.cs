using backend.Responses;

namespace backend.UnitTests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        var expected = "Test";

        var result = new TopicDTO
        {
            Title = "Test"
        };

        Assert.Equal(result.Title, expected);
    }
}