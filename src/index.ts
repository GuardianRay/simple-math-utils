/**
 * 简单的数学工具包
 * @package simple-math-utils
 */

/**
 * 将两个数字相加
 * @param a 第一个数字
 * @param b 第二个数字
 * @returns 两个数字的和
 * @example
 * ```typescript
 * import { add } from 'simple-math-utils';
 * 
 * const result = add(2, 3); // 返回 5
 * ```
 */
export function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('参数必须是数字类型');
  }
  
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('参数必须是有限数字');
  }
  
  return a + b;
}

/**
 * 数学工具类
 */
export class MathUtils {
  /**
   * 将两个数字相加
   * @param a 第一个数字
   * @param b 第二个数字
   * @returns 两个数字的和
   */
  static add(a: number, b: number): number {
    return add(a, b);
  }
}

// 默认导出
export default {
  add,
  MathUtils
}; 