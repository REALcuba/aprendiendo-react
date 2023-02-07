export const TwitterFollowCard =({userName, name, isFollowing})=>{
    return(
        <article className="tw-followCard">
        <header className='tw-followCard-header'>
         <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="un avatar" />
         <div className='tw-followCard-info'>
           <strong >{name}</strong>
           <span className='tw-followCard-infoUserName'>@{userName}</span>
         </div>
         <aside>
           <button className='tw-followCard-button'>
   Seguir
           </button>
         </aside>
        </header>
       </article>
    )
}