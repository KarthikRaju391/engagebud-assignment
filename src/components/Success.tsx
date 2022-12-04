import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface Props {
    winningOffer: string[]
}

const Success: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
    const { winningOffer } = props;

    const couponCodes = ["XAXPDF20", "HSDREU02", "YUEOSQ87", "UBCXAA10", "ASDERK45", "UIESLA65"]

    useEffect(() => {
        setCopied(false);
    }, [])

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(code);
        setCopied(true)
    }

    const handleClick = () => {
        navigator.clipboard.writeText(code);
        navigate("/")
    }

    const code = couponCodes[Number(winningOffer[0])];

    return (
        <div className='mt-52 md:mt-12 px-4 pb-10 lg:mr-0 md:ml-40 lg:ml-0 lg:w-2/5'>
            <form>
                <div className="sm:w-3/4 md:w-full mx-auto">
                    <h2 className="text-center text-3xl lg:text-3xl font-sans font-bold">Congrats! You Won: </h2>
                    <h1 className="text-center text-4xl lg:text-4xl font-sans font-bold mt-4">{winningOffer[1]}</h1>
                </div>
                <div className='flex flex-col items-center '>
                    <div className='flex mt-4 text-white justify-center w-3/4'>
                        <div className="bg-lightGreen rounded-l-md px-5 text-4xl md:text-5xl py-7 font-semibold">
                            {code}
                        </div>
                        <button onClick={(e) => handleCopy(e)} className="bg-secondary rounded-r-md text-2xl md:text-3xl flex items-center px-4 font-semibold">
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <button onClick={handleClick} className='bg-secondary font-sans text-2xl font-bold text-white mt-4 py-4 px-8 rounded-full'>
                        Close Panel &amp; Copy
                    </button>
                    <div className='text-center text-xs font-alt mt-3'>
                        <p>*You can claim your coupon for 10 minutes only!</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Success;