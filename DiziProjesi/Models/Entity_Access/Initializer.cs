using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class Initializer : CreateDatabaseIfNotExists<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {

            Category c = new Category();
            c.Cat_Name = "Aksiyon";
            c.Ins_Time = c.Up_Time = DateTime.Now;
            Category c2 = new Category();
            c2.Ins_Time = c.Up_Time = DateTime.Now;
            c2.Cat_Name = "Bilim Kurgu";
            Movie m = new Movie();
            m.Cons_Year = 2012;
            m.Desc = "50 yaşında lisede kimya öğretmenliği yapan Walter White evini geçindirebilmek için bir oto yıkamacıda ek iş yapmaktadır. Mütevazi bir yaşam süren White'ın ucuz bir evi, ucuz bir arabası sıradan bir hayatı vardır. ";
            m.Movie_Name = "The Big Bang Theory";
            m.Image = "http://www.dizist1.com/upload/dizikuturesim/syjue276vbjqk5wbf49xuwcv.jpg";
            m.IMDB_Point = "9.1";
            m.Type = MovieType.Yabanci;
            Movie m2 = new Movie();
            m2.Cons_Year = 2012;
            m2.Desc = "50 yaşında lisede kimya öğretmenliği yapan Walter White evini geçindirebilmek için bir oto yıkamacıda ek iş yapmaktadır. Mütevazi bir yaşam süren White'ın ucuz bir evi, ucuz bir arabası sıradan bir hayatı vardır. ";
            m2.Movie_Name = "The Big Bang Theory 2";
            m2.Image = "http://www.dizist1.com/upload/dizikuturesim/syjue276vbjqk5wbf49xuwcv.jpg";
            m2.IMDB_Point = "9.3";
            m2.Type = MovieType.Yabanci;
            context.Categories.Add(c);
            context.Categories.Add(c2);
            context.Movies.Add(m);
            context.Movies.Add(m2);
            MovieSeason ms = new MovieSeason() { Movie = m, SeasonName = "1. Sezon"};
            MovieSeason ms2 = new MovieSeason() { SeasonName="2. Sezon",Movie=m };
            context.MovieSeasons.Add(ms);
            context.MovieSeasons.Add(ms2);
            for(int x=0; x<10; x++)
            {
                MovieChapter mc = new MovieChapter() { Season = ms,  ChapterName=(x+1)+". Bölüm", PlayerLink= "https://www.youtube.com/watch?v=cllp9Ofrrso",Ins_Time=DateTime.Now };
                context.MovieChapters.Add(mc);
            }
            for (int x = 0; x < 10; x++)
            {
                MovieChapter mc = new MovieChapter() { Season = ms2, ChapterName = (x + 1) + ". Bölüm", PlayerLink= "https://www.youtube.com/watch?v=JMZp5SzkGQA", Ins_Time = DateTime.Now };
                context.MovieChapters.Add(mc);
            }
            User u = new User();
            u.UserName = "kolo";
            u.Password = "123";
            u.isAdmin = true;
            u.EMail = "asd";
            User u2 = new User();
            u2.UserName = "kolo";
            u2.Password = "123";
            u2.isAdmin = false;
            u2.EMail = "asd";
            context.Users.Add(u);
            context.Users.Add(u2);
            context.SaveChanges();
        }
    }
}