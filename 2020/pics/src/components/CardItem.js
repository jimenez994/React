import React from 'react';
import { Image, Modal } from 'semantic-ui-react'
// import "./style.css";


const CardItem = (props) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal className="modal-img"
      basic
      size="tiny"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="img-button"><img src={props.img.urls.small} alt={props.img.alt_description}/></button>}
    >
      <Modal.Content >
        <Image size="large"  src={props.img.urls.regular} centered />
      </Modal.Content>
    </Modal>
    )
}

export default CardItem;
