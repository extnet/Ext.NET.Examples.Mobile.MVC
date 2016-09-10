using Ext.Net.Examples.Mobile.MVC.Models.KitchenSink;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ext.Net.Examples.Mobile.MVC.Class.KitchenSink
{
public class GetPeople
    {
        private static string[] firstNames = { "Fred", "Julie", "Bill", "Ted", "Jack", "John", "Mark", "Mike", "Chris", "Bob", "Travis", "Kelly", "Sara" };
        private static string[] lastNames = { "Jones", "Smith", "Lee", "Wilson", "Black", "Williams", "Lewis", "Johnson", "Foot", "Little", "Vee", "Train", "Hot", "Mutt" };

        private static Person getRandomCandidate()
        {
            var rnd = new Random();

            return new Person()
            {
                FirstName = firstNames[rnd.Next(firstNames.Count())],
                LastName = lastNames[rnd.Next(lastNames.Count())]
            };
        }

        private static Person makeUniquePerson(List<Person> crowd, int minAge, int maxAge)
        {
            if (minAge < 0 || maxAge < 0 || minAge > maxAge)
            {
                throw new ArgumentOutOfRangeException("Specified minimum and maximum age is inconsistent: min[" +
                    minAge + "] max[" + maxAge + "]");
            }

            // sanity check
            if (crowd.Count() >= (firstNames.Count() * lastNames.Count()))
            {
                throw new OverflowException("Amount of requested adults and children exceeds max combination of unique names.");
            }

            Person candidate = null;
            var duplicated = true;
            while (duplicated)
            {
                candidate = getRandomCandidate();

                duplicated = false;
                foreach (var individual in crowd)
                {
                    if (individual.FirstName == candidate.FirstName &&
                        individual.LastName == candidate.LastName)
                    {
                        duplicated = true;
                        break;
                    }
                }
            }

            candidate.Age = new Random().Next(minAge, maxAge + 1);

            return candidate;
        }

        private static string randString(ref Random rng, int length)
        {
            if (length <= 0 || rng == null)
            {
                throw new Exception("Error generating random string: either no RNG has been passed or length is inconsistent.");
            }

            var retVal = "";
            for (var i = 0; i < length; i++)
            {
                retVal += (char)(97 + rng.Next(26));
            }

            return retVal;
        }

        public static List<Person> FixedData
        {
            get
            {
                return new List<Person>() {
                    new Person() { FirstName = "Gareth", LastName = "Keenan", Age = 25 },
                    new Person() { FirstName = "Tim", LastName = "Canterbury", Age = 20 },
                    new Person() { FirstName = "Dawn", LastName = "Tinsley", Age = 43 },
                    new Person() { FirstName = "Neil", LastName = "Godwin", Age = 28 },
                    new Person() { FirstName = "David", LastName = "Brent", Age = 36 }
                };
            }
        }

        public static List<Person> RandomData(int adults = 15, int children = 10)
        {
            var crowd = new List<Person>();

            if (adults < 0 || children < 0 || (adults == 0 && children == 0))
            {
                throw new IndexOutOfRangeException("Number of adults & children must be > 0 and there should be at least one adult or child to be generated.");
            }

            if ((adults + children) > firstNames.Count() * lastNames.Count())
            {
                throw new OverflowException("Amount of requested adults and children exceeds max combination of unique names.");
            }

            for (var i = 0; i < adults; i++)
            {
                crowd.Add(makeUniquePerson(crowd, 18, 100));
            }

            for (var i = 0; i < children; i++)
            {
                crowd.Add(makeUniquePerson(crowd, 0, 17));
            }

            return crowd;
        }

        public static List<PersonAccount> WithAccount(int amount = 10, int minAccountsPerPerson = 1, int maxAccountsPerPerson = 5)
        {
            if (amount <= 0)
            {
                throw new ArgumentOutOfRangeException("Must request at least one person with account.");
            }

            if (maxAccountsPerPerson < minAccountsPerPerson || minAccountsPerPerson < 0)
            {
                throw new ArgumentOutOfRangeException("min amount of accounts per person must be greater than zero and max amount must be greater than or equal to min amount.");
            }

            var crowd = RandomData(amount, 0);
            var accounted = new List<PersonAccount>();
            var rng = new Random();
            var refDate = new DateTime(2011, 1, 1);
            var dateRange = (DateTime.Today - refDate).Days;

            int i, accCount;
            PersonAccount account = null;

            foreach (var person in crowd)
            {
                accCount = rng.Next(maxAccountsPerPerson - minAccountsPerPerson + 1) + minAccountsPerPerson;
                account = new PersonAccount()
                {
                    FirstName = person.FirstName,
                    LastName = person.LastName,
                    Accounts = new List<Account>()
                };

                for (i = 0; i <= accCount; i++)
                {
                    account.Accounts.Add(new Account()
                    {
                        Created = refDate.AddDays(rng.Next(dateRange)),
                        AccountKey = randString(ref rng, 4)
                    });
                }

                accounted.Add(account);
            }

            return accounted;
        }
    }
}