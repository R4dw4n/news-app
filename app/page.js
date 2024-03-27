import style from './page.module.css'
import FirstSec from '@/components/Sections/FirstSec';
import TypeNews from '@/components/TypeNews';
import SimpleSlider from '../components/SimpleSlider/index.jsx'
import Featurs from '@/components/Featurs/index.jsx';
import Pricing from '@/components/Pricing/Pricing';
export default async function Home() {
  return (
    <main main-page>
      <div className={style.first}><FirstSec /></div>
      <div><TypeNews category='world' count='15' /></div>
      <Pricing/>
      {/* <SimpleSlider />          */}
    </main>
  )
}
