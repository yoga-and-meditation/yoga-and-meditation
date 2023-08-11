import { useState } from "react";

/* Service Data Array */
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

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Meditation service
    {
      header: "Coming soon",
      price: "NIA",
      buttonText: "Contact now",
      className: "basic",
      elements: ["Corporate Meditation,", "Yoga", "&", "Retreats workshops"],
    },
    {
      header: "Online Meditation",
      price: "€70 /course",
      buttonText: "Join now",
      className: "standard",
      elements: [
        "4 sessions of 45 minutes",
        "Every Friday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
    {
      header: "In-person Meditation",
      price: "€80 /course",
      buttonText: "Join now",
      className: "premium",
      elements: [
        "2 sessions of 1.5 hours",
        "Each Saturday and Sunday",
        "Meditation techniques for daily practice",
        "Be a part of weekly group meditation",
      ],
    },
  ],
  [
    // Courses under Yoga service
    {
      header: "Coming soon",
      price: "NIA",
      buttonText: "Contact now",
      className: "basic",
      elements: ["Corporate Meditation,", "Yoga", "&", "Retreats workshops"],
    },
    {
      header: "Online Yoga",
      price: "€8 /session",
      buttonText: "Join now",
      className: "standard",
      elements: [
        "1 session of 70 minutes",
        "Every Monday",
        "Yoga techniques for daily practice",
        "Be a part of weekly group Yoga",
      ],
    },
    {
      header: "In-person Yoga",
      price: "€13 /session",
      buttonText: "Join now",
      className: "premium",
      elements: [
        "1 session of 1.5 hours",
        "Every Thursday",
        "Yoga techniques for daily practice",
        "Be a part of weekly group yoga",
      ],
    },
  ],
];

/* Initializing the Service component */
function Services() {
  const [tab, setTab] = useState(0);

  // Handle tab click event
  const handleTabClick = (index) => {
    setTab(index);
  };

  // Get active service based on selected tab
  const activeService = serviceData[tab];

  return (
    <div className="service-container">
      {/* Header  container*/}
      <div className="header-container">
        <h2>Join our courses</h2>
      </div>

      {/* Tabs container*/}
      {/* Render tabs for different services */}
      <div className="tabs">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`tab-2 ${tab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {/* Tab label */}
            <label htmlFor={`tab2-${index + 1}`}>{service.title}</label>
            <input
              id={`tab2-${index + 1}`}
              name="tabs-two"
              type="radio"
              checked={tab === index}
              readOnly
            />
          </div>
        ))}
      </div>

      {/* Service Section */}
      <section className="service-section">
        {activeService && (
          <div className="card-content-container">
            <div className="content-container">
              <p className="card-text">{activeService.text}</p>
            </div>

            {/* Cards */}
            {/* Render cards for different courses */}
            <div className="cards-container">
              {cardsData[tab].map((content, index) => (
                <div key={index} className={`card-${content.className}`}>
                  {/* Card Header */}
                  <div className={`card-header header-${content.className}`}>
                    <h3>{content.header}</h3>
                  </div>
                  {/* Card Body */}
                  <div className="card-body">
                    {content.price && (
                      <p>
                        <h3>{content.price}</h3>
                      </p>
                    )}
                    <div className={`card-element-hidden-${content.className}`}>
                      {/* List of elements for the course */}
                      <ul className="card-element-container">
                        {content.elements.map((element, elementIndex) => (
                          <li className="card-element" key={elementIndex}>
                            {element}
                          </li>
                        ))}
                      </ul>

                      {/* Button to join the course */}
                      <button className={`btn btn-${content.className}`}>
                        {content.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Services;
