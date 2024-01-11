import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';


const DetalsSteps = () => {
    return (
        <section>
            <div className='dsTitle'>Детально про кожен крок!</div>
            <div className='dsCont'>
                <NavLink to="/danger" className={({ isActive }) => isActive ? "dsTampleActive" : "dsTample"}>Danger <div><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="" /></div></NavLink>
                <Routes>
                    <Route path='/danger'
                    element={<div className='dsDesc'>Забезпечте собі фізичний, біологічний та юридичний захист. Обов'язково використовуйте засоби індивідуального захисту.  При наявності прямої загрози життю потерпілого розгляньте можливість екстреного транспортування.</div>}
                    ></Route>
                </Routes>
                <NavLink to="/response" className={({ isActive }) => isActive ? "dsTampleActive" : "dsTample"}>Response <div><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="" /></div></NavLink>
                <Routes>
                    <Route path='/response'
                    element={<div className='dsDesc'>Встановіть рівень свідомості потерпілого за шкалою AVPU, де А - притомний, V-реагує на голос, P- реагує на біль U- непритомний.</div>}
                    ></Route>
                </Routes>
                <NavLink to="/airway" className={({ isActive }) => isActive ? "dsTampleActive" : "dsTample"}>Airway <div><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="" /></div></NavLink>
                <Routes>
                    <Route path='/airway'
                    element={<div className='dsDesc'>Забезпечте прохідність дихальних шляхів потерпілому. Для непритомних постраждалих, у яких немає підозри на ушкодження шийного відділу хребта, застосуйте потрійний прийом Сафара. Якщо є підозра на таку травму, використовуйте подвійний прийом, постарайтесь зафіксувати шийний відділ хребта.</div>}
                    ></Route>
                </Routes>
                <NavLink to="/breathing" className={({ isActive }) => isActive ? "dsTampleActive" : "dsTample"}>Breathing <div><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="" /></div></NavLink>
                <Routes>
                    <Route path='/breathing'
                    element={<div className='dsDesc'>Визначте наявність та частоту дихання в постраждалого, огляньте грудну клітку на наявність проникаючих поранень та появи симптомів пневмотораксу. При відсутності дихання  викличте швидку та розпочніть СЛР.</div>}
                    ></Route>
                </Routes>
                <NavLink to="/circulation" className={({ isActive }) => isActive ? "dsTampleActive" : "dsTample"}>Сirculation <div><img src={process.env.PUBLIC_URL + "/image/arrow.png"} alt="" /></div></NavLink>
                <Routes>
                    <Route path='/circulation'
                    element={<div className='dsDesc'>Визначте наявність пульсу на магістральних судинах (сонна, плечова або стегнова артерія). Огляньте постраждалого на предмет виявлення критичних кровотеч. За відсутності пульсу викличте шидку та розпочніть СЛР.</div>}
                    ></Route>
                </Routes>
            </div>
        </section>
    );
}

export default DetalsSteps;