import { ReactNode } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    background: rgb(0,0,0,.7);
    width:100%;
    height:100%;
    left:0;
    top:0;
`
const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`


function Modal({ children,onClose }: { children: ReactNode, onClose:()=>void }) {
    return (
        <>
            <ModalBackground onClick={onClose}>
                <ModalBody onClick={e=>{e.stopPropagation()}}>
                    {children}
                </ModalBody>
            </ModalBackground>
        </>
    )
}

export default Modal