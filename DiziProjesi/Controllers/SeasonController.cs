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
    public class SeasonController : Controller
    {
        private MovieManager movieManager = new MovieManager();
        private M_SeasonManager seasonManager = new M_SeasonManager();
        // GET: Season
        public ActionResult Index()
        {
            return View(seasonManager.List());
        }

        public ActionResult Create(int? id)
        {
            if (id == null)
                return RedirectToAction("Index");
            Movie m = movieManager.Find(x => x.ID == id.Value);
            
            if (m == null)
            {
                return HttpNotFound();
            }
            MovieSeason ms = new MovieSeason();
            ms.Movie = m;
            return View(ms);
        }

        [HttpPost]
        public ActionResult Create(MovieSeason ms)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("Movie.Movie_Name");
            ModelState.Remove("Movie.Image");
            if (ModelState.IsValid)
            {
                Movie m = movieManager.Find(x => x.ID == ms.Movie.ID);
                if (m == null)
                {
                    return HttpNotFound();
                }
                ms.Movie = m;
                seasonManager.Insert(ms);
                
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

            MovieSeason ms = seasonManager.Find(x => x.ID == id.Value);

            if (ms == null)
            {
                return HttpNotFound();
            }

            return View(ms);
        }

        [HttpPost]
        public ActionResult Edit(MovieSeason movie)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("Movie.Movie_Name");
            ModelState.Remove("Movie.Image");
            if (ModelState.IsValid)
            {
                MovieSeason ms = seasonManager.Find(x => x.ID == movie.ID);
                if(ms==null)
                    return HttpNotFound();
                ms.SeasonName = movie.SeasonName;
                seasonManager.Update(ms);
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
            MovieSeason ms = seasonManager.Find(x => x.ID == id.Value);
            if (ms == null)
            {
                return HttpNotFound();
            }

            return View(ms);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            MovieSeason ms = seasonManager.Find(x => x.ID == id);
            seasonManager.Delete(ms);
            return RedirectToAction("Index");
        }

    }
}