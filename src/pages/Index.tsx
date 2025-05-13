
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import SermonCard from "@/components/SermonCard";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [featuredSermons, setFeaturedSermons] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    // In a real application, this would be an API call
    setFeaturedSermons([
      {
        id: "sermon1",
        title: "Walking in Faith During Difficult Times",
        preacher: "Pastor John Mubiru",
        date: "May 8, 2023",
        imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon2",
        title: "The Power of Prayer",
        preacher: "Pastor Sarah Namukasa",
        date: "May 1, 2023",
        imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon3",
        title: "Understanding God's Love",
        preacher: "Elder David Musoke",
        date: "April 24, 2023",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]);

    setUpcomingEvents([
      {
        id: "event1",
        title: "Youth Camp Meeting",
        date: "24 Jun",
        time: "2:00 PM - 5:00 PM",
        location: "University Grounds",
        description: "Join us for a special youth camp meeting focused on spiritual growth and fellowship.",
        imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event2",
        title: "Community Outreach",
        date: "15 Jun",
        time: "9:00 AM - 1:00 PM",
        location: "Bugema Village",
        description: "Help us serve the local community through various outreach activities and donations.",
        imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      },
      {
        id: "event3",
        title: "Prayer & Fasting Week",
        date: "10 Jun",
        time: "6:00 PM - 7:30 PM",
        location: "Church Sanctuary",
        description: "A special week of prayer and fasting for spiritual revival and renewal.",
        imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
      }
    ]);
  }, []);

  const serviceSchedule = [
    { day: "Saturday", name: "Sabbath School", time: "9:00 AM - 10:45 AM" },
    { day: "Saturday", name: "Divine Service", time: "11:00 AM - 1:00 PM" },
    { day: "Wednesday", name: "Prayer Meeting", time: "6:00 PM - 7:30 PM" },
    { day: "Friday", name: "Vespers", time: "6:00 PM - 7:30 PM" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Welcome to Bugema University Church"
        subtitle="Experience God's love in a community that cares"
        backgroundImage="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
      >
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
            <NavLink to="/about">Visit This Sabbath</NavLink>
          </Button>
          <Button variant="outline" className="bg-white text-church-primary hover:bg-opacity-90">
            <NavLink to="/sermons">Watch Sermons</NavLink>
          </Button>
        </div>
      </Hero>

      {/* Welcome Message */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-church-primary mb-6">Find Your Spiritual Home</h2>
            <p className="text-gray-700 mb-8">
              Bugema University Church is a vibrant Seventh-day Adventist congregation dedicated to spreading the love of Christ through worship, fellowship, and service. Whether you're a student, faculty member, or from the surrounding community, we welcome you to join our church family as we grow together in faith.
            </p>
            <div className="flex justify-center">
              <NavLink to="/about">
                <Button variant="outline" className="border-church-accent text-church-accent hover:bg-church-accent hover:text-white">
                  Learn More About Us
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="Church sanctuary"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Join Us This Week</h2>
              <div className="space-y-4">
                {serviceSchedule.map((service, index) => (
                  <div key={index} className="flex items-start border-l-4 border-church-accent pl-4 py-2">
                    <div>
                      <h3 className="font-medium text-lg">{service.name}</h3>
                      <p className="text-church-gray">{service.day} | {service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <NavLink to="/events">
                  <Button className="bg-church-primary hover:bg-church-primary/90 text-white">
                    View All Events
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-church-primary mb-4">Latest Sermons</h2>
            <p className="text-church-gray max-w-3xl mx-auto">Watch and listen to our most recent messages from Sabbath services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSermons.map((sermon: any) => (
              <SermonCard
                key={sermon.id}
                id={sermon.id}
                title={sermon.title}
                preacher={sermon.preacher}
                date={sermon.date}
                imageUrl={sermon.imageUrl}
                videoUrl={sermon.videoUrl}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink to="/sermons">
              <Button variant="outline" className="border-church-accent text-church-accent hover:bg-church-accent hover:text-white">
                View All Sermons
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-church-primary mb-4">Upcoming Events</h2>
            <p className="text-church-gray max-w-3xl mx-auto">Join us for these special events and activities happening in our church community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event: any) => (
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
          <div className="text-center mt-10">
            <NavLink to="/events">
              <Button variant="outline" className="border-church-accent text-church-accent hover:bg-church-accent hover:text-white">
                View All Events
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-church-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Be Part of Our Community</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Join us this Sabbath to experience worship, fellowship, and spiritual growth in a welcoming environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/about">
              <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
                Plan Your Visit
              </Button>
            </NavLink>
            <NavLink to="/donate">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-church-primary">
                Support Our Mission
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
