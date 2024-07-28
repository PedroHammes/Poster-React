import styles from './poster.module.css'

export default function Poster(props) {
    return (
        <section>
            <div
                className={styles.poster}
            >
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className={styles.details}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Buy now</button>
            </div>
        </section>
    )
}