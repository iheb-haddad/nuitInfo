import "./tip.css";
export default function Tip() {
  return (
    <div className="tipBox">
    <div className="tip">
        <img className="tipImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzRRXQaL1CAXvU9B6qPaPN_fanoh4X6n30w&usqp=CAU" alt="" />
      <div className="tipContent">
        <div className="tipTitle">Tip of the day</div>
        <div className="tipText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </div>
      </div>
    </div>
    </div>
  );
}