import './Home.css'
import '../components/style.css';
import Card from '../components/Card';
import techServices from '../data/services.js'
const Home = ()=>{
    return(
        <>
            <div className="hero">
                <h1>Turning Ideas into Intelligent Technology</h1>
                <p>We design and develop high-performance web and mobile applications that help businesses grow faster in a digital-first world.</p>
                <button>Explore Services</button>
            </div>
         <Card services={techServices}/>
        </>
    )
}

export default Home;