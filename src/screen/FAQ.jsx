import React, { useEffect, useState } from "react";
import { faqs } from "../constant/faq";

function FAQ() {
  const [preItem, setPreItem] = useState(null);
  const [faqData, setFaqData] = useState(faqs);

  const showAnswer = (item, index) => {
    const copyFaq = [...faqData];

    for (let i = 0; i < copyFaq.length; i++) {
      if (i === index) {
        copyFaq[i].show = !copyFaq[i].show;
      } else {
        copyFaq[i].show = false;
      }
    }
    setFaqData(copyFaq)
  };

  return (
    <div className=" border-2 h-[500px] flex justify-center ">
      <div className=" border-2 h-full item w-[90%] ">
        <div className=" text-center text-[24px] " ><strong>FAQ</strong></div>
        {faqData?.map((item, index) => (
          <div key={item.id}>
            <div>
              <div
                className=" border-2 min-h-[60px] mt-7 bg-red-300 rounded-[10px] cursor-pointer flex items-center justify-between"
                onClick={() => showAnswer(item, index)}
              >
                <strong>
                 {item.question}
                </strong>
                {item.show === false ? (
                  <i className="fa-solid fa-plus text-[20px] mr-4  "></i>
                ) : (
                  <i className="fa-solid fa-minus text-[20px] mr-4 "></i>
                )}
              </div>
              {item.show === true ? (
                <div className=" border-2 min-h-[60px] mt-1 bg-red-200 rounded-[10px] flex items-center  ">
                  {item.answer}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
      {
        // console.log("faqData",faqData)
      }
    </div>
  );
}

export default FAQ;
