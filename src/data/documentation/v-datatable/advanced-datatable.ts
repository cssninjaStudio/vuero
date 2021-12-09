// Add Icon
function renderIcon(data: any /* , cell: any, row: any */) {
  return `
    <div class="media-flex-center">
      <img class="drinks-icon" src="/images/icons/datatable/${data}.svg" alt="">
      <div class="flex-meta">
        <span class="is-capitalize">${data}</span>
      </div>
    </div>
  `
}

// Caffeinated column cell manipulation
function renderYesNo(data: any /* , cell: any, row: any */) {
  return data == 'true'
    ? '<div class="has-text-centered"><span class="positive-icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span></div>'
    : '<div class="has-text-centered"><span class="negative-icon"><i aria-hidden="true" class="iconify" data-icon="feather:x"></i></span></div>'
}

// Price
function renderHighLow(data: any /* , cell: any, row: any */) {
  if (data > 0) {
    return `<span class="price dark-inverted">${data}</span>`
  } else if (data == 0) {
    return `<span class="price price-free dark-inverted">${data}</span>`
  }
}

// Stock
function renderStock(data: any /* , cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Status
function renderStatus(data: any /* , cell: any, row: any */) {
  if (data === 'available') {
    return `<span class="tag is-primary is-elevated is-curved is-capitalize">${data}</span>`
  } else if (data === 'new') {
    return `<span class="tag is-info is-elevated is-curved is-capitalize">${data}</span>`
  }
  if (data === 'unavailable') {
    return `<span class="tag is-danger is-elevated is-curved is-capitalize">${data}</span>`
  }
}

// profit
function renderProfit(data: any /* , cell: any, row: any */) {
  if (data > 0) {
    return `<div class="has-text-centered"><span class="positive-icon light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-up"></i> +${data}%</span></div>`
  } else if (data < 0) {
    return `<div class="has-text-centered"><span class="negative-icon is-danger light-text"><i aria-hidden="true" class="iconify" data-icon="feather:trending-down"></i> -${data}%</span></div>`
  }
}

// Button
function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">Manage</button></div>`
}

export const optionsAdvanced = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 5,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderIcon },
    { select: 2, render: renderYesNo },
    { select: 3, render: renderHighLow },
    { select: 4, render: renderStock },
    { select: 5, render: renderStatus },
    { select: 6, render: renderProfit },
    { select: 7, render: renderButton, sortable: false },
  ],
  data: {
    headings: [
      'ID',
      'Drink',
      'Caffeinated',
      'Price',
      'Stock',
      'Status',
      'Profit',
      'Actions',
    ],
    data: [
      [574, 'milk', false, 1.45, 978, 'available', 2.5, true],
      [984, 'coffee', true, 2.49, 1261, 'available', 4.3, true],
      [312, 'cola', true, 1.49, 153, 'new', 2.6, true],
      [312, 'soda', true, 1.49, 648, 'available', -1.25, true],
      [312, 'beer', false, 3.25, 928, 'available', 5.12, true],
      [312, 'juice', false, 1.72, 117, 'available', -2.1, true],
      [312, 'water', false, 1.21, 19, 'new', 3.0, true],
      [312, 'smoothie', false, 3.49, 265, 'unavailable', 3.61, true],
      [312, 'infusion', false, 1.89, 897, 'available', -1.24, true],
      [312, 'cocktail', false, 3.49, 119, 'available', -2.45, true],
      [312, 'latte', true, 2.49, 457, 'new', 3.0, true],
      [312, 'cosmopolitan', false, 4.49, 98, 'available', 1.48, true],
      [312, 'lemonade', true, 1.25, 1221, 'available', -1.28, true],
      [312, 'milkshake', false, 2.49, 158, 'available', 2.3, true],
      [312, 'wine', false, 4.49, 619, 'new', 5.8, true],
      [312, 'tea', false, 1.25, 481, 'available', 1.3, true],
      [312, 'mojito', true, 4.49, 762, 'unavailable', 4.9, true],
      [312, 'sangria', false, 1.49, 456, 'available', 12.3, true],
    ],
  },
}
