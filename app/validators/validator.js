const { LinValidator, Rule } = require('../../core/lin-validator');

/** 正整数验证器 */
class PositiveIntergerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '需要正整数', { min: 1 })
    ];
  }
}

module.exports = {
  PositiveIntergerValidator
};
