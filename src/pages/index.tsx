import { Button } from '@/components/ui/button'
import { Space_Grotesk } from 'next/font/google'
const inter = Space_Grotesk({ subsets: ['latin'] })
import Image from 'next/image'
import { cn } from '@/lib/utils';
import yerapos from "@/../public/yerapos-dashboard.png";
import coif from "@/../public/coif.png";
import ycanChallenge from "@/../public/ycan-challenge.yerapos.com_.png";
import dicton from "@/../public/dicton.jpeg";
import massCalc from "@/../public/massCalculator.jpg";
import pricing from "@/../public/pricing.png";
import { Code, Eye, Quote } from 'lucide-react';
import Nav from '@/components/home/nav';
import Footer from '@/components/home/footer';
import Contact from '@/components/home/contact';
import Hero from '@/components/home/hero';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={cn("flex flex-col gap-16", inter.className)} >
      <Head>
        <title>Choaib Mouhrach | Full Stack Developer</title>
      </Head>
      <Hero />

      <div className="container flex flex-col gap-2 justify-center text-center" >
        <h1 className="text-2xl" >
          What I Do
        </h1>
        <p>
          I can help you build your next product
        </p>
      </div>

      <div className="container grid lg:grid-cols-3 gap-4">
        {
          [
            {
              title: "Full Stack Developer",
              description: "I am a proficient full-stack developer equipped to create your next product, leveraging cutting-edge technologies to bring your vision to life. My toolkit includes Next.js, TypeScript, TailwindCSS, MySQL, PlanetScale, and a host of other modern tools and frameworks to ensure a robust and innovative product development process.",
            },
            {
              title: "Front End Developer",
              description: "I specialize in front-end development, where I craft engaging and interactive user interfaces that captivate your audience. My expertise includes utilizing a range of modern technologies such as HTML5, CSS3, JavaScript, React.js, and responsive design principles to deliver a seamless and visually appealing user experience.",
            },
            {
              title: "Back End Developer",
              description: "I excel in backend development, focusing on the core functionality and data management of your application. With proficiency in languages like Python, Java, or Node.js, I design and optimize server-side components, ensuring your application operates efficiently, securely, and seamlessly behind the scenes."
            },
          ].map(({ title, description }, index) => (
            <div key={index} className="relative border " >
              <div className={cn("absolute rounded-tl-xl rounded-br-xl w-20 h-32 rotate-45 right-0 m-16", index === 1 ? "bg-yellow-700 " : index === 0 ? "bg-cyan-700" : "bg-purple-700")} />

              <div className="relative z-50 rounded-md p-4 flex flex-col gap-2 bg-background/10 backdrop-blur-2xl " >
                <div className="text-lg font-semibold" >
                  {title}
                </div>
                <div>
                  {description}
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="container flex flex-col gap-2 justify-center text-center" >
        <h1 className="text-2xl" >
          My Projects
        </h1>
        <p>
          Some of the projects i created for customers
        </p>
      </div>

      <div className="container grid lg:grid-cols-2 gap-4" >
        {
          [
            {
              title: "Yerapos",
              description: "Yerapos is a SaaS-based online platform designed to assist shop owners in efficiently managing their businesses, including tasks such as shop operations, staff, inventory, purchases, sales, and more.",
              image: yerapos,
              demoUrl: "https://yerapos.com"
            },
            {
              title: "Barber Shop",
              description: "The Barber Shop website is a showcase created for a French client, with the aim of establishing an online presence.",
              image: coif,
              codeUrl: "https://github.com/ChoaibMouhrach/coiffure"
            },
            {
              title: "Dicton",
              description: "Dicton is a comprehensive full-stack web application developed for a local company that provides carpets throughout the entire country. This system effectively handles various aspects of the company's operations, including managing staff, suppliers, inventory, procurement, warehouses, sales, and expenses. The application is constructed using Next.js, TypeScript, MySQL, and PlanetScale.",
              image: dicton,
            },
            {
              title: "Mass Calculator",
              description: "The Mass Calculator is a website designed for calculating an individual's body mass. It offers a user-friendly platform for accurately determining body mass based on inputted data, such as weight and height, and provides valuable insights into one's overall health and fitness.",
              image: massCalc
            },
            {
              title: "Pricing Page",
              description: "A Subscription Pricing Page has been meticulously designed for a Software as a Service (SaaS) offering. This page presents a user-friendly interface that showcases various subscription plans and pricing tiers, along with comprehensive details about the features, benefits, and pricing options for potential customers to make informed decisions.",
              image: pricing
            },
            {
              title: "You Can Challenge",
              description: "For a secure authentication we are using Magic Links, means every time you want to sign in you are going to be using your email, that means a hack will not be able to access your account because there is no password for that, - enjoy easy authication with magic links and OAuth",
              image: ycanChallenge,
              demoUrl: "https://ycan-challenge.yerapos.com/",
              codeUrl: "https://github.com/ChoaibMouhrach/coding-challenges"
            }
          ].map(({ title, description, image, demoUrl, codeUrl }, index) => (
            <div className="relative h-96 rounded-md overflow-hidden border" key={index}  >
              <Image src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-background/70 flex justify-end flex-col p-4 gap-2"  >
                <div className="text-xl font-semibold" >
                  {title}
                </div>
                <div>
                  {description}
                </div>
                <div className="flex items-center gap-2" >
                  {
                    demoUrl && (
                      <Button size="sm" asChild >
                        <Link href={demoUrl} target="_blank"  >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                    )
                  }
                  {
                    codeUrl && (
                      <Button size="sm" asChild >
                        <Link href={codeUrl} target="_blank" >
                          <Code className="w-4 h-4" />
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="container flex flex-col gap-2 justify-center text-center" >
        <h1 className="text-2xl" >
          What Clients Says
        </h1>
        <p>
          What my previous clients have to say about me
        </p>
      </div>

      <div className="container grid lg:grid-cols-3 gap-4" >
        <div className="lg:col-start-1 lg:col-end-3 rounded-md border backdrop-blur-2xl p-4 flex flex-col gap-2" >
          <p className="text-lg font-bold" >
            Youness 🇮🇹
          </p>
          <p className="text-muted-foreground" >
            <Quote className="w-4 h-4 inline text-primary rotate-180 mr-2" /> Chaoib is an experienced developer who assisted me in creating and deploying my web app. He managed the deployment, including the domain name and hosting. It was a fantastic experience. <Quote className="w-4 h-4 inline text-primary ml-2" />
          </p>
        </div>

        <div className="lg:col-start-3 lg:col-end-4 row-start-1 row-end-3 rounded-md border p-4 flex flex-col gap-2" >
          <p className="text-lg font-bold" >
            Jamal 🇲🇦
          </p>
          <p className="text-muted-foreground" >
            <Quote className="w-4 h-4 inline text-primary rotate-180 mr-2" /> Choaib is an exceptional software developer with a strong expertise in JavaScript and React. I had the pleasure of working closely with him on several projects, and I must say that he consistently impressed me with his technical skills and problem-solving abilities. <Quote className="w-4 h-4 inline text-primary ml-2" />
          </p>
        </div>

        <div className="border p-4 rounded-md flex flex-col gap-2">
          <p className="text-lg font-bold" >
            Nikifor 🇲🇰
          </p>
          <p className="text-muted-foreground" >
            <Quote className="w-4 h-4 inline text-primary rotate-180 mr-2" /> Choaib is the type of freelancer yo are looking for on this platform. Very professional and has all the required skills. You won&apos;t regret working with him! <Quote className="w-4 h-4 inline text-primary ml-2" />
          </p>
        </div>

        <div className="border p-4 rounded-md flex flex-col gap-2">
          <p className="text-lg font-bold" >
            Bader 🇲🇦
          </p>
          <p className="text-muted-foreground" >
            <Quote className="w-4 h-4 inline text-primary rotate-180 mr-2" /> Choaib assisted me with my drop service project, successfully resolving all the bugs and addressing all related issues. <Quote className="w-4 h-4 inline text-primary ml-2" />
          </p>
        </div>
      </div>

      <Contact />
      <Footer />
      <Nav />
    </div>
  )
}
