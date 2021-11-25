using DiziProjesi.Models.Business;
using DiziProjesi.Models.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiziProjesi.Models
{
    public class MovieModel
    {
        public Movie Moviess{ get; set; }
        public List<SelectListItem> Cate { get; set; }
        [DisplayName("Kategori")]
        public IEnumerable<string> SelectedValues { get; set; }

        public MovieModel()
        {
            CategoryManager categoryManager = new CategoryManager();
            List<Category> c = categoryManager.List();
            Cate = new List<SelectListItem>();
            foreach (var i in c)
            {
                SelectListItem ss = new SelectListItem();
                ss.Text = i.Cat_Name;
                ss.Value = i.ID.ToString();
                Cate.Add(ss);
            }

        }
    }
}