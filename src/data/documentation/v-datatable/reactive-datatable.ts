import { reactive } from 'vue'

export const randomUpdate = () => {
  const max = optionsReactive.data.data.length
  const index = Math.floor(Math.random() * max)
  const percent = parseInt(`${optionsReactive.data.data[index][4]}`.replace('%', ''))

  if (percent < 100) {
    optionsReactive.data.data[index][1] = Math.floor(Math.random() * 5000)
    optionsReactive.data.data[index][4] = `${percent + 1}%`
  }
}

export const optionsReactive = reactive({
  perPageSelect: [10, 20, 30, 40, 50, 100],
  perPage: 10,
  data: {
    headings: ['Name', 'Ext.', 'City', 'Start Date', 'Completion'],
    data: [
      ['Unity Pugh', 9958, 'Curicó', '2005/02/11', '37%'],
      ['Theodore Duran', 8971, 'Dhanbad', '1999/04/07', '97%'],
      ['Kylie Bishop', 3147, 'Norman', '2005/09/08', '63%'],
      ['Willow Gilliam', 3497, 'Amqui', '2009/29/11', '30%'],
      ['Blossom Dickerson', 5018, 'Kempten', '2006/11/09', '17%'],
      ['Elliott Snyder', 3925, 'Enines', '2006/03/08', '57%'],
      ['Castor Pugh', 9488, 'Neath', '2014/23/12', '93%'],
      ['Pearl Carlson', 6231, 'Cobourg', '2014/31/08', '100%'],
      ['Deirdre Bridges', 1579, 'Eberswalde-Finow', '2014/26/08', '44%'],
      ['Daniel Baldwin', 6095, 'Moircy', '2000/11/01', '33%'],
      ['Phelan Kane', 9519, 'Germersheim', '1999/16/04', '77%'],
      ['Quentin Salas', 1339, 'Los Andes', '2011/26/01', '49%'],
      ['Armand Suarez', 6583, 'Funtua', '1999/06/11', '9%'],
      ['Gretchen Rogers', 5393, 'Moxhe', '1998/26/10', '24%'],
      ['Harding Thompson', 2824, 'Abeokuta', '2008/06/08', '10%'],
      ['Mira Rocha', 4393, 'Port Harcourt', '2002/04/10', '14%'],
      ['Drew Phillips', 2931, 'Goes', '2011/18/10', '58%'],
      ['Emerald Warner', 6205, 'Chiavari', '2002/08/04', '58%'],
      ['Colin Burch', 7457, 'Anamur', '2004/02/01', '34%'],
    ],
  },
})
