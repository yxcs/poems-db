const fs = require('fs');
const lineReader = require('line-reader');

// const list = []
// lineReader.eachLine('../poems-cipai.json', function(line, last) {
//   list.push(JSON.parse(line))
//   if(last) {
//     const obj = {
//       type: 'cipaidaquan',
//       name: '词牌大全',
//       desc: '包含了1667个词牌以及词牌的相关介绍',
//       tags: list
//     }
//     fs.writeFileSync('options_cipaidaquan.json', JSON.stringify(obj))
//   }
// });

let list = []
lineReader.eachLine('../poems-category.json', function(line, last) {
  var newLine = JSON.parse(line)
  newLine.mainName = '类型'
  list.push(newLine)
  if(last) {
    lineReader.eachLine('../poems-category.json', function(line, last) {
      var newLine = JSON.parse(line)
      newLine.mainName = '朝代'
      list.push(newLine)
      if (last) {

        var names = [
          "李白",
          "白居易",
          "杜甫",
          "苏轼",
          "辛弃疾",
          "李清照",
          "刘禹锡",
          "王维",
          "李商隐",
          "纳兰性德",
          "杜牧",
          "陆游",
          "陶渊明",
          "孟浩然",
          "元稹",
          "李煜",
          "柳宗元",
          "岑参",
          "韩愈",
          "王安石",
          "欧阳修",
          "齐己",
          "贾岛",
          "韦应物",
          "曹操",
          "温庭筠",
          "柳永",
          "刘长卿",
          "李贺",
          "曹植",
          "王昌龄",
          "张籍",
          "孟郊",
          "皎然",
          "贯休",
          "许浑",
          "罗隐",
          "杨万里",
          "陆龟蒙",
          "张祜",
          "王建",
          "韦庄",
          "诸葛亮",
          "范仲淹",
          "王勃",
          "姚合",
          "晏殊",
          "屈原",
          "卢纶",
          "杜荀鹤",
          "岳飞",
          "周邦彦",
          "晏几道",
          "钱起",
          "韩偓",
          "皮日休",
          "秦观",
          "吴文英",
          "朱熹",
          "高适",
          "方干",
          "马致远",
          "李峤",
          "赵嘏",
          "权德舆",
          "皇甫冉",
          "左丘明",
          "刘辰翁",
          "郑谷",
          "黄庭坚",
          "贺铸",
          "赵长卿",
          "张九龄",
          "卓文君",
          "戴叔伦",
          "司马迁",
          "周敦颐",
          "文天祥",
          "张说",
          "张炎",
          "郑燮",
          "程垓",
          "朱敦儒",
          "吴融",
          "白朴",
          "刘克庄",
          "李端",
          "司空图",
          "顾况",
          "张乔",
          "马戴",
          "吴潜",
          "张孝祥",
          "韩翃",
          "郦道元",
          "陈著",
          "宋之问",
          "贺知章",
          "王之涣"
        ]

        const authors = names.map(item => {
          return {
            mainName: '作者',
            name: item,
          }
        })

        list = list.concat(authors)

        const obj = {
          type: 'changjianfenlei',
          name: '常见分类',
          desc: '包含了至少163种类型、70个朝代以及99个作者',
          tags: list
        }
        fs.writeFileSync('options_leixing.json', JSON.stringify(obj))

      }
    })
  }
});