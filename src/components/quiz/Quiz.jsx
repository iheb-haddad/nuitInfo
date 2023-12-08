import "./quiz.css";

export default function Quiz() {
  return (
    <div className="quiz_container">
      <img src="/quiz_pic.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        tincidunt, odio elementum consectetur rutrum ?
      </p>
      <div className="quizzes">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="quiz">
            <input type="radio" name="choice" />
            Choice {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}