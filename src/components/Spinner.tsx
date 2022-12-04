import Wheel from '../assets/Wheel.svg'
import Wheel2 from '../assets/Wheel.png'
import Marker from '../assets/marker.png'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';



type setWinningOffer = React.Dispatch<React.SetStateAction<string[]>>
interface Props {
    setWinningOffer: setWinningOffer
}

const Spinner: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const { setWinningOffer } = props;


    const spin = useRef<null | HTMLImageElement>(null)
    const start = useRef<null | HTMLButtonElement>(null)
    let deg = 0;
    const zoneSize = 60 //degree

    const offerZones = new Map;

    offerZones.set(6, "30% Sitewide Off")
    offerZones.set(5, "Buy 1 Get 1 Free")
    offerZones.set(4, "Free Coffee Mug On Purchase Worth ₹1000+")
    offerZones.set(3, "Buy 2 Effervescent Tablets and Get 1 Free")
    offerZones.set(2, "Free 50g Tea On Purchase of ₹500")
    offerZones.set(1, "Hot Chocolate Free With Tea")

    const handleWin = (actualDeg: number) => {
        const val = actualDeg / zoneSize;
        const ceilVal = Math.ceil(val);
        const floorVal = Math.floor(val);

        const offer = [];
        if (val < 1) {
            offer.push(ceilVal);
            offer.push(offerZones.get(ceilVal))
            setWinningOffer(offer);
        } else {
            if (Math.abs(floorVal - val) < Math.abs(ceilVal - val)) {
                offer.push(floorVal);
                offer.push(offerZones.get(floorVal));
                setWinningOffer(offer)
            } else {
                offer.push(ceilVal)
                offer.push(offerZones.get(ceilVal))
                setWinningOffer(offer)
            }
        }
        setTimeout(() => {
            navigate("/success")
        }, 1000)
    }

    const handleSpin = () => {
        if (spin.current != null && start.current != null) {
            deg = Math.floor(5000 + Math.random() * 5000);
            spin.current.style.transition = "all 10s ease-out"
            spin.current.classList.add('blur')
            spin.current.style.transform = `rotate(${deg}deg)`
        }
    }

    const handleTransitionEnd = () => {
        if (spin.current != null && start.current != null) {
            spin.current.style.transition = 'none'
            const actualDeg = deg % 360;
            spin.current.classList.remove('blur')
            spin.current.style.transform = `rotate(${actualDeg}deg)`

            handleWin(actualDeg)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className='relative'>
                    <img ref={spin} onTransitionEnd={handleTransitionEnd} src={Wheel} alt="A spinner wheel" />
                    <img src={Marker} className='w-[65px] md:w-[80px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[62%] z-10' alt="marker" />
                </div>
            </div>
            <button ref={start} className='bg-secondary font-sans text-3xl mt-6 font-bold text-white py-4 rounded-full w-2/6 z-10' onClick={handleSpin}>SPIN</button>
        </div>
    )
}

export default Spinner