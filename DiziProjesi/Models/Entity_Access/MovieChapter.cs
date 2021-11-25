using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class MovieChapter:Base
    {
        [DisplayName("Sezon")]
           public virtual MovieSeason Season { get; set; }
        [DisplayName("Bölüm Adı"),
            StringLength(100, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string ChapterName { get; set; }
        [DisplayName("Oynatıcı Link")]
        public string PlayerLink { get; set; }
        [DisplayName("Yorumlar")]
        public virtual List<Comment> Comments { get; set; }
    }
}