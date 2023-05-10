import React from "react";
import Header from "../../components/Header/Header";
import Selection from "../../components/Selection/Selection";

function Home() {
  return (
    <div className="home_div">
      <div className="header">
        <Header textInsert={"Login practice"} />
      </div>
      <div className="Link__">
        <Selection route={"/login"} linkName={"Login"} />
        <Selection route={"/register"} linkName={"Sigin"} />
      </div>
    </div>
  );
}

export default Home;
