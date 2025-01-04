import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";

export default function SecondSection() {
  return (
    <div className="py-10 overflow-hidden">
      <div>
        <h3 className="text-center md:text-4xl text-2xl font-bold text-blue-900">طريقتنا</h3>
        <p className="text-center md:text-xl text-sm pt-2 text-blue-900">
          نلتزم بتقديم حلول قانونية مبتكرة وفعالة تحمي حقوقك وتحقق أهدافك
        </p>
      </div>

      <div
        dir="rtl"
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 place-items-center max-w-5xl pb-8 mx-auto pt-20 " data-aos="fade-left"
      >
        <div className="bg-gradient-to-t from-gray-300 to-white w-[325px]  h-[650px] shadow-2xl   rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center md:text-3xl text-xl text-orange-600 font-bold">
              1
            </p>
            <p className="mx-auto mt-3  w-fit font-semibold text-2xl pt-3">
              ادخل طلبك
            </p>
            <div className="w-8 h-[2px] mt-9 bg-orange-500 mx-auto"></div>
            <p className="text-center  text-gray-800 pt-4">
              هدفنا في نصيري هو ان نسهل عليك عملية البحث علي مزودي الخدمات اجب
              علي بعض الاسئلة وقم بإدخال معلومات الاتصال بك نصيري يضمن الحفاظ
              علي سرية معلوماتك
            </p>
          </div>
          <Image
            className="w-full h-[300px] object-cover rounded-lg mt-32"
            src="/image.png"
            alt="ابحث عن محامي"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-gradient-to-t from-gray-300 to-white w-[325px] h-[650px] shadow-2xl  rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center md:text-3xl text-xl text-orange-600 font-bold">
              2
            </p>
            <p className="mx-auto text-center  px-8 pb-1 w-fit font-semibold text-2xl pt-3">
              تلقي عدة عروض الاسعار وقارنها
            </p>
            <div className="w-8 h-[2px] my-3 bg-orange-500 mx-auto"></div>
            <p className="text-center text-lg text-gray-800 pt-1">
              عندما نتلقي طلبك نقوم بإرسال لمزودي الخدمة القريبين منك.مزودي
              الخدمة المتاحين والمهتمين سوف يرسلون عرض اسعار خاص لطلبك
            </p>
          </div>
          <Image
            className="w-full h-[300px] object-cover rounded-lg"
            src="/image2.png"
            alt="ابحث عن محامي"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-gradient-to-t from-gray-300 w-[325px] h-[650px] to-white shadow-2xl    rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center md:text-3xl text-xl text-orange-600 font-bold">
              3
            </p>
            <p className="mx-auto text-center px-8 pb-1 w-fit font-semibold text-2xl pt-3">
              اكتب تعليق عن تجربتك ما بعد الخدمة
            </p>
            <div className="w-8 h-[2px] my-3 bg-orange-500 mx-auto"></div>
            <p className="text-center text-lg text-gray-800 pt-1">
              عندما تتلقي عرض اسعار من مزود الخدمة راجع التقيمات مع العملاء
              السابقين وتفاوض علي السعر لا تنسي كتابة تعليقك الخاص ما بعد الخدمة
            </p>
          </div>
          <Image
            className="w-full h-[300px] object-cover rounded-lg"
            src="/image3.png"
            alt="ابحث عن محامي"
            width={500}
            height={500}
          />
        </div>
      </div>
<div className=" md:pt-7">

      <AskLawyerBtn />
</div>
    </div>
  );
}
