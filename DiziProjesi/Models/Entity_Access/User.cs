using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class User:Base
    {
        [DisplayName("Kullanıcı Adı"),
           Required(ErrorMessage = "{0} alanı gereklidir."),
           StringLength(50, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string UserName { get; set; }
        [DisplayName("Şifre"),
           Required(ErrorMessage = "{0} alanı gereklidir."),
           StringLength(50, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string Password { get; set; }
        [DisplayName("E-Mail"),
           Required(ErrorMessage = "{0} alanı gereklidir."),
           StringLength(50, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string EMail { get; set; }
        public bool isAdmin { get; set; }
        [DisplayName("Favori Diziler")]
        public virtual List<Movie> FavoriteList { get; set; }
        [DisplayName("Yorumlar")]
        public virtual List<Comment> Comments { get; set; }



    }
}