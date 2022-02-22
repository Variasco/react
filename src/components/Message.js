export const Message = ({ item }) => {
    return (
        <div className="message">
            <p className="message__author">{item.author}</p>
            <p className="message__text">{item.text}</p>
        </div>
    )
}