import { useEffect, useState } from "react";
import { catFactsSelector } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { getCatFacts } from "../../store";

// const catFactsSelector = (state) => state.catFacts;

export const CatFactsPage = () => {
    const dispatch = useDispatch();
    const { catFacts, pending, error } = useSelector(catFactsSelector);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        dispatch(getCatFacts());
    }, [dispatch]);

    if (pending) {
        return <p>Pending...</p>;
    }

    if (error) {
        return <p>Error. Something went wrong</p>;
    }

    return (
        <div className="wrapper cat-facts">
            <h1>Cat facts</h1>
            {catFacts.map((fact) => (
                <p className="cat-facts__text" key={fact._id}>
                    {fact.text}
                </p>
            ))}
            <div className="cat-facts__form">
                <label for="amount">Amount: </label>
                <input
                    id="amount"
                    onChange={(e) => setAmount(e.target.value)}
                    className="cat-facts__input"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                />
                <button
                    className="cat-facts__button"
                    onClick={() => dispatch(getCatFacts(amount))}
                >
                    Get
                </button>
            </div>
        </div>
    );
};
