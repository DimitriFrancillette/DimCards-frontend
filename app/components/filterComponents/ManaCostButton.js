import { useState, useEffect } from 'react';

const ManaCostButton = ({ selectedCost, cost, costClear }) => {
    const [isBorderActive, setIsBorderActive] = useState(false);

    const handleCost = (cost) => {
        selectedCost(cost);
        setIsBorderActive(!isBorderActive);
    };

    useEffect(() => {
        setIsBorderActive(false);
    }, [costClear])

    let buttonText = cost.toString();
    if (buttonText === '7') { buttonText = '7+' };

    return (
        <div>
            <button className={isBorderActive ? "btn btn-circle btn-sm bg-error text-slate-200 border-2 border-yellow-500" : "btn btn-circle btn-sm bg-error text-slate-200"} onClick={() => handleCost(cost)}>
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default ManaCostButton