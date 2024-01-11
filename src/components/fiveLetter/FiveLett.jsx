import React from 'react'

const FiveLett = () => {
    return (
        <section className='fiveLett'>
            <div className='flTitle'>
                П’ять головних літер
                ефективної допомоги
            </div>
            <div className='flFlex'>
                <div>
                    <div className='flLetter'>D</div>
                    <div className='flDesc'>Danger</div>
                </div>
                <div>
                    <div className='flLetter'>R</div>
                    <div className='flDesc'>Response</div>
                </div>
                <div>
                    <div className='flLetter'>A</div>
                    <div className='flDesc'>Airway</div>
                </div>
                <div>
                    <div className='flLetter'>B</div>
                    <di className='flDesc'>Breathing</di>
                </div>
                <div>
                    <div className='flLetter'>C</div>
                    <div className='flDesc'>Circulation</div>
                </div>
            </div>
            <div className='flBlockPink block'>
            </div>
            <div className='flBlockBlue block'>
            </div>
        </section>
    );
}

export default FiveLett;