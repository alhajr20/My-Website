import React from "react";

import avatar from '../../images/avatar.jpg';

function PromoSection() {
    return (
        <section className="promo">
            <div className="promo__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="promo__info">
                <h1>Hello Guys!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis enim placeat iusto quia omnis modi sint. Ipsum dolores optio delectus vero exercitationem quasi ratione repudiandae nihil reiciendis beatae maiores ut quod possimus corporis, error tempora tenetur. Perferendis inventore fuga dolorem dolor, obcaecati aliquam sunt aperiam fugiat nostrum doloremque, ducimus quisquam excepturi modi, architecto impedit facere molestias iusto vitae? Error amet pariatur reprehenderit odit, eum sapiente, architecto doloremque nobis aliquam dolorum aut veritatis iste quod voluptatum ea. Nihil placeat quos tenetur asperiores unde laborum consectetur dolor voluptate porro debitis iure rem facilis odit, dolorum atque illo necessitatibus.
                </p>
            </div>
        </section>
    )
}

export default PromoSection;