import React, { ReactNode, ReactElement,useState } from "react"

function ControlledOnboardingFlow({ children, onFinish, currentIndex, onNext,onBoardingData }: { children: ReactNode[], onFinish?: () => void, currentIndex: number, onNext: (stepData: object) => void, onBoardingData: object }) {

    const currentChild = React.Children.toArray(children)[currentIndex]

    const goToNext = (stepData: object) => {
        onNext(stepData)
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild as ReactElement<{ goToNext: (stepData:object) => void }>, { goToNext })
    }

    return <>{currentChild}</>
}



// Sample

const StepOne = ({ goToNext }: { goToNext?: (data: object) => void }) => <><div>One</div> <button onClick={() => {if (goToNext) goToNext({ name: "Majid" })}}>Next</button></>
const StepTwo = ({ goToNext }: { goToNext?: (data: object) => void }) => <><div>Two</div> <button onClick={() => {if (goToNext) goToNext({ last: "Gabrlo" })}}>Next</button></>
const StepThree = ({ goToNext }: { goToNext?: (data: object) => void }) => <><div>Three</div> <button onClick={() => {if (goToNext) goToNext({ age: 25 })}}>Next</button></>


function App() {
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = (data: object) => {
    setOnboardingData({ ...onboardingData, ...data })
    setCurrentIndex(currentIndex + 1)
  }

  console.log(onboardingData);
  

  return <ControlledOnboardingFlow currentIndex={currentIndex} onBoardingData={onboardingData} onNext={onNext}>
    <StepOne />
    <StepTwo />
    <StepThree />
  </ControlledOnboardingFlow>
}


export default ControlledOnboardingFlow