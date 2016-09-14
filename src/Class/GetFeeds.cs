using Ext.Net.Examples.Mobile.MVC.Models.KitchenSink;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Ext.Net.Examples.Mobile.MVC.Class
{
    public static class GetFeeds
    {
        private static List<Speaker> speaker_cache;

        /// <summary>
        /// Returns only the Speaker object list of speakers from feeds.json. Caches the list for future queries.
        /// </summary>
        /// <returns>A list of unique speakers with proposed presentations in the feeds.json file.</returns>
        public static List<Speaker> getSpeakerList()
        {
            if (speaker_cache == null)
            {
                speaker_cache = new List<Speaker>();

                var people = new List<Speaker>();

                using (StreamReader r = new StreamReader(AppDomain.CurrentDomain.BaseDirectory + "resources/feed.json"))
                {
                    string json = r.ReadToEnd();
                    dynamic feeds = JsonConvert.DeserializeObject(json);

                    foreach (var proposal in feeds.proposals)
                    {
                        foreach (var entry in proposal.speakers)
                        {
                            var first_name = entry.SelectToken("first_name").Value.Trim();
                            var last_name = entry.SelectToken("last_name").Value.Trim();

                            if (!people.Exists(person => person.first_name == first_name && person.last_name == last_name))
                            {
                                var picToken = entry.SelectToken("photo");
                                if (picToken != null)
                                {
                                    var photo = picToken.Value.Trim();
                                    var affiliation = entry.SelectToken("affiliation").Value.Trim();

                                    people.Add(new Speaker
                                    {
                                        photo = photo,
                                        first_name = first_name,
                                        last_name = last_name,
                                        affiliation = affiliation,
                                    });
                                }
                            }
                        }
                    }
                }

                speaker_cache = people;

                return people;
            }
            else
            {
                return speaker_cache;
            }
        }
    }
}