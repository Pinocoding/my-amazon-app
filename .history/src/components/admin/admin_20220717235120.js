import { useState, useEffect } from "react";
import "./admin.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Admin() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  //
  const [newId, setNewId] = useState("");
  const [newTitle, setTitle] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newCategory, setCategory] = useState("");
  const [newImage, setImage] = useState("");
  const [newRating, setRating] = useState("");
  //

  //
  const createHeadSetsProduct = async () => {
    await addDoc(headSetProDuctsCollectionRef, {
      id: newId,
      title: newTitle,
      name: newName,
      price: Number(newPrice),
      description: newDescription,
      category: newCategory,
      image: newImage,
      rating: Number(newRating),
    });
  };
  //
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [products, setProducts] = useState([]);
  const headSetProDuctsCollectionRef = collection(db, "products");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="admin">
      {products.map((product) => {
        return (
          <div>
            <button
              onClick={() => {
                createHeadSetsProduct(product.id, product.title);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser();
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create HeadSets</button>
    </div>
  );
}

export default Admin;
