import Image from "next/image";
import AskLawyerBtn from "./AskLawyerBtn";
export default function SecondSection() {
  return (
    <div className="py-10">
      <div>
        <h3 className="text-center md:text-4xl text-2xl font-bold">طريقتنا</h3>
        <p className="text-center md:text-xl text-sm pt-2">
          نلتزم بتقديم حلول قانونية مبتكرة وفعالة تحمي حقوقك وتحقق أهدافك
        </p>
      </div>

      <div
        dir="rtl"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 lg:px-20 md:px-10 px-5"
      >
        <div className="bg-gray-200 w-full h-[500px] rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center text-2xl font-bold">1</p>
            <p className="text-right font-semibold text-2xl pt-3">
              <span className="border-b-2 border-black pb-1">ادخل</span> طلبك
            </p>
            <p className="text-right text-lg text-gray-800 pt-1">
              هدفنا في نصيري هو ان نسهل عليك عملية البحث علي مزودي الخدمات اجب
              علي بعض الاسئلة وقم بإدخال معلومات الاتصال بك نصيري يضمن الحفاظ
              علي سرية معلوماتك
            </p>
          </div>
          <Image
            className="w-full h-[300px] object-cover rounded-lg"
            src="/image.png"
            alt="ابحث عن محامي"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-gray-200 w-full h-[500px] rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center text-2xl font-bold">2</p>
            <p className="text-right font-semibold text-2xl pt-3">
              <span className="border-b-2 border-black pb-1">تلقي </span>
              عدة عروض الاسعار وقارنها
            </p>
            <p className="text-right text-lg text-gray-800 pt-1">
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

        <div className="bg-gray-200 w-full h-[500px] rounded-lg flex flex-col justify-between">
          <div className="px-4 pt-4">
            <p className="text-center text-2xl font-bold">3</p>
            <p className="text-right font-semibold text-2xl pt-3">
              <span className="border-b-2 border-black pb-1">اكتب </span>
              تعليق عن تجربتك ما بعد الخدمة
            </p>
            <p className="text-right text-lg text-gray-800 pt-1">
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

      <AskLawyerBtn />
    </div>
  );
}
