import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
    <Layout>
        <Seo title="Blog" />
        <section className="articles">
            <h1 className="articles__title">Blog</h1>
            <div className="articles__wrapper">
                <article className="articles__item">
                    <div className="item-img">
                        <a href="#">
                            <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png" alt="article img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <a href="#">
                            <h3 class="item-title">The Rise of Modern Programming Languages</h3>
                        </a>
                        <div className="item-data">Aug 29, 1998</div>
                        <p class="item-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vel perspiciatis magnam deserunt id pariatur consectetur a magni, dignissimos dolores molestias beatae ut, voluptatibus tenetur eius repellat. Voluptatibus, pariatur tempora.
                        </p>
                    </div>
                </article>
                <article className="articles__item">
                    <div className="item-img">
                        <a href="#">
                            <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png" alt="article img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <a href="#">
                            <h3 class="item-title">The Rise of Modern Programming Languages</h3>
                        </a>
                        <div className="item-data">Aug 29, 1998</div>
                        <p class="item-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vel perspiciatis magnam deserunt id pariatur consectetur a magni, dignissimos dolores molestias beatae ut, voluptatibus tenetur eius repellat. Voluptatibus, pariatur tempora.
                        </p>
                    </div>
                </article>
                <article className="articles__item">
                    <div className="item-img">
                        <a href="#">
                            <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png" alt="article img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <a href="#">
                            <h3 class="item-title">The Rise of Modern Programming Languages</h3>
                        </a>
                        <div className="item-data">Aug 29, 1998</div>
                        <p class="item-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vel perspiciatis magnam deserunt id pariatur consectetur a magni, dignissimos dolores molestias beatae ut, voluptatibus tenetur eius repellat. Voluptatibus, pariatur tempora.
                        </p>
                    </div>
                </article>
                <article className="articles__item">
                    <div className="item-img">
                        <a href="#">
                            <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png" alt="article img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <a href="#">
                            <h3 class="item-title">The Rise of Modern Programming Languages</h3>
                        </a>
                        <div className="item-data">Aug 29, 1998</div>
                        <p class="item-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vel perspiciatis magnam deserunt id pariatur consectetur a magni, dignissimos dolores molestias beatae ut, voluptatibus tenetur eius repellat. Voluptatibus, pariatur tempora.
                        </p>
                    </div>
                </article>
                <article className="articles__item">
                    <div className="item-img">
                        <a href="#">
                            <img src="https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png" alt="article img" />
                        </a>
                    </div>
                    <div className="item-info">
                        <a href="#">
                            <h3 class="item-title">The Rise of Modern Programming Languages</h3>
                        </a>
                        <div className="item-data">Aug 29, 1998</div>
                        <p class="item-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, vel perspiciatis magnam deserunt id pariatur consectetur a magni, dignissimos dolores molestias beatae ut, voluptatibus tenetur eius repellat. Voluptatibus, pariatur tempora.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </Layout>
)

export default BlogPage
