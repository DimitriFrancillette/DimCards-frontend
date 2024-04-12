import RegionButton from "./filterComponents/RegionButton";
import ManaCostButton from "./filterComponents/ManaCostButton";
import TypeButton from "./filterComponents/TypeButton";
import RarityButton from "./filterComponents/RarityButton";
import { useState } from "react";

const FilterMenu = (props) => {
    const [regionClear, setRegionClear] = useState(false);
    const [costClear, setCostClear] = useState(false);
    const [typeClear, setTypeClear] = useState(false);
    const [rarityClear, setRarityClear] = useState(false);

    const selectedRegion = (region) => {
        props.selected({ region });
        if (region === "Clear") { setRegionClear(!regionClear) };
    }

    const selectedCost = (cost) => {
        props.selected({ cost });
        if (cost === "Clear") { setCostClear(!costClear) };
    }

    const selectedType = (type) => {
        props.selected({ type });
        if (type === "Clear") { setTypeClear(!typeClear) };
    }

    const selectedRarity = (rarity) => {
        props.selected({ rarity })
        if (rarity === "Clear") { setRarityClear(!rarityClear) };
    }

    const handleClose = () => {
        props.closeFilter(false)
    }

    return (
        <div className='px-3 w-1/3 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
            <div className='mt-6 flex justify-between'>
                <h3 className='text-3xl'>Filters</h3>
                <div>
                    <button className="btn btn-circle bg-success hover:bg-success hover:opacity-70" onClick={() => handleClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Regions</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedRegion("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <div className="flex flex-col gap-y-2">
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="BandleCity" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Bilgewater" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Demacia" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Freljord" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Ionia" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Noxus" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="PiltoverZaun" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Runeterran" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="ShadowIsles" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Shurima" />
                    <RegionButton selectedRegion={selectedRegion} regionClear={regionClear} region="Targon" />
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Mana Cost</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedCost("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={0} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={1} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={2} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={3} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={4} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={5} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={6} />
                <ManaCostButton selectedCost={selectedCost} costClear={costClear} cost={7} />
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Types</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedType("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <div>
                    <TypeButton selectedType={selectedType} typeClear={typeClear} type="Unit" />
                    <TypeButton selectedType={selectedType} typeClear={typeClear} type="Spell" />
                </div>
                <div>
                    <TypeButton selectedType={selectedType} typeClear={typeClear} type="Landmark" />
                    <TypeButton selectedType={selectedType} typeClear={typeClear} type="Equipment" />
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Rarity</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedRarity("Clear")}>
                    Clear
                </button>
            </div>

            <div className='flex justify-around min-h-24'>
                <div className='flex flex-col justify-around'>
                    <RarityButton selectedRarity={selectedRarity} rarityClear={rarityClear} rarity="Champion" />
                    <RarityButton selectedRarity={selectedRarity} rarityClear={rarityClear} rarity="Epic" />
                </div>
                <div className='flex flex-col justify-around'>
                    <RarityButton selectedRarity={selectedRarity} rarityClear={rarityClear} rarity="Rare" />
                    <RarityButton selectedRarity={selectedRarity} rarityClear={rarityClear} rarity="Common" />
                </div>
            </div>

            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Keywords</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => selectedRarity("Clear")}>
                    Clear
                </button>
            </div>

            <div className='flex justify-center'>
                <select defaultValue="Any card keyword" className="select select-bordered w-full max-w-xs">
                    <option value="Any card keyword" disabled>Any card keyword</option>
                    <option value="Quick Attack">Quick Attack</option>
                    <option value="Elusive">Elusive</option>
                    <option value="Slow">Slow</option>
                    <option value="Overwhelm">Overwhelm</option>
                    <option value="Burst">Burst</option>
                    <option value="Regeneration">Regeneration</option>
                    <option value="Double Attack">Double Attack</option>
                    <option value="Fearsome">Fearsome</option>
                </select>
            </div>
        </div>
    )
}

export default FilterMenu;