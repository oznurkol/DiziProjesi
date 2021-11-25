using DiziProjesi.Models.Business;
using DiziProjesi.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiziProjesi.Controllers
{
    public class HomeController : Controller
    {
        private MovieManager movieManager = new MovieManager();
        private M_SeasonManager seasonManager = new M_SeasonManager();
        private M_ChapterManager chapterManager = new M_ChapterManager();
        public ActionResult Index()
        {

            /*DatabaseContext db = new DatabaseContext();
            List<Movie> list = db.Movies.ToList();*/
            return View(chapterManager.ListQueryable().OrderBy(x => x.Ins_Time).ToList());
        }
    }
}