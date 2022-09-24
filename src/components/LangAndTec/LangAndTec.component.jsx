import { LANGUAGES_AND_TECNOLOGIES } from '../../constants/constants';
import './LangAndTec.style.css'

export function LangAndTec() {

    function renderLogos() {
        return LANGUAGES_AND_TECNOLOGIES
            .logos.map(
                logo => <img
                    className="logo-languages-tecnologies"
                    src={logo}
                    alt="Logo da tecnologia ou linguagem que o autor domina" />)
    }


    return (
        <div className="container-languages-tecnologies">
            <h2 className="subtitle-languages-tecnologies">
                {LANGUAGES_AND_TECNOLOGIES.title}
            </h2>

            <div className="cards">
                {renderLogos()}
            </div>
        </div>
    );
}