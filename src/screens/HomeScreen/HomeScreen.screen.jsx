import { LangAndTec, MyLinks } from '../../components';
import './HomeScreen.style.css'

export function HomeScreen() {
    return (
        <section className="main">

            <section className="my-links">
                <MyLinks />
            </section>

            <section className="languages-and-technologies">
                <LangAndTec />
            </section>

            <section className="courses-and-certificates">

            </section>

            <section className="footer">
                
            </section>

        </section>
    );
}