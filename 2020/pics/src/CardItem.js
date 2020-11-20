import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "./style.css";


const CardItem = (props) => {
  const [open, setOpen] = React.useState(false)

  console.log(props.img);
  return (
    <Modal className="modal-img"
      basic
      size="tiny"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      // centered
      trigger={<button className="img-button"><img src={props.img.urls.small} alt={props.img.alt_description}/></button>}
    >
      <Modal.Content >
        <Image size="large"  src={props.img.urls.regular} centered />
      </Modal.Content>
      {/* <Modal.Actions>
        <Button basic color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions> */}
    </Modal>
    )
}

export default CardItem;
