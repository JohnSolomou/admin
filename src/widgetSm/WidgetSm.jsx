import { useState, useEffect } from "react";
import axios from "axios";
import "./widgetSm.css";
// import woman from "../../src/woman.jpg";
import { Visibility } from "@material-ui/icons";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTA1ZjliZTRiZmEzYTBhOWMxYTQ5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzcwNDUwNiwiZXhwIjoxNjc0MTM2NTA2fQ.HMMoV-ThhfWE0ZkW6IZClsc2LB_2zf6cuQBR3yaJqjE",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgeSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, id) => (
          <li key={id} className="widgetSmListItem">
            <img
              src={
                "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" ||
                user.profilePic
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
