
export function Card({ title, text, linkTitle }) {
    return (
        <>
            <div className="card">
                <div className="image">
                    <img src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                        alt="Card" />
                </div>
                <div className="info">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <a href="/#" className="link">{linkTitle}</a>
                </div>
            </div>
        </>
    )
}