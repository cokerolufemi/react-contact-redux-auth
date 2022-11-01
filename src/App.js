import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, db } from "./Firebase/configure";
import { useDispatch } from "react-redux";
import { addUser } from "./actions/userActions";
import { collection, query, onSnapshot } from "firebase/firestore";
import Routers from "./Routers";
import { onAuthStateChanged } from "firebase/auth";
import { authUser } from "./actions/userAuthentication";
import Home from "./pages/Home";

function App() {
  const data = useDispatch();
  const q = query(collection(db, "contact"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const contact = [];
    querySnapshot.forEach((doc) => {
      contact.push(doc.data());
    });
    data(addUser(contact));
    // console.log(contact);
  });

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        data(authUser(users));
        console.log(users);
      } else {
        data(authUser(null));
      }
    });
  }, [data]);
  return (
    <div className="App">
      <Routers />
      {/* <Home /> */}
    </div>
  );
}

export default App;
