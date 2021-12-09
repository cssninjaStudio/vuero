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

export const optionsCompany = {
  searchable: false,
  perPageSelect: false,
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
      [5, '/demo/avatars/27.jpg', 'Carmen Escudero', 'HR Manager', 'offline', true],
    ],
  },
}
