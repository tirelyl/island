const { HttpException } = require('../core/http-exception');
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    } else {
      ctx.body = {
        msg: '发生了一些问题',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
