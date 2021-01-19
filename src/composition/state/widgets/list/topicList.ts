import { ref } from 'vue'

export const topicList = ref([
  {
    id: 0,
    icon: 'feather:chrome',
    color: 'info',
    name: 'Browsers',
    category: 'Technology',
    progress: [
      {
        id: 2,
        picture: '/@images/avatars/photos/12.jpg',
      },
      {
        id: 5,
        picture: '/@images/avatars/photos/22.jpg',
      },
      {
        id: 11,
        picture: '/@images/avatars/photos/40.jpg',
      },
      {
        id: 100,
        picture: 'https://via.placeholder.com/150x150',
      },
      {
        id: 101,
        picture: 'https://via.placeholder.com/150x150',
      },
      {
        id: 102,
        picture: 'https://via.placeholder.com/150x150',
      },
      {
        id: 103,
        picture: 'https://via.placeholder.com/150x150',
      },
      {
        id: 104,
        picture: 'https://via.placeholder.com/150x150',
      },
    ],
  },
  {
    id: 1,
    picture: '/@images/avatars/photos/5.jpg',
    name: 'Mary Lebowski',
    position: 'Project Manager',
    progress: 22,
  },
  {
    id: 2,
    picture: '/@images/avatars/photos/8.jpg',
    name: 'Erik Kovalsky',
    position: 'Product Manager',
    progress: -12,
  },
  {
    id: 3,
    picture: '/@images/avatars/photos/32.jpg',
    name: 'Jonathan Krugger',
    position: 'Product Manager',
    progress: 32,
  },
  {
    id: 4,
    picture: '/@images/avatars/photos/21.jpg',
    name: 'Elizabeth Fisher',
    position: 'Mobile Developer',
    progress: -4,
  },
  {
    id: 5,
    picture: '/@images/avatars/photos/21.jpg',
    name: 'Tara Svenson',
    position: 'UI/UX Designer',
    progress: 32,
  },
])
