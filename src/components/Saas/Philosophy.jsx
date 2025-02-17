import React from "react";

const Philosophy = ({ rtl }) => {
  return (
    <section className="about section-padding style-5 style-6">
      <div className="content border-0 p-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 order-2 order-lg-0">
              <div className="section-head mb-30 style-5">
                <h2>
                  {rtl ? "كلمة" : "FinxLab's"}{" "}
                  <span>{rtl ? "عنّا" : "Philosophy"}</span>
                </h2>
              </div>
              <p>
                {rtl
                  ? "مثل أي وكالة متخصصة في تكنولوجيا المعلومات، نحن نتميز بالنتائج التي نقدمها لعملائنا. فريقنا ملتزم بتطوير مواقع ويب وحلول تقنية ذات معايير عالية تضمن استمرارية الأعمال."
                  : "Like any IT-focused company, we pride ourselves on the results we deliver to our clients. Our team is dedicated to building websites and tech solutions with high standards that ensure business continuity."}
              </p>
              <div className="line-links">
                <a href="#">
                  {rtl
                    ? "كن رائدًا في الابتكار التقني"
                    : "Lead in Technological Innovation"}
                </a>
                <a href="#">
                  {rtl ? "أفضل قيمة بأعلى جودة" : "Best Value with Top Quality"}
                </a>
                <a href="#">
                  {rtl ? "تحقيق النجاح الرقمي" : "Achieve Digital Success"}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img
                  src="/assets/img/about/superman_3d.png"
                  alt="Our Philosophy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s6_bubbles.png"
        alt="Bubbles"
        className="bubbles rotate-center"
      />
    </section>
  );
};

export default Philosophy;
