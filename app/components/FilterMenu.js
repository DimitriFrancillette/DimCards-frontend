import Image from "next/image";
import RegionButton from "./filterComponents/RegionButton";
import ManaCostButton from "./filterComponents/ManaCostButton";
import { useState } from "react";

const FilterMenu = (props) => {
    const [regionClear, regionSetClear] = useState(false);
    const [costClear, costSetClear] = useState(false);

    const selectedRegion = (region) => {
        props.selected({ region });
        if (region === "Clear") { regionSetClear(!regionClear) };
    }

    const selectedCost = (cost) => {
        props.selected({ cost });
        if (cost === "Clear") { costSetClear(!costClear) };
    }

    const handleType = (type) => {
        props.selected({ type })
    }

    const handleRarity = (rarity) => {
        props.selected({ rarity })
    }

    const handleClose = () => {
        props.closeFilter(false)
    }

    return (
        <div className='px-3 w-1/3 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
            <div className='mt-6 flex justify-between'>
                <h3 className='text-3xl'>Filters</h3>
                <div>
                    <button className="btn btn-circle bg-success hover:bg-success hover:opacity-70 " onClick={() => handleClose()}>
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
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => handleType("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <div>
                    <button className="btn btn-ghost justify-start" onClick={() => handleType("Unit")}>
                        <Image className='mr-2' src={'/img/icon-unit.svg'} width={24} height={24} alt={"Follower Icon"} />
                        <div>Follower</div>
                    </button>

                    <button className="btn btn-ghost justify-start" onClick={() => handleType("Spell")}>
                        <Image className='mr-2' src={'/img/icon-spell.svg'} width={24} height={24} alt={"Spell Icon"} />
                        <div>Spell</div>
                    </button>
                </div>
                <div>
                    <button className="btn btn-ghost justify-start" onClick={() => handleType("Landmark")}>
                        <Image className='mr-2' src={'/img/icon-landmark.svg'} width={24} height={24} alt={"Landmark Icon"} />
                        <div>Landmark</div>
                    </button>

                    <button className="btn btn-ghost justify-start" onClick={() => handleType("Equipment")}>
                        <Image className='mr-2' src={'/img/icon-equipment.svg'} width={24} height={24} alt={"Equipment Icon"} />
                        <div>Equipment</div>
                    </button>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Rarity</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => handleRarity("Clear")}>
                    Clear
                </button>
            </div>

            <div className='flex justify-around min-h-24'>
                <div className='flex flex-col justify-around'>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRarity("Champion")}>
                        <Image className='mr-2' src={'/img/champion.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Champion
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRarity("Epic")}>
                        <Image className='mr-2' src={'/img/epic.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Epic
                    </button>
                </div>
                <div className='flex flex-col justify-around'>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRarity("Rare")}>
                        <Image className='mr-2' src={'/img/rare.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Rare
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRarity("Common")}>
                        <Image className='mr-2' src={'/img/common.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Common
                    </button>
                </div>
            </div>

            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Keywords</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => handleRarity("Clear")}>
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