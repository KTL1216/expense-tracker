import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';
import firebase from "./database/firebase";

function App() {
  const [expense, setExpense] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const todoRef = firebase.database().ref("Expense");
    todoRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const itemsList = [];
      for (let id in items) {
        itemsList.push({ id, ...items[id] });
      }
      setExpense(itemsList);
    });
    let temp = 0;
    for (let i = 0; i < expense.length; i++) {
      temp += parseInt(expense[i].price);
    }
    setTotal(temp);
  }, [expense]);

  return (
    <div className="App">
      <Header total={total} />
      <Form expense={expense} setExpense={setExpense} />
      <List expense={expense} setExpense={setExpense}/>
    </div>
  );
}

export default App;
