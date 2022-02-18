import img1 from './images/find-players.jpg'
import img2 from './images/find-local-events-small.jpg'
import img3 from './images/find-local-players.jpg'
import img4 from './images/available-players-small.jpg'
import img5 from './images/friends-list.jpg'
import img6 from './images/sports-network-small.jpg'
import img7 from './images/squadboss-big.jpg'
import img8 from './images/squadboss-small.jpg'
import img9 from './images/never-be-short.jpg'
import img10 from './images/find-local-players-small.jpg'

export const stories = [
    {
        url: "palME/jogging",
        title: "New Jogging Club in Town!",
        by: "Jane Doe",
        score: "5",
        time: "10 minutes ago",
        id: "1"
    },
    {
        url: "palME/running",
        title: "Looking for someone to run marathon with!",
        by: "Jack Doe",
        score: "3.5",
        time: "1 day ago",
        id: "2"
    },
    {
        url: "palME/announcements",
        title: "palME now in three more cities",
        by: "palME admin",
        score: "5",
        time: "1 week ago",
        id: "3"
    }
]
export const Reviews =  [
    {
        id:1,
        text: "It's super handy, helped me a lot!",
        auhor: "Marcus, PAL-ME user"
    }, 
    {
        id:2,
        text:"Fantastic app, definetly recommended it! ",
        auhor: "Tennis Club Amsterdam, PAL-ME Partner"
    },
    {
        id:3,
        text: "Lovely app, 5/5 stars from me!",
        auhor: "Andrea, PAL-ME user"
    }
]

export const ForPlayers = [
    {
        id: 1,
        text: "Set up your profile, tell us what sports you like and then wait for organisers to invite youto a game. Or, you can search all the games in your local area and ask to join!",
        title: "CREATE OR FIND LOCAL EVENTS",
        image: img1,
        positionedImg: img2,
        direction: "left"
    },
    {
        id: 2,
        text: "New to the area and eager to meet new sports buddies? Create a profile now!",
        title: "FIND NEW SPORTS BUDDIES",
        image: img3,
        positionedImg: img4,
        direction: "right"
    },
    {
        id: 3,
        text: "You will have the largest network of sports buddies if you join our one of a kind palME app!",
        title: "BUILD YOUR SPORTS NETWORK",
        image: img5,
        positionedImg: img6,
        direction: "left"
    }
]

export const ForOrganizers = [
    {
        id: 1,
        text: "Our interface is easy to navigate and straightforward to use! Do not hesitate to try it out, completely for free!",
        title: "EASY TO USE",
        image: img7,
        positionedImg: img8,
        direction: "left"
    },
    {
        id: 2,
        text: "Always lacking a player or two for a game of football? Look no more! Join palME now!",
        title: "NEVER BE SHORT OF PLAYERS",
        image: img9,
        positionedImg: img10,
        direction: "right"
    },
    {
        id: 3,
        text: "Are you a sports organization or a club with the need to advertise open places? Now you can do not only this but also all of the admin work in under than five minutes! No joke. It takes two minutes to set up your account and advertise your very first game. Once it is set up, you can send out some invites with just a few taps on your phone and keep track of your numbers every week!",
        title: "ADMIN DONE IN UNDER FIVE MINUTES",
        image: img7,
        positionedImg: img8,
        direction: "left"
    }
]


export const Sports = [
    {
        value: "Basketball"
    },
    {
        value: "Volleyball"
    },
    {
        value: "Golf"
    },
    {
        value: "Tennis"
    },
    {
        value: "Swimming"
    },
    {
        value: "Football"
    },
     {
        value: "Hockey"
    },
    {
        value: "Skating"
    },
     {
        value: "Cycling"
    },
    {
        value: "Workouts"
    },
    {
        value: "Running"
    }

]

export const sportsBuddies = [
    {
    name: "Carlijne Limbeek",
    avatar: "https://i.pravatar.cc/300",
    message: "Hi, are you free to run tomorrow?",
    when: "Just now",
    toRespond: 1,
    seen: false,
    active: true
    },
    {
    name: "Jeroen Boes",
    message: "Sorry, can't make it, man.",
    avatar: "https://i.pravatar.cc/300",
    when: "5 min ago",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Alex Schmidt",
    message: "Good afternoon. I need your response by Monday whether you would attend.",
    avatar: "https://i.pravatar.cc/300",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Marieke Krieg",
    message: "Hey!",
    avatar: "https://i.pravatar.cc/300",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Julian Overmee",
    message: "How about on Wednesday?",
    avatar: "https://i.pravatar.cc/300",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Lara Collins",
    message: "Did you contact her?",
    avatar: "https://i.pravatar.cc/300",
    when: "Yesterday",
    toRespond: 0,
    seen: false,
    active: false
    },
    {
    name: "Marije de Vries",
    message: "I am in front of the door!",
    avatar: "https://i.pravatar.cc/300",
    when: "5 min ago",
    toRespond: 0,
    seen: true,
    active: false
    }
]


export const bot = {
    id: 0,
    name: "Sports Buddy",
    avatarUrl: "https://i.pravatar.cc/300",
  };

export const user = {
    id: 1,
    avatarUrl: "https://i.pravatar.cc/300",
};

export const conversationChat = [
    {
        author: bot,
        text: "Hi do you want to go jogging tomorrow at 11? :)",
        suggestedActions: [
          {
            type: "reply",
            value: "Yes! Sure!",
          },
          {
            type: "reply",
            value: "No.",
          },
        ],
        timestamp: new Date("2022-02-01 21:00"),
      },
      {
        author: user,
        text: "Yes! Sure!",
        timestamp: new Date("2022-02-01 21:01"),
      },
      {
        author: bot,
        text: `Sorry something came up! Can't make it!`,
        timestamp: new Date("2022-02-02 10:02"),
      },
      {
        author: user,
        text: `No problem at all! Do you want to go jogging tomorrow then?`,
        timestamp: new Date("2022-02-02 10:05"),
      },
      {
        author: bot,
        text: `Yes, I will call you to reschedule later!`,
        timestamp: new Date("2022-02-02 11:05"),
      }
]