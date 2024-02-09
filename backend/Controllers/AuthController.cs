using Microsoft.AspNetCore.Mvc;
using DiscussionForum.Models;
using DiscussionForum.Data;

namespace backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private readonly DiscussionForumContext _context;

    public AuthController(DiscussionForumContext context)
    {
      _context = context;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
      Console.WriteLine($"Login username: {login.Username}");
      var user = GetUser(login.Username);

      if (user != null)
      {
        return Ok(user);
      }

      return Unauthorized("Wrong username or password");
    }

    private Account? GetUser(string username)
    {
      var account = _context.Accounts.FirstOrDefault(a => a.Name == username);
      Console.WriteLine($"User login: ID: {account?.Id.ToString() ?? "not found"}, name: {account?.Name}");
      return account;
    }

  }
}
