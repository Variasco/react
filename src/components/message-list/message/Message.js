import { format } from "date-fns";

export const Message = ({ item }) => {
    const messagePos = (item.author === "User") ? "message_right" : "message_left";

    return (
        <div
            className={`message ${messagePos}`}
        >
            <p className="message__author">{item.author}</p>
            <p className="message__text">{item.text}</p>
            <p className="message__time">{format(item?.date, "HH:MM")}</p>
        </div>
    );
};