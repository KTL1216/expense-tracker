import { useRef } from 'react';
import firebase from '../database/firebase';


function Form({ expense, setExpense }) {
    const desc = useRef(null);
    const price = useRef(null);
    const date = useRef(null);

    const addExpense = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setExpense([...expense, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }])

        const todoRef = firebase.database().ref('Expense');
        const item = {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        };

        todoRef.push(item);

        desc.current.value = null;
        price.current.value = null;
        date.current.value = null;
    }

    return (
        <form className="expense-form" onSubmit={addExpense}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Expense Description" ref={desc} />
                <input type="number" name="price" id="price" placeholder="Amount Spent" ref={price} />
                <input type="date" name="date" id="date" placeholder="Expense Date" ref={date} />
                <input type="submit" value="Add Expense" />
            </div>
        </form>
    )
}

export default Form
