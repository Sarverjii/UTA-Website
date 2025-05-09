import React, { useState } from 'react';
import RegistrationHeader from '../../components/RegistrationHeader/RegistrationHeader';
import RegisterPage1 from '../../components/Register/Register1/Register1';
import RegisterPage2 from '../../components/Register/Register2/Register2';
import RegisterPage3 from '../../components/Register/Register3/Register3';
import { UpdatePlayerTable } from '../../Firebase/UploadingData';

export default function Register() {
  const [Name, setName] = useState("");
  const [WhattsappNumber, setNumber] = useState("");
  const [DateOfBirth, setDob] = useState("");
  const [City, setCity] = useState("");
  const [T_Shirt_Size, setTshirt] = useState("");
  const [Shorts_Size, setShort] = useState("");
  const [FoodPreference, setFood] = useState("");
  const [StayPreference, setStay] = useState("");
  const [Event1, setEvent1] = useState("")
  const [Event2, setEvent2] = useState("")
  const [PartnerforEvent1, setPartner1] = useState("")
  const [PartnerforEvent2, setPartner2] = useState("")
  const [messagefromserver, setMessageFromServer] = useState("")
  const [loading, setLoading] = useState(true)
  
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prev => prev + 1)
  };

  const SubmitData = async () => {
  setLoading(true); 
  nextStep();


  const replyfromserver = await UpdatePlayerTable({ 
    Name: Name,
    WhatsappNumber: WhattsappNumber,
    DateOfBirth: DateOfBirth, 
    City: City, 
    T_Shirt_Size: T_Shirt_Size, 
    Shorts_Size: Shorts_Size, 
    FoodPreference: FoodPreference, 
    StayPreference: StayPreference, 
    Event1: Event1, 
    Event2: Event2, 
    FeePaid: false,
    Partner1ID : PartnerforEvent1,
    Partner2ID : PartnerforEvent2,
    
  });

  setLoading(false);
  setMessageFromServer(replyfromserver.message);
  console.log(replyfromserver.success, replyfromserver.message);
};

  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div>
      <RegistrationHeader />
      {step === 1 && (
        <RegisterPage1
          name={Name} setName={setName}
          number={WhattsappNumber} setNumber={setNumber}
          dob={DateOfBirth} setDob={setDob}
          city={City} setCity={setCity}
          tshirt={T_Shirt_Size} setTshirt={setTshirt}
          short={Shorts_Size} setShort={setShort}
          food={FoodPreference} setFood={setFood}
          stay={StayPreference} setStay={setStay}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <RegisterPage2
          name={Name}
          event1={Event1} setEvent1={setEvent1}
          event2={Event2} setEvent2={setEvent2}
          partner1={PartnerforEvent1} setPartner1={setPartner1}
          partner2={PartnerforEvent2} setPartner2={setPartner2}
          Submit={SubmitData}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <RegisterPage3 loading={loading} messagefromserver={messagefromserver} setLoading={setLoading}/>
      )}
    </div>
  );
}
