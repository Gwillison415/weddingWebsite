import React from 'react'
import { Card, Icon, Button, Image } from 'semantic-ui-react'

const RegistryCard = ({imageSrc, header, meta, description, link}) => (
  <Card fluid style={{minHeight: 440}} >
    <Image src={imageSrc} />
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Meta>{meta}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button  href={link} content='Pick Me' />
    </Card.Content>
  </Card>
)

export default RegistryCard






// <a href={link}>
//   <Icon name='user' />
//   10 Friends
// </a>
