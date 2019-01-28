import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class Abridged extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button size='huge' onClick={this.handleOpen}>Abridged Version</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='large'
      >
        <Modal.Content>
          <h3>We met on tinder</h3>
        </Modal.Content>
        <Header icon='mobile' content='Swipin Right' />
        <Modal.Content>
          <h3>Be over it</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
