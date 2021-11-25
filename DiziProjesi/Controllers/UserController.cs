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
    public class UserController : Controller
    {
        private UserManager userManager = new UserManager();
        private MovieManager movieManager = new MovieManager();
        [UserFilter]
        public ActionResult Index()
        {
            User u = userManager.Find(x => x.ID == UserSession.User.ID);
            if (u.FavoriteList == null)
                u.FavoriteList = new List<Movie>();
            if(u!=null)
                return View(u.FavoriteList.ToList());
            return RedirectToAction("Login");
        }
        [AdminFilter]
        public ActionResult List()
        {
            return View(userManager.List());
        }
        [AdminFilter]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            User user = userManager.Find(x => x.ID == id.Value);

            if (user == null)
            {
                return HttpNotFound();
            }

            return View(user);
        }
        [AdminFilter]
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            User category = userManager.Find(x => x.ID == id);
            userManager.Delete(category);
            return RedirectToAction("List");
        }

        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(User user)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            if (ModelState.IsValid)
            {
                User u = userManager.Find(x => x.UserName == user.UserName);
                if (u != null)
                {
                    ModelState.AddModelError("error", "Böyle bir kullanıcı var");
                }
                else
                {
                    userManager.Insert(user);
                    UserSession.Set<User>("login", u);
                    return RedirectToAction("Index", "Home");
                }
            }
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(User user)
        {
            ModelState.Remove("Ins_Time");
            ModelState.Remove("Up_Time");
            ModelState.Remove("EMail");
            if (ModelState.IsValid)
            {
                User u = userManager.Find(x => x.UserName == user.UserName && x.Password==user.Password);
                if (u == null)
                {
                    ModelState.AddModelError("error", "Kullanıcı bulunamadı");
                }
                else
                {
                    UserSession.Set<User>("login", u);
                    return RedirectToAction("Index", "Home");
                }
            }
            return View(user);
        }

        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Index","Home");
        }

        [UserFilter]
        public ActionResult FavDelete(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            User u = userManager.Find(x => x.ID == UserSession.User.ID);
            Movie m = u.FavoriteList.FirstOrDefault(x => x.ID == id.Value);
            if (m == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            return View(m);
        }

        [UserFilter]
        [HttpPost, ActionName("FavDelete")]
        public ActionResult FavDeleteConf(int id)
        {
            User u = userManager.Find(x => x.ID == UserSession.User.ID);
            Movie m = u.FavoriteList.FirstOrDefault(x => x.ID == id);
            if (m==null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            u.FavoriteList.Remove(m);
            userManager.Update(u);
            return RedirectToAction("Index", "User");
        }

        [UserFilter]
        public ActionResult Password()
        {
            return View();
        }

        [UserFilter][HttpPost]
        public ActionResult Password(string newpw, string old)
        {
            if (ModelState.IsValid) {
                User u = userManager.Find(x => x.UserName == UserSession.User.UserName && x.Password == old);
                if (u == null)
                    ModelState.AddModelError("error", "Eski şifre hatalı");
                else
                {
                    u.Password = newpw;
                    userManager.Update(u);
                    RedirectToAction("Index");
                }
            }
            return View();
        }
        [UserFilter]
        public ActionResult FavCreate(int? id)
        {
            if (id == null)
                return RedirectToAction("Index", "Home");
            Movie m = movieManager.Find(x => x.ID == id);
            if (m == null)
                return RedirectToAction("Index", "Home");
            else
            {

                User u = UserSession.User;
                u.FavoriteList.Add(m);
                userManager.Update(u);
                return RedirectToAction("Index", "User");
            }
        }


        [AdminFilter]
        public ActionResult Details(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            else
            {
                User u = userManager.Find(x => x.ID == id.Value);
                if (u == null)
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                else
                    return View(u);
            }
        }
    }
}