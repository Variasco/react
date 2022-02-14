const Message = (propsObj) => {
    return (
        <p className="message">Props is: <span>{propsObj.value}</span></p>
    );
}

export default Message;