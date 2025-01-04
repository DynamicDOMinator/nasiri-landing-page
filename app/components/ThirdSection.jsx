import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function ThirdSection() {
  return (
    <div className="py-10 md:py-14">
      <div className="flex items-center justify-center gap-4">
        <div className="h-[2px] md:w-60 w-20 bg-blue-600"></div>
        <h3 className="text-center md:text-4xl text-2xl font-bold text-blue-900">
          مجالات عملنا
        </h3>
        <div className="h-[2px] md:w-60 w-20 bg-blue-600"></div>
      </div>

      <div className="grid md:grid-rows-2 gap-20 lg:max-w-7xl mx-auto pt-10 md:pt-20 px-10 md:px-0 " data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20 md:px-10 lg:px-0" dir="rtl">
          <div className="flex items-start gap-4 ">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon1.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">استشارة الشركات</h4>
            <p className="pt-2">
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>
            
           
          </div>


          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon2.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">التمثيل القضائي</h4>
            <p className="pt-2">
            محامون من ذوى الخبرة الطويلة في تحصيل الحقوق والدعاوى المدنية
            </p>
          </div>
            
           
          </div>

          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon3.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">القضايا العمالية</h4>
            <p className="pt-2">
            اعداد عقود العمل والترافع. التحصيل الحقوق العمانية وحقوق اصحاب العمل
            </p>
          </div>
            
           
          </div>
          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon4.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">القضايا الجنائية</h4>
            <p className="pt-2">
            محامون جنائيون بخبرات عالية . مستعدون للدفاع عن المظلومين واصحاب الحق
            </p>
          </div>
            
           
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-20 md:px-10 lg:px-0" dir="rtl">
        <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon5.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">فض النزاعات</h4>
            <p className="pt-2">
            نؤمن بأن الطريق الأسهل لحن النزاعات ودياً يسهم بتحصيل الحقوق باقصر الطرق
            </p>
          </div>
            
           
          </div>

          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon6.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">الملكية الفكرية</h4>
            <p className="pt-2">
            خدمات تسجيل العلامات التجارية وبراءات الاختراع وكل ما يتعلق بالملكية الفكرية
            </p>
          </div>
            
           
          </div>

          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon7.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">الأحوال الشخصية</h4>
            <p className="pt-2">
            متمرسون بقضايا الاحوال الشخصية قدم النصح والارشاد وتسهر على الحصير
            </p>
          </div>
            
           
          </div>

          <div className="flex items-start gap-4">
            <div className="border-l-2 border-blue-600 pl-2 ">
                <Image
              className="w-[100px] h-[70px] mx-auto md:mx-0"
              src="/icon8.png"
              alt="lawyer"
              width={500}
              height={500}
              />
            </div>
          <div className="text-right">
             <h4 className="text-2xl font-bold">خدمات الشركات</h4>
            <p className="pt-2">
            تسجيل الشركات الوطنية والاجنبية وادارة الشئون القانونية للشركات
            </p>
          </div>
            
           
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <AskLawyerBtn />
      </div>
    </div>
  );
}
