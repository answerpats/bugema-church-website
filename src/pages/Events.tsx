
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // In a real application, this would be an API call
    const eventsList = [
      {
        id: "event1",
        title: "Youth Camp Meeting",
        date: "24 Jun",
        time: "2:00 PM - 5:00 PM",
        location: "University Grounds",
        description: "Join us for a special youth camp meeting focused on spiritual growth and fellowship.",
        category: "youth",
        imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event2",
        title: "Community Outreach",
        date: "15 Jun",
        time: "9:00 AM - 1:00 PM",
        location: "Bugema Village",
        description: "Help us serve the local community through various outreach activities and donations.",
        category: "outreach",
        imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event3",
        title: "Prayer & Fasting Week",
        date: "10 Jun",
        time: "6:00 PM - 7:30 PM",
        location: "Church Sanctuary",
        description: "A special week of prayer and fasting for spiritual revival and renewal.",
        category: "prayer",
        imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event4",
        title: "Women's Ministry Meeting",
        date: "05 Jun",
        time: "3:00 PM - 5:00 PM",
        location: "Church Fellowship Hall",
        description: "Monthly meeting for the Women's Ministry to plan activities and study the Bible together.",
        category: "women",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event5",
        title: "Bible Study Series: Daniel",
        date: "01 Jun",
        time: "6:00 PM - 7:30 PM",
        location: "Church Sanctuary",
        description: "An in-depth study of the Book of Daniel and its prophecies.",
        category: "bible",
        imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event6",
        title: "Choir Practice",
        date: "28 May",
        time: "4:00 PM - 6:00 PM",
        location: "Church Sanctuary",
        description: "Weekly practice for the church choir in preparation for upcoming Sabbath services.",
        category: "music",
        imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      }
    ];

    setEvents(eventsList);
    setFilteredEvents(eventsList);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event: any) => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchQuery, events]);

  const filterByCategory = (category: string) => {
    if (category === "all") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event: any) => event.category === category);
      setFilteredEvents(filtered);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Events & Calendar"
        subtitle="Stay connected with what's happening in our church community"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
        small
      />

      {/* Events Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => filterByCategory("all")}>All Events</TabsTrigger>
                  <TabsTrigger value="youth" onClick={() => filterByCategory("youth")}>Youth</TabsTrigger>
                  <TabsTrigger value="outreach" onClick={() => filterByCategory("outreach")}>Outreach</TabsTrigger>
                  <TabsTrigger value="prayer" onClick={() => filterByCategory("prayer")}>Prayer</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-church-gray">No events found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event: any) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  imageUrl={event.imageUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Regular Service Times */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6 text-center">Regular Service Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-church-primary">Sabbath Services</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Sabbath School</span>
                    <span className="text-church-gray">9:00 AM - 10:45 AM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Divine Service</span>
                    <span className="text-church-gray">11:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Afternoon Program</span>
                    <span className="text-church-gray">2:30 PM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-church-primary">Weekly Meetings</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Prayer Meeting</span>
                    <span className="text-church-gray">Wednesday, 6:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Bible Study</span>
                    <span className="text-church-gray">Tuesday, 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Vespers</span>
                    <span className="text-church-gray">Friday, 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
