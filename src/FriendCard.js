export const FriendCard = ({data:{avatar,name,isOnline}}) => {
    return (<ul class="friend-list">
  <li class="item">
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
            <span class="status">{isOnline===true?"In":"Out"}</span>
</li>
</ul>
        
    )
}
