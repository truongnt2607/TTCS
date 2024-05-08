import React, { useEffect, useState } from 'react'
import './info.scss'

const Info = (prop) => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4116248e941f7e6643a9525d5a0ef2de')
            .then(res => res.json())
            .then(data => setGenres(data.genres))
    }, [])


    const getGenres = (idList, ref) => {
        let res = []
        idList.map(ele => {
            ref.forEach((x) => {
                if (ele === x.id) {
                    res.push(x.name)
                }
            })
        })
        return res;
    }

    return (
        <div className="content">
            <div className="content__title">{prop.details.title}</div>
            <div className="content__top">
                <div className="status">Đang chiếu</div>
                {prop.details.title}
            </div>
            <div className="content__rates">
                <div className="rate"><i className="fa-solid fa-star star--icon"></i> {prop.details.vote_average} </div>
                <div className="content__year">{prop.details.release_date?.substring(0, 4)}</div>
                <div className="content__adult">{prop.details.adult ? 'Adult' : ''}</div>
            </div>
            <div className="content__product">
                <div className="product__types">
                    {
                        prop.details.genre_ids ?
                            (
                                getGenres(prop.details.genre_ids, genres)?.map((data, idx) => {
                                    return (
                                        <a href="https://www.youtube.com" key={idx} className='product__type'>{`${data}`}</a>
                                    )
                                }
                                )
                            ) : 
                            (
                                prop.details.genres?.map((data, idx) => {
                                    return (
                                        <a href="https://www.youtube.com" key={idx} className='product__type'>{`${data.name}`}</a>
                                    )
                                })
                            )
                    }
                </div>
            </div>
            <div className="content__decs">
                {prop.details.overview}
            </div>
            <i className="fa-solid fa-circle-play play-icon"></i>
        </div>
    )
}

export default Info
