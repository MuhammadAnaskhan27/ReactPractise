import "../components/Concepts.css"
import ComponentImg from '../assets/components.png'
import StateImg from '../assets/state.png'
import Banner from '../assets/key-concepts.png'
import EventImg from '../assets/events.png'

const ConceptItems = [
    {
        title: "COMPONENTS",
        img: ComponentImg,
        description: 'Components let you split the UI into independent, reusable pieces, and think about each peice in isolation. Components can receive data via props, and they can render dynamic output using JSX.'
    },
    {
        title: "STATE",
        img: StateImg,
        description: 'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.'
    },
    {
        title: "EVENTS",
        img: EventImg,
        description: 'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.'
    },
]

const Concepts = () => {
    return (
            <section className='hero-section'>
            
                <header className='header-section'>
                    <img className='header-img' src={Banner} alt=''/>
                    <h1>Key React Concepts</h1>
                    <p>Selected Key react concepts you should know about</p>
                </header>
                <ul className='concept-section'>
                    <li className='concept-items'>
                        <img src={ConceptItems[0].img} alt="" />
                        <h2>{ConceptItems[0].title}</h2>
                        <p>{ConceptItems[0].description}</p>
                    </li>
                    <li className='concept-items'>
                        <img src={ConceptItems[1].img} alt="" />
                        <h2>{ConceptItems[1].title}</h2>
                        <p>{ConceptItems[1].description}</p>
                    </li>
                    <li className='concept-items'>
                        <img src={ConceptItems[2].img} alt="" />
                        <h2>{ConceptItems[2].title}</h2>
                        <p>{ConceptItems[2].description}</p>
                    </li>
                </ul>     
            </section>
    )
}

export default Concepts