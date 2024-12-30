import SubmitQuestion from "./SubmitQuestion";

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-fit w-full md:py-20 py-10"
      style={{ backgroundImage: "url('/HeroSection.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content container */}
      <div className="relative  mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row  justify-between gap-8 lg:gap-0">
          {/* Form section */}
          <div className="md:basis-1/2  ">
            <SubmitQuestion />
          </div>

          {/* Text content */}
          <div  className="md:basis-1/2   text-center lg:text-right md:pt-20 lg:pr-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              الحلول القانونية تبدأ من هنا
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              هو المصدر الأول للمعلومات والموارد القانونية المجانية على الإنترنت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
