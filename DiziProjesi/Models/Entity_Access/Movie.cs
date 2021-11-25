using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class Movie:Base
    {
        [DisplayName("Film Adı"),
            Required(ErrorMessage = "{0} alanı gereklidir."),
            StringLength(100, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string Movie_Name { get; set; }
        [DisplayName("IMDB Puanı"),
            MaxLength(3, ErrorMessage = "{0} alanı max. {1} karakter içermeli."), MinLength(3, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string IMDB_Point { get; set; }
        [DisplayName("Yapım Yılı"),
            Required(ErrorMessage = "{0} alanı gereklidir.")]
        public int Cons_Year { get; set; }
        [DisplayName("Açıklama")]
        public string Desc { get; set; }
        [DisplayName("Resim Link"),
            Required(ErrorMessage = "{0} alanı gereklidir.")]
        public string Image { get; set; }
        [DisplayName("Film Türü"),
            Required(ErrorMessage = "{0} alanı gereklidir.")]
        public MovieType Type { get; set; }
        [DisplayName("Sezonlar")]
        public virtual List<MovieSeason> Chapters { get; set; }

        [DisplayName("Kategoriler")]
        public virtual List<Category> Categories { get; set; }
        [DisplayName("Favoriler")]
        public virtual List<User> Favori { get; set; }

        /*public Movie()
        {
            Categories = new HashSet<Category>();
        }*/
    }

    public enum MovieType
    {
        Yabanci=1,
        Yerli=2,
        Anime=3,
        Asya=4
    }

}