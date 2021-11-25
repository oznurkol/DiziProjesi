using DiziProjesi.Models.Core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace DiziProjesi.Models.Entity
{
    public class Repository<T> : RepoBase, IDataAccess<T> where T : class
    {
        private DbSet<T> _objectSet;

        public Repository()
        {
            _objectSet = context.Set<T>();
        }

        public List<T> List()
        {
            
            return _objectSet.ToList();
        }

        public IQueryable<T> ListQueryable()
        {
            return _objectSet.AsQueryable<T>();
        }

        public List<T> List(Expression<Func<T, bool>> where)
        {
            return _objectSet.Where(where).ToList();
        }

        public int Insert(T obj)
        {
            _objectSet.Add(obj);

            if (obj is Base)
            {
                Base o = obj as Base;
                DateTime now = DateTime.Now;

                o.Ins_Time = now;
                o.Up_Time = now;
            }

            return Save();
        }

        public int Update(T obj)
        {
            if (obj is Base)
            {
                Base o = obj as Base;
                o.Up_Time = DateTime.Now;
                if (o.Ins_Time == DateTime.MinValue)
                    o.Ins_Time = DateTime.Now;
            }

            return Save();
        }

        public int Delete(T obj)
        {
            _objectSet.Remove(obj);
            return Save();
        }

        public int Save()
        {
            return context.SaveChanges();
        }

        public T Find(Expression<Func<T, bool>> where)
        {
            return _objectSet.FirstOrDefault(where);
        }
    }
}