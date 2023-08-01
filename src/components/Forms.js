import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";

function Forms({ userData, setUserData, number, setNumber, name, setName }) {
  
//Form Submission functionality
  const handleSubmit = (event) => {
    event.preventDefault();
     const id = userData.length ? userData[userData.length - 1].id + 1 : 1;
      setUserData([...userData, { name, number,id }]);
      setName("");
      setNumber("");
  };

  //Delete functionality
  const handleDelete = (id) => {
    const updatedUserData = userData.filter((data) => data.id !== id);
    setUserData(updatedUserData);
  };

  return (
    <div>
      <section className="main_container  ">
        <main className="form_main p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="position-relative">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div class="mb-4">
              <div class="position-relative">
                <label for="number" className="form-label">
                  Number
                </label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </main>
        <div className="user_main">
        <h2 style={{justifyContent:'center', textAlign:'center', margin:'auto'}}>User Data:</h2>
        <ul className="ul_list">
          {userData.map((user) => (
            <li className="user mb-2" key={user.id}>
              {user.name} - {user.number}
              <FaTrashAlt className="delete"
              onClick={() => handleDelete(user.id)}
            />
            </li>
          )
          )}
        </ul>
      </div>
      </section>
    </div>
  );
}

export default Forms;
