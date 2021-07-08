import React from "react";

import avatar from '../../images/avatar.jpg';

function PromoSection() {
    return (
        <div class="promo">
            <div className="promo__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="promo__info">
                <h1>Hello Guys!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quo illum. Culpa facere consequatur, recusandae ipsam rem laboriosam quasi quia eius, consequuntur in ut repudiandae accusamus incidunt doloribus dolores nam?
                </p>
            </div>
        </div>
    )
}

export default PromoSection;