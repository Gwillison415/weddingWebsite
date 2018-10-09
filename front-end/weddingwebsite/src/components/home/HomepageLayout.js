import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import ResponsiveContainer from './ResponsiveContainer';
import header from '../../assets/images/header.png';
import Mccrarywedding from '../../assets/images/Mccrarywedding.jpg';
import theEx from '../../assets/images/theEx.jpg';
import Parrallax1 from '../parrallax/Parrallax1.js';
import Abridged from '../modals/Abridged.js';
const HomepageLayout = () => {

  return (
  <ResponsiveContainer>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='center' width={12}>
            <Image src={header} style={{'marginLeft': '4rem', 'marginTop': '-2rem'}}>

            </Image>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              A Celebration of the Invincible Heart
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              "It doesn’t interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart’s longing.

It doesn’t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive."

-Oriah Mountain Dreamer, 'The Invitation'
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes thats right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={Mccrarywedding} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
      <Parrallax1></Parrallax1>
    </Segment>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          To our Family, and those we call friends: An invitation
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We are thrilled to invite you to join us in celebration of the magic between us. We've poured love, energy, and our kookiness into this partnership building a solid foundation for a beautiful life. We're putting the same into a wonderful weekend to legalize our union and spend time with our nearest and dearest.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Our Story
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          It's a tale as old as time, two star crossed lovers missing each other by minutes, feeling the pull of their beloved just out of reach. Dancing and traipsing through life, opening their hearts to the universe, breaking them fully and refusing to become wilted by the agony of love. Reaching to their souls to seek their hearts longing. Fatefully, whimsically succumbing to the algorithms of mathematicians and silicon valley tech bros. He was piqued by her wee toof and she his mischievous grin. The Goddess running off at the twelfth stroke, leaving behind a moment of authenticity. Found again only by opportune humor in state of inebriated glee. What followed is 3 years weaving magic, dancing wildly, embracing the adventure of life together. Sitting with pain, living with failure, celebrating ecstacy and standing in the fire - then a brisk February afternoon by a rushing waterfall shouting Fuck Yes.
        </p>

        <Abridged>Abridged Version</Abridged>
      </Container>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Couple"
            </Header>
            <p style={{ fontSize: '1.33em' }}>What they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image style={{display: 'inline-block'}} src={theEx} size='small' circular />
              <b>Sincerely</b> The Ex's
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)}
export default HomepageLayout
