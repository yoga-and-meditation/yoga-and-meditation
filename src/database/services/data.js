import yogaGoldIcon from "@services/yoga-gold.png";
import yogaWhiteIcon from "@services/yoga-white.png";
import meditationWhiteIcon from "@services/meditation-white.png";
import meditationGoldIcon from "@services/meditation-gold.png";
import retreatWhite from "@services/retreat-white.png";
import retreatGold from "@services/retreat-gold.png";
/* Service Data Array */
const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
  {
    title: "Meditation",
    activeIcon: meditationWhiteIcon,
    inActiveIcon: meditationGoldIcon,
  },
  {
    title: "Retreats",
    activeIcon: retreatWhite,
    inActiveIcon: retreatGold,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Starter",
      price: "€70 per course",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 4 sessions",
        "45 minutes each Friday",
        "Learn all the basic yoga poses",
      ],
    },
    {
      header: "Professional",
      price: "€120 per course",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "yoga",
      elements: [
        "In-person Yoga",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Learn advance yoga poses",
      ],
    },
    {
      header: "Champion",
      price: "€180 per course",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "yoga",
      elements: [
        "Online Yoga",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Cultivate inner peace & mindfulness",
      ],
    },
  ],

  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: "€50 per course",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "meditation",
      elements: [
        "Online Meditation",
        "For the duration of 4 weeks",
        "30 minutes each Tuesdays",
        "Learn the Basics of Meditation",
      ],
    },
    {
      header: "Professional",
      price: "€90 per course",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "meditation",
      elements: [
        "In-person Meditation",
        "For the duration of 6 weeks",
        "3 sessions per week",
        "Improve Emotional Well-being",
      ],
    },
    {
      header: "Champion",
      price: "€150 per course",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "meditation",
      elements: [
        "In-Person Meditation",
        "For the duration of 8 weeks",
        "4 sessions per week",
        "Develop Deep States of Meditation",
      ],
    },
  ],
  [
    // Courses under Meditation service

    {
      header: "Starter",
      price: "€150 per person",
      buttonText: "Book now",
      className: "basic",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 3 days",
        "Relaxation and Mindfulness",
        "Self-Care and Wellness Practices",
      ],
    },
    {
      header: "Professional",
      price: "€250 per person",
      buttonText: "Book now",
      className: "standard",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of 5 days",
        "Personal Growth and Wellness",
        "Nature walks & silent Reflection",
      ],
    },
    {
      header: "Champion",
      price: "€350 per person",
      buttonText: "Book now",
      className: "premium",
      cardContainer: "retreat",
      elements: [
        "In-person Retreat",
        "For the duration of one week",
        "Mastery and Transformation",
        "Connect with Fellow Spiritual",
      ],
    },
  ],
];

export { cardsData, serviceData };
