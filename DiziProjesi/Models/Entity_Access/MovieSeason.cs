using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class MovieSeason:Base
    {
        [DisplayName("Film")]
        public virtual Movie Movie { get; set; }
        [DisplayName("Sezon Adı"),
            StringLength(100, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string SeasonName { get; set; }
        [DisplayName("Bölüm")]
        public virtual List<MovieChapter> Chapters { get; set; }
    }
}