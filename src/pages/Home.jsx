import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

import { FEATURE } from "../constants/features";

function Home() {
  return (
    <main className="max-w-7xl mx-auto" aria-label="Main content">
      {/* Hero Section */}
      <header className="text-center mb-16" aria-label="Hero">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Master React.js
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          A comprehensive learning project covering all essential React concepts
          including hooks, routing, state management, authentication, and modern
          development patterns.
        </p>
        <nav aria-label="Primary actions">
          <ul className="flex flex-col sm:flex-row gap-4 justify-center list-none p-0 m-0">
            <li>
              <Button as={Link} to={""} size="lg" aria-label="Start Learning">
                Start Learning
              </Button>
            </li>
            <li>
              <Button
                as={Link}
                to={""}
                variant="outline"
                size="lg"
                aria-label="Try Authentication"
              >
                Try Authentication
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Feature Grid */}
      <section className="mb-16" aria-label="Feature list">
        <h2 className="sr-only">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {FEATURE &&
            FEATURE.length > 0 &&
            FEATURE.map((feature, index) => (
              <li key={index}>
                <Card
                  className="hover:shadow-xl transition-shadow text-center"
                  aria-label={feature.title}
                >
                  <div
                    className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}
                    aria-hidden="true"
                  >
                    {feature?.icon && <feature.icon size={24} />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <Button
                    as={Link}
                    to={feature.link}
                    variant="outline"
                    size="sm"
                    aria-label={`Explore ${feature.title}`}
                  >
                    Explore
                  </Button>
                </Card>
              </li>
            ))}
        </ul>
      </section>

      {/* What You'll Learn Section */}
      <Card className="mb-16" aria-label="What You'll Learn">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Core React Concepts
            </h3>
            <ul
              className="space-y-2 text-gray-600 dark:text-gray-300"
              aria-label="Core React Concepts"
            >
              <li>Component lifecyle and rendering</li>
              <li>Props and state management</li>
              <li>Event handling and user interactions</li>
              <li>Conditional rendering and lists</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Advanced Patterns
            </h3>
            <ul
              className="space-y-2 text-gray-600 dark:text-gray-300"
              aria-label="Advanced Patterns"
            >
              <li>Custom hooks and reusable logic</li>
              <li>Context API and global state</li>
              <li>Performance optimization</li>
              <li>Security best practices</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Tech Stack */}
      <Card aria-label="Technologies Used">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Technologies Used
        </h2>
        <ul
          className="flex flex-wrap gap-3 list-none p-0 m-0"
          aria-label="Tech list"
        >
          {[
            "React 19",
            "React Router",
            "Tailwind CSS",
            "Vite",
            "Lucide Icons",
            "Context API",
            "Local Storage",
            "Axios",
          ].map((tech) => {
            return (
              <li key={tech}>
                <span
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  aria-label={tech}
                >
                  {tech}
                </span>
              </li>
            );
          })}
        </ul>
      </Card>
    </main>
  );
}

export default Home;
