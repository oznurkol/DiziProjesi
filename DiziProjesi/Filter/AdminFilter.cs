using DiziProjesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiziProjesi.Filter
{
    public class AdminFilter : FilterAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationContext filterContext)
        {
            if (UserSession.User == null || !UserSession.User.isAdmin)
            {
                filterContext.Result = new RedirectResult("/Home/Index");
            }
        }

    }
}