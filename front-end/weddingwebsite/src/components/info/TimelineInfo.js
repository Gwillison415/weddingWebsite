import React from 'react';
import Timeline from 'react-timeline-semantic-ui';

export const TimelineInfo = () => {

return (
   <div>
        <Timeline
            direction="left"
            icon="user"
            time="Friday, July 12th "
            title="Welcome BBQ"
            description="Come say Hello and enjoy a low key informal evening with us! Food and drinks provided. Bring your swim suits!"
            color="red"
            tags={['6:00pm – 9:00pm']}
            lineHeight={4}
        />
        <Timeline
            direction="right"
            classname={'forestGreen'}
            icon="user md"
            time="Saturday, July 13th "
            title="Hike in the Redwood Forest"
            description="Meet at Yokayo Ranch to carpool to Redwood Reserve approx. 30 mins away for a morning hike."
            color="teal"
            tags={['9:00am - 12:00pm']}
            lineHeight={4}
        />
        <Timeline
            direction="left"
            icon="user"
            time="Saturday, July 13th "
            title="Title"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
        <Timeline
            direction="right"
            icon="user md"
            time="Saturday, July 13th "
            title="Title"
            description="Description."
            color="green"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
        <Timeline
            direction="left"
            icon="user"
            time="Saturday, July 13th "
            title="Title"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
        <Timeline
            direction="right"
            icon="user md"
            time="Saturday, July 13th "
            title="Title"
            description="Description."
            color="green"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
        <Timeline
            direction="left"
            icon="user"
            time="Saturday, July 13th "
            title="Title"
            description="Description."
            color="red"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
        <Timeline
            direction="right"
            icon="user md"
            time="2nd Time"
            title="Title"
            description="Description."
            color="green"
            tags={['tag1', 'tag2']}
            lineHeight={4}
        />
   </div>
)
}