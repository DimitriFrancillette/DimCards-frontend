import { useState, useEffect } from 'react';

const ManaCostButton = ({ selectedCost, cost, costClear }) => {
    const [circleButton, setCircleButton] = useState("btn btn-circle btn-sm bg-error text-slate-200");

    const handleCost = (cost) => {
        selectedCost(cost);

        if (circleButton === "btn btn-circle btn-sm bg-error text-slate-200") {
            setCircleButton("btn btn-circle btn-sm bg-error text-slate-200 border-2 border-yellow-500")
        } else {
            setCircleButton("btn btn-circle btn-sm bg-error text-slate-200")
        }
    };

    useEffect(() => {
        setCircleButton("btn btn-circle btn-sm bg-error text-slate-200")
    }, [costClear])

    let buttonText = cost.toString();
    if (buttonText === '7') { buttonText = '7+' };

    return (
        <div>
            <button className={circleButton} onClick={() => handleCost(cost)}>
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default ManaCostButton