const taskListData = [
  {
    id: 3,
    status: 1,
    category: 'Разработка',
    title: 'Что то надо 1',
    order: 3,
    dueDate: new Date(),
    tags: [
      {
        name: 'Горит',
        color: 'red',
      },
      {
        name: 'Перегорит',
        color: 'blue',
      },
    ],
  },
  {
    id: 1,
    status: 1,
    category: 'Разработка',
    title: 'Что то надо',
    order: 2,
    dueDate: new Date(),
    tags: [
      {
        name: 'Горит',
        color: 'red',
      },
      {
        name: 'Перегорит',
        color: 'blue',
      },
    ],
  },
  {
    id: 2,
    status: 2,
    order: 1,
    category: 'Разработка',
    title: 'Что то надо',
    dueDate: new Date(),
    tags: [
      {
        name: 'Горит',
        color: 'red',
      },
      {
        name: 'Перегорит',
        color: 'blue',
      },
    ],
  },
];

export default taskListData;
