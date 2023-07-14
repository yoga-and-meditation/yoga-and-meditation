import user1 from '../assets/images/Feedback/user1.jpg';
import user2 from '../assets/images/Feedback/user2.jpg'
import user3 from '../assets/images/Feedback/user3.jpg'
function Feedback() {
  return (
    <div>
      <div className='site-container'>
        <h2 className='feedback-heading'>Customer FeedBacks</h2>
        <div className='article-container'>
          <article className='article-card'>
            <figure className='article-image'>
              <img src={user1} className='card-image' alt='user'/>
            </figure>
            <div className='article-content'>
              <h3>Roslin Joe</h3>
              <p>This website was good</p>
              
            </div>


          </article>
          <article className='article-card'>
            <figure className='article-image'>
              <img src={user2} className='card-image' alt='user'/>
            </figure>
            <div className='article-content'>
              <h3>Roslin Joe</h3>
              <p>This website was good</p>
              
            </div>


          </article>
          <article className='article-card'>
            <figure className='article-image'>
              <img src={user3} className='card-image' alt='user'/>
            </figure>
            <div className='article-content'>
              <h3>Roslin Joe</h3>
              <p>This website was good</p>
              
            </div>


          </article>
        </div>



      </div>
    </div>
  )
}

export default Feedback