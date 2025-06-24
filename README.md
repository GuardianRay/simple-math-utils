# simple-math-utils

一个简单的数学工具包，提供基础的数学运算功能。

## 安装

```bash
npm install simple-math-utils
```

或者使用 yarn：

```bash
yarn add simple-math-utils
```

## 使用方法

### 导入函数

```typescript
import { add } from 'simple-math-utils';

const result = add(2, 3); // 返回 5
console.log(result);
```

### 使用类方法

```typescript
import { MathUtils } from 'simple-math-utils';

const result = MathUtils.add(10, 20); // 返回 30
console.log(result);
```

### 默认导入

```typescript
import mathUtils from 'simple-math-utils';

const result1 = mathUtils.add(5, 3); // 返回 8
const result2 = mathUtils.MathUtils.add(7, 2); // 返回 9
```

## API 文档

### `add(a: number, b: number): number`

将两个数字相加并返回结果。

#### 参数

- `a` (number): 第一个数字
- `b` (number): 第二个数字

#### 返回值

- `number`: 两个数字的和

#### 示例

```typescript
import { add } from 'simple-math-utils';

// 基本用法
add(2, 3); // 5
add(-2, 3); // 1
add(1.5, 2.5); // 4

// 处理零
add(0, 5); // 5
add(5, 0); // 5
add(0, 0); // 0
```

#### 错误处理

函数会验证输入参数：

```typescript
// 类型错误
add('2', 3); // 抛出 TypeError: 参数必须是数字类型
add(2, '3'); // 抛出 TypeError: 参数必须是数字类型

// 无效数字
add(Infinity, 3); // 抛出 Error: 参数必须是有限数字
add(2, NaN); // 抛出 Error: 参数必须是有限数字
```

### `MathUtils` 类

提供静态方法的数学工具类。

#### `MathUtils.add(a: number, b: number): number`

与 `add` 函数功能相同。

```typescript
import { MathUtils } from 'simple-math-utils';

MathUtils.add(2, 3); // 5
```

## 开发

### 安装依赖

```bash
npm install
```

### 构建项目

```bash
npm run build
```

### 运行测试

```bash
npm test
```

### 清理构建文件

```bash
npm run clean
```

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### 1.0.0

- 初始版本
- 添加 `add` 函数
- 添加 `MathUtils` 类
- 完整的 TypeScript 支持
- 完整的测试覆盖 