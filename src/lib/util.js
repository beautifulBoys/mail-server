import fs from 'fs'
import path from 'path'

// 递归删除非空目录
const rmfold = (path) => {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(file => {
      var curPath = path + '/' + file
      if(fs.statSync(curPath).isDirectory()) {
        rmfold(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

export {
    rmfold
}