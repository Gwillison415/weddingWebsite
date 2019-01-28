import React from 'react'
import {Accordion} from 'semantic-ui-react'
import ResponsiveContainer from '../home/ResponsiveContainer';

const panels = [
  {
    key: 'what-is-dog',
    title: 'Kid Friendly Event',
    content: {content : (<div>
      <p>There will games and activities ‘specially for the littles! We don’t think we could enjoy our day quite as much without the little giggles, squeals, and occasional whines of your special little spawns.
      </p>
      <p>We'd love to arrange on-site group childcare on the night of the reception so you can fully enjoy the party. Let us know if your little is interested in joining the sleepover party! We are thinking from 8 or 9pm until 1/2am or overnight the morning. Parent’s let us know your thoughts and what you would like to see.</p>
    </div>) }
  }, {
    key: 'kinds-of-dogs',
    title: 'My Invite didn’t include a +1 or only a +1? ',
    content: 'We’ve got a wonderful and large community that loves and supports us. Finding a venue to accommodate even our closest family and friends was difficult. That said, this is quite a large gathering and we’re not able to accommodate anyone not on the guest list. We really want to include everyone and share this special day with our beloveds - we hope you can find camaraderie with our diverse and friendly guests. If you have a special circumstance or a long term partner we didn’t account for, please let us know but otherwise any requests to bring a guest will likely be politely denied. ',
  }, {
    key: 'kinds-ofsda-wfsddogs',
    title: 'Is she changing her last name?',
    content: 'Yesish, adding it on.',
  }, {
    key: 'kinds-of-wf214ddogs',
    title: 'Wait, there are no bridesmaids/groomsmen?',
    content: 'Correct.'
  }, {
    key: 'acquire-dog',
    title: 'What is a feminist wedding?',
    content: {content : (<div>
      <p>
        A wedding crafted with consciousness of the sociopolitical implications of participation in a patriarchal system that has been used to oppress and deny primarily women, minorities, and people of color basic human rights for centuries. We have spent a great deal of time carefully examining traditions, challenging internalized beliefs about gender roles and the institution of marriage, and participating in the process in the most egalitarian way we could. We’ve chosen to forego some traditions, alter others, create new ones and make conscious efforts to incorporate social justice into our celebration. We’ve done this because it is what fits for us and honors this relationship we’ve founded and continue to build.
      </p>
      <p>
        We both believe it is in living our highest values where we create growth and transformation - something we wish to continue to engage in for the future. We value our relationship and the relationship with you - we welcome questions and curiosity. We believe having difficult conversations is core to development as a person and something we encourage with great fervor. As you come to bear witness to our union, we welcome you to bring your full authentic selves.
      </p>
    </div>)}
  }
]

export const Faq = () => (<div>
  <ResponsiveContainer>
    <Accordion className={'ParentContent'} exclusive={false} defaultActiveIndex={[0]} panels={panels}/>
  </ResponsiveContainer>
</div>)

export default Faq
