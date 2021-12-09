// Add Icon
function renderPicture(data: any /*, cell: any, row: any */) {
  return `
        <img class="product-photo" src="${data}" alt="">
    `
}

// Name
function renderName(data: any /*, cell: any, row: any */) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`
}

// SKU
function renderSKU(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Price
function renderPrice(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">$${data}</span>`
}

// Stock
function renderStock(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Category
function renderCategory(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Button
function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-right">
            <button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">
                <span class="icon">
                    <i aria-hidden="true" class="lnir lnir-pencil"></i>
                </span>
                <span>Edit</span>
            </button>
        </div>
    `
}

export const datatableV2 = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderSKU },
    { select: 4, render: renderPrice },
    { select: 5, render: renderStock },
    { select: 6, render: renderCategory },
    { select: 7, render: renderButton, sortable: false },
  ],
  data: {
    headings: ['ID', 'Picture', 'Name', 'SKU', 'Price', 'Stock', 'Category', 'Actions'],
    data: [
      [
        0,
        '/demo/photos/products/1.png',
        'Yellow Couch',
        'FC-58-5564',
        190,
        51,
        'Couches',
        true,
      ],
      [
        1,
        '/demo/photos/products/2.png',
        'Green Couch',
        'FC-58-1565',
        170,
        42,
        'Couches',
        true,
      ],
      [
        2,
        '/demo/photos/products/3.png',
        'Turquoise Seat',
        'FS-12-4854',
        90,
        59,
        'Chairs',
        true,
      ],
      [
        3,
        '/demo/photos/products/4.png',
        'Cyan Couch',
        'FC-58-6723',
        180,
        42,
        'Couches',
        true,
      ],
      [
        4,
        '/demo/photos/products/5.png',
        'Coffee Table',
        'FT-45-4684',
        280,
        12,
        'Tables',
        true,
      ],
      [
        5,
        '/demo/photos/products/6.png',
        'Red Couch',
        'FC-58-7565',
        190,
        37,
        'Couches',
        true,
      ],
      [
        6,
        '/demo/photos/products/7.png',
        'Mustard Seat',
        'FS-11-1861',
        70,
        31,
        'Chairs',
        true,
      ],
      [
        7,
        '/demo/photos/products/8.png',
        'Modern Sofa',
        'FC-58-3971',
        190,
        29,
        'Couches',
        true,
      ],
      [
        8,
        '/demo/photos/products/9.png',
        'Table Triplets',
        'FT-22-2875',
        340,
        6,
        'Tables',
        true,
      ],
      [
        9,
        '/demo/photos/products/10.png',
        'Wood Chair',
        'FS-11-2876',
        80,
        16,
        'Chairs',
        true,
      ],
      [
        10,
        '/demo/photos/products/11.png',
        'Modern Table',
        'FT-14-6543',
        150,
        33,
        'Tables',
        true,
      ],
      [
        11,
        '/demo/photos/products/12.png',
        'Hippie Sofa',
        'FC-58-7241',
        380,
        4,
        'Couches',
        true,
      ],
      [
        12,
        '/demo/photos/products/13.png',
        'Wood Dresser',
        'FD-98-4654',
        270,
        26,
        'Dressers',
        true,
      ],
      [
        13,
        '/demo/photos/products/14.png',
        'Walnut Chair',
        'FS-11-5873',
        110,
        37,
        'Chairs',
        true,
      ],
      [
        14,
        '/demo/photos/products/15.png',
        'Purple Armchair',
        'FS-10-1948',
        130,
        24,
        'Chairs',
        true,
      ],
      [
        15,
        '/demo/photos/products/16.png',
        'Round Chair',
        'FS-11-2857',
        60,
        31,
        'Chairs',
        true,
      ],
      [
        16,
        '/demo/photos/products/17.png',
        'Modern Cabinet',
        'FB-58-25253',
        240,
        11,
        'Cabinets',
        true,
      ],
      [
        17,
        '/demo/photos/products/18.png',
        'Chromed Cabinet',
        'FB-58-5673',
        350,
        29,
        'Cabinets',
        true,
      ],
      [
        18,
        '/demo/photos/products/19.png',
        'Modern Lamp',
        'FL-19-7354',
        50,
        62,
        'Lamps',
        true,
      ],
      [
        19,
        '/demo/photos/products/20.png',
        'Lamp Triplets',
        'FL-18-2846',
        180,
        44,
        'Lamps',
        true,
      ],
      [
        20,
        '/demo/photos/products/21.png',
        'Wood Lamp',
        'FL-19-1947',
        60,
        82,
        'Lamps',
        true,
      ],
      [
        21,
        '/demo/photos/products/22.png',
        'Carbone Fiber Lamp',
        'FL-19-3658',
        220,
        11,
        'Lamps',
        true,
      ],
      [
        22,
        '/demo/photos/products/23.png',
        'Multidirectional Spots',
        'FL-19-1731',
        160,
        17,
        'Lamps',
        true,
      ],
    ],
  },
}
