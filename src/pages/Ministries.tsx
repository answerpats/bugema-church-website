
import { useState } from "react";
import Hero from "@/components/Hero";
import MinistryCard from "@/components/MinistryCard";

const Ministries = () => {
  const [ministries] = useState([
    {
      id: "ministry1",
      title: "Youth Ministry",
      leader: "James Musoke",
      description: "Our Youth Ministry is dedicated to nurturing the spiritual growth of young people through Bible study, fellowship, and service opportunities. We provide a safe and welcoming environment for youth to connect with God and each other, while developing leadership skills that will serve them throughout their lives.",
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: "ministry2",
      title: "Music & Worship",
      leader: "Sarah Namukasa",
      description: "The Music Ministry enhances our worship experience through various choirs, instrumental groups, and worship teams. We believe that music is a powerful way to express our love for God and lead the congregation into His presence. Whether you sing or play an instrument, there's a place for you to serve and glorify God with your talents.",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: "ministry3",
      title: "Community Outreach",
      leader: "David Kato",
      description: "Our Community Outreach Ministry extends the love of Christ beyond our church walls through various service projects, food drives, and support programs. We partner with local organizations to meet the physical and spiritual needs of our neighbors, sharing God's love in practical ways.",
      imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: "ministry4",
      title: "Children's Ministry",
      leader: "Ruth Nanyanzi",
      description: "Our Children's Ministry provides age-appropriate biblical teaching and fun activities for children from infancy through elementary school. We create a safe, loving environment where children can learn about God's love, develop their faith, and build lasting friendships.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: "ministry5",
      title: "Women's Ministry",
      leader: "Elizabeth Mukasa",
      description: "The Women's Ministry offers spiritual growth, fellowship, and service opportunities specifically designed for women. Through Bible studies, prayer groups, retreats, and service projects, we empower women to grow in their relationship with Christ and support one another through all stages of life.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: "ministry6",
      title: "Men's Ministry",
      leader: "Joseph Lubega",
      description: "Our Men's Ministry provides opportunities for men to grow spiritually, develop authentic relationships, and serve the church and community. Through Bible studies, fellowship activities, and mentoring, we encourage men to lead with integrity in their homes, workplaces, and communities.",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    }
  ]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Ministries & Programs"
        subtitle="Find your place to serve and grow in our church community"
        backgroundImage="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
        small
      />

      {/* Ministry Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-church-primary mb-6">Our Ministries</h2>
            <p className="text-gray-700">
              At Bugema University Church, we offer various ministries and programs designed to help you grow spiritually, connect with others, and serve our community. Explore the options below to find where you can get involved.
            </p>
          </div>

          <div className="space-y-20">
            {ministries.map((ministry, index) => (
              <MinistryCard
                key={ministry.id}
                id={ministry.id}
                title={ministry.title}
                description={ministry.description}
                leader={ministry.leader}
                imageUrl={ministry.imageUrl}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Get Involved</h2>
            <p className="text-gray-700 mb-8">
              There are many ways to serve and connect at Bugema University Church. Whether you're interested in joining a ministry, volunteering for an event, or finding a small group, we'd love to help you get plugged in.
            </p>
            <div className="mt-6">
              <a href="mailto:info@bugemachurch.org" className="bg-church-accent hover:bg-church-accent/90 text-white px-6 py-3 rounded-md inline-block">
                Contact Us to Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
