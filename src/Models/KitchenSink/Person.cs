using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ext.Net.Examples.Mobile.MVC.Models.KitchenSink
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
    }

    public class Account
    {
        public DateTime Created { get; set; }
        public String AccountKey { get; set; }
    }

    public class PersonAccount : Person
    {
        public List<Account> Accounts { get; set; }
    }
}