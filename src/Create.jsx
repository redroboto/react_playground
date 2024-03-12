import { useState } from "react";

export function generateRandomId() {
  return Math.floor(Math.random() * 1000000000);
}

// crypto.randomUUID

// export function createUser(user, balance = 0, userId) {
//   const [userInfo, setUserInfo] = useState([]);

//   setUserInfo([
//     ...userInfo,
//     {
//       user: user,
//       balance: balance,
//       userId: userId,
//     },
//   ]);
// }

export function CreateUser() {
  const [userInfo, setUserInfo] = useState([
    {
      user: "",
      balance: 0,
      userId: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Input New User's Name</label>
        <input
          type="text"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
          required
        />

        <label htmlFor="">Input Initial Balance</label>
        <input
          type="number"
          name="balance"
          value={userInfo.balance}
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
