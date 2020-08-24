import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id='123145875'
                    title='A product'
                    price={255}
                    rating={5}
                    image='https://cache.mrporter.com/variants/images/10375442619031883/fr/w2000_q80.jpg'
                />
                <Product
                    id='321145875'
                    title='Book Peter'
                    price={5}
                    rating={5}
                    image='https://img4.labirint.ru/rc/d42e245571b18ce94dff13eb68813254/220x340/books51/507700/cover.png?1575469637'
                />
            </div>

            <div className="home__row">

                <Product
                    id='123147565'
                    title='Phillips'
                    price={20}
                    rating={5}
                    image='https://img.mvideo.ru/Pdb/20059446b.jpg'
                />
                <Product
                    id='123186975'
                    title='Iron Machine'
                    price={300}
                    rating={5}
                    image='https://img.mvideo.ru/Pdb/20037354b.jpg'
                />
                <Product
                    id='325645875'
                    title='New Balance'
                    price={255}
                    rating={5}
                    image='https://content.asos-media.com/-/media/images/articles/men/2020/08/01-sat/top-5-trainers-uk/new-balance-452-trainers.jpg?h=1110&w=870&la=en-GB&hash=0699433DE54A3991C7F288CC016CAEDC'
                />
            </div>
            <div className="home__row">

                <Product
                    id='123124689'
                    title='samsung screen'
                    price={1000}
                    rating={5}
                    image='https://images.samsung.com/is/image/samsung/ru-c49hg90-lc49hg90dmixci-black-Black-268363900?$PD_GALLERY_L_JPG$'
                />
            </div>

        </div>
    )
}

export default Home
