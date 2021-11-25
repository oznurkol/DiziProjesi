using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class DatabaseContext: DbContext
    {
        
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieSeason> MovieSeasons { get; set; }
        public DbSet<MovieChapter> MovieChapters { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<User> Users { get; set; }
        //public DbSet<MovieCategory> MovieCategory { get; set; }

        public DatabaseContext()
        {
            Database.SetInitializer(new Initializer());
        }
        /*protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().
              HasMany(c => c.Movies).
              WithMany(p => p.Categories).
              Map(
               m =>
               {
                   m.MapLeftKey("CatID");
                   m.MapRightKey("MovieID");
                   m.ToTable("Cat_Mov");
               });
        }*/
    }
}