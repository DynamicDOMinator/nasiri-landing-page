import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Miller",
      username: "sarah_m",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "James Wilson",
      username: "james_w",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "Emma Davis",
      username: "emma_d",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "Michael Brown",
      username: "michael_b",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"data-aos="fade-up">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-right"
          >
           <div>
           <Image src={review.image} alt={review.name} width={100} height={100}/>

           </div>
            <p className=" text-blue-950">{review.text}</p>
            <div className="pt-10">
            <Image className="mr-auto border-4 border-zinc-900 rounded-full" src={review.avatar} alt={review.name} width={70} height={70}/>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <AskLawyerBtn />
      </div>
    </section>
  );
}
