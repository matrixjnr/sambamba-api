module.exports = app => {
  const Controllers = require('../controllers/controllers')

  app.route('/loadMarks')
    .post(Controllers.loadMarks)

  app.route('/insertMarks')
    .post(Controllers.insertMarks)

  app.route('/loadYear')
    .get(Controllers.loadYear)

  app.route('/loadTerm')
    .get(Controllers.loadTerm)

  app.route('/loadStream')
    .get(Controllers.loadStream)

  app.route('/loadSub')
    .post(Controllers.loadSub)

  app.route('/loadClass')
    .get(Controllers.loadClass)

  app.route('/loadForm')
    .get(Controllers.loadForm)

  app.route('/loadExam')
    .get(Controllers.loadExam)

  app.route('/login')
    .post(Controllers.loadUser)  
}