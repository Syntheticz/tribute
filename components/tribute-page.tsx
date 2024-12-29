import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Rizal from "../public/rizal1.png";

export default function TributePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span
                className={`font-bold text-xl ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                José Rizal
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  "Biography",
                  "Achievements",
                  "Contributions",
                  "Fun Facts",
                ].map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase().replace(" ", "-")}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer ${
                      isScrolled
                        ? "text-gray-800 hover:text-gray-600"
                        : "text-white hover:text-gray-300"
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <Image
            src={Rizal}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Parallax>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold mb-4">José Rizal</h1>
          <p className="text-2xl">A life of inspiration and achievement</p>
        </div>
      </section>

      {/* Biography Section */}
      <section id="biography" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Biography</h2>
          <p className="text-lg mb-8">
            [Name] was born in [birthplace] on [birthdate]. From an early age,
            they showed a keen interest in [field/subject], which would later
            become their life's passion. Throughout their formative years,
            [Name] faced numerous challenges, including [challenge 1] and
            [challenge 2], but these experiences only served to strengthen their
            resolve and shape their character.
          </p>
          <Parallax translateY={[-10, 10]} className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Early Life of [Name]"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </Parallax>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Achievements</h2>
          <ul className="list-disc list-inside text-lg mb-8 space-y-4">
            <li>
              [Achievement 1] - In [year], [Name] accomplished [description of
              achievement].
            </li>
            <li>
              [Achievement 2] - [Name]'s groundbreaking work in [field] led to
              [result/impact].
            </li>
            <li>
              [Achievement 3] - Recognized for their contributions, [Name] was
              awarded [award name] in [year].
            </li>
            <li>
              [Achievement 4] - [Name]'s [invention/discovery] revolutionized
              [industry/field].
            </li>
          </ul>
          <Parallax translateY={[-10, 10]} className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Major Achievements of [Name]"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </Parallax>
        </div>
      </section>

      {/* Contributions Section */}
      <section id="contributions" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Contributions</h2>
          <p className="text-lg mb-8">
            [Name]'s contributions to [field/industry] have been both profound
            and far-reaching. Their work has not only advanced our understanding
            of [subject], but has also paved the way for [future
            developments/applications]. Some of their most significant
            contributions include:
          </p>
          <ul className="list-disc list-inside text-lg mb-8 space-y-4">
            <li>[Contribution 1] - This led to [impact/result].</li>
            <li>
              [Contribution 2] - Which revolutionized [aspect of
              field/industry].
            </li>
            <li>
              [Contribution 3] - This work continues to influence [related
              field/application] today.
            </li>
          </ul>
          <Parallax translateY={[-10, 10]} className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Key Contributions of [Name]"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </Parallax>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section id="fun-facts" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Fun Facts</h2>
          <ul className="list-disc list-inside text-lg mb-8 space-y-4">
            <li>
              [Name] was an avid [hobby] enthusiast and once [interesting
              anecdote related to hobby].
            </li>
            <li>
              Despite their serious work, [Name] was known for their
              [personality trait], often [funny habit or story].
            </li>
            <li>
              In their spare time, [Name] enjoyed [unexpected interest or
              activity].
            </li>
            <li>
              [Name]'s favorite quote was "[quote]", which they often referenced
              in their work and personal life.
            </li>
            <li>
              Little known fact: [Name] almost pursued a career in [unrelated
              field] before discovering their passion for [their actual field].
            </li>
          </ul>
          <Parallax translateY={[-10, 10]} className="mb-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Fun Facts about [Name]"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </Parallax>
        </div>
      </section>
    </div>
  );
}
