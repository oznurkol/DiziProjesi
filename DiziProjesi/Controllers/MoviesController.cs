using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DiziProjesi.Models.Entity;
using DiziProjesi.Models.Business;
using DiziProjesi.Filter;
using DiziProjesi.Models;

namespace DiziProjesi.Controllers
{
    public class MoviesController : Controller
    {
        private MovieManager movieManager = new MovieManager();
        private M_ChapterManager chapterManager = new M_ChapterManager();
        private CategoryManager categoryManager = new CategoryManager();

        public User UserSesion { get; private set; }

        // GET: Movies
        public ActionResult Index()
        {
            return RedirectToAction("Index", "Home");
        }

        public ActionResult Type(MovieType? id)
        {
            if (id == null)
                return RedirectToAction("Index", "Home");
            List<Movie> movies = movieManager.ListQueryable().Where(x => x.Type == (MovieType)id).ToList();
            return View(movies);
        }

        public ActionResult Movie(int? id)
        {
            if(id==null)
                return RedirectToAction("Index", "Home");
            Movie m = movieManager.Find(x => x.ID == id.Value);
            if (m == null)
                return RedirectToAction("Index", "Home");
            else
                return View(m);
        }

        public ActionResult Chapter(int? id)
        {
            if (id == null)
                return RedirectToAction("Index", "Home");
            MovieChapter c = chapterManager.Find(x => x.ID == id);
            if(c==null)
                return RedirectToAction("Index", "Home");
            return View(c);
        }

        [HttpPost][UserFilter]
        public ActionResult Chapter(MovieChapter cp, string comment, string spoiler)
        {
            MovieChapter c = chapterManager.Find(x => x.ID == cp.ID);
            if (c == null)
                return RedirectToAction("Index", "Home");

            Comment cm = new Comment();
            cm.User = UserSession.User;
            cm.isSpoiler = spoiler == null ? false : true;
            cm.Post_Com = comment;
            c.Comments.Add(cm);

            chapterManager.Update(c);
            return View(c);
        }

        public ActionResult Category(int? id)
        {
            if (id == null)
                return RedirectToAction("Index", "Home");
            Category c = categoryManager.Find(x => x.ID == id);
            if (c == null)
                return RedirectToAction("Index", "Home");
            return View(c.Movies);
        }

        public ActionResult Search(string search)
        {
            if (String.IsNullOrEmpty(search))
                return RedirectToAction("Index", "Home");
            List<Movie> list = movieManager.List().Where(x => x.Movie_Name.Any(u => x.Movie_Name.Contains(search))).ToList();
            //List<Movie> list2 = movieManager.ListQueryable().Where(x => x.Movie_Name.Any(u => x.Movie_Name.Contains(search))).ToList();
            if (list == null)
                return RedirectToAction("Index", "Home");
            return View(list);
        }
    }
}