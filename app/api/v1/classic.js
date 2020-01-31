const Router = require('koa-router');
const { HttpException, ParamterException } = require('../../../core/http-exception');
const { PositiveIntergerValidator } = require('../../validators/validator');

const router = new Router();

router.get('/v1/:id/classic/latest', (ctx, next) => {
  const v = new PositiveIntergerValidator().validate(ctx);
  // console.log(v);
  const id = v.get('path.id', true);
  console.log(id);
  ctx.body = { key: 'classic' };
});

module.exports = router;
