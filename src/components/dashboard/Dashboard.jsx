import "./Dashboard.css";

const latestPosts = [
  {
    photo: "/profile.png",
    author: "Fares Gabsi",
    content:
      "Over 8 million tons of plastic find their way into our oceans annually, posing a serious threat to marine life",
  },
  {
    photo: "/profile.png",
    author: "Fares Gabsi",
    content:
      "Over 8 million tons of plastic find their way into our oceans annually, posing a serious threat to marine life",
  },
  {
    photo: "/profile.png",
    author: "Fares Gabsi",
    content:
      "Over 8 million tons of plastic find their way into our oceans annually, posing a serious threat to marine life",
  },
];

function Dashboard() {
  return (
    <div>
      <div className="headBody">
        {/* {props.screenWidth < 1160 && <FontAwesomeIcon icon={faBars} onClick={props.showNavbar} className='barIcon'/>} */}
        <div className="headBar">
          <div className="title">Explore Our Daily Quiz</div>
          <div className="iconsBar">
            <img src="./bell.png" alt="" />
            <img src="./Setting.png" alt="" />
            <div className="rounded-image">
              <img src="./profile.png" alt="" />
            </div>
          </div>
        </div>
        <div className="motivation">
          <div className="text">Let's Save The World 🌍</div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="contentBody">
        <div className="widgets">
          <div className="smallWidget">
            <img src="./Rectangle28.png" alt="" />
            <div className="statIcon">
              <div className="widgetText">
                <div className="title">Myth Or Fact ?</div>
                <div className="subtitle">Daily Quiz</div>
              </div>
              <img src="./Icon.png" alt="" />
            </div>
          </div>
          <div className="bigWidget">
            <div className="title">How Much Carbone you saved ?</div>
            <div className="subtitle">Looks Like You Did Great </div>
            <div className="stats">36 Co2</div>
          </div>
        </div>
        <div className="latest">
          <h2>Latest Posts</h2>
          {latestPosts.map((post, index) => (
            <div className="post" key={index}>
              <div className="postInfo">
                <img src={post.photo} alt="" />
              </div>
              <div className="postContent">
                <div className="postAuthor">{post.author}</div>
                <div className="postText">{post.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;