
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class RepoBase
    {
        protected static DatabaseContext context;
        protected static object _lockSync = new object();

        protected RepoBase()
        {
            CreateContext();
        }

        private static void CreateContext()
        {
            if (context == null)
            {
                lock (_lockSync)
                {
                    if (context == null)
                    {
                        context = new DatabaseContext();
                    }
                }

            }
        }
    }
}