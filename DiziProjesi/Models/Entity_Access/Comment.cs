using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class Comment:Base
    {
        [DisplayName("Kullanıcı")]
        public virtual User User { get; set; }
        [DisplayName("Film")]
        public virtual MovieChapter MovieChapter { get; set; }
        [DisplayName("Yorum"),
            Required(ErrorMessage = "{0} alanı gereklidir."),
            StringLength(500, ErrorMessage = "{0} alanı max. {1} karakter içermeli.")]
        public string Post_Com { get; set; }
        [DisplayName("Spoiler")]
        public bool isSpoiler { get; set; }
        [DisplayName("Onay")]
        public bool isOK { get; set; }
    }
}