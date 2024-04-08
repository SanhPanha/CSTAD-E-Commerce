// Import necessary modules
import type { NextPage } from "next";
import Head from "next/head";

// Define the AboutPage component
const AboutPage: NextPage = () => {
  // Define team members data
  const teamMembers = [
    { name: "John Doe", role: "CEO", image: "/images/john.jpg" },
    { name: "Jane Smith", role: "CTO", image: "/images/jane.jpg" },
    // Add more team members as needed
  ];

  // Return JSX content
  return (
    <div className="container mx-auto px-4 py-12">
      <Head>
        <title>About Us - Your E-Commerce Store</title>
        <meta
          name="description"
          content="Discover the story behind Your E-Commerce Store, our core values, the amazing team, and how we&apos;re committed to making a difference."
        />
      </Head>

      <main className="max-w-3xl mx-auto">
        {/* Banner Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg tex-gray-700">
            We&apos;re passionate about making a difference in your shopping
            experience.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="mb-3">
            Tired of bland choices and inflated prices, we decided to take a
            stand for better home décor. That&apos;s how [Company Name] was born–
            from a desire to curate beautiful, sustainable, and affordable
            products for everyone.
          </p>
          <p>
            Since our launch in 2021, we&apos;ve proudly partnered with independent
            creators globally and delivered countless smiles with our unique
            finds.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-medium mb-2">Our Mission</h3>
              <p>
                To empower everyone to create stylish and inspiring homes
                without compromising on quality or ethics.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">Our Core Values</h3>
              <ul className="list-disc pl-6">
                <li>Customer Obsession</li>
                <li>Passion for Sustainability</li>
                <li>Supporting Independent Creators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Making a Positive Impact */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Making a Positive Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-2">Supporting Our Community</h3>
              <p>
                We believe in giving back. That&apos;s why we partner with [Charity
                Name] to [explain how you support them]. We&apos;re also active in
                local events and sponsor [community initiative].
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">Our Sustainability Promise</h3>
              <p>
                We prioritize ethical practices and sustainable materials. Our
                products are made with [eco-friendly materials], and we work
                with partners who share our commitment to minimize environmental
                impact.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
          <div className="grid-cols-1 md:grid-cols-2 gap-6">
            {/* Individual Testimonial Card - Repeat as needed */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md">
              <p className="italic mb-2">
                &quot;[Your E-commerce Store] is my go-to for unique and stylish home
                goods. I love their commitment to quality!&quot;
              </p>
              <p className="text-right font-medium">- Sarah J.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-10 text-center">
          <p className="mb-4">Ready to transform your home? </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md">
            Explore Our Products
          </button>
        </section>
      </main>
    </div>
  );
};

// Export the AboutPage component as default
export default AboutPage;
