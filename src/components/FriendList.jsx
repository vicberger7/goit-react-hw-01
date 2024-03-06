const FriendListItem = () => {
    return (
        <div>
            <img src="" alt="Avatar" width="48" />
            <p>Friend name</p>
            <p>Friend status</p>
        </div>
 
    );
};

const FriendList = () => {
    return (
        <ul>
            {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li>
                <FriendListItem />
            </li>
        </ul>
    );
};

export default FriendList;