module.exports = function (app) {
  const express = require('express')
  const logger = require('morgan')
  const path = require('path')
  const indexRouter = require('../routes/route.index')
  const authRouter = require('../routes/route.auth')
  // const fileRouter = require('./routes/route.file')
  app.use(require('cors')())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(express.static(path.join(__dirname, '..', 'public', 'build')))
  app.use(express.static(path.join(__dirname, '..', 'public', 'build', 'static')))
  app.use(logger('dev'))

  app.use('/', indexRouter)
  app.use('/api/auth', authRouter)
  // app.use('/api/file', fileRouter)

}
