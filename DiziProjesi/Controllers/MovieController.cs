using DiziProjesi.Filter;
using DiziProjesi.Models;
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
    public class MovieController : Controller
    {
        private MovieManager movieManager = new MovieManager();
        private CategoryManager categoryManager = new CategoryManager();
        // GET: Movie
        public ActionResult Index()
        {
            return View(movieManager.List());
        }

        public ActionResult Create()
        {
            MovieModel mm = new MovieModel();
            return View(mm);
        }

        [HttpPost]
        public ActionResult Create(MovieModel movie)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("SelectedValues");
            if (ModelState.IsValid)
            {
                movie.Moviess.Categories = new List<Category>();
                if (movie.SelectedValues != null && movie.SelectedValues.Count() > 0)
                    foreach (var i in movie.SelectedValues)
                    {
                        int ii = Convert.ToInt32(i);
                        Category c = categoryManager.Find(x => x.ID==ii);
                        if (c!=null)
                        {
                            movie.Moviess.Categories.Add(c);
                        }
                    }
                movieManager.Insert(movie.Moviess);
                return RedirectToAction("Index");
            }
            return View(movie);
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Movie movie = movieManager.Find(x => x.ID == id.Value);
            
            if (movie == null)
            {
                return HttpNotFound();
            }
            MovieModel mm = new MovieModel();
            mm.Moviess = movie;
            mm.Cate.ForEach(x => {
                int xy = Convert.ToInt32(x.Value);
                Category cc = mm.Moviess.Categories.FirstOrDefault(y => y.ID == xy);
                if (cc != null)
                    x.Selected = true;
            });
            return View(mm);
        }

        [HttpPost]
        public ActionResult Edit(MovieModel movie)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("SelectedValues");
            if (ModelState.IsValid)
            {
                
                Movie m = movieManager.Find(x => x.ID == movie.Moviess.ID);
                if(m==null)
                    return HttpNotFound();
                m.Desc = movie.Moviess.Desc;
                m.Cons_Year = movie.Moviess.Cons_Year;
                m.Image = movie.Moviess.Image;
                m.Movie_Name = movie.Moviess.Movie_Name;
                m.Type = movie.Moviess.Type;
                m.Categories = new List<Category>();
                if(movie.SelectedValues!=null && movie.SelectedValues.Count()>0)
                    foreach (var i in movie.SelectedValues)
                    {
                        int ii = Convert.ToInt32(i);
                        Category c = categoryManager.Find(x => x.ID == ii);
                        if (c != null)
                        {
                            m.Categories.Add(c);
                        }
                    }
                movieManager.Update(m);
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

            Movie mov = movieManager.Find(x => x.ID == id.Value);

            if (mov == null)
            {
                return HttpNotFound();
            }

            return View(mov);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Movie mov = movieManager.Find(x => x.ID == id);
            movieManager.Delete(mov);
            return RedirectToAction("Index");
        }

    }
}