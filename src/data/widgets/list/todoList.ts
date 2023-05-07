export function useTodoList() {
  const todoList1 = shallowRef([
    {
      id: 0,
      completed: true,
      title: 'Call Mike R.',
      time: 'at 8:30am',
      status: 'Pending',
    },
    {
      id: 1,
      completed: false,
      title: 'Finish document review',
      time: 'at 11:30am',
      status: 'Pending',
    },
    {
      id: 2,
      completed: false,
      title: 'Project Meeting',
      time: 'at 12:00pm',
      status: 'Pending',
    },
    {
      id: 3,
      completed: false,
      title: 'Meet with Kacey M.',
      time: 'at 3:00pm',
      status: 'Pending',
    },
    {
      id: 4,
      completed: false,
      title: 'Review final draft',
      time: 'at 6:00pm',
      status: 'Pending',
    },
  ])

  const todoList2 = shallowRef([
    {
      id: 0,
      completed: true,
      title: 'Call Mike R.',
      time: 'at 8:30am',
      status: 'Pending',
    },
    {
      id: 1,
      completed: false,
      title: 'Finish document review',
      time: 'at 11:30am',
      status: 'Pending',
    },
    {
      id: 2,
      completed: true,
      title: 'Project Meeting',
      time: 'at 12:00pm',
      status: 'Pending',
    },
    {
      id: 3,
      completed: true,
      title: 'Meet with Kacey M.',
      time: 'at 3:00pm',
      status: 'Pending',
    },
    {
      id: 4,
      completed: false,
      title: 'Review final draft',
      time: 'at 6:00pm',
      status: 'Pending',
    },
  ])

  const todoList3 = shallowRef([
    {
      id: 0,
      completed: true,
      title: 'Call Mike R.',
      time: 'at 8:30am',
      status: 'Pending',
    },
    {
      id: 1,
      completed: false,
      title: 'Finish document review',
      time: 'at 11:30am',
      status: 'Pending',
    },
    {
      id: 2,
      completed: false,
      title: 'Project Meeting',
      time: 'at 12:00pm',
      status: 'Pending',
    },
    {
      id: 3,
      completed: false,
      title: 'Meet with Kacey M.',
      time: 'at 3:00pm',
      status: 'Pending',
    },
    {
      id: 4,
      completed: false,
      title: 'Review final draft',
      time: 'at 6:00pm',
      status: 'Pending',
    },
  ])

  const todoList4 = shallowRef([
    {
      id: 0,
      completed: true,
      title: 'Call Mike R.',
      time: 'at 8:30am',
      status: 'Pending',
    },
    {
      id: 1,
      completed: false,
      title: 'Finish document review',
      time: 'at 11:30am',
      status: 'Pending',
    },
    {
      id: 2,
      completed: true,
      title: 'Project Meeting',
      time: 'at 12:00pm',
      status: 'Pending',
    },
    {
      id: 3,
      completed: true,
      title: 'Meet with Kacey M.',
      time: 'at 3:00pm',
      status: 'Pending',
    },
    {
      id: 4,
      completed: false,
      title: 'Review final draft',
      time: 'at 6:00pm',
      status: 'Pending',
    },
  ])

  return {
    todoList1,
    todoList2,
    todoList3,
    todoList4,
  }
}
