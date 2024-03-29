import express from 'express';
import createError from 'http-errors'

import pageRouter from './routes/page'
import authRouter from './routes/auth'

var app = express();

app.use(express.json());

app.use('/page', pageRouter);
app.use('/', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(4200, ()=>{});

export default app