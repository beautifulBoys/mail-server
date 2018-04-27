import express from 'express'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import {uploadFunc} from '../controller/index.js'
const router = express.Router()

router.post('/upload', uploadFunc)

export default (app) => {
  app.use('/', router)
}
