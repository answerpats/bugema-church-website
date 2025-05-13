
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const About = () => {
  const pastors = [
    {
      id: 1,
      name: "Pastor John Mubiru",
      role: "Senior Pastor",
      bio: "Pastor John has been leading our congregation for over 10 years with wisdom and compassion.",
      imageUrl: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=faces&cs=srgb&w=400"
    },
    {
      id: 2,
      name: "Pastor Sarah Namukasa",
      role: "Associate Pastor",
      bio: "Pastor Sarah oversees our youth ministries and outreach programs with incredible energy and dedication.",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&q=85&fm=jpg&crop=faces&cs=srgb&w=400"
    },
    {
      id: 3,
      name: "Elder David Musoke",
      role: "Head Elder",
      bio: "Elder David serves the church through teaching and pastoral care, ensuring our members are spiritually nourished.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=faces&cs=srgb&w=400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="About Our Church"
        subtitle="Learn more about Bugema University Church and our mission"
        backgroundImage="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
        small
      />

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="Church history"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Established in 1948, Bugema University Church began as a small gathering of believers on the Bugema University campus. As the university grew, so did our church community, becoming a spiritual home for students, faculty, and families from the surrounding area.
                </p>
                <p className="text-gray-700">
                  Throughout the decades, we have remained committed to sharing the love of Christ, providing sound biblical teaching, and serving our community. Today, we continue this legacy with vibrant worship services, diverse ministries, and a focus on nurturing spiritual growth for all ages.
                </p>
                <p className="text-gray-700">
                  As a Seventh-day Adventist congregation, we uphold the biblical Sabbath (Saturday) as a day of worship and rest, and we look forward to the soon return of Jesus Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-church-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To share the everlasting gospel of Jesus Christ, make disciples, and prepare people for His soon return through worshiping God, nurturing believers, and serving humanity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Proclaiming the gospel through passionate worship and evangelism</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Nurturing spiritual growth through Bible-based teaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Serving the campus and surrounding community with compassion</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-church-primary mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To be a thriving, Christ-centered community where all are welcomed, nurtured in faith, equipped for service, and empowered to share God's love.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Creating an environment where all feel welcome and valued</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Developing disciples who grow in their relationship with Jesus</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-church-accent mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Building bridges of hope between the campus and community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-4">Our Leadership</h2>
            <p className="text-gray-700">
              Meet the dedicated individuals who serve and lead our congregation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastors.map((pastor) => (
              <div key={pastor.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img
                  src={pastor.imageUrl}
                  alt={pastor.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-church-primary">{pastor.name}</h3>
                  <p className="text-church-accent mb-3">{pastor.role}</p>
                  <p className="text-gray-700">{pastor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-4">What We Believe</h2>
            <p className="text-gray-700">
              As a Seventh-day Adventist congregation, we hold to these core biblical teachings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">The Holy Scriptures</h3>
                <p className="text-gray-600">
                  We believe the Bible is God's inspired Word and the authoritative revelation of His will.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">Salvation through Christ</h3>
                <p className="text-gray-600">
                  We believe in salvation through faith in Jesus Christ alone, by His grace.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">The Sabbath</h3>
                <p className="text-gray-600">
                  We observe the seventh-day Sabbath (Saturday) as a day of rest and worship.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">Second Coming</h3>
                <p className="text-gray-600">
                  We believe in the literal, visible return of Jesus Christ to this earth.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">Wholistic Living</h3>
                <p className="text-gray-600">
                  We believe in caring for our bodies as temples of the Holy Spirit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 flex items-center justify-center bg-church-primary rounded-full flex-shrink-0">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-church-primary mb-2">Service to Others</h3>
                <p className="text-gray-600">
                  We believe in serving others as an expression of God's love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Visit Us This Sabbath</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-church-accent mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Location</span>
                      <p className="text-gray-700">Bugema University Campus, Bugema, Uganda</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-church-accent mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-medium">Service Times</span>
                      <p className="text-gray-700">
                        Sabbath School: 9:00 AM - 10:45 AM<br />
                        Divine Service: 11:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-church-accent mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <span className="font-medium">Contact</span>
                      <p className="text-gray-700">
                        Phone: +256 123 456 789<br />
                        Email: info@bugemachurch.org
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <NavLink to="/events">
                    <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
                      View Upcoming Events
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  {/* This would be an iframe with Google Maps in a real implementation */}
                  <div className="bg-gray-200 h-80 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="h-12 w-12 text-gray-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600">Map of Bugema University Church location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-church-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Join Our Church Family</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            We'd love to welcome you to our church family. Join us this Sabbath for worship and fellowship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/events">
              <Button className="bg-church-accent hover:bg-church-accent/90 text-white">
                View Our Events
              </Button>
            </NavLink>
            <NavLink to="/sermons">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-church-primary">
                Watch Our Sermons
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
