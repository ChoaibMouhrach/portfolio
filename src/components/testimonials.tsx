import { Quote } from "lucide-react";
import Section from "./section";

const testimonials = [
  {
    id: 1,
    name: "Sarah T.",
    comment:
      "Absolutely Outstanding Service! The team went above and beyond to address my needs promptly. I'm impressed by their professionalism and attention to detail. Truly a game-changer for my business.",
    createdAt: "August 27, 2023",
    profession: "Entrepreneur",
  },
  {
    id: 2,
    name: "John M.",
    comment:
      "Life-changing Results! Thanks to their expertise, I achieved my goals faster than I ever thought possible. Their guidance has been invaluable, and I'm grateful for the remarkable journey they've taken me on.",
    createdAt: "August 25, 2023",
    profession: "Consultant",
  },
  {
    id: 3,
    name: "Emily R.",
    comment:
      "A Partner I Can Trust. Working with them felt like collaborating with old friends who genuinely cared about my success. They listened, strategized, and delivered exceptional solutions. Highly recommended!",
    createdAt: "August 23, 2023",
    profession: "Designer",
  },
  {
    id: 4,
    name: "David L.",
    comment:
      "Turning Vision into Reality. The team's creativity and skill transformed my vague ideas into a stunning reality. Their dedication to capturing my essence in their work was impressive. I'm elated with the outcome.",
    createdAt: "August 20, 2023",
    profession: "Artist",
  },
  {
    id: 5,
    name: "Michelle S.",
    comment:
      "Effortlessly Professional. From start to finish, the experience was seamless. Their clear communication and expertise eliminated any stress I had. It's rare to find a team so committed to customer satisfaction.",
    createdAt: "August 18, 2023",
    profession: "Writer",
  },
  {
    id: 6,
    name: "Michael D.",
    comment:
      "Exceeded My Expectations. As a discerning client, I had high hopes. They not only met but surpassed them with their innovative solutions. These folks have earned my trust and loyalty.",
    createdAt: "August 15, 2023",
    profession: "Tech Enthusiast",
  },
];

export default function Testimonials() {
  return (
    <Section
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      title="Capturing the Voices of Delighted Clients."
      description="Dive into a collection of succinct yet impactful testimonials that resonate with the exceptional experiences our clients have had. Their words reflect the depth of satisfaction and success they've achieved through our services."
    >
      {testimonials.map((testimonial) => (
        <div
          className="bg-gray-50 rounded-md overflow-hidden flex flex-col gap-4 border border-primary"
          key={testimonial.id}
        >
          <div className="p-4 flex-1">
            {'"'}
            {testimonial.comment}
            {'"'}
          </div>
          <div className="p-4 text-semibold bg-primary text-white relative flex flex-col gap-2">
            <p className="text-sm">{testimonial.name}</p>
            <p className="italic">{testimonial.profession}</p>
            <div className="p-4 bg-primary text-white absolute right-4 rounded-full -top-7">
              <Quote />
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
