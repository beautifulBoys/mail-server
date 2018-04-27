import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {saveImgList} from '../router/func.js'
import {rmfold} from '../lib/util.js'
/*
部分功能示例
  递归删除文件夹及其内容
  rmfold(path.join(__dirname, '../../resource/aa/'))
  

*/
export const uploadFunc = (req, res) => {
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '../../linshi')
  let npath = path.join(__dirname, '../../resource/')

  form.parse(req, (err, fields, files) => {
    let result = saveImgList(files, npath)
    
    res.send({title: 'Express', result})

  })
}