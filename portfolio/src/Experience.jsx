
import Card from './components/Card.jsx';
import { experienceList } from './data.js';
export default function Experience() {


    return (
        <section className="experience-wrapper">
            <div className='experience-head'>
                <h1 className='ubuntu-medium'>Work Experience</h1>
            </div>
            <Card cardData={experienceList} cardType="experience" />
        </section>
    );
}