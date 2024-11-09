import DetalsSteps from '../detalsSteps/DetalsSteps';
import FiveLett from '../fiveLetter/FiveLett';

import Myself from '../sections/Myself';
import Supports from '../supports/Supports';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Myself img="/image/logoava.JPG" title='Трошки про мене' desc='Привіт, мене звуть Назарчук Олександра і я навчаюсь на 6! Курсі НМУ імені О.О. Богомольця,  а попередньо закінчила 5 курсів в ЛНМУ ім. Д. Галицького. Я створила для вас курс з домедичної допомоги, бо з власного досвіду знаю, на скільки важливим є питання надання домедичної допомоги, і впевнена, що знаючи прості алгоритми будь-хто може ефективно надати першу допомогу.' but={true}></Myself>
        <Myself img="/image/dosvid.jpg" title='Мій досвід' desc='Навесні 2022 я працювала волонтером-медиком в медико-психологічній службі Львівського  залізничного вокзалу. Через повномасштабне вторгнення РФ, Львів став транзитним пунктом для величезної кількості людей, які перебували в абсолютно різних, як психологічних, так і фізіологічних станах. Доводилось надавати допомогу різним категоріям людей - від психічно- до онкологічно-хворих. Також практичний досвід в реанімаційних відділеннях змусили цікавитись та вдосконалювати свої знання та навички в домедичній та першій медичній допомозі.'></Myself>
        <Myself img="/image/tr.jpg" title='Про тренінг' desc='На тренінгу  ми детально розглянемо алгоритми первинного огляду, які скеровані на виявлення основних життєво загрозливих станів та їх усунення. Запам’ятавши усього 5 літер або одне словосполучення  ви зможете ефективно надати допомогу. Тренінг буде симулятивним і ми не лише розберемо теорію, а і одразу спробуємо використати її на практиці!'></Myself>
        <FiveLett></FiveLett>
        <DetalsSteps></DetalsSteps>
        <Supports></Supports>
        <div className='responseBut'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJaj1Ww5bMXArZVa4ORZHBqczgAPM4TP9LQxW1gDwGA-oPbA/viewform?usp=sf_link" target='_black'>
            <div className='htBut'>
              <div className='htHelp'><img src={process.env.PUBLIC_URL + "/image/envelope.png"} alt="" />Залишити відгук</div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
