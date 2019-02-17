//  a collection of root handlers

exports.index = function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
}