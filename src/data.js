import mindreader from "../src/images/mindreader.png"
import weather from "../src/images/weather.png"
import tic from "../src/images/tic.png"
import todo from "../src/images/todo.png"
import opendish from "../src/images/opendish.png"
import menu from "../src/images/menu.png"

export const projects = [
    {
        id: 1,
        title: 'Mind Reader',
        img: mindreader,
        link: "https://carljduff.github.io/mind-reader/",
        description: "A single-page web app that plays a game with the user to read their mind."
    },
    {
        id: 2,
        title: 'Weather App',
        img: weather,
        link: "https://carljduff.github.io/weather-app/",
        description: "A Weather app that retrieves Weather data from an external API."
    },
    {
        id: 3,
        title: "Tic-Tac-Toe",
        img: tic,
        link: "https://carljduff.github.io/tic-tac-toe/",
        description: "A webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript."
    },
    {
        id: 4,
        title: "Todo List",
        img: todo,
        link: "https://carljduff.github.io/todo-app/",
        description: "A Todo List app that uses Local Storage."
    },
    {
        id: 5,
        title: "Restaurant Menu",
        img: menu,
        link: "https://carljduff.github.io/react-restaurant/",
        description: "A single-page web app that serves as a restaurant splash page with a menu."
    },
    {
        id: 6,
        title: "Open Dish",
        img: opendish,
        link: "https://opendish.herokuapp.com/",
        description: "Final Project: A Potluck webpage that allows users to organize a Potluck."
    }
    ]
    
    export const teaser = [
        {
          id: 1,
          title: "Git & Github",
          date: 'February 28, 2022',
          description: "I am so excited to finally get started. Before we started the bootcamp...",
        },
        {
            id: 2,
            title: "Two",
            date: 'Today',
            description: 'Desc'
        },
        {
            id: 3,
            title: "Two",
            date: 'Today',
            description: 'Desc'
        },
        {
            id: 4,
            title: "Two",
            date: 'Today',
            description: 'Desc'
        },
        {
            id: 5,
            title: "Two",
            date: 'Today',
            description: 'Desc'
        },
      ]
    
    export const blogs = [
        {
            id: 1,
            week: 'Week One', 
            title: 'Git & GitHub',
            date: 'February 28, 2022',
            description: "I am so excited to finally get started. Before we started the bootcamp, we got a breakdown of what we'd be doing weekly. I started researching these topics and I jumped into Git and Github a week before it started. I remember thinking 'there's no way I'll ever get this'. Commit, merge, push, pull, clone, init... the list goes on. I watched a tutorial on YouTube, but still didn't get the point of it. After this week, I fully get the point of it, why it matters, I see the ease of access and keeping everything organized. Also, those once haunting words, now make sense and I know when to use them, and the purpose of their use. This was a great week and I'm motivated for next!",
            questions: [
                {
                    q1: "Was your first week what you expected? Why? Why not?",
                    a1: "The first week of the bootcamp was a mix of what was expected and what wasn't. I came in with the mindset that there was going to be no room for error. After the first few days, I now feel comfortable that we're able to fail, not be judged and that it's part of the learning process. I enjoy the learn, build, and measure model that's being presented. I feel that I have had an adequate amount of time to learn the material, use the knowledge to build this blog and now I'm able to measure what I need to revisit or continue learning in order to be successful."
                },
                {
                    q2: "What are you excited or eager to learn more about?",
                    a2: "I am excited to dig deeper into Web Development and lay a basic foundation of knowledge that I can build upon. I have a basic understanding of HTML and CSS, but look forward to diving into Javascript! I am eager to learn about the backend of development to understand how everything works behind the scene."
                }, 
                {
                    q3: "What is something about you that can only be learned by reading this blog?",
                    a3: "I have never written a blog before, nor have I realized that I would enjoy it as much before starting this one. I look forward to updating it weekly so you can follow along with my journey. I've had four jobs since I started working at 16. I was at my first job for two years, the second a year, the third eight years and my most recent job going on four years. During this bootcamp will be the first time I've not worked since I've been 16."
                },
            ]
        },
    
        {
            id: 2,
            week: 'Week Two', 
            title: 'HTML & CSS',
            date: 'February 04, 2022',
            description: "Understanding how HTML and CSS works together has been interesting. My favorite thing about this week was using CSS and Flexbox. I love styling pages and it really took me back to my Myspace days! I knew basic HTML & CSS before this week, so I dove into deeper subjects. This week our project was to recreate a Birdwatching website. I choose to do different colors and styling because I didn't enjoy the colors of the original, but I'm sure someone out there does! It was rewarding to finally have a project to put together and for it to actually come together. I plan on finding some cool things to do with CSS. I'm nervous for next week because there's an alarm clock project and the first thing we've done without any hand holding! I can do this....I think.",
            questions: [
                {
                    q1: "What is something you wish you could do but currently do not have the coding skills to accomplish?",
                    a1: "I wish I had enough coding skills to code a simple game. I've always wanted to do this and cannot wait to be able to. I don't even care if it's a game as simple as snake. "
                },
                {
                    q2: "What are you struggling with?",
                    a2: "At the moment, I am struggling with remembering to commit while doing a project. I am also struggling with answering questions about git commands. I understand how to use them, what they do, and when to use them, but for some reason when I have to answer a question about them my mind goes blank. I'm going to work on this because maybe I'm missing a deeper understanding."
                }, 
                {
                    q3: "How do you solve a problem?",
                    a3: "I solve a problem by exhausting every resource. If I don't know how to do something I start by googling the topic, I skim through the top few websites and if it still doesn't clear up my understanding, I switch to YouTube. If I cannot understand something by reading about it, then I can normally understand it by hearing someone talk about it. I think I just had an a-ha! moment and realized I should start by hearing someone talk about the topic before reading about it. It could save me some time!"
                },
                {
                    q4: "What methods do you use to help yourself get unstuck?",
                    a4: "This sort of ties in to the question above, but I also want to add that a lot of times if I'm feeling stuck, I'll take a break. There have been many times when its clicked before I even came back!"
                }
            ]
        },
    
        {
            id: 3,
            week: 'Week Three', 
            title: 'JavaScript',
            date: 'February 11, 2022',
            description: "This week was Javascript and at the very least, I'm happy to say that I got through it. It was challenging, there were moments that I wanted to scream (or did scream), and there were also moments of success! When the Javascript code that I wrote worked, I wanted to run around my house! It was such a great feeling. We were pushed to the limits this week. There were two projects this week. A silly story generator and an alarm clock. The silly story generator was essentially a walkthrough project, but the alarm clock was from scratch. When I first started, I stared at a blank screen for at least thirty minutes wrapping my head around how I was even going to start this, let alone finish. I started breaking it down. I thought about the functionality of an actual alarm clock. What does it need? ...and that's where I started. I researched, took many notes, bits and pieces of information from different resources and put it all together. I'm not 100% satisfied with what I presented, but it worked and it was good enough for me now. I plan on revisitng this project as I progress. I know it's only going to get more challenging from here.",
            questions: [
                {
                    q1: "What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing a user experience?",
                    a1: "I love the way everything works together to provide the user experience. HTML is the backbone, CSS is the look, and Javascript is the act! Learning Javascript at a base level was rewarding. Each has such an important role in the user experience."
                },
                {
                    q2: "What are some objects that your blog incorporates?",
                    a2: "At the moment, all my blog incorporates is markdown. I'm excited to update it as we move forward!"
                }
            ]
        },
    
        {
            id: 4,
            week: 'Week Four', 
            title: '',
            date: '',
            description: "",
            questions: [
                {
                    q1: "",
                    a1: ""
                },
                {
                    q2: "",
                    a2: ""
                }, 
                {
                    q3: "",
                    a3: ""
                }
            ]
        },
    
        {
            id: 5,
            week: 'Week Five', 
            title: 'Front End/Vanilla JavaScript',
            date: 'February 25, 2022',
            description: "The first week of the In-Person portion of the Bootcamp just came to an end! I learned and researched more in this week than I ever have in my entire life. I am so thankful for this opportunity and this has been a great week! I was nervous at first, but after getting into it I realized how comforting everyone is. They truly want us to succeed. I am excited for the next couple of weeks to come, but I know there are many challenges ahead.",
            questions: [
                {
                    q1: "What is the number one thing that held you back this week? Why?",
                    a1: "Something that held me back this week was my staying in a standard way of thinking. I have been taught that there's only one way of thinking since growing up and breaking free from this will take me further than I've been. I'm getting better at rewiring my brain into this new way of thinking to allow a free, clear and open mind so I can ensure my success."
                },
                {
                    q2: "What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?",
                    a2: "I would like to learn more about data structures and Object-oriented Programming. I can feel the gap of knowledge from where I am with it compared to where I want to be. "
                }, 
                {
                    q3: "How does In-Person Bootcamp compare to Remote Onboarding?",
                    a3: "The In-Person part of the Bootcamp has been so eye opening to many different areas of my life. I didn't think about the relationships that I would grow with everyone. I love the In-Person section better than the Remote, interacting with everyone, bouncing ideas around and having help in real-time."
                },
                {
                    q4: "What is your “Why”?",
                    a4: `I've been thinking about this question for awhile. I come from a small town in Eastern, KY. where no one is expected to "win" in life or "get out". I watched everything and everyone around me growing up. I watched the people I wanted to be like, the people I didn't want to be like and I always
                    had a voice inside of me telling me that I was going to get out and make a successful life. In 2012, I started working at an Applebee's in Hazard, KY.
                    Two years later I became a Manager and moved to Huntington, WV. This was a moment that changed my life and set the trajectory for the rest of my life.
                    I worked for Applebee's until 2018 when I moved to Lexington, KY to take a position at J. Alexander's. I worked there for over three years and realized
                    that I was wasting my time living a life that I still wasn't proud of. I was "successful" by the term of many people from back home, but I still didn't 
                    feel like my success meant anything to me. I have always been interested in coding and the web. I'll never forget the "oo's and ahh's" from
                    creating fabulous MySpace pages that others envied. I found out about Awesome Inc. while driving downtown so I went to their website and the rest 
                    is history! I have no choice because I feel that my "Why" is now. I have been waiting my whole life for an opportunity to turn my life into something
                    that I want it to be and for the first time, I took a leap of faith to escape and break the barrier that was built around me from the start. This is my time.`
                }
            ]
        },
    
        {
            id: 6,
            week: 'Week Six', 
            title: "Front End/API's",
            date: 'March 4, 2022',
            description: "This week was all about API's and asynchronous functions. We went over Fetch, Promises, JSON, Axios and I'm sure I'm leaving something else out. It was a lot to take in and I added some topics to my back-log to gain a deeper understanding. The project for this week was building a Weather API from scratch. I was impressed by how much I truly learned last week that led me into this week. ",
            questions: [
                {
                    q1: "What did you learn about that helped you understand the development process?",
                    a1: `This week was a very important week to me. It was my favorite week so far by how motivated, determined and proud I was. I learned how I learn
                    best this week and I know it set up a whole new level in my understanding of how things work. I was very focus on Pseudocode this week and I learned
                    that it's one of the most, if not the most, important things to focus on. Last week I did Pseudocode as well, but nothing like this week. 
                    I just realized that the difference between my stress levels compared to this week and last could 
                    simply come down to my Pseudocode.`
                },
                {
                    q2: "What does it mean to develop good code?",
                    a2: "Developing good code means that it is easy to read and efficient. If someone used the code after I wrote it, it should be wrote in a clear way and easy way of understanding so someone else could also understand it and know what it's doing. "
                }, 
                {
                    q3: "What does it mean to be a good developer?",
                    a3: `I think that being a good developer means finding a solution to the problem at hand, caring about what you're doing and using your knowledge,
                    skill and ability to make a difference. We all can make a difference in such subtle ways and sometimes simply caring about what we're doing 
                    and having a passion for this work really drives a developer into being a good or great developer.`
                }
            ]
        },
    
        {
            id: 7,
            week: 'Week Seven', 
            title: '',
            date: 'March 11, 2022',
            description: "",
            questions: [
                {
                    q1: "Pseudocoding your way to success.",
                    a1: `I remember the first time I saw the word "Pseudocode". I didn't know what it meant or how I was going to be able to do with when I was first learning to code.
                    Try to write a program without Pseudocode and you'll quickly understand it's meaning. Pseudocode is nothing more than a plan written in your spoken language. There's no coding involved.
                    Pseudocoding helps you understand the problem at hand and how you're going to find a solution to the problem. You wouldn't build a house without a blueprint and on a smaller 
                    scale, Pseudocode is the blueprint to your program. It's an informal way of writing the instructions to your programs procedures and functionality. There's no right or wrong 
                    way to write Pseudocode. The more you write it the better you'll find a structure that works for you. When you write good Pseudocode, you're in full control. Pseudocoding is 
                    important for understanding the question, breaking the problem down and arriving at a solution. `
                },
                {
                    q2: "MVC: Model, View, Controller",
                    a2: `MVC is a design pattern in programming that is commonly used for developing user interfaces that divide the program logic into three separate, but connected parts. 
                    The Model is the central component of the pattern. It manages and stores the application's data structures. The View handles all of the display and how the application
                    is laid out. The Controller is the driver of the three. The Controller is connected to the Model and View. It contains the control logic, receives updates from the view then
                    notifies the Model to update the data. The MVC is just one of many Design Patterns in programming.`
                }
            ]
        },
    
        {
            id: 8,
            week: 'Week Eight', 
            title: 'Front End/React Basics',
            date: 'March 18, 2022',
            description: "This was the first week we broke away from Vanilla Javascript. At the beginning of the week, the sense of dread was captivating about leaving the known for the unknown. After Tuesday, diving into the docs for React and starting a walk-thru tutorial, I had a better understanding and had a basic grasp. This was a week that I will remember because it has stood out to me the most. The difference in how I felt at the beginning of the week compared to the end was astronomical. I saw concepts coming together for one of the first times since in the Bootcamp. This weeks project was to build a Restaurant Menu and pull the menu data from an API. It was the first week we had a lot of control on how we styled our application. This was one of my favorite weeks so far. So excited for next week to dive further into React!",
            questions: [
                {
                    q1: "Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?",
                    a1: "I think that the React library so far has been on the easier side of using. I really enjoyed the documentation of React. I think it's easy to understand the docs, easy to follow along step-by-step and there was a walk-through tutorial that I also enjoyed."
                },
                {
                    q2: "What Frameworks or Libraries are you interested in learning more about?",
                    a2: "I'm very interested in learning more about Kaboom. It's a JavaScript game programming library that helps you make games fast and fun. I've always been into video games and think it'd be awesome to make a simple one!"
                }, 
                {
                    q3: "Find one emerging JavaScript tool that you would like to learn more about or use in your final project.",
                    a3: "Electron allows you to build cross-platform desktop apps with Javascript, HTML and CSS. No natvier development experience is required. It allows you to maintain one JavaScript codebase by embedding Chromium and Node.js into its binary. "
                }
            ]
        },
    
        {
            id: 9,
            week: 'Week Nine', 
            title: 'Front End/Frameworks',
            date: 'March 25, 2022',
            description: "This week was all about React and a to-do list. It was a tough week, but I was happy with the outcome. I learned a lot of valuable things this week that I will carry on into next week!",
            questions: [
                {
                    q1: "What have you learned about CLIs? Do you think they are scary?",
                    a1: "I have learned that CLIs allow you to download software, they are easier and faster than GUIs. I do think they can be scary if you don’t know what you’re typing in. I always triple check everything I type into them."
                },
                {
                    q2: "If you were to build a CLI, what would it do?",
                    a2: "I can't think of anything else I'd add to one or make it do differently."
                }, 
                {
                    q3: "List some ideas that without a Framework, would take you a long time to code.",
                    a3: "A social-media website or app, a complex website or app, or anything that isn't a simple app or website."
                }
            ]
        },
    
        {
            id: 10,
            week: 'Week Ten', 
            title: 'Python/Pair Programming',
            date: 'April 1, 2022',
            description: "This week we started learning Python for our back-end language. It was pair-programming all week so it was a nice change of pace compared to every other week. The project for this week was creating a RPG game 'Evercraft' with a partner while ping-pong programming.",
            questions: [
                {
                    q1: "Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?",
                    a1: "The biggest hurdle that I have gone past is grasping the use of Classes. This week was eye-opening for the use of classes and why they're important. I think the next biggest thing to power through is going to be the final project."
                },
                {
                    q2: "Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?",
                    a2: "I was excited to hear about the 'Attack of the Clones' project that we will be able to carry on over as our final project. I am struggling with ideas of anything else that I may want to do."
                },
                {
                    q3: "What surprised you about your first week in Python and how was it different from your first week in JavaScript?",
                    a3: "The first week in Python was definitely easier to grasp compared to the first week in Javascript. It's nice that having a general idea of one language can carry over into the next. Being paired with a partner for pair programming this week was great because we got to learn the language with someone else!"
                }
            ]
        },
    
        {
            id: 11,
            week: 'Week Eleven', 
            title: 'Backend/Frameworks',
            date: 'April 8, 2022',
            description: "",
            questions: [
                {
                    q1: "What are some similarities and differences you can see with JS and Python?",
                    a1: "A major similarity between JS and Python is that most arithmetic operators work exactly the same. A lot of things are similar, but done with different wording. A major difference between JS and Python is the syntax and how they define code blocks. JS uses {} to group statements and Python uses indentation. Their naming conventions are different, as well, with JS using lower camel case and Python using snake case. Null vs None, Python contains float integers, Arrays vs Lists, the == operator in Python works like the === operator in JS, JS has Switches and Python doesn't."
                },
                {
                    q2: "If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?",
                    a2: "My eyes view HTML, CSS and JS as the building blocks of Web Development so I'm glad we started with JS first. I could see an advantage of starting with Python due to readability, but I still feel that it would be easier to switch from JS to Python than learning Python and switching to JS."
                }, 
                {
                    q3: "Find one API, NPM package, Library, and/or Framework you think you might want to use for your final project.",
                    a3: ""
                }
            ]
        },
    
        {
            id: 12,
            week: 'Week Twelve', 
            title: '',
            date: '',
            description: "",
            questions: [
                {
                    q1: "",
                    a1: ""
                },
                {
                    q2: "",
                    a2: ""
                }, 
                {
                    q3: "",
                    a3: ""
                }
            ]
        }
    ]