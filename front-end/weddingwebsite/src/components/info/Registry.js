import React from 'react'
import thailandbeach from './../../assets/images/thailandbeach.png';
import generalFund from './../../assets/images/generalfund.jpg';
import flightFund from './../../assets/images/flightfund.jpg';
import ambopoppin from './../../assets/images/ambopoppin.jpg';
import burnEating from './../../assets/images/burnEating.jpg';
import burn15 from './../../assets/images/burn15.jpg';
import cheers from './../../assets/images/cheers.jpg';
import coragrantskydive from './../../assets/images/coragrantskydive.png';
import {Accordion, Grid, Container, Message,Button, Icon} from 'semantic-ui-react'
import ResponsiveContainer from '../home/ResponsiveContainer';
import RegistryCard from './RegistryCard'


const pStyle= {
  padding: '20px 5px',
}

// generalFund
export class Registry extends React.Component {
  constructor() {
      super();
      this.state = {
          iconSize: 'large',
          height: 1000,
          cardWidth: 5,
          cardStyle: {margin: '10px 0px'}
      }
  }

  updateDimensions = () => {
      const lineHeight = this.props.lineHeight ? this.props.lineHeight : 4;
      const isMobile = window.innerWidth <= 768;
      const iconSize = isMobile ? 'small' : 'large';
      const height = isMobile ? `${lineHeight * 350}px` : `${lineHeight * 250}px`;

      const cardWidth = isMobile ? 7 : 5;
      this.setState({ iconSize, height, cardWidth})
  }
  componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    const {cardWidth, cardStyle} = this.state;
console.log('cardWidth', cardWidth);
    return (
  <ResponsiveContainer>
  <Container>
  <Message style={{marginTop: '14px'}} >
   <Message.Header>Registy</Message.Header>
   <p>
   Honestly, being present in our lives and on our special day, even if only in spirit, is the only gift we want. Our community is abundant with the things we really need - love, care, and kindness.

That said, we know that gift giving is one of the main languages of love and some of you may feel compelled to express your love for us in this way. Whether you make it, sing it, write it, or buy it we are grateful to receive and will cherish your love.

   </p>
 </Message>
 <Message>
 <Message.Header>Traditional Gifting</Message.Header>
 <p>
  If you’d like to give a gift of material form, we too dwell in the realm of the living. Ergo we have a few things that would be helpful as we continue to build our home and life together.
 </p>
 <Button inverted color='violet' target='blank'  href='https://smile.amazon.com/wedding/cora-keene-grant-willison-ukiah-july-2019/registry/1GBLPCLHG6JW3'>
  <Icon name='gift' />'s Remaing: 233,134,678
</Button>
</Message>
<Message style={{marginTop: '14px'}} >
 <Message.Header>Registy</Message.Header>
 <p>
If you’d like to contribute to an experience we are also planning an epic honeymoon in Oct/Nov. to relish in our love and explore this crazy planet. We will be doing something that we love to do together - Camping and Road tripping! We will be flying to New Zealand and caravanning around the islands and will also make a brief stopover for some tropical lovemaking in Fiji. Traveling is something we really enjoy together and are incredibly grateful for your support of our adventure!
 </p>
 <Grid container stackable verticalAlign='middle'>
 <Grid.Row style={{padding: 25, margin: '35px 0px'}}>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dveSDj1Bq'} header={'Honey Fund'}
 meta={'Activities, food, gas'}
 description={"This one's like giving to the gov't, or an elephant"} imageSrc={generalFund} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvfyPiem8'}
 header={'Flight Fund'}
 meta={'Pinkies in the air'}
 imageSrc={flightFund}
 description={'Apparently, we have expensive taste'} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvgf1hr6P'}
 header={'RV Rental'}
 meta={'$75-125 p/night'}
 imageSrc={ambopoppin}
 description={'Who needs Hotels when you can get one on wheels?'} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvh9hgnrR'}
 header={'Buy us dinner!'}
 meta={'$30-$100'}
 imageSrc={burnEating}
 description={'You alone, can prevent us from eating like savages'} />
 </Grid.Column>



 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvhBpfQCk'}
 header={'Booze: On Location'}
 meta={'$15'}
 imageSrc={cheers}
 description={"A Toast! L'Chaim! לחיים"} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvj7ayKw4'}
 header={'Skydiving '}
 meta={'$650'}
 imageSrc={coragrantskydive}
 description={'Jumpin out of a perfectly working plane sounds crazy, but over Franz Josef Glacier? even more so'} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvjS3dcsT'}
 header={'Hobbiton Movie Tour'}
 meta={'$116'}
 imageSrc={burn15}
 description={"Fictional hobbit town brings wide eyed joy to new bride in a far away land"} />
 </Grid.Column>
 <Grid.Column style={cardStyle} width={cardWidth}>
 <RegistryCard link={'https://paypal.me/pools/c/8dvkoRRUPz'}
 header={'HoneyMoon Suite: Fiji Addition*'}
 meta={'$250/night'}
 description={"*Location May vary: picture does not represent actual location.. That's Thailand."} imageSrc={thailandbeach} />
 </Grid.Column>
 </Grid.Row>
 </Grid>
</Message>
  </Container>
  </ResponsiveContainer>
)}}
// <div></div>
export default Registry

 // <Grid.Column style={{ padding: '.5em 1em' }} style={cardStyle} width={cardWidth}>
 // <RegistryCard link={'https://paypal.me/pools/c/8dveSDj1Bq'} header={}
 // meta={} description={} ></RegistryCard>
 //  </Grid.Column>
