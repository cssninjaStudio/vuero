import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
export interface KanbanTask {
  id: string
  title: string
  state: string
  dueDate: string
  participants: VAvatarProps[]
}

export function useKanban() {
  const tasks = reactive([
    {
      id: '1',
      title: 'Create prototype with JWT authentication',
      state: 'new',
      dueDate: '3 weeks',
      participants: [
        {
          color: 'warning',
          picture: '/demo/avatars/7.jpg',
        },
      ],
    },
    {
      id: '2',
      title: 'Design a todo list component using React',
      state: 'new',
      dueDate: '3 weeks',
      participants: [
        {
          color: 'info',
          picture: '/images/avatars/svg/vuero-1.svg',
        },
      ],
    },
    {
      id: '3',
      title: 'Implement the users REST API',
      state: 'progress',
      dueDate: '3 days',
      participants: [
        {
          color: 'danger',
          picture: '/demo/avatars/12.jpg',
        },
        {
          color: undefined,
          picture: '/demo/avatars/26.jpg',
        },
        {
          color: undefined,
          picture: '/demo/avatars/19.jpg',
        },
      ],
    },
    {
      id: '4',
      title: 'Review project wireframes',
      state: 'progress',
      dueDate: '1 week',
      participants: [
        {
          color: 'success',
          picture: '/demo/avatars/13.jpg',
        },
      ],
    },
    {
      id: '5',
      title: 'Implement new footer in all pages',
      state: 'progress',
      dueDate: '5 days',
      participants: [
        {
          color: 'info',
          picture: '/demo/avatars/16.jpg',
        },
      ],
    },
    {
      id: '6',
      title: 'Implement the projects REST API',
      state: 'ready',
      dueDate: '2 days',
      participants: [
        {
          color: 'warning',
          picture: '/images/avatars/svg/vuero-1.svg',
        },
      ],
    },
    {
      id: '7',
      title: 'Landing page redesign',
      state: 'completed',
      dueDate: 'On time',
      participants: [
        {
          color: 'success',
          picture: '/demo/avatars/12.jpg',
        },
      ],
    },
    {
      id: '8',
      title: 'Projects REST API Implementation',
      state: 'completed',
      dueDate: 'On time',
      participants: [
        {
          color: 'danger',
          picture: '/demo/avatars/18.jpg',
        },
        {
          picture: '/demo/avatars/9.jpg',
        },
      ],
    },
    {
      id: '9',
      title: 'Database replication setup',
      state: 'completed',
      dueDate: 'On time',
      participants: [
        {
          color: 'primary',
          picture: '/demo/avatars/13.jpg',
        },
      ],
    },
    {
      id: '10',
      title: 'Firebase demo application setup',
      state: 'completed',
      dueDate: 'On time',
      participants: [
        {
          color: 'warning',
          picture: '/demo/avatars/16.jpg',
        },
      ],
    },
  ])

  const search = shallowRef('')

  const filteredTasks = computed(() => {
    if (!search.value) {
      return tasks as KanbanTask[]
    } else {
      return tasks.filter((item) => {
        return item.title.match(new RegExp(search.value, 'i'))
      }) as KanbanTask[]
    }
  })

  const participants = computed(() => {
    return tasks.reduce<VAvatarProps[]>((accumulator, task) => {
      for (const participant of task.participants) {
        const exists = accumulator.find((value) => {
          return value.picture === participant.picture
        })

        if (!exists) {
          accumulator.push(participant as VAvatarProps)
        }
      }

      return accumulator
    }, [])
  })

  const newTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'new')
  })
  const progressTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'progress')
  })
  const readyTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'ready')
  })
  const reviewTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'review')
  })
  const completedTasks = computed(() => {
    return filteredTasks.value.filter((task) => task.state === 'completed')
  })

  return {
    tasks,
    participants,
    newTasks,
    progressTasks,
    readyTasks,
    reviewTasks,
    completedTasks,
    search,
    filteredTasks,
  }
}
