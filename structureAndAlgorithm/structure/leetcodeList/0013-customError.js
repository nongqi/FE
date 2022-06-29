/*
 * @Author: vayne
 * @Date: 2022-04-19 17:03:51
 * @LastEditTime: 2022-04-19 17:20:50
 * @LastEditors: vayne.nong
 * @Description: 自定义Error
 */

// 源码和原文地址：https://zh.javascript.info/custom-errors

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError'
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property: '+ property)
    this.name = 'PropertyRequiredError';
    this.property = property
  }
}

class ReadError extends Error {
  constructor(message, cause) {
    super(message)
    this.cause = cause;
    this.name = 'ReadError';
  }
}

// 校验字段
function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError('age')
  }
  if (!user.name) {
    throw new PropertyRequiredError('name')
  }
}

function readUser(json) {
  let user;
  try {
    user = JSON.parse(json);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new ReadError("Syntax Error", error);
    } else {
      throw error;
    }
  }

  try {
    validateUser(user);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new ReadError("Validation Error", error);
    } else {
      throw error;
    }
  }
  

  

  return user
}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    // Original error: SyntaxError: Unexpected token b in JSON at position 1
    console.log("Original error: " + e.cause);
  } else {
    throw e;
  }
}