// Add Icon
function renderPicture(data: any /* , cell: any, row: any */) {
  return `
        <div class="v-avatar">
            <img class="avatar" src="${data}" alt="">
        </div>
    `
}

// Name
function renderName(data: any /* , cell: any, row: any */) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`
}

// Position
function renderPosition(data: any /* , cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Status
function renderStatus(data: any /* , cell: any, row: any */) {
  return `
        <div class="status is-${data}">
            <i aria-hidden="true" class="fas fa-circle"></i>
            <span class="is-capitalize">${data}</span>
        </div>
    `
}

// Button
function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`
}

export const optionsUsers = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderPosition },
    { select: 4, render: renderStatus },
    { select: 5, render: renderButton, sortable: false },
  ],
  data: {
    headings: ['ID', 'Picture', 'Name', 'Position', 'Status', 'Actions'],
    data: [
      [
        0,
        '/images/avatars/svg/vuero-1.svg',
        'Erik Kovalsky',
        'Product Manager',
        'busy',
        true,
      ],
      [1, '/demo/avatars/7.jpg', 'Alice Carasca', 'Software Engineer', 'offline', true],
      [2, '/demo/avatars/13.jpg', 'Tara Svenson', 'UI/UX Designer', 'offline', true],
      [3, '/demo/avatars/5.jpg', 'Mary Lebowski', 'Project Manager', 'available', true],
      [
        4,
        '/images/avatars/placeholder-f.jpg',
        'Kaylee Jennings',
        'Web Developer',
        'available',
        true,
      ],
      [5, '/demo/avatars/27.jpg', 'Carmen Escudero', 'HR Manager', 'offline', true],
      [6, '/demo/avatars/22.jpg', 'Dwayne Hicks', 'Product Manager', 'offline', true],
      [
        7,
        '/images/avatars/placeholder-m.jpg',
        'Paul Morris',
        'Backend Developer',
        'available',
        true,
      ],
      [
        8,
        '/demo/avatars/23.jpg',
        'Irina Vierbovsky',
        'Project Manager',
        'available',
        true,
      ],
      [9, '/demo/avatars/28.jpg', 'Edouard Falant', 'Web Developer', 'busy', true],
      [
        10,
        '/images/avatars/placeholder-f.jpg',
        'Shana Williams',
        'Sales Manager',
        'offline',
        true,
      ],
      [
        11,
        '/images/avatars/placeholder-m.jpg',
        'Benjamin Hoffman',
        'Product Manager',
        'offline',
        true,
      ],
      [12, '/demo/avatars/39.jpg', 'Alejandro Badajoz', 'Web Developer', 'busy', true],
      [
        13,
        '/demo/avatars/21.jpg',
        'Elizabeth Fisher',
        'Mobile Developer',
        'available',
        true,
      ],
      [14, '/demo/avatars/37.jpg', 'Helmut Fritz', 'Product Manager', 'available', true],
      [15, '/demo/avatars/31.jpg', 'Yasseen Amzi', 'Business Analyst', 'offline', true],
    ],
  },
}
