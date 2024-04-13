const ClearButton = ({ selectedFunction }) => {
    return (
        <div>
            <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedFunction("Clear")}>
                Clear
            </button>
        </div>
    )
}

export default ClearButton