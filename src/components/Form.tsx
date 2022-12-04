import { useState } from 'react'
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validator.isMobilePhone(phone) && validator.isEmail(email)) {
            // POST request API call
            // try {
            //     const response = await fetch(`https://test.com/api`, {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json"
            //         },
            //         body: JSON.stringify({
            //             email,
            //             phone
            //         })
            //     })
            //     if (!response.ok) {
            //         console.log("something went wrong...");
            //     } else {
            //         const data = response.json();
            //     }
            // } catch (error) {
            //     console.log(error)
            // }
            console.log(email, phone);
            navigate("/spin-to-win")
        } else {
            setError(true);
            console.log("check email or phone")
        }
    }

    return (
        <div className='mt-52 md:mt-12 px-4 pb-10 md:w-auto md:mr-28 lg:mr-0 lg:w-2/5'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1 className="text-3xl lg:text-4xl font-sans md:w-full lg:w-10/12 font-bold">This is how EngageBud looks in action!</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='relative'>
                            <i className='absolute left-3 top-1'><svg width="25" height="53" viewBox="0 0 66 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.50541 52.3786C4.21463 52.3786 3.08519 51.8945 2.11711 50.9265C1.14902 49.9584 0.664978 48.8289 0.664978 47.5382V5.58777C0.664978 4.29699 1.14902 3.16756 2.11711 2.19947C3.08519 1.23139 4.21463 0.747345 5.50541 0.747345H60.3636C61.6544 0.747345 62.7838 1.23139 63.7519 2.19947C64.72 3.16756 65.204 4.29699 65.204 5.58777V47.5382C65.204 48.8289 64.72 49.9584 63.7519 50.9265C62.7838 51.8945 61.6544 52.3786 60.3636 52.3786H5.50541ZM60.3636 10.0248L34.2253 27.1277C34.0102 27.2352 33.8085 27.3294 33.6202 27.41C33.432 27.4907 33.2034 27.531 32.9345 27.531C32.6656 27.531 32.437 27.4907 32.2488 27.41C32.0605 27.3294 31.8589 27.2352 31.6437 27.1277L5.50541 10.0248V47.5382H60.3636V10.0248ZM32.9345 23.1747L60.0409 5.58777H5.90878L32.9345 23.1747ZM5.50541 10.0248V10.5896V7.40293V7.44327V5.58777V7.44327V7.3626V10.5896V10.0248V47.5382V10.0248Z" fill="#49454F" />
                            </svg>
                            </i>
                            <input onChange={(e) => setEmail(e.target.value)} className={`w-full px-2 pl-12 py-4 outline-none ${error ? 'border-b-red-600' : 'border-b-secondary'} border-b-2 focus:ring-0 rounded-t-md`} type="text" placeholder='Email' />
                        </div>
                        <div className='relative'>
                            <i className='absolute left-3 top-1'><svg width="25" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M46.9049 49.6207C41.3157 49.6207 35.7609 48.2463 30.2404 45.4975C24.7199 42.7487 19.7606 39.1753 15.3625 34.7772C10.9645 30.3792 7.39103 25.4199 4.64223 19.8994C1.89344 14.3789 0.519043 8.82406 0.519043 3.23485C0.519043 2.3644 0.816829 1.63139 1.4124 1.03581C2.00797 0.440242 2.74098 0.142456 3.61143 0.142456H13.2322C13.8736 0.142456 14.4348 0.360069 14.9158 0.795294C15.3969 1.23052 15.7061 1.81464 15.8436 2.54765L17.699 11.2063C17.7906 11.8477 17.7792 12.4319 17.6646 12.9587C17.5501 13.4856 17.3096 13.9322 16.9431 14.2987L10.0711 21.2394C12.6366 25.5001 15.5114 29.2109 18.6954 32.3721C21.8795 35.5332 25.4872 38.2132 29.5188 40.4123L36.0472 33.6777C36.5053 33.1738 37.0322 32.8187 37.6277 32.6126C38.2233 32.4064 38.8189 32.3721 39.4145 32.5095L47.5921 34.2962C48.2793 34.4336 48.852 34.7772 49.3101 35.327C49.7682 35.8768 49.9973 36.5182 49.9973 37.2512V46.5283C49.9973 47.3988 49.6995 48.1318 49.104 48.7274C48.5084 49.3229 47.7754 49.6207 46.9049 49.6207ZM8.0095 17.4599L13.5758 11.8248L11.9953 4.26565H4.64223C4.64223 6.05236 4.91711 8.01088 5.46687 10.1412C6.01663 12.2715 6.86417 14.7111 8.0095 17.4599ZM45.8741 45.4975V38.1445L38.796 36.7014L33.3671 42.4051C35.2455 43.2756 37.2841 43.9857 39.4832 44.5355C41.6822 45.0852 43.8125 45.4059 45.8741 45.4975Z" fill="#49454F" />
                            </svg>
                            </i>
                            <input onChange={(e) => setPhone(e.target.value)} className={`w-full px-2 pl-12 py-4 outline-none ${error ? 'border-b-red-600' : 'border-b-secondary'} border-b-2 focus:ring-0 rounded-t-md`} type="text" placeholder='Phone number' />
                        </div>
                    </div>
                    <div className='mt-4 border-2 border-black rounded-md flex justify-evenly py-2'>
                        <input required type="checkbox" className='p-3 self-center rounded-sm focus:ring-0 bg-black outline-none checked:shadow-md checked:text-black active:ring-0' />
                        <p className='w-3/4 text-sm font-medium -ml-5'>
                            I agree to receiving recurring automated messages at the number I have provided.
                            Consent is not a condition to purchase.
                        </p>
                    </div>
                    <button className='bg-secondary font-sans text-3xl font-bold text-white mt-4 py-6 rounded-full'>
                        Try your luck
                    </button>
                    <div className='text-center mt-3 flex flex-col md:flex-row text-xs justify-evenly font-alt'>
                        <p>*You can spin the wheel only once!</p>
                        <p>*If you win, you can claim your coupon for 10 minutes only!</p>
                    </div>
                    <button className='text-2xl mt-4 flex gap-4 justify-center md:justify-end font-bold items-center'>No, I don't feel lucky <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></button>
                </div>
            </form>
        </div>
    )
}

export default Form