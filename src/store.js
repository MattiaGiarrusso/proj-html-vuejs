import { reactive } from "vue"

export const store = reactive ({

    socialIcons: [
      {
          icon: 'fa-x-twitter',
      },
      {
          icon: 'fa-facebook',
      },
      {
          icon: 'fa-behance',
      },
      {
          icon: 'fa-pinterest',
      },
      {
          icon: 'fa-basketball',
      },
      {
          icon: 'fa-git',
      },
      {
          icon: 'fa-dice-two',
      },
      {
          icon: 'fa-linkedin',
      },
      ],
    
    picBoxs: [
        {
            image: 'cat_5-370x155.jpg',
            title: 'Music',
            course: '5 Courses'
        },
        {
            image: 'cat_4-370x155.jpg',
            title: 'Exercise',
            course: '7 Courses'
        },
        {
            image: 'cat_6-370x155.jpg',
            title: 'Photography',
            course: '4 Courses'
        },
    ],

    recentCourses: [
        {
            image: 'photo-1461749280684-dccba630e2f6-272x161.jpeg',
            subtitle: 'Apache >',
            title: 'Web Coding and Apache Basics',
            hours: '6 hours',
            price: 'FREE'                
        },
        {
            image: 'cat_2-272x161.jpg',
            subtitle: 'Art >',
            title: 'Real Things Art Painting by Jason Ni',
            hours: '6 hours',
            price: '$45'                
          },
          {
            image: 'course-preview-272x161.jpg',
            subtitle: 'Software Development >',
            title: 'Basics of MasterStudy',
            stars: '★★★★★',
            price: 'FREE'                
          },
          {
            image: 'photo-1496307042754-b4aa456c4a2d-272x161.jpeg',
            subtitle: 'Eletronic >',
            title: 'How to be a DJ? Make Eletronic Music',
            stars: '★★★★★',
            price: '$49'                
          },
          {
            image: 'photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg',
            subtitle: 'Comunication >',
            title: 'Design instruments for Communication',
            hours: '6 hours',
            price: ''
          },
          {
            image: 'cathryn-lavery-67852-unsplash-272x161.jpg',
            subtitle: 'Art >',
            title: 'Make your Concept Right And Beautiful',
            hours: '6 hours',
            price: '$70'                
          },
          
          {
            image: 'photo-1475452779376-caebfb988090-272x161.jpeg',
            subtitle: 'Bycicling >',
            title: 'Road Bike Manual or How to Be a Champion',
            hours: '6 hours',
            price: '$20'                
        },
        {
            image: 'cristian-grecu-762012-unsplash-min-scaled-272x161.jpg',
            subtitle: 'Documentary >',
            title: 'How to Make Beautiful Landscape photos?',
            hours: '6 hours',
            price: '$60'                
          },
          {
            image: 'landscape-272x161.jpg',
            subtitle: 'Art >',
            title: "Let's paint Van Gogh's Starry Night",
            hours: '6 hours',
            price: '$79'                
          },
          {
            image: '12345-1-272x161.png',
            subtitle: 'Nvidia >',
            title: 'Nvidia and UE4 Technologies Pratice',
            stars: '★★★★★',
            price: 'FREE'                
          },
          {
            image: 'jakob-owens-198234-unsplash-min-1-272x161.png',
            subtitle: 'Art >',
            title: 'How to Work with Legendary RED camera?',
            hours: '6 hours',
            price: 'FREE'
          },
          {
            image: 'promo_tf-272x161.jpg',
            subtitle: 'Software Development >',
            title: 'MasterStudy Mobile LMS App',
            hours: '2 hours',
            price: 'FREE'                
          },
    ]
});