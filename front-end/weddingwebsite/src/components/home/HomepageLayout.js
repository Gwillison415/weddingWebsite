import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from 'semantic-ui-react'
import Countdown from '../countdown/CountDown';
import ResponsiveContainer from './ResponsiveContainer';
// import header from '../../assets/images/header.png';
import Mccrarywedding from '../../assets/images/Mccrarywedding.jpg';
import theEx from '../../assets/images/theEx.jpg';
import gemNjam from '../../assets/images/gemNjam.jpg';
import Parrallax1 from '../parrallax/Parrallax1.js';
import Abridged from '../modals/Abridged.js';
import UserDash from '../userDash/UserDash';
const largeParagraphFont = { fontSize: '1.33em' }
const HomepageLayout = ({ signInMessage, user }) => {
  return (
    <ResponsiveContainer signInMessage={signInMessage} >
      {user.loginStatus ? <UserDash /> : <div></div>}

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={9}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                A Celebration of the Invincible Heart {signInMessage}
              </Header>
              <p style={largeParagraphFont}>
                "It doesn’t interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart’s longing. It doesn’t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive."
  
            </p>
              <p style={{ fontSize: '1.13em' }}>-Oriah Mountain Dreamer, 'The Invitation'</p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We Make Da Love Magic
            </Header>
              <p style={largeParagraphFont}>
                Yes thats right, you thought it was the stuff of dreams, movies and general socialized peer pressure; but we really believe, in the magic we weave.
            </p>
              <p style={largeParagraphFont}>You know, Love.. That thing that makes the world go 'round.. Just Saying</p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={Mccrarywedding} />
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row> */}
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
          <p style={largeParagraphFont}>
            We are thrilled to invite you to join us in celebration of the magic between us. We've poured love, energy, and our kookiness into this partnership building a solid foundation for a beautiful life. We're putting the same into a wonderful weekend to legalize our union and spend time with our nearest and dearest.
        </p>
        
          <Divider
           
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Story
            </Header>
          </Divider>

          <p style={largeParagraphFont}>
            It's a tale as old as time, two star crossed lovers missing each other by minutes, more than once, feeling the pull of something you just can't put a finger on, just out of reach. Still dancing and traipsing through life, opening their hearts to the universe, breaking them fully and refusing to become wilted by the agony of love. Reaching to their souls to seek their hearts longing. Fatefully, whimsically -without precoditions on the outcome - succumbing to the algorithms of mathematicians and silicon valley tech bros. He was piqued by her wee toof and she his mischievous grin. The lady running off at the twelfth stroke, leaving behind but a moment of authenticity. Reunited by fate, phones, and a touch of well timed humor. What followed is 3 years  dancing, joking, tackling the hard questions, embracing the adventure of life together, finding the beauty (and err--everything else) in the magic we weave together.  Sitting with pain, living with failure, celebrating and learning to trust standing in the fire together without shrinking back.. 
        </p>

          <Abridged>Abridged Version</Abridged>
        </Container>
      </Segment>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Couple, so humble"
            </Header>
              <p style={largeParagraphFont}>
                <Image style={{ display: 'inline-block' }} src={gemNjam} size='small' circular />
                What they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
            </Header>
              <p style={largeParagraphFont}>
                <Image style={{ display: 'inline-block' }} src={theEx} size='small' circular />
                <b>Sincerely</b> The Ex's
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment inverted vertical style={{ padding: '3em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={2}>
                <Header inverted as='h4' content='Contact' />
                <List link inverted style={{ display: 'inline-block' }}>
                  <List.Item >
                    <List.Icon name='mail square' />
                    <List.Content style={{ textAlign: 'center' }}>
                      <a href='mailto:keenewillison2019@gmail.com'>Email</a>
                    </List.Content>
                  </List.Item>
                  

                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as='h4' content='Nerd Stuff' />
                <List link inverted style={{ display: 'inline-block' }}>
                  <List.Item >
                    <List.Icon name='github' />
                    <List.Content style={{ textAlign: 'center' }}>
                      <a href='https://github.com/Gwillison415/weddingWebsite'>Source Code</a>
                    </List.Content>
                  </List.Item>
             
                  {/* <List.Item as='a'>DNA FAQ</List.Item> */}

                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Not Important' />
                <List link inverted style={{ display: 'inline-block' }}>
                  <List.Item >
                    <List.Icon name='shop' />
                    <List.Content style={{ textAlign: 'center' }}>
                      <a href='mailto:cballou.surf@gmail.com'>Banana Art Car Pre-Order</a>
                    </List.Content>
                  </List.Item>
                  <List.Item >
                    <List.Icon name='world' />
                    <List.Content style={{ textAlign: 'center' }}>
                      <a href=''>World Domination Plans</a>
                    </List.Content>
                  </List.Item>
                  {/* <List.Item as='a'>DNA FAQ</List.Item> */}

                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <h3 style={{marginTop: -25}}>
                  Hey!
              </h3>
                <h4>
                  If you've read this far, go ahead and login with the email you've provided us! You've only got <span style={{ display: 'inline-block' }}>{<Countdown minVisible={{
                    visibility: 'hidden'
                  }} endDate={' 13 Jul 2019 00:00:00'} ></Countdown>}</span>until we're celebrating!
              </h4>
              <h4>Why not start freaking out about _____ now, just like us!!</h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  )
}
export default HomepageLayout
