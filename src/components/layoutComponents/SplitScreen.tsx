import { ReactNode } from 'react'
import styled from 'styled-components'

type SplitScreenPropsType = {
    children: ReactNode[]
}

const Container = styled.div`
    display:flex;
`

const Pane = styled.div`
    flex:1;
`

function SplitScreen({ children }: SplitScreenPropsType) {
    const [left, right] = children

    return (
        <Container>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    )
}

export default SplitScreen