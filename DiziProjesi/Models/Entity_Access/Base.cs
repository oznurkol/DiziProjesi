using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public abstract class Base
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [DisplayName("Oluşturma Tarihi"), ScaffoldColumn(false), Required, Column(TypeName = "datetime2")]
        public DateTime Ins_Time { get; set; }
        [DisplayName("Güncellenme Tarihi"), ScaffoldColumn(false), Required, Column(TypeName = "datetime2")]
        public DateTime Up_Time { get; set; }
        [ScaffoldColumn(false)] //düzenlenmesi istenmeyen alanlar
        public bool isDelete { get; set; }
    }
}