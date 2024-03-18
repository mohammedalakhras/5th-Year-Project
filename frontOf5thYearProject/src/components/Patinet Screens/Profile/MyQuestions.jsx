import React from "react";
import st from "./MyQuestions.module.css";
import QuestionComponent from "../QuestionComponent";
export default function MyQuestions() {
  const data = [
    {
      numAns: 10,
      ques: "ما هي أعراض وعلاج التهاب الحلق؟",
      tags: ["داخلية", "داخلية", "داخلية"],
    },
    {
      numAns: 10,
      ques: "ما هي أعراض وعلاج التهاب الحلق؟",
      tags: ["داخلية", "داخلية", "داخلية"],
    },
    {
      numAns: 2000,
      ques: "ما هي أعراض وعلاج التهاب التي تعرف ؟",
      tags: ["داخلية", "داخلية", "داخلية"],
    },
    {
      numAns: 8,
      ques: "ما هي أعراض وعلاج التهاب الحلق؟",
      tags: ["داخلية", "داخلية", "داخلية"],
    },
  ];
  return (
    <div className={st.container}>
      <div className={st.content}>
        <h2 className={st.head}>الأسئلة الخاصة بك</h2>
        <div className={st.queses}>
          {data.map((k, i) => {
            return <div className={st.ques}><QuestionComponent key={i} data={k} /> </div>;
          })}
        </div>
      </div>
    </div>
  );
}
