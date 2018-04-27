import nodemailer from 'nodemailer'
// 开启一个 SMTP 连接池
// var smtpTransport = nodemailer.createTransport('SMTP', {
//   host: 'smtp.qq.com', // 主机
//   secureConnection: true, // 使用 SSL
//   port: 465, // SMTP 端口
//   auth: {
//     user: '1298947916@qq.com', // 账号
//     pass: 'xxxxxxxx' // 密码
//   }
// });
// // 设置邮件内容
// var mailOptions = {
//   from: 'Fred Foo <1298947916@qq.com>', // 发件地址
//   to: '2838890xx@qq.com, minimixx@126.com', // 收件列表
//   subject: 'Hello world', // 标题
//   html: '<b>thanks a for visiting!</b> 世界，你好！' // html 内容
// }
// // 发送邮件
// smtpTransport.sendMail(mailOptions, (error, response) => {
//   if (error) console.log(error)
//   else console.log('Message sent: ' + response.message)
//
//   smtpTransport.close() // 如果没用，关闭连接池
// })
//

export default () => {
  // 邮件信息
  // const mailOptions = {
  //   from: '635559164@qq.com', // 发送邮箱
  //   to: '1298947916@qq.com', // 接受邮箱
  //   subject: '测试邮件', // 标题
  //   html: '<b>thanks a for visiting!</b> 世界，你好！' // 内容
  // }
  //
  // // 发送邮件
  // const transporter = nodemailer.createTransport('SMTP', {
  //   host: 'smtp.qq.com', // 设置服务
  //   port: 465, // 端口
  //   sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
  //   auth: {
  //     user: '1298947916@qq.com', // 邮箱和密码
  //     pass: 'lyxz12345acb'
  //   }
  // })
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error)
  //   }
  //   console.log('Message %s sent: %s', info.messageId, info.response)
  // })

  // 开启一个 SMTP 连接池
  var smtpTransport = nodemailer.createTransport({
    host: 'smtp.qq.com', // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
      user: '1298947916@qq.com', // 账号
      pass: 'lyxz12345acb' // 密码
    }
  })
  console.log('邮件服务器')
  // 设置邮件内容
  var mailOptions = {
    from: 'Fred Foo <635559164@qq.com>', // 发件地址
    to: '1298947916@qq.com', // 收件列表
    subject: 'Hello world', // 标题
    html: '<b>thanks a for visiting!</b> 世界，你好！' // html 内容
  }
  // 发送邮件
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) console.log(error)
    else console.log('Message sent: ' + response.message)

    // smtpTransport.close() // 如果没用，关闭连接池
  })

}
