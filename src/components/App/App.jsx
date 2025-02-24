import userData from "../../Data/userData.json";
import friends from "../../Data/friends.json";
import transactions from "../../Data/transactions.json"
import Friends from "../Friends/Friends"
import TransactionHistory from "../Tranactions/TransactionHistory"
import './App.module.css';
import Profile from "../Profile/Profile";

function App() {
  return (
    <>
      <h2>Завдання1</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <h2>Завдання2</h2>
      <Friends friends={friends} />
      <h2>Завдання3</h2>
       <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
