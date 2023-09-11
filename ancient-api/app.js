const fs = require('fs');

// const typeName = '经部'

// // 同步读取文件
// const data = fs.readdirSync('../poems-db/' + typeName);


// console.error(data)

// const list = []


// const saveData = async () => {
//   for (let i = 0; i < data.length; i++) {
//     const filename = data[i]
//     if (filename.indexOf('.json') > -1) {
//       const name = filename.replace('.json', '').replace(/[0-9]/g, '')
//       let json = fs.readFileSync('../poems-db/' + typeName + '/' + filename)
//       json = JSON.parse(json)
//       list.push(json[name])
//     }
//   }
//   fs.writeFileSync(typeName + '.json', JSON.stringify(list))
// }

// const getData = async () => {
//   await saveData()
// }

// getData()


// const typeName = '经部'

// let bList = []
// let list = []
// let data = fs.readFileSync(typeName + '.json')
// data = JSON.parse(data)
// for (let i = 0; i < data.length; i ++) {
//   const current = data[i]
//   bList = bList.concat(...current)
// }

// for (let i = 0; i < bList.length; i++) {
//   const current = bList[i]
//   const book = current.tb_book
//   list.push({
//     ...current,
//     book: null,
//     ...book,
//   })
// }

// fs.writeFileSync(typeName + '_a.json', JSON.stringify(list))
// fs.writeFileSync(typeName + '_b.json', JSON.stringify(bList))


// const typeName = '子部'

// let data = fs.readFileSync(typeName + '_b.json')
// data = JSON.parse(data)

// for (let i = 0; i < data.length; i++) {
//   const current = data[i]
//   fs.writeFileSync(typeName + '_book_view.json', JSON.stringify(current) + '\n', {flag: 'a'})
// }


// const typeName = '集部'

// let data = fs.readFileSync(typeName + '_a.json')
// data = JSON.parse(data)

// for (let i = 0; i < data.length; i++) {
//   const current = data[i]
//   fs.writeFileSync(typeName + '_ancient.json', JSON.stringify(current) + '\n', {flag: 'a'})
// }

// const typeName = '史部'

// let data = fs.readFileSync(typeName + '_b.json')
// data = JSON.parse(data)

// let key = 0

// for (let i = 0; i < data.length; i++) {
//   if (i % 8 === 0) {
//     key = key + 1
//   }
//   const current = data[i]
//   fs.writeFileSync(typeName + '_book_view_'+key+'.json', JSON.stringify(current) + '\n', {flag: 'a'})
// }





// const typeName = '经部'

// let data = fs.readFileSync(typeName + '_b.json')
// data = JSON.parse(data)

// for (let i = 0; i < data.length; i++) {
//   let current = data[i]
//   const cList = []
//   const item = {
//     ...current,
//     book: {
//       tb_book: current.book.tb_book,
//       tb_author: current.book.tb_author,
//       book_view_item: null
//     }
//   }
//   // console.log(current.book.tb_bookviews.bookviews)
//   for (let j = 0; j < current.book.tb_bookviews.bookviews.length; j ++) {
//     const sItem = {
//       ...item,
//       book: {
//         ...item.book,
//         book_view_item: current.book.tb_bookviews.bookviews[j]
//       },
//       page_num: j + 1,
//     }
//     fs.writeFileSync(typeName + '_book_view_catalogue.json', JSON.stringify(sItem) + '\n', {flag: 'a'})
//   }
// }



const typeName = '子部'

let data = fs.readFileSync(typeName + '_b.json')
data = JSON.parse(data)

for (let i = 0; i < data.length; i++) {
  let current = data[i]
  let currentItem = {
    ...current.book.tb_book
  }
  fs.writeFileSync(typeName + '_ancient.json', JSON.stringify(currentItem) + '\n', {flag: 'a'})
  for (let j = 0; j < current.book.tb_bookviews.bookviews.length; j ++) {
    const item = current.book.tb_bookviews.bookviews[j]
    item.bookIDjm = currentItem.idjm
    fs.writeFileSync(typeName + '_book_view_catalogue.json', JSON.stringify(item) + '\n', {flag: 'a'})
  }
  // const cList = []
  // const item = {
  //   ...current,
  //   book: {
  //     tb_book: current.book.tb_book,
  //     tb_author: current.book.tb_author,
  //     book_view_item: null
  //   }
  // }
  // for (let j = 0; j < current.book.tb_bookviews.bookviews.length; j ++) {
  //   const sItem = {
  //     ...item,
  //     book: {
  //       ...item.book,
  //       book_view_item: current.book.tb_bookviews.bookviews[j]
  //     },
  //     page_num: j + 1,
  //   }
  //   fs.writeFileSync(typeName + '_book_view_catalogue.json', JSON.stringify(sItem) + '\n', {flag: 'a'})
  // }
}