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
    public class CategoryController : Controller
    {
        private CategoryManager categoryManager = new CategoryManager();
        // GET: Category
        public ActionResult Index()
        {
            return View(categoryManager.List());
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Category category)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            if (ModelState.IsValid)
            {
                categoryManager.Insert(category);
                return RedirectToAction("Index");
            }

            return View(category);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Category category = categoryManager.Find(x => x.ID == id.Value);

            if (category == null)
            {
                return HttpNotFound();
            }

            return View(category);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            Category category = categoryManager.Find(x => x.ID == id);
            categoryManager.Delete(category);
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Category category = categoryManager.Find(x => x.ID == id.Value);

            if (category == null)
            {
                return HttpNotFound();
            }
            return View(category);
        }

        [HttpPost]
        public ActionResult Edit(Category category)
        {
            ModelState.Remove("CreatedOn");
            ModelState.Remove("ModifiedOn");
            ModelState.Remove("ModifiedUsername");

            if (ModelState.IsValid)
            {
                Category cat = categoryManager.Find(x => x.ID == category.ID);
                cat.Cat_Name = category.Cat_Name;
                categoryManager.Update(cat);
                return RedirectToAction("Index");
            }
            return View(category);
        }
    }
}