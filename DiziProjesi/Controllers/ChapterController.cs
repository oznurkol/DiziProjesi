using DiziProjesi.Filter;
using DiziProjesi.Models.Business;
using DiziProjesi.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DiziProjesi.Controllers
{
    [AdminFilter]
    public class ChapterController : Controller
    {
        M_ChapterManager chapterManager = new M_ChapterManager();
        M_SeasonManager seasonManager = new M_SeasonManager();
        public ActionResult Index()
        {
            return View(chapterManager.List());
        }

        public ActionResult Create(int? id)
        {
            if (id == null)
                return RedirectToAction("Index");
            MovieSeason m = seasonManager.Find(x => x.ID == id.Value);

            if (m == null)
            {
                return HttpNotFound();
            }
            MovieChapter c = new MovieChapter();
            c.Season = m;
            return View(c);
        }

        [HttpPost]
        public ActionResult Create(MovieChapter ms)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("Movie.Movie_Name");
            ModelState.Remove("Movie.Image");
            if (ModelState.IsValid)
            {
                MovieSeason m = seasonManager.Find(x => x.ID == ms.Season.ID);
                if (m == null)
                {
                    return HttpNotFound();
                }
                ms.Season = m;
                chapterManager.Insert(ms);

                return RedirectToAction("Index");
            }
            return View(ms);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            MovieChapter ms = chapterManager.Find(x => x.ID == id.Value);

            if (ms == null)
            {
                return HttpNotFound();
            }

            return View(ms);
        }

        [HttpPost]
        public ActionResult Edit(MovieChapter movie)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("Movie.Movie_Name");
            ModelState.Remove("Movie.Image");
            if (ModelState.IsValid)
            {
                MovieChapter ms = chapterManager.Find(x => x.ID == movie.ID);
                if (ms == null)
                    return HttpNotFound();
                ms.ChapterName = movie.ChapterName;
                ms.PlayerLink = movie.PlayerLink;
                chapterManager.Update(ms);
                return RedirectToAction("Index");
            }
            return View(movie);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MovieChapter ms = chapterManager.Find(x => x.ID == id.Value);
            if (ms == null)
            {
                return HttpNotFound();
            }

            return View(ms);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            MovieChapter ms = chapterManager.Find(x => x.ID == id);
            chapterManager.Delete(ms);
            return RedirectToAction("Index");
        }
    }
}