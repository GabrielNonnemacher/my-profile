import { Button } from '../Button/Button.component';
import ProfileImage from '../../assets/images/ProfileImage.jpg'

import './MyLinks.style.css'
import { MY_INFORMATIONS, SOCIAL_NETWORKS } from '../../constants/constants';

export function MyLinkls() {

    return (
        <div>
            <div className="div-profile-image">
                <img
                    className="profile-image"
                    src={ProfileImage}
                    alt="Imagem de perfil do criador do site" />

            </div>

            <div className="my-informations">
                <h2 className="my-name">
                    {MY_INFORMATIONS.name}
                </h2>

                <p className="my-work">
                    {MY_INFORMATIONS.work}
                </p>
            </div>

            <div className="links-my-social-networks">
                <Button>{SOCIAL_NETWORKS.instagram}</Button>
                <Button>{SOCIAL_NETWORKS.linkedIn}</Button>
                <Button>{SOCIAL_NETWORKS.gitHub}</Button>
                <Button>{SOCIAL_NETWORKS.twitter}</Button>
                <Button>{SOCIAL_NETWORKS.facebook}</Button>
            </div>
        </div>
    );
}