# Jest

## [**Matcher**](https://jestjs.io/docs/using-matchers#common-matchers)

**toBe** verifies object
**toEqual** verifies value
[**anything**](https://jestjs.io/docs/expect#expectanything) matches anything but null or undefined
[**any**](https://jestjs.io/docs/expect#expectanyconstructor) matches anything that was created
with the given constructor
[**arrayContaining(array)**](https://jestjs.io/docs/expect#expectarraycontainingarray)matches a received array which contains all of the elements in the expected array
[**assertions(number)**](https://jestjs.io/docs/expect#expectassertionsnumber) verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

[**toHaveLength(number)**](https://jestjs.io/docs/expect#tohavelengthnumber) to check that an object has a .length property and it is set to a certain numeric value.
[**toHaveProperty(keyPath, value?)**](https://jestjs.io/docs/expect#tohavepropertykeypath-value)to check if property at provided reference keyPath exists for an object. For checking deeply nested properties in an object you
[**toBeInstanceOf(Class)**](https://jestjs.io/docs/expect#tobeinstanceofclass) to check that an object is an instance of a class. This matcher uses instanceof underneath.

### [**Truthiness**](https://jestjs.io/docs/using-matchers#truthiness)

**toBeNull** matches only null
**toBeUndefined** matches only undefined
**toBeDefined** is the opposite of toBeUndefined
**toBeTruthy** matches anything that an if statement treats as true
**toBeFalsy** matches anything that an if statement treats as false
**toBeNaN**

### [**Numbers**](https://jestjs.io/docs/using-matchers#numbers)

**toBeGreaterThan**
**toBeGreaterThanOrEqual**
**toBeLessThan**
**toBeLessThanOrEqual**
**toBe verifies object**
**toEqual verifies value**
[**toBeCloseTo(number, numDigits?)**](https://jestjs.io/docs/expect#tobeclosetonumber-numdigits) to compare floating point numbers for approximate equality.

### [**Strings**](https://jestjs.io/docs/using-matchers#strings)

Regular expressions:
**toMatch**
**not.toMatch**

### [**Arrays and Iterables**](https://jestjs.io/docs/using-matchers#arrays-and-iterables)

toContain
toContainEqual(item)

### [**Exceptions**](https://jestjs.io/docs/using-matchers#exceptions)

toThrow

### [**Promises**](https://jestjs.io/docs/expect)

[**resolves**](https://jestjs.io/docs/expect#resolves)
[**rejects**](https://jestjs.io/docs/expect#rejects)

### [**Mocks**]()

[**toHaveBeenCalled() or toBeCalled()**](https://jestjs.io/docs/expect#tohavebeencalled) Use .toHaveBeenCalled to ensure that a mock function got called.
[**toHaveBeenCalledWith(arg1, arg2, ...) or .toBeCalledWith()**](https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-) Use .toHaveBeenCalledWith to ensure that a mock function was called with specific arguments.

[**toHaveReturned()**](https://jestjs.io/docs/expect#tohavereturned) verifica se a função retornou sem lançar uma exceção ou erro
[**toHaveReturnedTimes(number)**](https://jestjs.io/docs/expect#tohavereturnedtimesnumber)

# References

https://jestjs.io/docs/using-matchers#numbers
