import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchData();
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setList(data);
        console.log("data : ", data);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log("error : ", error.message);
        setError(error.message);
      }
    }
  }, []);
  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       setList(res.data);
  //       console.log("data : ", list);

  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log("error : ", error.message);
  //       setError(error.message);
  //     });
  // }, []);
  return (
    <div className="list-container">
      {loading && <i className="fa fa-spinner fa-spin"></i>}
      {error && <p> {error} </p>}

      {list.map(({ id, email, name, phone, username, website, company }) => {
        return (
          // <div key={id} className="list card">
          //   <p>email :{email}</p>
          //   <p></p>
          //   <p>{phone}</p>
          //   <p>{username}</p>
          //   <p>{website}</p>
          //   <p>company: {company.name}</p>
          // </div>
          <div class="card text-center" key={id}>
            <div className="card-body">
              <h5 className="card-title">website:{name}</h5>
              <h5 className="card-title">username:{username}</h5>
              <p>website:{website}</p>

              <p className="card-text">company: {company.name}</p>
            </div>
            <div className="card-footer text-muted"> phone num:{phone}</div>
          </div>
        );
        //         email: "Sincere@april.biz"
        // id: 1
        // name: "Leanne Graham"
        // phone: "1-770-736-8031 x56442"
        // username: "Bret"
        // website: "hildegard.org"
      })}
    </div>
  );
};

export default UserList;
