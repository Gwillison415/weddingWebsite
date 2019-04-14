import React from 'react'
import thailandbeach from './../../assets/images/thailandbeach.png';
import generalFund from './../../assets/images/generalfund.jpg';
import flightFund from './../../assets/images/flightfund.jpg';
import ambopoppin from './../../assets/images/ambopoppin.jpg';
import burnEating from './../../assets/images/burnEating.jpg';
import burn15 from './../../assets/images/burn15.jpg';
import cheers from './../../assets/images/cheers.jpg';
import coragrantskydive from './../../assets/images/coragrantskydive.png';
import {Accordion, Grid} from 'semantic-ui-react'
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
    const {cardWidth} = this.state;
console.log('cardWidth', cardWidth);
    return (
  <ResponsiveContainer>
  <Grid container stackable verticalAlign='middle'>
      <Grid.Row style={{padding: 25}}>
          <Grid.Column width={cardWidth}>
            <RegistryCard link={'https://paypal.me/pools/c/8dveSDj1Bq'} header={'General Fund'}
            meta={'Activities, food, gas'}
            description={"This one's like giving to the gov't, or an elephant"} imageSrc={generalFund} />
          </Grid.Column>
          <Grid.Column width={cardWidth}>
            <RegistryCard link={'https://paypal.me/pools/c/8dvfyPiem8'}
             header={'Flight Fund'}
             meta={'Pinkies in the air'}
             imageSrc={flightFund}
             description={'Apparently, we have expensive taste'} />
          </Grid.Column>
          <Grid.Column width={cardWidth}>
            <RegistryCard link={'https://paypal.me/pools/c/8dvgf1hr6P'}
             header={'RV Rental'}
             meta={'$75-125 p/night'}
             imageSrc={ambopoppin}
             description={'Who needs Hotels when you can get one on wheels?'} />
          </Grid.Column>
          <Grid.Column width={cardWidth}>
            <RegistryCard link={'https://paypal.me/pools/c/8dvh9hgnrR'}
             header={'Buy us dinner!'}
             meta={'$30-$100'}
             imageSrc={burnEating}
             description={'You alone, can prevent us from eating like savages'} />
          </Grid.Column>



        <Grid.Column width={cardWidth}>
          <RegistryCard link={'https://paypal.me/pools/c/8dvhBpfQCk'}
           header={'Booze: On Location'}
           meta={'$15'}
           imageSrc={cheers}
           description={"A Toast! L'Chaim! לחיים"} />
        </Grid.Column>
        <Grid.Column width={cardWidth}>
          <RegistryCard link={'https://paypal.me/pools/c/8dvj7ayKw4'}
           header={'Skydiving '}
           meta={'$650'}
           imageSrc={coragrantskydive}
           description={'Jumpin out of a perfectly working plane sounds crazy, but over Franz Josef Glacier? even more so'} />
        </Grid.Column>
        <Grid.Column width={cardWidth}>
          <RegistryCard link={'https://paypal.me/pools/c/8dveSDj1Bq'}
           header={'Hobbiton Movie Tour'}
           meta={'$116'}
           imageSrc={burn15}
           description={"Fictional hobbit town brings wide eyed joy to new bride in a far away land"} />
        </Grid.Column>
        <Grid.Column width={cardWidth}>
          <RegistryCard link={'https://paypal.me/pools/c/8dvkoRRUPz'}
           header={'HoneyMoon Suite: Fiji Addition*'}
           meta={'$250/night'}
           description={"*Location May vary: picture does not represent actual location.. That's Thailand."} imageSrc={thailandbeach} />
        </Grid.Column>
      </Grid.Row>
</Grid>
  </ResponsiveContainer>
)}}
// <div></div>
export default Registry

 // <Grid.Column style={{ padding: '.5em 1em' }} width={cardWidth}>
 // <RegistryCard link={'https://paypal.me/pools/c/8dveSDj1Bq'} header={}
 // meta={} description={} ></RegistryCard>
 //  </Grid.Column>
