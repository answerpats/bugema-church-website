
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import SermonCard from "@/components/SermonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [filteredSermons, setFilteredSermons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // In a real app, this would be an API call
    const sermonsList = [
      {
        id: "sermon1",
        title: "Walking in Faith During Difficult Times",
        preacher: "Pastor John Mubiru",
        date: "May 8, 2023",
        category: "faith",
        imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon2",
        title: "The Power of Prayer",
        preacher: "Pastor Sarah Namukasa",
        date: "May 1, 2023",
        category: "prayer",
        imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon3",
        title: "Understanding God's Love",
        preacher: "Elder David Musoke",
        date: "April 24, 2023",
        category: "love",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon4",
        title: "The Mission of the Church Today",
        preacher: "Pastor John Mubiru",
        date: "April 17, 2023",
        category: "mission",
        imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon5",
        title: "Finding Peace in Christ",
        preacher: "Pastor Sarah Namukasa",
        date: "April 10, 2023",
        category: "peace",
        imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        id: "sermon6",
        title: "The Sabbath: God's Special Day",
        preacher: "Elder David Musoke",
        date: "April 3, 2023",
        category: "sabbath",
        imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ];

    setSermons(sermonsList);
    setFilteredSermons(sermonsList);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSermons(sermons);
    } else {
      const filtered = sermons.filter((sermon: any) => 
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSermons(filtered);
    }
  }, [searchQuery, sermons]);

  const filterByCategory = (category: string) => {
    if (category === "all") {
      setFilteredSermons(sermons);
    } else {
      const filtered = sermons.filter((sermon: any) => sermon.category === category);
      setFilteredSermons(filtered);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Sermons"
        subtitle="Watch and listen to our messages from Sabbath services"
        backgroundImage="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
        small
      />

      {/* Sermons Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all" onClick={() => filterByCategory("all")}>All</TabsTrigger>
                  <TabsTrigger value="faith" onClick={() => filterByCategory("faith")}>Faith</TabsTrigger>
                  <TabsTrigger value="prayer" onClick={() => filterByCategory("prayer")}>Prayer</TabsTrigger>
                  <TabsTrigger value="love" onClick={() => filterByCategory("love")}>Love</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search sermons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {filteredSermons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-church-gray">No sermons found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon: any) => (
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
          )}
          
          {/* Pagination - can be enhanced to be functional in future versions */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <Button variant="outline" className="bg-church-primary text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Subscribe to Our Sermon Updates</h2>
            <p className="text-church-gray mb-8">
              Get notified when new sermons are uploaded. Stay connected to our church community.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
              />
              <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
