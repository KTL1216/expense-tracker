import ExpenseItem from './ExpenseItem'
import firebase from '../database/firebase';

function List({ expense, setExpense }) {
    
    const removeExpense = i => {
        const todoRef = firebase.database().ref("Expense").child(expense[i].id);
        todoRef.remove();
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="List">
            {
                expense.sort(sortByDate).map((value, index) => (
                    <ExpenseItem
                        key={index}
                        expense={value}
                        index={index}
                        removeExpense={removeExpense}
                    />
                ))
            }
        </div>
    )
}

export default List
