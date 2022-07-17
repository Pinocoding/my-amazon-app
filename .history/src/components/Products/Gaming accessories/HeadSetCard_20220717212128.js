import React, { useEffect, useState } from "react";
import { db } from "../../../components/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "../../DataLayer/Datalayer";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  const [{ basket }, dispatch] = useStateValue();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUsers();
  }, []);

  return (
    <div className="section-card">
      {/* <h4>RESUlT</h4> */}
      return (
      <div className="card">
        <img src={item.image} alt="" />

        <h1>{item.title}s</h1>
        <p className="price">{item.price}</p>
        <p className="card__description">{item.description}</p>
        <p>
          <button onClick={addToBasket}>Add to Cart</button>
        </p>
      </div>
      );
    </div>
  );
}

export default HeadSetsCard;
