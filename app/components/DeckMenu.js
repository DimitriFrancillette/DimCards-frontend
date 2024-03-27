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
                    <h3 className='text-2xl'>Deck Name</h3>
                </div>
                <div>
                    <div className='bg-success w-10 h-10 rounded-full flex justify-center pt-2' onClick={() => handleClose()}>
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
                    <Image className='mr-2' src={'/img/icon-champion.svg'} width={24} height={24} style={{ width: "auto", height: "auto" }} alt={"Champion Icon"} />
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

        </div>
    )
}

export default DeckMenu;
