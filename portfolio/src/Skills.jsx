import Card from "./components/Card.jsx";
import { techStackList } from './data.js';
export default function Skills() {


    return (
        <section className="stack-wrapper">
            <div className="stack-head">
                <h1 className="ubuntu-medium">Skills</h1>
            </div>
            <Card cardData={techStackList} cardType="techstack" />
        </section>
    );
}
