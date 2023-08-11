import { useState } from "react";

const serviceData = [
  {
    title: "Meditation",
    text: `The HBR mentions in its article, ‘What Meditation Can Do for Your Leadership’, that meditation is an antidote to ego. The article also mentions that in times of uncertainty, the survival part of our brain (mainly the amygdala) kicks in when we perceive a threat and causes our focus to narrow. Meditation can be of tremendous help during times like this. Practicing meditation has been shown to reduce anxiety, calm the amygdala, increase our ability to think creatively and empathetically take other people’s perspective. Steve Jobs, an early adaptor of meditation described his experience like this: “You start to see things more clearly and be in the present more. Your mind just slows down, and you see a tremendous expanse in the moment. You see so much more than you could see before.”`,
  },
  {
    title: "Yoga",
    text: `The Harvard Health Publishing of the Harvard Medical School mentions in its blog, Yoga for better mental health, when you lift weights, your muscles get stronger and bigger. When you do yoga, your brain cells develop new connections, and changes occur in brain struc­ture as well as function, resulting in improved cog­nitive skills, such as learning and memory. Yoga strengthens parts of the brain that play a key role in memory, attention, awareness, thought, and language. Think of it as weightlifting for the brain.`,
  },
];

function Services() {
  const [tab, setTab] = useState(0);

  const handleTabClick = (index) => {
    setTab(index);
  };

  return (
    <div className="service-container">
      <div className="header-container">
        <h2>Join our courses</h2>
      </div>

      <div className="tabs">
        {serviceData.map((service, index) => (
          <div key={index} className={`tab-2 ${tab === index ? "active" : ""}`}>
            <label htmlFor={`tab2-${index + 1}`}>{service.title}</label>
            <input
              id={`tab2-${index + 1}`}
              name="tabs-two"
              type="radio"
              checked={tab === index}
              onChange={() => handleTabClick(index)}
            />
          </div>
        ))}
      </div>

      <section className="service-section">
        {serviceData.map(
          (service, index) =>
            tab === index && (
              <div key={index} className="card-container">
                <div className="content-container">
                  {/* <h3 className="card-title">{service.title}</h3> */}
                  <p className="card-text">{service.text}</p>
                </div>

                <div className="cards-container">
                  <div className="card-basic">
                    <div className="card-header header-basic">
                      <h1>Coming soon</h1>
                    </div>
                    <div className="card-body">
                      <p>
                        <h2>NIA</h2>
                      </p>
                      <div className="card-element-hidden-basic">
                        <ul className="card-element-container">
                          <li className="card-element">Corporate Meditaion,</li>
                          <li className="card-element">Yoga</li>
                          <li className="card-element">&</li>
                          <li className="card-element">Retreats</li>
                        </ul>
                        <button className="btn btn-basic">Conact now</button>
                      </div>
                    </div>
                  </div>

                  <div className="card-standard">
                    <div className="card-header header-standard">
                      <h1>Online Meditation</h1>
                    </div>
                    <div className="card-body">
                      <p>
                        <h2>€70 /course</h2>
                      </p>
                      <div className="card-element-hidden-standard">
                        <ul className="card-element-container">
                          <li className="card-element">
                            4 sessions of 45 minutes
                          </li>
                          <li className="card-element">Every Friday</li>
                          <li className="card-element">
                            Mditation techniques for daily practice
                          </li>
                          <li className="card-element">
                            Be a part of weekly group meditation
                          </li>
                        </ul>
                        <button className="btn btn-standard">Join now</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-premium">
                    <div className="card-header header-premium">
                      <h1>In-person Meditation</h1>
                    </div>
                    <div className="card-body">
                      <p>
                        <h2>€80 /course</h2>
                      </p>
                      <div className="card-element-hidden-premium">
                        <ul className="card-element-container">
                          <li className="card-element">
                            2 sessions of 1.5 hour
                          </li>
                          <li className="card-element">
                            Each Saturday and Sunday
                          </li>
                          <li className="card-element">
                            Mditation techniques for daily practice
                          </li>
                          <li className="card-element">
                            Be a part of weekly group meditation
                          </li>
                        </ul>
                        <button className="btn btn-premium">Join now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </section>
    </div>
  );
}

export default Services;
