/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function CountdownTimer({ onSubmit }) {
    const [isActive, setIsActive] = useState(false);

    // adding current timer to local storage
    const [seconds, setSeconds] = useState(
        parseInt(localStorage.getItem('timer') || 300)
    );

    useEffect(() => setIsActive(true), []);

    // Countdown logic
    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    localStorage.setItem('timer', prevSeconds - 1);
                    return prevSeconds - 1;
                });
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        if (seconds === 0) {
            onSubmit();
            setIsActive(false);
            clearInterval(interval);
            localStorage.removeItem('timer');
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, onSubmit, setIsActive]);

    // formatting time in min and sec.
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <>
            {/* <div className='w-full bg-gray-500 text-end pr-52'>
                <div className='text-3xl p-2 '>Time Remaining: {formatTime(seconds)}</div>
            </div> */}
            <div className="flex bg-[#21212c] items-center justify-center">
                <div className="flex items-center justify-center w-full h-full gap-2">
                    <span className="text-2xl text-white font-bold text-center tracking-wide">
                        Remaining time :
                    </span>
                    <div className='pr-20'>
                        <div className=" p-2">
                            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-20 lg:h-20 flex justify-between items-center bg-[#343650] rounded-lg">
                                <div className="relative h-2 w-2 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
                                <span className="lg:text-4xl sm:text-3xl text-3xl font-semibold text-[#a5b4fc]">
                                    {formatTime(seconds)}
                                </span>
                                <div className="relative h-2 w-2 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CountdownTimer
