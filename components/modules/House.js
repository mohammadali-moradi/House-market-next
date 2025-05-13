import React from 'react'
import Link from 'next/link'

function House({ id,
    title,
    img,
    roomCount,
    meterage,
    price }) {

    return (
        <>
            <div className="card">
                <img src={img} alt="House 6" className="card__img" />
                <h5 className="card__title">{title}</h5>
                <svg className="card__like">
                    <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
                </svg>
                <div className="card__details">
                    <svg className="card__icon">
                        <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p className="card__text">تهران</p>

                    <svg className="card__icon">
                        <use
                            xlinkHref="img/sprite.svg#icon-profile-male"
                        ></use>
                    </svg>
                    <p className="card__text">{roomCount} اتاق</p>

                    <svg className="card__icon">
                        <use xlinkHref="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p className="card__text">{meterage} متر مربع</p>

                    <svg className="card__icon">
                        <use xlinkHref="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p className="card__text">{price} میلیون تومان</p>
                </div>

                <Link href={`/houses/${id}`} className="btn btn-brown btn-card">مشاهده ملک</Link>
            </div>
        </>
    )
}

export default House