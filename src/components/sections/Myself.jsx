import React from 'react'

const Myself = ({ img, title, desc, but }) => {
    return (
        <section className='sectionEl'>
            <div className='sectionText'>
                <div className='htTitle'>{title}</div>
                <div className='htDesc'>{desc}</div>
                {but ?
                    <a href="https://send.monobank.ua/4ayfuVfbhR" target='_black'>
                        <div className='htBut'>
                            <div className='htHelp'><img src={process.env.PUBLIC_URL + "/image/credit-cards.png"} alt="" />Підтримай мене</div>
                        </div>
                    </a>
                    : null}

            </div>
            <div>
                <div className='sectionImg'>
                    <img src={process.env.PUBLIC_URL + img} alt="" />
                    <div className='block imgBlockBlue'></div>
                    <div className='block imgBlockSky'></div>
                    <div className='block imgBlockPink'></div>
                </div>
            </div>

        </section>
    );
}

export default Myself;