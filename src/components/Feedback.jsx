/* eslint-disable react/prop-types */

/* import { useState } from 'react';
 */
// eslint-disable-next-line react/prop-types
const userList = [
  {
    username: "John joe",
    review:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    rating: "3",
    images: "./assets/images/Feedback/user1.jpg",
  },
  {
    username: "prinky ",
    review:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    rating: "5",
    images: "./assets/images/Feedback/user2.jpg",
  },
  {
    username: "paul",
    review:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    rating: "4",
    images: "./assets/images/Feedback/user3.jpg",
  },
];
function Feedback() {
  return (
    <div>
      <div className="site-container">
        <h2 className="feedback-heading">Customer FeedBacks</h2>
        <div className="article-container">
          {userList.map((user, index) => (
            <article key={index} className="article-card">
              <figure className="article-image">
                <img src={user.images} className="card-image" alt="user" />
              </figure>
              <div className="article-content1">
                <h3>{user.username}</h3>
              
                <p>&#11088;&#11088;&#11088;</p>
              </div>
              <div className="article-content">
                <p>{user.review}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
