using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class MovieCategory:Base
    {
        public virtual Movie Movie { get; set; }
        public virtual Category Category { get; set; }
    }
}