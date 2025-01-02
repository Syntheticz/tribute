import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Rizal from "../public/rizal1.png";
import Portrait from "../public/portrait.jpg";
import Achieve from "../public/achieve.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Bookmark,
  BookOpen,
  Feather,
  Gavel,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Separator } from "./ui/separator";

export default function TributePage() {
  const educationStages = [
    {
      id: "early-education",
      title: "Early Education",
      years: "1869-1871",
      description:
        "Rizal began his formal studies in a village school in Calamba before transferring to Binan, where he studied under Maestro Justiniano Aquino Cruz. There, he demonstrated his natural aptitude for academics, surpassing many of his classmates. His artistic talents also flourished, as he sketched and sculpted.",
    },
    {
      id: "ateneo",
      title: "Ateneo Municipal de Manila",
      years: "1872-1877",
      description:
        'At 11, Rizal enrolled at the Ateneo Municipal de Manila (now Ateneo de Manila University), a Jesuit-run institution. He consistently ranked at the top of his class and earned numerous accolades, including the title of Sobresaliente (Outstanding Student). He earned a Bachelor of Arts degree in 1877 at the age of 16, graduating with the distinction "Excellent" (Sobresaliente). While at Ateneo, Rizal also cultivated his love for literature, writing poems and essays, including "Al Niño Jesús" (To the Child Jesus) and "El Consejo de los Dioses" (The Council of the Gods).',
    },
    {
      id: "ust",
      title: "University of Santo Tomas",
      years: "1878-1882",
      description:
        "In 1878, Rizal enrolled at the University of Santo Tomas (UST) to study Philosophy and Letters. A year later, he shifted to Medicine to specialize in ophthalmology after his mother began losing her eyesight. At UST, Rizal experienced racial discrimination, with Filipino students often marginalized by Spanish professors and classmates. This fueled his desire for reform and justice.",
    },
    {
      id: "madrid",
      title: "Universidad Central de Madrid",
      years: "1882-1885",
      description:
        "In 1882, Rizal traveled to Spain to pursue higher education at the Universidad Central de Madrid (now Complutense University of Madrid). He earned a Licentiate in Medicine in 1884 and completed his degree in Philosophy and Letters in 1885. His academic performance was exemplary, despite financial struggles.",
    },
    {
      id: "specialized",
      title: "Specialized Studies",
      years: "1885-1887",
      description:
        "Rizal further trained in ophthalmology in Paris under Dr. Louis de Wecker and later in Heidelberg, Germany, under Dr. Otto Becker. He mastered several languages, including Spanish, German, French, and English, among others.",
    },
    {
      id: "london",
      title: "London",
      years: "1888-1889",
      description:
        "Rizal also studied in London, spending time from May 1888 to March 1889. He chose London because his main goals were to improve his knowledge of the English language, study and annotate Antonio de Morga's Sucesos de Las Islas Filipinas, and safely carry out his fight against Spanish tyranny from abroad.",
    },
  ];

  const relationships: {
    category: string;
    connections: {
      name: string;
      relation?: string;
      description: string;
    }[];
  }[] = [
    {
      category: "Family",
      connections: [
        {
          name: "Teodora Alonso",
          relation: "Mother",
          description:
            "Rizal was deeply attached to his mother, who served as his first teacher and a moral compass. Her unjust imprisonment due to a false accusation of poisoning a relative was one of the early events that shaped Rizal's awareness of injustice.",
        },
        {
          name: "Paciano Mercado",
          relation: "Older Brother",
          description:
            "Paciano was not only a brother but also a mentor and confidant. He supported Rizal financially during his studies abroad and was instrumental in introducing him to nationalist ideas. Paciano was also active in the revolutionary movement.",
        },
        {
          name: "Mercado-Alonso Siblings",
          relation: "Sisters",
          description:
            "Rizal maintained close ties with his siblings, particularly his sisters, who often sent him letters and packages during his time in Europe and exile. His sisters played key roles in preserving his writings and legacy after his death.",
        },
      ],
    },

    {
      category: "Friends",
      connections: [
        {
          name: "Ferdinand Blumentritt",
          relation: "European Friend",
          description:
            "A professor and historian in Austria, Blumentritt became Rizal's closest European friend. Their correspondence revealed Rizal's intellectual depth and love for his country. Blumentritt was one of the few Europeans who truly understood and supported Rizal's nationalist ideals.",
        },
        {
          name: "Maximo Viola",
          relation: "Fellow Filipino",
          description:
            "A fellow Filipino and one of Rizal's dearest friends, Viola provided financial support to publish Noli Me Tangere. Their friendship was marked by shared patriotism and mutual respect.",
        },
        {
          name: "Juan Luna & Marcelo H. del Pilar",
          relation: "Compatriots",
          description:
            "Rizal formed strong bonds with these compatriots, who were also involved in the Propaganda Movement. Their discussions and collaborative efforts fueled the reformist agenda against Spanish colonization.",
        },
      ],
    },

    {
      category: "Romantic",
      connections: [
        {
          name: "Segunda Katigbak ",
          description:
            "Segunda was Rizal's first love, whom he met during his teenage years in Calamba. She was described as petite and fair, with expressive eyes. However, their romance was short-lived as Segunda was already engaged to another man. This early heartbreak left a profound impact on Rizal's writings about unrequited love.",
        },

        {
          name: "Leonor Valenzuela (Orang) ",
          description:
            "During his time at the University of Santo Tomas, Rizal courted Leonor Valenzuela, a neighbor in Intramuros. He would write her love letters using invisible ink made of water and salt, which she could read by heating the paper. Their relationship was more of a youthful infatuation.",
        },
        {
          name: "Leonor Rivera",
          description:
            "Often regarded as Rizal's “greatest love,” Leonor was his cousin and muse for the character of Maria Clara in Noli Me Tangere. Their relationship lasted for over a decade through letters while Rizal was abroad. Leonor's family, however, disapproved of Rizal due to his political activism, and she was eventually married off to an Englishman, Charles Kipping. Her marriage devastated Rizal, influencing his later works with themes of love, loss, and betrayal.",
        },
        {
          name: "Consuelo Ortiga y Rey",
          description:
            'While in Madrid, Rizal was captivated by the charm of Consuelo, the daughter of a prominent Spanish politician. He even dedicated a poem to her titled "A La Señorita C.O. y R.". However, out of respect for his friend Eduardo de Lete, who also loved Consuelo, Rizal decided not to pursue the relationship.',
        },
        {
          name: "Seiko Usui (O-Sei-San)",
          description:
            "During Rizal's time in Japan, he fell in love with Seiko Usui, a Japanese woman of noble character. Their relationship was one of Rizal's happiest. Seiko even learned Spanish for him, and Rizal admired her simplicity and grace. However, Rizal's commitment to his mission in the Philippines led him to leave Japan, ending their romance.",
        },
        {
          name: "Gertrude Beckett",
          description:
            "While in London, Rizal stayed with the Beckett family and developed a close relationship with Gertrude, the daughter of his landlady. Gertrude fell deeply in love with Rizal and supported him during his time there, but Rizal chose not to pursue the relationship, focusing instead on his writings.",
        },
        {
          name: "Suzanne Jacoby",
          description:
            "In Belgium, Rizal met Suzanne, who was captivated by his charm and intellect. Their letters reflected Suzanne's affection for Rizal, but like many of his relationships, this one ended due to Rizal's dedication to his work and his country.",
        },
        {
          name: "Josephine Bracken",
          description:
            "Josephine, an Irishwoman, is often considered Rizal's final love. She came to Dapitan with her blind adoptive father to seek Rizal's medical help. Their relationship blossomed, and they lived together in Dapitan, although they were never officially married due to the Church's opposition. Some accounts suggest that Josephine bore Rizal a child, who unfortunately died during infancy. Josephine was by Rizal's side during his last moments and played a significant role in his life during his exile.",
        },
      ],
    },
  ];

  const funFacts = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title:
        'At eight, he penned his first poem, "Sa Aking Mga Kabata" (To My Fellow Youth), which emphasized the importance of the Filipino language in fostering national identity',
      myth: "In 1869, the then eight-year-old Rizal's Tagalog poem soon immortalized the line “ang hindi marunong magmahal sa sariling wika ay masahol pa sa hayop at malansang isda” (he who loves not his own language is worse than a beast and a stinking fish).",
      truth:
        "To this day, no official manuscript linking Rizal to the poem has been identified yet. And the poem was only published ten years after his death, leading historians to question its authenticity.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title:
        'He consistently ranked at the top of his class and earned numerous accolades, including the title of Sobresaliente (Outstanding Student). He earned a Bachelor of Arts degree in 1877 at the age of 16, graduating with the distinction "Excellent" (Sobresaliente).',

      myth: "Rizal sailed through high school (Ateneo Municipal de Manila) with straight “Excellent” grades.",
      truth:
        "Rizal did graduate with a grade of Sobresaliente but he got the award with eight other classmates. He did not consistently rank at the top of his class, it might have only appeared like that.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title:
        "Rizal also studied in London, spending time from May 1888 to March 1889. He chose London because his main goals were to improve his knowledge of the English language, study and annotate Antonio de Morga's Sucesos de Las Islas Filipinas, and safely carry out his fight against Spanish tyranny from abroad.",

      myth: "Jose Rizal was the real “Jack the Ripper”-both with initials “J.R.” Jack the Ripper was an unidentified serial killer who was believed to be active in Whitechapel district of London in 1888. His victims were dismembered with surgical precision, prompting investigators to assume the Ripper had a background in human anatomy. Coincidentally, the killings occurred at the time Rizal was in London, and stopped when he left.",
      truth:
        "Looking at the context of the murders, it shows Whitechapel was notorious for its high crime rates. From 1886 to 1889, there was an increase in public unrest. In other words, the district was already in crisis before Rizal arrived there in 1888. Moreover, some researchers argue the serial killings may have been done by more than one person, casting doubt on the existence of Jack the Ripper.",
    },
    {
      icon: <Gavel className="w-6 h-6 text-primary" />,
      title:
        "In 1896, Rizal was accused of being involved in the Philippine Revolution initiated by the Katipunan, despite his opposition to violent uprisings.",

      myth: "There were rumors about Rizal being a strong opponent of the Philippine Revolution, describing it as “absurd” during his trial.",
      truth:
        "Historian Xiao Chua revealed that Rizal, although forced to describe the revolution as “absurd,” had always been supportive of the Katipunan. Rizal also praised the revolution in his farewell poem, Mi Último Adiós.",
    },
    {
      icon: <Feather className="w-6 h-6 text-primary" />,
      title:
        'José Rizal wrote the poem "Mi Retiro" (My Retreat) during his exile in Dapitan in 1895',

      myth: "It was written when he was sick and could not work.",
      truth:
        "There is no historical evidence suggesting that he was physically ill at the time he composed it. Instead, it was written upon the request of his mother. The poem reflects his introspection and sense of peace as he lived a quiet life in Dapitan, far from the political turmoil he had faced.",
    },
    {
      icon: <Bookmark className="w-6 h-6 text-primary" />,
      title:
        "A fellow Filipino and one of Rizal's dearest friends, Viola provided financial support to publish Noli Me Tangere. Their friendship was marked by shared patriotism and mutual respect.",

      myth: "Maximo Viola wrote in one of his diary entries about a one-night stand Rizal allegedly had with an Austrian prostitute while visiting Austria in May 1887. Adolf Hitler, also an Austrian, was born not long after the passionate encounter, suggesting Rizal was the father of Adolf Hitler.",
      truth:
        "Many scholars agree that Rizal was familiar with brothels and the amusements in Europe. But Adolf Hitler was born in 1889. Rizal's alleged one-night stand with the Austrian woman allegedly occurred in 1887. If both are true, then it means Hitler was born two years delayed, which was highly unlikely.",
    },
  ];

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
                  "Education",
                  "Achievements",
                  "Relationships",
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
      <section id="biography" className="py-16 px-4 bg-gray-50 pb-16 ">
        <Card className="container w-full mx-auto max-w-6xl my-4">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src={Portrait}
                  alt="Descriptive image alt text"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">
                  The Life of José Rizal
                </h2>
                <p className="text-muted-foreground mb-4">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;José Protacio
                  Rizal Mercado y Alonzo Realonda was born on June 19, 1861, in
                  Calamba, Laguna, Philippines, to Francisco Mercado and Teodora
                  Alonso, members of an affluent and educated family of mixed
                  Filipino, Chinese, and Spanish ancestry. Rizal&apos;s paternal
                  lineage traced back to a Chinese immigrant named Domingo
                  Lam-co, while his mother descended from Lakandula, a noble
                  family in pre-colonial Manila. He was the seventh child among
                  eleven siblings: Saturnina, Paciano, Narcisa, Olimpia, Lucia,
                  Maria, José, Concepcion, Josefa, Trinidad, and Soledad.
                </p>
                <p className="text-muted-foreground mb-4">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rizal&apos;s
                  early years in Calamba were marked by his family&apos;s
                  prosperity as landowners. His parents ensured a nurturing
                  environment that encouraged intellectual growth. He displayed
                  exceptional intelligence at an early age. By the age of three,
                  he was already learning the alphabet and had a keen interest
                  in literature and art. He was tutored by his mother, Teodora,
                  who was his first teacher, and later by private tutors such as
                  Maestro Celestino and Maestro Lucas Padua. At eight, he penned
                  his first poem, &quot;Sa Aking Mga Kabata&quot; (To My Fellow
                  Youth), which emphasized the importance of the Filipino
                  language in fostering national identity. The execution of
                  Gomburza (Fr. Mariano Gomez, Fr. Jose Burgos, and Fr. Jacinto
                  Zamora) in 1872 for alleged complicity in the Cavite Mutiny
                  deeply influenced Rizal&apos;s burgeoning nationalism. His
                  older brother Paciano was close to Fr. Burgos, whose martyrdom
                  left a lasting impact on young Rizal.
                </p>
              </div>
            </div>
            <div className="border-t pt-6">
              <p className="text-muted-foreground mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During his time
                in Europe, Rizal immersed himself in the liberal and
                revolutionary ideas of the time, which deeply influenced his
                political beliefs. In 1887, Rizal published his first novel,
                Noli Me Tangere, in Berlin, Germany. The book exposed the abuses
                of the Spanish friars and colonial authorities, challenging the
                status quo. The novel was banned in the Philippines, but it
                gained widespread attention, making Rizal a target of the
                Spanish authorities. Rizal&apos;s second novel, El
                Filibusterismo (The Reign of Greed), was published in Ghent,
                Belgium, in 1891. It was a darker and more radical sequel to
                Noli Me Tangere, calling for systemic change.
              </p>
              <p className="text-muted-foreground mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rizal returned
                to the Philippines in 1892 and founded La Liga Filipina, a civic
                organization advocating for peaceful reforms. Shortly after its
                establishment, Spanish authorities arrested him and exiled him
                to Dapitan, a remote town in Zamboanga del Norte. In Dapitan,
                Rizal led a productive life. He opened a school, practiced
                medicine, conducted scientific research, and contributed to the
                community&apos;s development. He fell in love with Josephine
                Bracken, an Irish woman, with whom he had a romantic
                relationship.
              </p>
              <p className="text-muted-foreground">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In 1896, Rizal
                was accused of being involved in the Philippine Revolution
                initiated by the Katipunan, despite his opposition to violent
                uprisings. He was arrested en route to Cuba, where he had
                volunteered as a doctor. After a mock trial by a Spanish
                military court, he was sentenced to death for sedition,
                rebellion, and conspiracy. On December 30, 1896, Rizal was
                executed by firing squad at Bagumbayan (now Luneta Park) in
                Manila. His final work, Mi Último Adiós (My Last Farewell),
                written the night before his execution, expressed his love for
                the Philippines and his hope for its liberation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education Section */}

      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            José Rizal&apos;s Education
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {educationStages.map((stage) => (
              <AccordionItem key={stage.id} value={stage.id}>
                <AccordionTrigger className="text-left">
                  <div>
                    <h3 className="text-xl font-medium text-gray-700">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-gray-500">{stage.years}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 mt-2">{stage.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Achievements</h2>
          <ul className="list-disc list-inside text-lg mb-8 space-y-4">
            <li>
              Rizal penned To the Filipino Youth when he was eighteen and
              studying at UST. He submitted the literary poem written in Spanish
              in a contest held by the Manila Lyceum of Art of Literature and
              garnered first prize. This piece showcases strong messages to
              convince the youth that they are the hope of the nation. Rizal
              further stresses the importance of education in relation to
              one&apos;s future.
            </li>
            <li>
              Rizal gained respect among European intellectuals and reformists,
              including Ferdinand Bluementritt who became his close friend and
              ally in advocating human rights.
            </li>
            <li>
              During his exile in Dapitan, Rizal conducted scientific studies
              and discovered several species of flora and fauna.
            </li>
            <li>
              Rizal designed and helped construct a water supply system during
              his exile in Dapitan, benefiting the local community and
              demonstrating his engineering skills.
            </li>
            <li>
              Rizal&apos;s martyrdom, through his execution by the Spanish
              authorities, further fueled the flames of revolution in the
              Philippines. His death served as a rallying cry for Filipinos to
              continue the fight for independence and galvanized the movement
              towards nationhood and self-determination.
            </li>
          </ul>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-8">
            <Parallax translateY={[0, 20]} className="absolute inset-0">
              <Image
                src={Achieve}
                alt="Achieve"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Parallax>
          </div>
        </div>
      </section>

      <section
        id="relationships"
        className="py-20 px-4 md:px-8 bg-white min-h-screen"
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Personal Relationships of José Rizal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {relationships.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {category.category}
                  </AccordionTrigger>
                  <AccordionContent>
                    {category.connections.map((connection, connIndex) => (
                      <div key={connIndex} className="mb-4 last:mb-0">
                        <h3 className="font-medium text-base">
                          {connection.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {connection.relation}
                        </p>
                        <p className="text-sm mt-1">{connection.description}</p>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Fun Facts Section */}
      <section id="fun-facts" className="py-20 px-4 md:px-8 bg-gray-100">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Fun Facts About Jose Rizal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {funFacts.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">{item.icon}</div>
                <div className="space-y-2 flex-1 ">
                  <p className="font-semibold">{item.title}</p>
                  <div className="flex flex-col">
                    <span className="flex  gap-2 items-center text-sm text-muted-foreground">
                      <p className="text-sm text-muted-foreground">
                        Myth: {item.myth}
                      </p>
                    </span>

                    <span className="flex  gap-2 mt-4 items-center">
                      <p className="text-sm text-muted-foreground">
                        Truth: {item.truth}
                      </p>
                    </span>
                  </div>
                  {index < funFacts.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
