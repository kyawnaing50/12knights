import React from 'react'
import lw from "../assets/map/lwin.jpg"
import AutherComponet from '../components/AutherComponet';
import Title from '../components/Title';


const Auther = () => {
    return (
      <div className=" mt-5">
        <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူများ" />
        <div className=" flex w-full h-full bg-bodyColor shadow-testShadow z-10 mx-auto">
          <AutherComponet
            img={author}
            name="U Kyaw Naing"
            degree="BCSc, MCSc"
            email="zayyarzawye@gmail.com"
          />
        </div>
      </div>
    );
}

export default Auther