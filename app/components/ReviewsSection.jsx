import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function ReviewsSection() {
  const reviews = [
    {
      name: "أحمد",
      username: "sarah_m",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "محمود",
      username: "james_w",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "محمد",
      username: "emma_d",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
    {
      name: "خالد",
      username: "michael_b",
      text: "خدمة احترافية واستجابة سريعة. أنقذوني في قضية معقدة وتم حلها بشكل مثالي. أوصي بهم بشدة!",
      image: "/stars.png",
      avatar: "/review.png",
    },
  ];

  return (
    <section className="pb-6 mt-12 px-4 max-w-6xl mx-auto" dir="rtl">
      <div className="pb-16">
      <h4 className="text-center md:text-4xl text-2xl font-bold text-blue-900 ">
       
      من آراء عملاؤنا
      </h4>
      <p className="text-center  md:text-xl pt-5 text-lg text-blue-900">أكثر من ٥٠٠٠ تعليق إيجابي يعكس مدى سهولة الاستخدام والموثوقية العالية داخل المنصة</p>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"data-aos="fade-up">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-right"
          >
           <div>
           <Image src={review.image} alt={review.name} width={100} height={100}/>

           </div>
            <p className=" text-blue-600">{review.text}</p>
            <div className="pt-10 flex items-center justify-between flex-row-reverse">
            <Image className="border-4 border-orange-500 rounded-full" src={review.avatar} alt={review.name} width={70} height={70}/>
            <p className="text-blue-600 font-bold">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center md:py-3">
        <AskLawyerBtn />
      </div>
    </section>
  );
}
