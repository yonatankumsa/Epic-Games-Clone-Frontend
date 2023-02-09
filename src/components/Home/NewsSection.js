import React from 'react'
import Moment from 'react-moment'
import newsData from '../../assets/News/newsData.json'
import styles from './NewsSection.module.css'

const NewsSection = () => {
    return (
        <React.Fragment>
            <p>News</p>
            <section className={styles.NewsList}>
                {newsData.slice(0, 2).map(newsItem => (
                    <a className={styles.card} href={'https://www.epicgames.com/store/en-US' + newsItem.url} key={newsItem._id}>
                        <img src={newsItem._images_[0]} alt="game" />
                        <span className={styles.Timestamp}><Moment date={newsItem.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow /></span>
                        <span className={styles.Description}>{newsItem.title}</span>
                        <span className={styles.ReadMore}>Read more</span>
                    </a>
                ))}
            </section>
        </React.Fragment>
    )
}

export default NewsSection
