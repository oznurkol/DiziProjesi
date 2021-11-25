using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class Category:Base
    {
        [DisplayName("Kategori Adı"),
            Required(ErrorMessage = "{0} alanı gereklidir."),
            StringLength(50, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string Cat_Name { get; set; }
        public virtual List<Movie> Movies { get; set; }

        /*public Category()
        {
            Movies = new HashSet<Movie>();
        }*/
    }
}