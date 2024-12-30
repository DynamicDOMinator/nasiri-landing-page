import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function ThirdSection() {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center gap-4">
        <div className="h-[2px] md:w-60 w-32 bg-[rgba(255,102,36,0.3)]"></div>
        <h3 className="text-center md:text-4xl text-2xl font-bold">
          مجالات عملنا
        </h3>
        <div className="h-[2px] md:w-60 w-32 bg-[rgba(255,102,36,0.3)]"></div>
      </div>

      <div className="grid md:grid-rows-2 gap-y-8 pt-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" dir="rtl">
          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image4.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">استشارات خدمات الشركات</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image5.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">التمثيل القضائي</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image6.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">القضايا العمالية</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image7.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">القضايا الجنائية</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4" dir="rtl">
          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image8.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">فض النزاعات</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0    "
              src="/image9.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">الملكية الفكرية</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image10.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">الأحوال الشخصية</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>

          <div className="text-center md:text-right">
            <Image
              className="w-[120px] h-[120px] mx-auto md:mx-0"
              src="/image11.png"
              alt="lawyer"
              width={500}
              height={500}
            />
            <h4 className="text-2xl font-bold py-3">خدمات الشركات</h4>
            <p>
              نخبة من المحامين والمستشارين القانونيين في خدمتكم على مدار الساعة
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <AskLawyerBtn />
      </div>
    </div>
  );
}
