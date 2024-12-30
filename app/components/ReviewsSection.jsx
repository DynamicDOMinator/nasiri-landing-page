import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Miller",
      username: "sarah_m",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/review.png",
    },
    {
      name: "James Wilson",
      username: "james_w",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/review.png",
    },
    {
      name: "Emma Davis",
      username: "emma_d",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/review.png",
    },
    {
      name: "Michael Brown",
      username: "michael_b",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/review.png",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-right"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 768px) 64px, 64px"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-gray-600">{review.username}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <AskLawyerBtn />
      </div>
    </section>
  );
}
