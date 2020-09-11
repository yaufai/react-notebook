import React from "react"
import { ListGroup, ListGroupItem, Modal, ModalBody } from "reactstrap"
import { Selectable } from "./Selector"
import { SelectorContext } from "./SelectorContext"

export type SelectorModalProps = {
    isOpen: boolean,
    toggle: () => void
}

export default function SelectorModal(props: SelectorModalProps) {
    return <SelectorContext.Consumer>{value=> <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalBody>
            <ListGroup>{
                value.options.map((option: Selectable) => {
                    let color = value.isSelected(option.id) ? "success" : ""
                    return <ListGroupItem
                        color={color}
                        key={option.id}
                        onClick={() => value.change(option.id)}
                    >{option.label}</ListGroupItem>
                })
            }</ListGroup>
        </ModalBody>
    </Modal>}</SelectorContext.Consumer>
}