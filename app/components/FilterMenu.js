import Image from "next/image";

const FilterMenu = (props) => {

    const handleRegion = (region) => {
        props.selected(region);
    }

    const handleClose = () => {
        props.closeFilter(false)
    }

    return (
        <div className='px-3 w-1/3 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
            <div className='mt-6 flex justify-between'>
                <h3 className='text-2xl'>Filters</h3>
                <div>
                    <div className='bg-success w-10 h-10 rounded-full flex justify-center pt-2' onClick={() => handleClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Regions</div>
                <div className="font-extrabold p-1 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info" onClick={() => handleRegion("Clear")}>Clear</div>
            </div>
            <div className='flex justify-around'>
                <div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("BandleCity")}>
                        <Image className='mr-2' src={'/img/icon-bandlecity.png'} width={24} height={24} alt={"Bandle City Icon"} />
                        <div>Bandle City</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Bilgewater")}>
                        <Image className='mr-2' src={'/img/icon-bilgewater.png'} width={24} height={24} alt={"Bilgewater Icon"} />
                        <div>Bilgewater</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Demacia")}>
                        <Image className='mr-2' src={'/img/icon-demacia.png'} width={24} height={24} alt={"Demacia Icon"} />
                        <div>Demacia</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Freljord")}>
                        <Image className='mr-2' src={'/img/icon-freljord.png'} width={24} height={24} alt={"Freljord Icon"} />
                        <div>Freljord</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Ionia")}>
                        <Image className='mr-2' src={'/img/icon-ionia.png'} width={24} height={24} alt={"Ionia Icon"} />
                        <div>Ionia</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Noxus")}>
                        <Image className='mr-2' src={'/img/icon-noxus.png'} width={24} height={24} alt={"Noxus Icon"} />
                        <div>Noxus</div>
                    </div>
                </div>
                <div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("PiltoverZaun")}>
                        <Image className='mr-2' src={'/img/icon-piltoverzaun.png'} width={24} height={24} alt={"Piltover & Zaun Icon"} />
                        <div>Piltover & Zaun</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Runeterran")}>
                        <Image className='mr-2' src={'/img/icon-runeterra.png'} width={24} height={24} alt={"Runeterran Icon"} />
                        <div>Runeterran</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("ShadowIsles")}>
                        <Image className='mr-2' src={'/img/icon-shadowisles.png'} width={24} height={24} alt={"Shadow Isles Icon"} />
                        <div>Shadow Isles</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Shurima")}>
                        <Image className='mr-2' src={'/img/icon-shurima.png'} width={24} height={24} alt={"Shurima Icon"} />
                        <div>Shurima</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info' onClick={() => handleRegion("Targon")}>
                        <Image className='mr-2' src={'/img/icon-targon.png'} width={24} height={24} alt={"Targon Icon"} />
                        <div>Targon</div>
                    </div>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Mana Cost</div>
                <p className="font-extrabold p-1 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info">Clear</p>
            </div>
            <div className='flex justify-around'>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>0</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>1</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>2</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>3</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>4</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>5</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>6</div>
                </div>
                <div className='bg-error text-slate-200 w-9 h-9 rounded-full flex justify-center pt-1.5 cursor-pointer hover:ring hover:ring-info'>
                    <div>7+</div>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Types</div>
                <p className="font-extrabold p-1 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info">Clear</p>
            </div>
            <div className='flex justify-around'>
                <div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/icon-champion.svg'} width={24} height={24} alt={"Champion Icon"} />
                        <div>Champion</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/icon-unit.svg'} width={24} height={24} alt={"Follower Icon"} />
                        <div>Follower</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/icon-spell.svg'} width={24} height={24} alt={"Spell Icon"} />
                        <div>Spell</div>
                    </div>
                </div>
                <div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/icon-landmark.svg'} width={24} height={24} alt={"Landmark Icon"} />
                        <div>Landmark</div>
                    </div>
                    <div className='my-4 p-1 flex min-w-28 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/icon-equipment.svg'} width={24} height={24} alt={"Equipment Icon"} />
                        <div>Equipment</div>
                    </div>
                </div>
            </div>
            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Rarity</div>
                <p className="font-extrabold p-1 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info">Clear</p>
            </div>

            <div className='flex justify-around min-h-24'>
                <div className='flex flex-col justify-around'>
                    <div className='flex rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/champion.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Champion
                    </div>
                    <div className='flex rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/epic.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Epic
                    </div>
                </div>
                <div className='flex flex-col justify-around'>
                    <div className='flex rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/rare.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Rare
                    </div>
                    <div className='flex rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info'>
                        <Image className='mr-2' src={'/img/common.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                        Common
                    </div>
                </div>
            </div>

            <div className='my-3 flex justify-around items-center'>
                <div className="divider divider-start divider-primary text-xl" style={{ width: '80%' }}>Keywords</div>
                <p className="font-extrabold p-1 rounded-md cursor-pointer hover:bg-secondary hover:ring hover:ring-info">Clear</p>
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