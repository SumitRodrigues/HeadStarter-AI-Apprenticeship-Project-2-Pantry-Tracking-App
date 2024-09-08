'use client'
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const [total, setTotal] = useState(0);

  // Add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.price !== '') {
      await addDoc(collection(db, 'items'), {
        name: newItem.name.trim(),
        price: newItem.price,
      });
      setNewItem({ name: '', price: '' });
    }
  };

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      // Calculate Total
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce((sum, item) => sum + parseFloat(item.price), 0);
        setTotal(totalPrice);
      };
      calculateTotal();
    });
    return () => unsubscribe();
  }, []);

  // Delete item from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'items', id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-opacity-50" />

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        {/* 3D Text Effect for "Pantry Tracking App" */}
        <h1 className="text-5xl p-6 text-center text-white font-extrabold tracking-wide relative z-10 transform transition-all duration-500 ease-in-out hover:scale-105 pantry-title">
          Pantry Tracking App
        </h1>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg relative z-10">
          <form className="grid grid-cols-6 items-center text-black">
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="col-span-3 p-3 border"
              type="text"
              placeholder="Enter Item"
            />
            <input
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="col-span-2 p-3 border mx-3"
              type="text"
              placeholder="Enter $"
            />
            <button
              onClick={addItem}
              className="text-white bg-indigo-600 hover:bg-indigo-800 p-3 text-xl"
              type="submit"
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li key={id} className="my-4 w-full flex justify-between bg-slate-900 text-white">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>$ {item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="ml-8 p-4 border-l-2 border-slate-800 hover:bg-slate-700 w-16"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? (
            ''
          ) : (
            <div className="flex justify-between p-3 text-white">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .pantry-title {
          color: white;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          transform: perspective(500px) rotateX(10deg);
          letter-spacing: 2px;
        }

        .pantry-title:hover {
          transform: perspective(500px) rotateX(0deg) scale(1.05);
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
      `}</style>
    </main>
  );
}