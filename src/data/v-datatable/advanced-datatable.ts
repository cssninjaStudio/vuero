import { ref, reactive } from 'vue'

// Add Icon
function renderIcon(data: any, cell: any, row: any) {
  if (data.indexOf('.jpg') === -1) {
    console.log('This cell has no images')
  } else {
    console.log('This cell has an image')
  }
  if (data == 'latte') {
    return `🔥 ${data}`
  } else {
    return `🌿 ${data}`
  }
}

// Price column cell manipulation
function renderButton(data: any, cell: any, row: any) {
  return `${data}<button data-row="${row.dataIndex}">Buy Now</button>`
}

// Caffeinated column cell manipulation
function renderYesNo(data: any, cell: any, row: any) {
  if (data == 'true') {
    return row.classList.add('yes'), `<b>Yes</b>`
  } else if (data == 'false') {
    return row.classList.add('no'), `<b>No</b>`
  }

  // Or if you don't need to add class to the "row"
  // return data == 'true' ? '<b class="yes">Yes</b>' : '<b class="no">No</b>';
}

// numbers
function renderHighLow(data: any, cell: any, row: any) {
  if (data < 0) {
    return `<span class="currency currency--loss">${data}</span>`
  } else if (data > 0) {
    return `<span class="currency currency--profit">${data}</span>`
  } else if (data == 0) {
    return `<span class="currency currency--zero">${data}</span>`
  }
}

export const optionsAdvanced = reactive({
  perPageSelect: [10, 20, 25, 50, 100],
  perPage: 25,
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderIcon },
    { select: 2, render: renderButton },
    { select: 3, render: renderYesNo },
    { select: 4, render: renderHighLow },
  ],
  data: {
    headings: ['ID', 'Drink', 'Price', 'Caffeinated', 'Profit'],
    data: [
      [574, 'latte.jpg', 4.0, false, 0.0],
      [984, 'herbal tea', 3.0, false, 0.56],
      [312, 'green tea', 3.0, true, 1.72],
      [312, 'latte', 3.0, true, -1.21],
      [312, 'green tea', 3.0, false, 0.0],
      [312, 'green tea', 3.0, false, 0.0],
      [312, 'green tea', 3.0, true, 1.72],
      [312, 'latte', 3.0, true, 1.72],
      [312, 'green tea', 3.0, true, -1.21],
      [312, 'green tea', 3.0, false, 0.0],
      [312, 'green tea', 3.0, true, 1.72],
      [312, 'green tea', 3.0, true, 1.72],
      [312, 'latte', 3.0, false, 0.0],
      [312, 'latte', 3.0, true, 1.72],
      [312, 'green tea', 3.0, false, 0.0],
      [312, 'green tea', 3.0, true, 1.72],
      [312, 'latte', 3.0, false, 0.0],
      [312, 'latte', 3.0, true, -1.21],
      [312, 'latte', 3.0, true, 1.72],
      [312, 'latte', 3.0, false, 0.0],
      [312, 'latte', 3.0, false, 0.0],
      [312, 'latte', 3.0, true, 1.72],
      [312, 'green tea', 3.0, true, -1.21],
      [312, 'green tea', 3.0, true, -1.21],
      [312, 'green tea', 3.0, true, -1.21],
    ],
  },
})
