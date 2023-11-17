import React from 'react'
import Title from '../../Title'
import BiConv from './BiConv'
import IpClass from './IpClass';
import NH from './NH';
import Subnet from './Subnet';
import AutherComponet from '../../AutherComponet';
import kn from '../../../assets/auther/kyawnaing.png';
import NLH from '../../../assets/auther/NLH.png'
import THSN from '../../../assets/auther/thsn.png'

const IpAddress = () => {
    return (
      <>
        <div className="pt-2 pb-4">
          <Title title="IP Class" subtitle="‌ခွဲခြားခြင်း" />
          <IpClass />
        </div>
        <div className="pt-2 pb-4">
          <Title title="Network ID နဲ့ " subtitle="Host ID တွက်နည်း" />
          <NH />
        </div>
        <div className="pt-2 pb-4">
          <Title title="Decimal to Binary" subtitle="‌ပြောင်းလဲခြင်း" />
          <BiConv />
        </div>
        <div className="pt-2 pb-4">
          <Title title="Subnets" subtitle="‌ပုစ္ဆာတွက်ခြင်း" />
          <Subnet />
        </div>

        <div className=" pt-6 justify-center">
          <Title title="သင်ခန်းစာပြုစု" subtitle="‌ရေးသားသူများ" />
          <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center">
            <AutherComponet
              img={THSN}
              name="Advisor"
              degree="Thiha Sitt Naing"
              email="M.E(Automatic and Control)"
            />
            <AutherComponet
              img={NLH}
              name="Main Advisor"
              degree="Nay Lin Htet"
              email="BE.Mech(mechanical)"
            />
            <AutherComponet
              img={kn}
              name="Content Writer"
              degree="Kyaw Naing (M.C.Sc)"
              email=""
            />
          </div>
        </div>
      </>
    );
}

export default IpAddress
