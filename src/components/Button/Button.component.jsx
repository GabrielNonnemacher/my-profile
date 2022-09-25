
import './Button.style.css'

export function Button({ children }) {

    return (
        <a
            className="link-social-network"
            href={children.url} >

            <div className="icon-social-network">
                <img
                    className="image-icon-social-network"
                    src={children.image}
                    alt="ícone da rede social para se conectar" />
            </div>


            <div className="text-social-network">
                {children.text}
            </div>
        </a>
    );
}