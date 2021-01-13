function Header({ total }) {
    return (
        <div>
            <header>
                <h1>Expense Tracker</h1>
                <div className="total">
                    ${total}
                </div>
            </header>
        </div>
    )
}

export default Header
