import Image from "next/image";
import { FaPen } from "react-icons/fa";

const DeckMenu = (props) => {

    const handleClose = () => {
        props.closeMenu(false)
    }

    return (
        <div className='px-3 basis-2/6 bg-cyan-700/75 h-screen overflow-y-auto pb-6'>
            <div className='mt-6 flex justify-between'>
                <div className='flex items-center'>
                    <FaPen className='size-6 mr-4' />
                    <input type="text" placeholder="Deck Name" className="input input-success w-72 bg-transparent text-xl placeholder-neutral-100" />
                </div>
                <div>
                    <div className='btn btn-circle bg-success hover:bg-success hover:opacity-70' onClick={() => handleClose()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-6 grid-rows-2 gap-y-2 mt-6 text-lg font-medium'>
                <div className='text-center'>6/6</div>
                <div className='text-center'>4</div>
                <div className='text-center'>14</div>
                <div className='text-center'>11</div>
                <div className='text-center'>5</div>
                <div className='text-center'>40/40</div>
                <div className='flex justify-center'>
                    <Image className='mr-2' src={'/img/ichampion.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Champion Icon"} />
                </div>
                <div className='flex justify-center'>
                    <Image className='mr-2' src={'/img/icon-unit.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Follower Icon"} />
                </div>
                <div className='flex justify-center'>
                    <Image className='mr-2' src={'/img/icon-spell.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Spell Icon"} />
                </div>
                <div className='flex justify-center'>
                    <Image className='mr-2' src={'/img/icon-landmark.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Landmark Icon"} />
                </div>
                <div className='flex justify-center'>
                    <Image className='mr-2 ' src={'/img/icon-equipment.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Equipment Icon"} />
                </div>
                <div className='flex justify-center'>
                    Total
                </div>
            </div>

            <div className="mt-8 h-screen flex flex-col gap-1 bg-secondary pt-2 px-2 rounded-md">
                <div className="h-12 rounded-2xl bg-gradient-to-r from-piltoverzaunColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            3
                        </div>
                        <div className="text-2xl">
                            Ezreal
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        2
                    </div>
                </div>
                <div className="h-12 rounded-2xl bg-gradient-to-r from-freljordColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            4
                        </div>
                        <div className="text-2xl">
                            Ashe
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        1
                    </div>
                </div>
                <div className="h-12 rounded-2xl bg-gradient-to-r from-ioniaColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            6
                        </div>
                        <div className="text-2xl">
                            Zephyr Sage
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        1
                    </div>
                </div>
                <div className="h-12 rounded-2xl bg-gradient-to-r from-demaciaColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            4
                        </div>
                        <div className="text-2xl">
                            Laurent Chevalier
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        3
                    </div>
                </div>
                <div className="h-12 rounded-2xl bg-gradient-to-r from-shadowislesColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            4
                        </div>
                        <div className="text-2xl">
                            Withering wail
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        2
                    </div>
                </div>
                <div className="h-12 rounded-2xl bg-gradient-to-r from-noxusColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100">
                    <div className="flex items-center min-w-40">
                        <div className="btn-circle btn-xs bg-error flex justify-center items-center mr-6">
                            5
                        </div>
                        <div className="text-2xl">
                            Vladimir
                        </div>
                    </div>
                    <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                        2
                    </div>
                </div>

                {/* --------------CARD IN DECK TESTING WITH backgroundImage */}
                {/* <div className="relative h-14 rounded-2xl overflow-hidden flex items-center text-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-demaciaColor to-transparent from-40% z-10"></div>
                    <div className="relative p-4 flex justify-between items-center w-full z-10">
                        <div className="flex justify-between items-center min-w-40">
                            <div className="btn-circle btn-xs bg-error flex justify-center items-center">
                                2
                            </div>
                            <p className="text-2xl">FIORA</p>
                        </div>
                        <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                            2
                        </div>
                    </div>
                    <div className="absolute w-full h-full left-42">
                        <div>
                            <Image
                                src="http://dd.b.pvp.net/4_12_0/set1/en_us/img/cards/01DE045-full.png"
                                fill
                                objectFit="cover"
                                objectPosition="0% 40%"
                            />
                        </div>
                    </div>
                </div> */}
                {/* --------------CARD IN DECK TESTING WITH backgroundImage */}
                
            </div>





        </div>
    )
}

export default DeckMenu;
