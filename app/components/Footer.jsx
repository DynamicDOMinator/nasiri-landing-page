import React from "react";


function Footer() {
  return (
    <footer className="bg-[#16498C] py-10 md:mt-4 mt-10 ">
      <div dir="rtl" className="container mx-auto px-4 flex flex-col">
        {/* Main content */}
        <div className="lg:w-10/12 w-full mx-auto">
          <h4 className="text-white text-xl font-bold mb-4 border-b border-white w-fit pb-4">عن نصيري</h4>
          <p className="text-white text-sm md:text-base lg:text-base mb-8">
             منصة تجمع بين المحامين المميزين والعملاء الباحثين عن الحلول
            القانونية بكل سهولة
          </p>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-white/20 mt-8 lg:w-10/12 mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-4 pt-4 text-white text-sm">
              <a href="#" className="hover:text-gray-300">
                شروط الاستخدام
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-gray-300">
                سياسة الخصوصية
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-gray-300">
                ملف تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
