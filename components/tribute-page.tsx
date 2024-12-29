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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
            numquam quasi iusto commodi ad iure culpa perferendis eligendi,
            atque aperiam sequi nam, dolorem dolore cupiditate! Saepe esse, iure
            aliquid amet numquam quae animi quaerat maiores neque, tempore
            corporis ea. Exercitationem, quasi? Fugit dolores, molestiae itaque,
            mollitia doloribus numquam deleniti eum debitis totam assumenda
            natus dolorem quae nobis libero asperiores delectus cupiditate.
            Delectus aperiam voluptas at voluptatibus earum. Corrupti excepturi
            velit veritatis officiis vitae laboriosam ducimus blanditiis
            pariatur doloremque voluptate dolor autem, dolore quae saepe in!
            Reprehenderit odio minima odit harum corrupti tempore accusamus
            voluptas, unde, autem magni nemo quos cum.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              nulla!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore repudiandae corrupti, earum aliquam sint et aliquid natus
              alias fugiat explicabo veniam consequuntur nemo pariatur labore
              maxime neque non, asperiores, optio ullam incidunt nam? Explicabo
              ullam cupiditate voluptatibus alias porro, expedita iste illo eius
              sapiente pariatur provident est quibusdam reiciendis commodi in,
              harum quaerat. Rerum doloribus dolorem maxime. Nobis sequi culpa
              quam quo ullam doloremque. Totam, nesciunt numquam ipsum
              repellendus officiis mollitia quia veniam, cum quis est id harum
              atque?
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              placeat provident rerum saepe ab sit quas laboriosam? Perspiciatis
              libero inventore maxime corporis expedita obcaecati pariatur
              dolorum consectetur sed, magnam iste non neque, culpa atque rem!
              Commodi delectus doloremque aspernatur repellendus ullam,
              perspiciatis deleniti minima. Pariatur veniam reiciendis officiis
              doloremque explicabo!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              in fugit, natus iusto qui explicabo neque modi quaerat.
              Laudantium, asperiores.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            reprehenderit incidunt harum possimus illum eaque facilis iusto,
            eius voluptatum deserunt, voluptas itaque inventore libero quibusdam
            quas velit in! Autem, ea.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              perspiciatis distinctio, natus pariatur laborum mollitia ut id
              deserunt recusandae ipsum voluptas omnis voluptatem veniam
              laboriosam voluptate asperiores porro officia est!
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, totam.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              deleniti modi quisquam tempore quaerat doloribus minus saepe aut
              sint facilis.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat sunt numquam alias atque eveniet fuga architecto placeat
              ea excepturi nesciunt quos incidunt explicabo similique
              reprehenderit nostrum, dolorem aperiam ipsam.
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
