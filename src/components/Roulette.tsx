import { useLocation } from 'react-router-dom';
import Well from '../assets/Well.png'

function Roulette() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    return (
        <>
            {path != "spin-to-win" && <div className='flex justify-center md:w-3/4 lg:w-auto'>
                <img className='w-[200px] absolute -top-16 md:-left-40 lg:-left-0 md:top-72 lg:top-0 lg:relative md:right-40 lg:right-0 md:w-[350px] lg:w-[400px]' src={Well} />
            </div>}
        </>
    )
}

export default Roulette;