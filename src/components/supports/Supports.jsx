import React from 'react'

const Supports = () => {
    return (
        <section>
            <div className='dsTitle'>Тренінг створений та проведений завдяки  </div>
            <div className='supFlex'>
                <div>
                    <div className='supImg'><img src={process.env.PUBLIC_URL + "/image/logobtee.png"} alt="" /></div>
                    <div className='supTitle'>Волонтерська спільнота “БТЄЄ”</div>
                    <div className='supDesc'>Борщагівка то є Європа – цивільна волонтерська спільнота, створена у 2019 році. Основні напрями роботи: прибиральні толоки, озеленення, вуличне освітлення і культурні заходи на Борщагівці. Також від початку повномасштабної війни – допомога ЗСУ. Тут кожен може реалізувати свій волонтерський проект та зробити простір навколо себе кращим.</div>
                </div>
        
            </div>
        </section>
    );
}

export default Supports;