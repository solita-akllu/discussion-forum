using Microsoft.EntityFrameworkCore;
using DiscussionForum.Models;

namespace DiscussionForum.Data
{
    public class DiscussionForumContext : DbContext
    {
        public DiscussionForumContext(DbContextOptions<DiscussionForumContext> options)
            : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Message> Messages { get; set; }
    }
}