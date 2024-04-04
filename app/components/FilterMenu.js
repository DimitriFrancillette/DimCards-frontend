import Image from "next/image";

const FilterMenu = (props) => {

    const handleRegion = (region) => {
        props.selected({ region });
    }

    const handleCost = (cost) => {
        props.selected({ cost });
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
    //TODO MODIFICATION DES BOUTONS REGIONS FAITE? FAIRE POUR LE BOUTON DE FERMTURE ET D OUVERTURE AINSI QUE LE RESTE
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
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => handleRegion("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <div className="flex flex-col gap-y-2">
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("BandleCity")}>
                        <Image src={'/img/icon-bandlecity.png'} width={24} height={24} alt={"Bandle City Icon"} />
                        <div>Bandle City</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Bilgewater")}>
                        <Image src={'/img/icon-bilgewater.png'} width={24} height={24} alt={"Bilgewater Icon"} />
                        <div>Bilgewater</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Demacia")}>
                        <Image src={'/img/icon-demacia.png'} width={24} height={24} alt={"Demacia Icon"} />
                        <div>Demacia</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Freljord")}>
                        <Image src={'/img/icon-freljord.png'} width={24} height={24} alt={"Freljord Icon"} />
                        <div>Freljord</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Ionia")}>
                        <Image src={'/img/icon-ionia.png'} width={24} height={24} alt={"Ionia Icon"} />
                        <div>Ionia</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Noxus")}>
                        <Image src={'/img/icon-noxus.png'} width={24} height={24} alt={"Noxus Icon"} />
                        <div>Noxus</div>
                    </button>
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("PiltoverZaun")}>
                        <Image src={'/img/icon-piltoverzaun.png'} width={24} height={24} alt={"Piltover & Zaun Icon"} />
                        <div>Piltover & Zaun</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Runeterran")}>
                        <Image src={'/img/icon-runeterra.png'} width={24} height={24} alt={"Runeterran Icon"} />
                        <div>Runeterran</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("ShadowIsles")}>
                        <Image src={'/img/icon-shadowisles.png'} width={24} height={24} alt={"Shadow Isles Icon"} />
                        <div>Shadow Isles</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Shurima")}>
                        <Image src={'/img/icon-shurima.png'} width={24} height={24} alt={"Shurima Icon"} />
                        <div>Shurima</div>
                    </button>
                    <button className="btn btn-ghost justify-start" onClick={() => handleRegion("Targon")}>
                        <Image src={'/img/icon-targon.png'} width={24} height={24} alt={"Targon Icon"} />
                        <div>Targon</div>
                    </button>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Mana Cost</div>
                <button className="btn btn-ghost font-extrabold text-lg" onClick={() => handleCost("Clear")}>
                    Clear
                </button>
            </div>
            <div className='flex justify-around'>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(0)}>
                    <div>0</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(1)}>
                    <div>1</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(2)}>
                    <div>2</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(3)}>
                    <div>3</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(4)}>
                    <div>4</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(5)}>
                    <div>5</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(6)}>
                    <div>6</div>
                </button>
                <button className="btn btn-circle btn-sm bg-error text-slate-200" onClick={() => handleCost(7)}>
                    <div>7+</div>
                </button>
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