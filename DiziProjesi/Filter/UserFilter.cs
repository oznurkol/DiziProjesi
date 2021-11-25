using DiziProjesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiziProjesi.Filter
{
    public class UserFilter: FilterAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationContext filterContext)
        {
            if (UserSession.User == null)
            {
                filterContext.Result = new RedirectResult("/User/Login");
            }
        }
    }
}