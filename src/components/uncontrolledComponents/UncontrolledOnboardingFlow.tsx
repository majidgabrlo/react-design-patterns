import React, { ReactNode, useState, ReactElement } from "react"

function UncontrolledOnboardingFlow({ children, onFinish }: { children: ReactNode, onFinish?: () => void }) {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentChild = React.Children.toArray(children)[currentIndex]

    const goToNext = () => {
        setCurrentIndex(prev => prev+1)
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild as ReactElement<{ goToNext: () => void }>, { goToNext })
    }

    return <>{currentChild}</>
}

export default UncontrolledOnboardingFlow