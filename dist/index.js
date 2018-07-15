'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var crypto = _interopDefault(require('crypto'));

const serverCore = require('apollo-server-core');

var gqlServerCore = (options, request) => {
  if (!options) {
    throw new Error('Server options not specified')
  } else {
    if (!options.schema) {
      throw new Error('No GraphQL Schema specified')
    }
  }

  const queryRequest = {
    method: request.method,
    options,
    query: request.method === 'POST' ? request.body : request.query
  };

  if (queryRequest.query && typeof queryRequest.query === 'string') {
    queryRequest.query = JSON.parse(queryRequest.query);
  }

  return serverCore.runHttpQuery([request], queryRequest)
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var applyToStringTag_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyToStringTag = applyToStringTag;
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The `applyToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method applyToStringTag
 *
 * @param {Class<*>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function applyToStringTag(classObject) {
  var symbolType = typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol);

  var toStringTagType = _typeof(Symbol.toStringTag);

  if (symbolType === 'function' && toStringTagType === 'symbol') {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}
/** Support both default export and named `applyToStringTag` export */


var _default = applyToStringTag;
exports.default = _default;
});

unwrapExports(applyToStringTag_1);
var applyToStringTag_2 = applyToStringTag_1.applyToStringTag;

var instanceOf = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
var _default = process.env.NODE_ENV === 'production' ? // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
};

exports.default = _default;
});

unwrapExports(instanceOf);

var inspect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inspect;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function inspect(value) {
  if (Array.isArray(value)) {
    return '[' + String(value) + ']';
  }

  return String(value);
}
});

unwrapExports(inspect_1);

var invariant_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}
});

unwrapExports(invariant_1);

var keyMap_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMap;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = item, map;
  }, Object.create(null));
}
});

unwrapExports(keyMap_1);

var kinds = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kind = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  VARIABLE: 'Variable',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

exports.Kind = Kind;
});

unwrapExports(kinds);
var kinds_1 = kinds.Kind;

var keyValMap_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyValMap;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    return map[keyFn(item)] = valFn(item), map;
  }, Object.create(null));
}
});

unwrapExports(keyValMap_1);

var isInvalid_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInvalid;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}
});

unwrapExports(isInvalid_1);

var valueFromASTUntyped_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromASTUntyped = valueFromASTUntyped;

var _keyValMap = _interopRequireDefault(keyValMap_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case kinds.Kind.NULL:
      return null;

    case kinds.Kind.INT:
      return parseInt(valueNode.value, 10);

    case kinds.Kind.FLOAT:
      return parseFloat(valueNode.value);

    case kinds.Kind.STRING:
    case kinds.Kind.ENUM:
    case kinds.Kind.BOOLEAN:
      return valueNode.value;

    case kinds.Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case kinds.Kind.OBJECT:
      return (0, _keyValMap.default)(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case kinds.Kind.VARIABLE:
      var variableName = valueNode.name.value;
      return variables && !(0, _isInvalid.default)(variables[variableName]) ? variables[variableName] : undefined;
  }
  /* istanbul ignore next */


  throw new Error('Unexpected value kind: ' + valueNode.kind);
}
});

unwrapExports(valueFromASTUntyped_1);
var valueFromASTUntyped_2 = valueFromASTUntyped_1.valueFromASTUntyped;

var definition = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isType = isType;
exports.assertType = assertType;
exports.isScalarType = isScalarType;
exports.assertScalarType = assertScalarType;
exports.isObjectType = isObjectType;
exports.assertObjectType = assertObjectType;
exports.isInterfaceType = isInterfaceType;
exports.assertInterfaceType = assertInterfaceType;
exports.isUnionType = isUnionType;
exports.assertUnionType = assertUnionType;
exports.isEnumType = isEnumType;
exports.assertEnumType = assertEnumType;
exports.isInputObjectType = isInputObjectType;
exports.assertInputObjectType = assertInputObjectType;
exports.isListType = isListType;
exports.assertListType = assertListType;
exports.isNonNullType = isNonNullType;
exports.assertNonNullType = assertNonNullType;
exports.isInputType = isInputType;
exports.assertInputType = assertInputType;
exports.isOutputType = isOutputType;
exports.assertOutputType = assertOutputType;
exports.isLeafType = isLeafType;
exports.assertLeafType = assertLeafType;
exports.isCompositeType = isCompositeType;
exports.assertCompositeType = assertCompositeType;
exports.isAbstractType = isAbstractType;
exports.assertAbstractType = assertAbstractType;
exports.GraphQLList = GraphQLList;
exports.GraphQLNonNull = GraphQLNonNull;
exports.isWrappingType = isWrappingType;
exports.assertWrappingType = assertWrappingType;
exports.isNullableType = isNullableType;
exports.assertNullableType = assertNullableType;
exports.getNullableType = getNullableType;
exports.isNamedType = isNamedType;
exports.assertNamedType = assertNamedType;
exports.getNamedType = getNamedType;
exports.GraphQLInputObjectType = exports.GraphQLEnumType = exports.GraphQLUnionType = exports.GraphQLInterfaceType = exports.GraphQLObjectType = exports.GraphQLScalarType = void 0;

var _applyToStringTag = _interopRequireDefault(applyToStringTag_1);

var _instanceOf = _interopRequireDefault(instanceOf);

var _inspect = _interopRequireDefault(inspect_1);

var _invariant = _interopRequireDefault(invariant_1);

var _keyMap = _interopRequireDefault(keyMap_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}

function assertType(type) {
  !isType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL type.")) : void 0;
  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */


// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return (0, _instanceOf.default)(type, GraphQLScalarType);
}

function assertScalarType(type) {
  !isScalarType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Scalar type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return (0, _instanceOf.default)(type, GraphQLObjectType);
}

function assertObjectType(type) {
  !isObjectType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Object type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return (0, _instanceOf.default)(type, GraphQLInterfaceType);
}

function assertInterfaceType(type) {
  !isInterfaceType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Interface type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return (0, _instanceOf.default)(type, GraphQLUnionType);
}

function assertUnionType(type) {
  !isUnionType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Union type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return (0, _instanceOf.default)(type, GraphQLEnumType);
}

function assertEnumType(type) {
  !isEnumType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Enum type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return (0, _instanceOf.default)(type, GraphQLInputObjectType);
}

function assertInputObjectType(type) {
  !isInputObjectType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Input Object type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isListType(type) {
  return (0, _instanceOf.default)(type, GraphQLList);
}

function assertListType(type) {
  !isListType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL List type.")) : void 0;
  return type;
}

// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return (0, _instanceOf.default)(type, GraphQLNonNull);
}

function assertNonNullType(type) {
  !isNonNullType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL Non-Null type.")) : void 0;
  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */


function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}

function assertInputType(type) {
  !isInputType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL input type.")) : void 0;
  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */


function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}

function assertOutputType(type) {
  !isOutputType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL output type.")) : void 0;
  return type;
}
/**
 * These types may describe types which may be leaf values.
 */


function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}

function assertLeafType(type) {
  !isLeafType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL leaf type.")) : void 0;
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */


function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}

function assertCompositeType(type) {
  !isCompositeType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL composite type.")) : void 0;
  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */


function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}

function assertAbstractType(type) {
  !isAbstractType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL abstract type.")) : void 0;
  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */


// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Also provide toJSON and inspect aliases for toString.


var listProto = GraphQLList.prototype;

listProto.toString = listProto.toJSON = listProto.inspect = function toString() {
  return '[' + String(this.ofType) + ']';
};
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */


// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Also provide toJSON and inspect aliases for toString.


var nonNullProto = GraphQLNonNull.prototype;

nonNullProto.toString = nonNullProto.toJSON = nonNullProto.inspect = function toString() {
  return String(this.ofType) + '!';
};
/**
 * These types wrap and modify other types
 */


function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}

function assertWrappingType(type) {
  !isWrappingType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL wrapping type.")) : void 0;
  return type;
}
/**
 * These types can all accept null as a value.
 */


function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}

function assertNullableType(type) {
  !isNullableType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL nullable type.")) : void 0;
  return type;
}
/* eslint-disable no-redeclare */


function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */


function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}

function assertNamedType(type) {
  !isNamedType(type) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(type), " to be a GraphQL named type.")) : void 0;
  return type;
}
/* eslint-disable no-redeclare */


function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */


function resolveThunk(thunk) {
  return typeof thunk === 'function' ? thunk() : thunk;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType =
/*#__PURE__*/
function () {
  function GraphQLScalarType(config) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "_scalarConfig", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._scalarConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;
    !(typeof config.serialize === 'function') ? (0, _invariant.default)(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar ") + 'is also used as an input type, ensure "parseValue" and "parseLiteral" ' + 'functions are also provided.') : void 0;

    if (config.parseValue || config.parseLiteral) {
      !(typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function') ? (0, _invariant.default)(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" ") + 'functions.') : void 0;
    }
  } // Serializes an internal value to include in a response.


  var _proto = GraphQLScalarType.prototype;

  _proto.serialize = function serialize(value) {
    var serializer = this._scalarConfig.serialize;
    return serializer(value);
  }; // Parses an externally provided value to use as an input.


  _proto.parseValue = function parseValue(value) {
    var parser = this._scalarConfig.parseValue;
    return parser ? parser(value) : value;
  }; // Parses an externally provided literal value to use as an input.


  _proto.parseLiteral = function parseLiteral(valueNode, variables) {
    var parser = this._scalarConfig.parseLiteral;
    return parser ? parser(valueNode, variables) : (0, valueFromASTUntyped_1.valueFromASTUntyped)(valueNode, variables);
  };

  _proto.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLScalarType = GraphQLScalarType;
(0, _applyToStringTag.default)(GraphQLScalarType); // Also provide toJSON and inspect aliases for toString.

GraphQLScalarType.prototype.toJSON = GraphQLScalarType.prototype.inspect = GraphQLScalarType.prototype.toString;

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType =
/*#__PURE__*/
function () {
  function GraphQLObjectType(config) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "isTypeOf", void 0);

    _defineProperty(this, "_typeConfig", void 0);

    _defineProperty(this, "_fields", void 0);

    _defineProperty(this, "_interfaces", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.isTypeOf = config.isTypeOf;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;

    if (config.isTypeOf) {
      !(typeof config.isTypeOf === 'function') ? (0, _invariant.default)(0, "".concat(this.name, " must provide \"isTypeOf\" as a function.")) : void 0;
    }
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  _proto2.getInterfaces = function getInterfaces() {
    return this._interfaces || (this._interfaces = defineInterfaces(this, this._typeConfig.interfaces));
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLObjectType = GraphQLObjectType;
(0, _applyToStringTag.default)(GraphQLObjectType); // Also provide toJSON and inspect aliases for toString.

GraphQLObjectType.prototype.toJSON = GraphQLObjectType.prototype.inspect = GraphQLObjectType.prototype.toString;

function defineInterfaces(type, interfacesThunk) {
  var interfaces = resolveThunk(interfacesThunk) || [];
  !Array.isArray(interfaces) ? (0, _invariant.default)(0, "".concat(type.name, " interfaces must be an Array or a function which returns ") + 'an Array.') : void 0;
  return interfaces;
}

function defineFieldMap(type, fieldsThunk) {
  var fieldMap = resolveThunk(fieldsThunk) || {};
  !isPlainObj(fieldMap) ? (0, _invariant.default)(0, "".concat(type.name, " fields must be an object with field names as keys or a ") + 'function which returns such an object.') : void 0;
  var resultFieldMap = Object.create(null);
  Object.keys(fieldMap).forEach(function (fieldName) {
    var fieldConfig = fieldMap[fieldName];
    !isPlainObj(fieldConfig) ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(fieldName, " field config must be an object")) : void 0;
    !!fieldConfig.hasOwnProperty('isDeprecated') ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead ") + 'of "isDeprecated".') : void 0;

    var field = _objectSpread({}, fieldConfig, {
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      name: fieldName
    });

    !isValidResolver(field.resolve) ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat((0, _inspect.default)(field.resolve), ".")) : void 0;
    var argsConfig = fieldConfig.args;

    if (!argsConfig) {
      field.args = [];
    } else {
      !isPlainObj(argsConfig) ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(fieldName, " args must be an object with argument ") + 'names as keys.') : void 0;
      field.args = Object.keys(argsConfig).map(function (argName) {
        var arg = argsConfig[argName];
        return {
          name: argName,
          description: arg.description === undefined ? null : arg.description,
          type: arg.type,
          defaultValue: arg.defaultValue,
          astNode: arg.astNode
        };
      });
    }

    resultFieldMap[fieldName] = field;
  });
  return resultFieldMap;
}

function isPlainObj(obj) {
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj);
} // If a resolver is defined, it must be a function.


function isValidResolver(resolver) {
  return resolver == null || typeof resolver === 'function';
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType =
/*#__PURE__*/
function () {
  function GraphQLInterfaceType(config) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "resolveType", void 0);

    _defineProperty(this, "_typeConfig", void 0);

    _defineProperty(this, "_fields", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;

    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant.default)(0, "".concat(this.name, " must provide \"resolveType\" as a function.")) : void 0;
    }
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    return this._fields || (this._fields = defineFieldMap(this, this._typeConfig.fields));
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLInterfaceType = GraphQLInterfaceType;
(0, _applyToStringTag.default)(GraphQLInterfaceType); // Also provide toJSON and inspect aliases for toString.

GraphQLInterfaceType.prototype.toJSON = GraphQLInterfaceType.prototype.inspect = GraphQLInterfaceType.prototype.toString;

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType =
/*#__PURE__*/
function () {
  function GraphQLUnionType(config) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "resolveType", void 0);

    _defineProperty(this, "_typeConfig", void 0);

    _defineProperty(this, "_types", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this.resolveType = config.resolveType;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;

    if (config.resolveType) {
      !(typeof config.resolveType === 'function') ? (0, _invariant.default)(0, "".concat(this.name, " must provide \"resolveType\" as a function.")) : void 0;
    }
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    return this._types || (this._types = defineTypes(this, this._typeConfig.types));
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLUnionType = GraphQLUnionType;
(0, _applyToStringTag.default)(GraphQLUnionType); // Also provide toJSON and inspect aliases for toString.

GraphQLUnionType.prototype.toJSON = GraphQLUnionType.prototype.inspect = GraphQLUnionType.prototype.toString;

function defineTypes(unionType, typesThunk) {
  var types = resolveThunk(typesThunk) || [];
  !Array.isArray(types) ? (0, _invariant.default)(0, 'Must provide Array of types or a function which returns ' + "such an array for Union ".concat(unionType.name, ".")) : void 0;
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
=
/*#__PURE__*/
function () {
  function GraphQLEnumType(config
  /* <T> */
  ) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "_values", void 0);

    _defineProperty(this, "_valueLookup", void 0);

    _defineProperty(this, "_nameLookup", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._values = defineEnumValues(this, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = (0, _keyMap.default)(this._values, function (value) {
      return value.name;
    });
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(value
  /* T */
  ) {
    var enumValue = this._valueLookup.get(value);

    if (enumValue) {
      return enumValue.name;
    }
  };

  _proto5.parseValue = function parseValue(value)
  /* T */
  {
    if (typeof value === 'string') {
      var enumValue = this.getValue(value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === kinds.Kind.ENUM) {
      var enumValue = this.getValue(valueNode.value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLEnumType = GraphQLEnumType;
(0, _applyToStringTag.default)(GraphQLEnumType); // Also provide toJSON and inspect aliases for toString.

GraphQLEnumType.prototype.toJSON = GraphQLEnumType.prototype.inspect = GraphQLEnumType.prototype.toString;

function defineEnumValues(type, valueMap
/* <T> */
) {
  !isPlainObj(valueMap) ? (0, _invariant.default)(0, "".concat(type.name, " values must be an object with value names as keys.")) : void 0;
  return Object.keys(valueMap).map(function (valueName) {
    var value = valueMap[valueName];
    !isPlainObj(value) ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat((0, _inspect.default)(value), ".")) : void 0;
    !!value.hasOwnProperty('isDeprecated') ? (0, _invariant.default)(0, "".concat(type.name, ".").concat(valueName, " should provide \"deprecationReason\" instead ") + 'of "isDeprecated".') : void 0;
    return {
      name: valueName,
      description: value.description,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      astNode: value.astNode,
      value: value.hasOwnProperty('value') ? value.value : valueName
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType =
/*#__PURE__*/
function () {
  function GraphQLInputObjectType(config) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "description", void 0);

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "_typeConfig", void 0);

    _defineProperty(this, "_fields", void 0);

    _defineProperty(this, "toJSON", void 0);

    _defineProperty(this, "inspect", void 0);

    this.name = config.name;
    this.description = config.description;
    this.astNode = config.astNode;
    this._typeConfig = config;
    !(typeof config.name === 'string') ? (0, _invariant.default)(0, 'Must provide name.') : void 0;
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    return this._fields || (this._fields = this._defineFieldMap());
  };

  _proto6._defineFieldMap = function _defineFieldMap() {
    var _this = this;

    var fieldMap = resolveThunk(this._typeConfig.fields) || {};
    !isPlainObj(fieldMap) ? (0, _invariant.default)(0, "".concat(this.name, " fields must be an object with field names as keys or a ") + 'function which returns such an object.') : void 0;
    var resultFieldMap = Object.create(null);
    Object.keys(fieldMap).forEach(function (fieldName) {
      var field = _objectSpread({}, fieldMap[fieldName], {
        name: fieldName
      });

      !!field.hasOwnProperty('resolve') ? (0, _invariant.default)(0, "".concat(_this.name, ".").concat(fieldName, " field type has a resolve property, but ") + 'Input Types cannot define resolvers.') : void 0;
      resultFieldMap[fieldName] = field;
    });
    return resultFieldMap;
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLInputObjectType = GraphQLInputObjectType;
(0, _applyToStringTag.default)(GraphQLInputObjectType); // Also provide toJSON and inspect aliases for toString.

GraphQLInputObjectType.prototype.toJSON = GraphQLInputObjectType.prototype.toString;
GraphQLInputObjectType.prototype.inspect = GraphQLInputObjectType.prototype.toString;
});

unwrapExports(definition);
var definition_1 = definition.isType;
var definition_2 = definition.assertType;
var definition_3 = definition.isScalarType;
var definition_4 = definition.assertScalarType;
var definition_5 = definition.isObjectType;
var definition_6 = definition.assertObjectType;
var definition_7 = definition.isInterfaceType;
var definition_8 = definition.assertInterfaceType;
var definition_9 = definition.isUnionType;
var definition_10 = definition.assertUnionType;
var definition_11 = definition.isEnumType;
var definition_12 = definition.assertEnumType;
var definition_13 = definition.isInputObjectType;
var definition_14 = definition.assertInputObjectType;
var definition_15 = definition.isListType;
var definition_16 = definition.assertListType;
var definition_17 = definition.isNonNullType;
var definition_18 = definition.assertNonNullType;
var definition_19 = definition.isInputType;
var definition_20 = definition.assertInputType;
var definition_21 = definition.isOutputType;
var definition_22 = definition.assertOutputType;
var definition_23 = definition.isLeafType;
var definition_24 = definition.assertLeafType;
var definition_25 = definition.isCompositeType;
var definition_26 = definition.assertCompositeType;
var definition_27 = definition.isAbstractType;
var definition_28 = definition.assertAbstractType;
var definition_29 = definition.GraphQLList;
var definition_30 = definition.GraphQLNonNull;
var definition_31 = definition.isWrappingType;
var definition_32 = definition.assertWrappingType;
var definition_33 = definition.isNullableType;
var definition_34 = definition.assertNullableType;
var definition_35 = definition.getNullableType;
var definition_36 = definition.isNamedType;
var definition_37 = definition.assertNamedType;
var definition_38 = definition.getNamedType;
var definition_39 = definition.GraphQLInputObjectType;
var definition_40 = definition.GraphQLEnumType;
var definition_41 = definition.GraphQLUnionType;
var definition_42 = definition.GraphQLInterfaceType;
var definition_43 = definition.GraphQLObjectType;
var definition_44 = definition.GraphQLScalarType;

var isInteger_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

var _default = isInteger;
exports.default = _default;
});

unwrapExports(isInteger_1);

var scalars = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSpecifiedScalarType = isSpecifiedScalarType;
exports.specifiedScalarTypes = exports.GraphQLID = exports.GraphQLBoolean = exports.GraphQLString = exports.GraphQLFloat = exports.GraphQLInt = void 0;

var _inspect = _interopRequireDefault(inspect_1);

var _isInteger = _interopRequireDefault(isInteger_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
// As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.
var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function coerceInt(value) {
  if (Array.isArray(value)) {
    throw new TypeError("Int cannot represent an array value: [".concat(String(value), "]"));
  }

  if (value === '') {
    throw new TypeError('Int cannot represent non-integer value: (empty string)');
  }

  var num = Number(value);

  if (!(0, _isInteger.default)(num)) {
    throw new TypeError('Int cannot represent non-integer value: ' + (0, _inspect.default)(value));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new TypeError('Int cannot represent non 32-bit signed integer value: ' + (0, _inspect.default)(value));
  }

  return num;
}

var GraphQLInt = new definition.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric ' + 'values. Int can represent values between -(2^31) and 2^31 - 1. ',
  serialize: coerceInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === kinds.Kind.INT) {
      var num = parseInt(ast.value, 10);

      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }

    return undefined;
  }
});
exports.GraphQLInt = GraphQLInt;

function coerceFloat(value) {
  if (Array.isArray(value)) {
    throw new TypeError("Float cannot represent an array value: [".concat(String(value), "]"));
  }

  if (value === '') {
    throw new TypeError('Float cannot represent non numeric value: (empty string)');
  }

  var num = Number(value);

  if (isFinite(num)) {
    return num;
  }

  throw new TypeError('Float cannot represent non numeric value: ' + (0, _inspect.default)(value));
}

var GraphQLFloat = new definition.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional ' + 'values as specified by ' + '[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ',
  serialize: coerceFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === kinds.Kind.FLOAT || ast.kind === kinds.Kind.INT ? parseFloat(ast.value) : undefined;
  }
});
exports.GraphQLFloat = GraphQLFloat;

function coerceString(value) {
  if (Array.isArray(value)) {
    throw new TypeError("String cannot represent an array value: ".concat((0, _inspect.default)(value)));
  }

  return String(value);
}

var GraphQLString = new definition.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 ' + 'character sequences. The String type is most often used by GraphQL to ' + 'represent free-form human-readable text.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === kinds.Kind.STRING ? ast.value : undefined;
  }
});
exports.GraphQLString = GraphQLString;

function coerceBoolean(value) {
  if (Array.isArray(value)) {
    throw new TypeError("Boolean cannot represent an array value: [".concat(String(value), "]"));
  }

  return Boolean(value);
}

var GraphQLBoolean = new definition.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: coerceBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === kinds.Kind.BOOLEAN ? ast.value : undefined;
  }
});
exports.GraphQLBoolean = GraphQLBoolean;
var GraphQLID = new definition.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to ' + 'refetch an object or as key for a cache. The ID type appears in a JSON ' + 'response as a String; however, it is not intended to be human-readable. ' + 'When expected as an input type, any string (such as `"4"`) or integer ' + '(such as `4`) input value will be accepted as an ID.',
  serialize: coerceString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === kinds.Kind.STRING || ast.kind === kinds.Kind.INT ? ast.value : undefined;
  }
});
exports.GraphQLID = GraphQLID;
var specifiedScalarTypes = [GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID];
exports.specifiedScalarTypes = specifiedScalarTypes;

function isSpecifiedScalarType(type) {
  return (0, definition.isNamedType)(type) && ( // Would prefer to use specifiedScalarTypes.some(), however %checks needs
  // a simple expression.
  type.name === GraphQLString.name || type.name === GraphQLInt.name || type.name === GraphQLFloat.name || type.name === GraphQLBoolean.name || type.name === GraphQLID.name);
}
});

unwrapExports(scalars);
var scalars_1 = scalars.isSpecifiedScalarType;
var scalars_2 = scalars.specifiedScalarTypes;
var scalars_3 = scalars.GraphQLID;
var scalars_4 = scalars.GraphQLBoolean;
var scalars_5 = scalars.GraphQLString;
var scalars_6 = scalars.GraphQLFloat;
var scalars_7 = scalars.GraphQLInt;

var directiveLocation = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectiveLocation = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

exports.DirectiveLocation = DirectiveLocation;
});

unwrapExports(directiveLocation);
var directiveLocation_1 = directiveLocation.DirectiveLocation;

var directives = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDirective = isDirective;
exports.isSpecifiedDirective = isSpecifiedDirective;
exports.specifiedDirectives = exports.GraphQLDeprecatedDirective = exports.DEFAULT_DEPRECATION_REASON = exports.GraphQLSkipDirective = exports.GraphQLIncludeDirective = exports.GraphQLDirective = void 0;





var _applyToStringTag = _interopRequireDefault(applyToStringTag_1);

var _instanceOf = _interopRequireDefault(instanceOf);

var _invariant = _interopRequireDefault(invariant_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return (0, _instanceOf.default)(directive, GraphQLDirective);
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */


var GraphQLDirective = function GraphQLDirective(config) {
  _defineProperty(this, "name", void 0);

  _defineProperty(this, "description", void 0);

  _defineProperty(this, "locations", void 0);

  _defineProperty(this, "args", void 0);

  _defineProperty(this, "astNode", void 0);

  this.name = config.name;
  this.description = config.description;
  this.locations = config.locations;
  this.astNode = config.astNode;
  !config.name ? (0, _invariant.default)(0, 'Directive must be named.') : void 0;
  !Array.isArray(config.locations) ? (0, _invariant.default)(0, 'Must provide locations for directive.') : void 0;
  var args = config.args;

  if (!args) {
    this.args = [];
  } else {
    !!Array.isArray(args) ? (0, _invariant.default)(0, "@".concat(config.name, " args must be an object with argument names as keys.")) : void 0;
    this.args = Object.keys(args).map(function (argName) {
      var arg = args[argName];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        astNode: arg.astNode
      };
    });
  }
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLDirective = GraphQLDirective;
(0, _applyToStringTag.default)(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when ' + 'the `if` argument is true.',
  locations: [directiveLocation.DirectiveLocation.FIELD, directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` ' + 'argument is true.',
  locations: [directiveLocation.DirectiveLocation.FIELD, directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, directiveLocation.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

exports.GraphQLSkipDirective = GraphQLSkipDirective;
var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [directiveLocation.DirectiveLocation.FIELD_DEFINITION, directiveLocation.DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: scalars.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a ' + 'suggestion for how to access supported similar data. Formatted ' + 'in [Markdown](https://daringfireball.net/projects/markdown/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * The full list of specified directives.
 */

exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
var specifiedDirectives = [GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective];
exports.specifiedDirectives = specifiedDirectives;

function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (specifiedDirective) {
    return specifiedDirective.name === directive.name;
  });
}
});

unwrapExports(directives);
var directives_1 = directives.isDirective;
var directives_2 = directives.isSpecifiedDirective;
var directives_3 = directives.specifiedDirectives;
var directives_4 = directives.GraphQLDeprecatedDirective;
var directives_5 = directives.DEFAULT_DEPRECATION_REASON;
var directives_6 = directives.GraphQLSkipDirective;
var directives_7 = directives.GraphQLIncludeDirective;
var directives_8 = directives.GraphQLDirective;

var objectValues_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

var _default = objectValues;
exports.default = _default;
});

unwrapExports(objectValues_1);

var iterall = createCommonjsModule(function (module, exports) {

exports.isIterable = isIterable;
exports.isArrayLike = isArrayLike;
exports.isCollection = isCollection;
exports.getIterator = getIterator;
exports.getIteratorMethod = getIteratorMethod;
exports.createIterator = createIterator;
exports.forEach = forEach;
exports.isAsyncIterable = isAsyncIterable;
exports.getAsyncIterator = getAsyncIterator;
exports.getAsyncIteratorMethod = getAsyncIteratorMethod;
exports.createAsyncIterator = createAsyncIterator;
exports.forAwaitEach = forAwaitEach;

var SYMBOL = typeof Symbol === 'function' ? Symbol : void 0;

var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator;

var $$iterator = exports.$$iterator = SYMBOL_ITERATOR || '@@iterator';

function isIterable(obj) {
  return !!getIteratorMethod(obj);
}

function isArrayLike(obj) {
  var length = obj != null && obj.length;
  return typeof length === 'number' && length >= 0 && length % 1 === 0;
}

function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj));
}

function getIterator(iterable) {
  var method = getIteratorMethod(iterable);
  if (method) {
    return method.call(iterable);
  }
}

function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method = SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR] || iterable['@@iterator'];
    if (typeof method === 'function') {
      return method;
    }
  }
}

function createIterator(collection) {
  if (collection != null) {
    var iterator = getIterator(collection);
    if (iterator) {
      return iterator;
    }
    if (isArrayLike(collection)) {
      return new ArrayLikeIterator(collection);
    }
  }
}

function ArrayLikeIterator(obj) {
  this._o = obj;
  this._i = 0;
}

ArrayLikeIterator.prototype[$$iterator] = function () {
  return this;
};

ArrayLikeIterator.prototype.next = function () {
  if (this._o === void 0 || this._i >= this._o.length) {
    this._o = void 0;
    return { value: void 0, done: true };
  }
  return { value: this._o[this._i++], done: false };
};

function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg);
    }
    var i = 0;
    var iterator = getIterator(collection);
    if (iterator) {
      var step;
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection);

        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.');
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection);
        }
      }
    }
  }
}

var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator;

var $$asyncIterator = exports.$$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator';

function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj);
}

function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable);
  if (method) {
    return method.call(asyncIterable);
  }
}

function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method = SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR] || asyncIterable['@@asyncIterator'];
    if (typeof method === 'function') {
      return method;
    }
  }
}

function createAsyncIterator(source) {
  if (source != null) {
    var asyncIterator = getAsyncIterator(source);
    if (asyncIterator) {
      return asyncIterator;
    }
    var iterator = createIterator(source);
    if (iterator) {
      return new AsyncFromSyncIterator(iterator);
    }
  }
}

function AsyncFromSyncIterator(iterator) {
  this._i = iterator;
}

AsyncFromSyncIterator.prototype[$$asyncIterator] = function () {
  return this;
};

AsyncFromSyncIterator.prototype.next = function () {
  var step = this._i.next();
  return Promise.resolve(step.value).then(function (value) {
    return { value: value, done: step.done };
  });
};

function forAwaitEach(source, callback, thisArg) {
  var asyncIterator = createAsyncIterator(source);
  if (asyncIterator) {
    var i = 0;
    return new Promise(function (resolve, reject) {
      function next() {
        asyncIterator.next().then(function (step) {
          if (!step.done) {
            Promise.resolve(callback.call(thisArg, step.value, i++, source)).then(next).catch(reject);
          } else {
            resolve();
          }

          return null;
        }).catch(reject);

        return null;
      }
      next();
    });
  }
}
});
var iterall_1 = iterall.isIterable;
var iterall_2 = iterall.isArrayLike;
var iterall_3 = iterall.isCollection;
var iterall_4 = iterall.getIterator;
var iterall_5 = iterall.getIteratorMethod;
var iterall_6 = iterall.createIterator;
var iterall_7 = iterall.forEach;
var iterall_8 = iterall.isAsyncIterable;
var iterall_9 = iterall.getAsyncIterator;
var iterall_10 = iterall.getAsyncIteratorMethod;
var iterall_11 = iterall.createAsyncIterator;
var iterall_12 = iterall.forAwaitEach;
var iterall_13 = iterall.$$iterator;
var iterall_14 = iterall.$$asyncIterator;

var isNullish_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullish;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}
});

unwrapExports(isNullish_1);

var astFromValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.astFromValue = astFromValue;



var _inspect = _interopRequireDefault(inspect_1);

var _isNullish = _interopRequireDefault(isNullish_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _objectValues = _interopRequireDefault(objectValues_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */
function astFromValue(value, type) {
  if ((0, definition.isNonNullType)(type)) {
    var astValue = astFromValue(value, type.ofType);

    if (astValue && astValue.kind === kinds.Kind.NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: kinds.Kind.NULL
    };
  } // undefined, NaN


  if ((0, _isInvalid.default)(value)) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if ((0, definition.isListType)(type)) {
    var itemType = type.ofType;

    if ((0, iterall.isCollection)(value)) {
      var valuesNodes = [];
      (0, iterall.forEach)(value, function (item) {
        var itemNode = astFromValue(item, itemType);

        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return {
        kind: kinds.Kind.LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if ((0, definition.isInputObjectType)(type)) {
    if (value === null || _typeof(value) !== 'object') {
      return null;
    }

    var fields = (0, _objectValues.default)(type.getFields());
    var fieldNodes = [];
    fields.forEach(function (field) {
      var fieldValue = astFromValue(value[field.name], field.type);

      if (fieldValue) {
        fieldNodes.push({
          kind: kinds.Kind.OBJECT_FIELD,
          name: {
            kind: kinds.Kind.NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    });
    return {
      kind: kinds.Kind.OBJECT,
      fields: fieldNodes
    };
  }

  if ((0, definition.isScalarType)(type) || (0, definition.isEnumType)(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if ((0, _isNullish.default)(serialized)) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: kinds.Kind.BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: kinds.Kind.INT,
        value: stringNum
      } : {
        kind: kinds.Kind.FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if ((0, definition.isEnumType)(type)) {
        return {
          kind: kinds.Kind.ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === scalars.GraphQLID && integerStringRegExp.test(serialized)) {
        return {
          kind: kinds.Kind.INT,
          value: serialized
        };
      }

      return {
        kind: kinds.Kind.STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat((0, _inspect.default)(serialized)));
  }
  /* istanbul ignore next */


  throw new Error("Unknown type: ".concat(type, "."));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */


var integerStringRegExp = /^-?(0|[1-9][0-9]*)$/;
});

unwrapExports(astFromValue_1);
var astFromValue_2 = astFromValue_1.astFromValue;

var visitor = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
exports.BREAK = exports.QueryDocumentKeys = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */

/**
 * A KeyMap describes each the traversable properties of each kind of node.
 */
var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
exports.QueryDocumentKeys = QueryDocumentKeys;
var BREAK = {};
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

exports.BREAK = BREAK;

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */


function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */


function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}
});

unwrapExports(visitor);
var visitor_1 = visitor.visit;
var visitor_2 = visitor.visitInParallel;
var visitor_3 = visitor.visitWithTypeInfo;
var visitor_4 = visitor.getVisitFn;
var visitor_5 = visitor.BREAK;
var visitor_6 = visitor.QueryDocumentKeys;

var printer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, visitor.visit)(ast, {
    leave: printDocASTReducer
  });
}

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (args.every(function (arg) {
      return arg.indexOf('\n') === -1;
    }) ? wrap('(', join(args, ', '), ')') : wrap('(\n', indent(join(args, '\n')), '\n)')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        locations = _ref31.locations;
    return 'directive @' + name + (args.every(function (arg) {
      return arg.indexOf('\n') === -1;
    }) ? wrap('(', join(args, ', '), ')') : wrap('(\n', indent(join(args, '\n')), '\n)')) + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? "\"\"\"".concat(escaped.replace(/"$/, '"\n'), "\"\"\"") : "\"\"\"\n".concat(isDescription ? escaped : indent(escaped), "\n\"\"\"");
}
});

unwrapExports(printer);
var printer_1 = printer.print;

var introspection = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIntrospectionType = isIntrospectionType;
exports.introspectionTypes = exports.TypeNameMetaFieldDef = exports.TypeMetaFieldDef = exports.SchemaMetaFieldDef = exports.__TypeKind = exports.TypeKind = exports.__EnumValue = exports.__InputValue = exports.__Field = exports.__Type = exports.__DirectiveLocation = exports.__Directive = exports.__Schema = void 0;

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _objectValues = _interopRequireDefault(objectValues_1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
var __Schema = new definition.GraphQLObjectType({
  name: '__Schema',
  isIntrospection: true,
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It ' + 'exposes all available types and directives on the server, as well as ' + 'the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: (0, definition.GraphQLNonNull)((0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__Type))),
        resolve: function resolve(schema) {
          return (0, _objectValues.default)(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: (0, definition.GraphQLNonNull)(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that ' + 'mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that ' + 'subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: (0, definition.GraphQLNonNull)((0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});

exports.__Schema = __Schema;

var __Directive = new definition.GraphQLObjectType({
  name: '__Directive',
  isIntrospection: true,
  description: 'A Directive provides a way to describe alternate runtime execution and ' + 'type validation behavior in a GraphQL document.' + "\n\nIn some cases, you need to provide options to alter GraphQL's " + 'execution behavior in ways field arguments will not suffice, such as ' + 'conditionally including or skipping a field. Directives provide this by ' + 'describing additional information to the executor.',
  fields: function fields() {
    return {
      name: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      locations: {
        type: (0, definition.GraphQLNonNull)((0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__DirectiveLocation))),
        resolve: function resolve(obj) {
          return obj.locations;
        }
      },
      args: {
        type: (0, definition.GraphQLNonNull)((0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args || [];
        }
      },
      // NOTE: the following three fields are deprecated and are no longer part
      // of the GraphQL specification.
      onOperation: {
        deprecationReason: 'Use `locations`.',
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(directiveLocation.DirectiveLocation.QUERY) !== -1 || d.locations.indexOf(directiveLocation.DirectiveLocation.MUTATION) !== -1 || d.locations.indexOf(directiveLocation.DirectiveLocation.SUBSCRIPTION) !== -1;
        }
      },
      onFragment: {
        deprecationReason: 'Use `locations`.',
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(directiveLocation.DirectiveLocation.FRAGMENT_SPREAD) !== -1 || d.locations.indexOf(directiveLocation.DirectiveLocation.INLINE_FRAGMENT) !== -1 || d.locations.indexOf(directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION) !== -1;
        }
      },
      onField: {
        deprecationReason: 'Use `locations`.',
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
        resolve: function resolve(d) {
          return d.locations.indexOf(directiveLocation.DirectiveLocation.FIELD) !== -1;
        }
      }
    };
  }
});

exports.__Directive = __Directive;

var __DirectiveLocation = new definition.GraphQLEnumType({
  name: '__DirectiveLocation',
  isIntrospection: true,
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a ' + '__DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: directiveLocation.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: directiveLocation.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: directiveLocation.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: directiveLocation.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    SCHEMA: {
      value: directiveLocation.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: directiveLocation.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: directiveLocation.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: directiveLocation.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: directiveLocation.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: directiveLocation.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: directiveLocation.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: directiveLocation.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: directiveLocation.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});

exports.__DirectiveLocation = __DirectiveLocation;

var __Type = new definition.GraphQLObjectType({
  name: '__Type',
  isIntrospection: true,
  description: 'The fundamental unit of any GraphQL Schema is the type. There are ' + 'many kinds of types in GraphQL as represented by the `__TypeKind` enum.' + '\n\nDepending on the kind of a type, certain fields describe ' + 'information about that type. Scalar types provide no information ' + 'beyond a name and description, while Enum types provide their values. ' + 'Object and Interface types provide the fields they describe. Abstract ' + 'types, Union and Interface, provide the Object types possible ' + 'at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: (0, definition.GraphQLNonNull)(__TypeKind),
        resolve: function resolve(type) {
          if ((0, definition.isScalarType)(type)) {
            return TypeKind.SCALAR;
          } else if ((0, definition.isObjectType)(type)) {
            return TypeKind.OBJECT;
          } else if ((0, definition.isInterfaceType)(type)) {
            return TypeKind.INTERFACE;
          } else if ((0, definition.isUnionType)(type)) {
            return TypeKind.UNION;
          } else if ((0, definition.isEnumType)(type)) {
            return TypeKind.ENUM;
          } else if ((0, definition.isInputObjectType)(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if ((0, definition.isListType)(type)) {
            return TypeKind.LIST;
          } else if ((0, definition.isNonNullType)(type)) {
            return TypeKind.NON_NULL;
          }

          throw new Error('Unknown kind of type: ' + type);
        }
      },
      name: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      fields: {
        type: (0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__Field)),
        args: {
          includeDeprecated: {
            type: scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if ((0, definition.isObjectType)(type) || (0, definition.isInterfaceType)(type)) {
            var fields = (0, _objectValues.default)(type.getFields());

            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }

            return fields;
          }

          return null;
        }
      },
      interfaces: {
        type: (0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__Type)),
        resolve: function resolve(type) {
          if ((0, definition.isObjectType)(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: (0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if ((0, definition.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: (0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__EnumValue)),
        args: {
          includeDeprecated: {
            type: scalars.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if ((0, definition.isEnumType)(type)) {
            var values = type.getValues();

            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }

            return values;
          }
        }
      },
      inputFields: {
        type: (0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__InputValue)),
        resolve: function resolve(type) {
          if ((0, definition.isInputObjectType)(type)) {
            return (0, _objectValues.default)(type.getFields());
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(obj) {
          return obj.ofType;
        }
      }
    };
  }
});

exports.__Type = __Type;

var __Field = new definition.GraphQLObjectType({
  name: '__Field',
  isIntrospection: true,
  description: 'Object and Interface types are described by a list of Fields, each of ' + 'which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      args: {
        type: (0, definition.GraphQLNonNull)((0, definition.GraphQLList)((0, definition.GraphQLNonNull)(__InputValue))),
        resolve: function resolve(field) {
          return field.args || [];
        }
      },
      type: {
        type: (0, definition.GraphQLNonNull)(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      isDeprecated: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});

exports.__Field = __Field;

var __InputValue = new definition.GraphQLObjectType({
  name: '__InputValue',
  isIntrospection: true,
  description: 'Arguments provided to Fields or Directives and the input fields of an ' + 'InputObject are represented as Input Values which describe their type ' + 'and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      type: {
        type: (0, definition.GraphQLNonNull)(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      defaultValue: {
        type: scalars.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this ' + 'input value.',
        resolve: function resolve(inputVal) {
          return (0, _isInvalid.default)(inputVal.defaultValue) ? null : (0, printer.print)((0, astFromValue_1.astFromValue)(inputVal.defaultValue, inputVal.type));
        }
      }
    };
  }
});

exports.__InputValue = __InputValue;

var __EnumValue = new definition.GraphQLObjectType({
  name: '__EnumValue',
  isIntrospection: true,
  description: 'One possible value for a given Enum. Enum values are unique values, not ' + 'a placeholder for a string or numeric value. However an Enum value is ' + 'returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      isDeprecated: {
        type: (0, definition.GraphQLNonNull)(scalars.GraphQLBoolean),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: scalars.GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});

exports.__EnumValue = __EnumValue;
var TypeKind = {
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
};
exports.TypeKind = TypeKind;

var __TypeKind = new definition.GraphQLEnumType({
  name: '__TypeKind',
  isIntrospection: true,
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. ' + '`fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. ' + '`fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. ' + '`possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. ' + '`enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. ' + '`inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. ' + '`ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. ' + '`ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */


exports.__TypeKind = __TypeKind;
var SchemaMetaFieldDef = {
  name: '__schema',
  type: (0, definition.GraphQLNonNull)(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  }
};
exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    type: (0, definition.GraphQLNonNull)(scalars.GraphQLString)
  }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  }
};
exports.TypeMetaFieldDef = TypeMetaFieldDef;
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: (0, definition.GraphQLNonNull)(scalars.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  }
};
exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
var introspectionTypes = [__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind];
exports.introspectionTypes = introspectionTypes;

function isIntrospectionType(type) {
  return (0, definition.isNamedType)(type) && ( // Would prefer to use introspectionTypes.some(), however %checks needs
  // a simple expression.
  type.name === __Schema.name || type.name === __Directive.name || type.name === __DirectiveLocation.name || type.name === __Type.name || type.name === __Field.name || type.name === __InputValue.name || type.name === __EnumValue.name || type.name === __TypeKind.name);
}
});

unwrapExports(introspection);
var introspection_1 = introspection.isIntrospectionType;
var introspection_2 = introspection.introspectionTypes;
var introspection_3 = introspection.TypeNameMetaFieldDef;
var introspection_4 = introspection.TypeMetaFieldDef;
var introspection_5 = introspection.SchemaMetaFieldDef;
var introspection_6 = introspection.__TypeKind;
var introspection_7 = introspection.TypeKind;
var introspection_8 = introspection.__EnumValue;
var introspection_9 = introspection.__InputValue;
var introspection_10 = introspection.__Field;
var introspection_11 = introspection.__Type;
var introspection_12 = introspection.__DirectiveLocation;
var introspection_13 = introspection.__Directive;
var introspection_14 = introspection.__Schema;

var find_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}
});

unwrapExports(find_1);

var schema = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSchema = isSchema;
exports.GraphQLSchema = void 0;





var _inspect = _interopRequireDefault(inspect_1);



var _applyToStringTag = _interopRequireDefault(applyToStringTag_1);

var _find = _interopRequireDefault(find_1);

var _instanceOf = _interopRequireDefault(instanceOf);

var _invariant = _interopRequireDefault(invariant_1);

var _objectValues = _interopRequireDefault(objectValues_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return (0, _instanceOf.default)(schema, GraphQLSchema);
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */


var GraphQLSchema =
/*#__PURE__*/
function () {
  // Used as a cache for validateSchema().
  // Referenced by validateSchema().
  function GraphQLSchema(config) {
    var _this = this;

    _defineProperty(this, "astNode", void 0);

    _defineProperty(this, "extensionASTNodes", void 0);

    _defineProperty(this, "_queryType", void 0);

    _defineProperty(this, "_mutationType", void 0);

    _defineProperty(this, "_subscriptionType", void 0);

    _defineProperty(this, "_directives", void 0);

    _defineProperty(this, "_typeMap", void 0);

    _defineProperty(this, "_implementations", void 0);

    _defineProperty(this, "_possibleTypeMap", void 0);

    _defineProperty(this, "__validationErrors", void 0);

    _defineProperty(this, "__allowedLegacyNames", void 0);

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.
      !(_typeof(config) === 'object') ? (0, _invariant.default)(0, 'Must provide configuration object.') : void 0;
      !(!config.types || Array.isArray(config.types)) ? (0, _invariant.default)(0, "\"types\" must be Array if provided but got: ".concat((0, _inspect.default)(config.types), ".")) : void 0;
      !(!config.directives || Array.isArray(config.directives)) ? (0, _invariant.default)(0, '"directives" must be Array if provided but got: ' + "".concat((0, _inspect.default)(config.directives), ".")) : void 0;
      !(!config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames)) ? (0, _invariant.default)(0, '"allowedLegacyNames" must be Array if provided but got: ' + "".concat((0, _inspect.default)(config.allowedLegacyNames), ".")) : void 0;
    }

    this.__allowedLegacyNames = config.allowedLegacyNames || [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = config.directives || directives.specifiedDirectives;
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes; // Build type map now to detect any errors within this schema.

    var initialTypes = [this.getQueryType(), this.getMutationType(), this.getSubscriptionType(), introspection.__Schema];
    var types = config.types;

    if (types) {
      initialTypes = initialTypes.concat(types);
    } // Keep track of all types referenced within the schema.


    var typeMap = Object.create(null); // First by deeply visiting all initial types.

    typeMap = initialTypes.reduce(typeMapReducer, typeMap); // Then by deeply visiting all directive types.

    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap); // Storing the resulting map for reference by the schema.

    this._typeMap = typeMap; // Keep track of all implementations by interface name.

    this._implementations = Object.create(null);
    Object.keys(this._typeMap).forEach(function (typeName) {
      var type = _this._typeMap[typeName];

      if ((0, definition.isObjectType)(type)) {
        type.getInterfaces().forEach(function (iface) {
          if ((0, definition.isInterfaceType)(iface)) {
            var impls = _this._implementations[iface.name];

            if (impls) {
              impls.push(type);
            } else {
              _this._implementations[iface.name] = [type];
            }
          }
        });
      } else if ((0, definition.isAbstractType)(type) && !_this._implementations[type.name]) {
        _this._implementations[type.name] = [];
      }
    });
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    if ((0, definition.isUnionType)(abstractType)) {
      return abstractType.getTypes();
    }

    return this._implementations[abstractType.name];
  };

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    var possibleTypeMap = this._possibleTypeMap;

    if (!possibleTypeMap) {
      this._possibleTypeMap = possibleTypeMap = Object.create(null);
    }

    if (!possibleTypeMap[abstractType.name]) {
      var possibleTypes = this.getPossibleTypes(abstractType);
      possibleTypeMap[abstractType.name] = possibleTypes.reduce(function (map, type) {
        return map[type.name] = true, map;
      }, Object.create(null));
    }

    return Boolean(possibleTypeMap[abstractType.name][possibleType.name]);
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return (0, _find.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  return GraphQLSchema;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.GraphQLSchema = GraphQLSchema;
(0, _applyToStringTag.default)(GraphQLSchema);

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }

  if ((0, definition.isWrappingType)(type)) {
    return typeMapReducer(map, type.ofType);
  }

  if (map[type.name]) {
    !(map[type.name] === type) ? (0, _invariant.default)(0, 'Schema must contain unique named types but contains multiple ' + "types named \"".concat(type.name, "\".")) : void 0;
    return map;
  }

  map[type.name] = type;
  var reducedMap = map;

  if ((0, definition.isUnionType)(type)) {
    reducedMap = type.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if ((0, definition.isObjectType)(type)) {
    reducedMap = type.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if ((0, definition.isObjectType)(type) || (0, definition.isInterfaceType)(type)) {
    (0, _objectValues.default)(type.getFields()).forEach(function (field) {
      if (field.args) {
        var fieldArgTypes = field.args.map(function (arg) {
          return arg.type;
        });
        reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      }

      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  if ((0, definition.isInputObjectType)(type)) {
    (0, _objectValues.default)(type.getFields()).forEach(function (field) {
      reducedMap = typeMapReducer(reducedMap, field.type);
    });
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!(0, directives.isDirective)(directive)) {
    return map;
  }

  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}
});

unwrapExports(schema);
var schema_1 = schema.isSchema;
var schema_2 = schema.GraphQLSchema;

var location = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}
});

unwrapExports(location);
var location_1 = location.getLocation;

var printError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];

  if (error.nodes) {
    error.nodes.forEach(function (node) {
      if (node.loc) {
        printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, location.getLocation)(node.loc.source, node.loc.start)));
      }
    });
  } else if (error.source && error.locations) {
    var source = error.source;
    error.locations.forEach(function (location$$1) {
      printedLocations.push(highlightSourceAtLocation(source, location$$1));
    });
  }

  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}
/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */


function highlightSourceAtLocation(source, location$$1) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location$$1.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location$$1.line + lineOffset;
  var columnOffset = location$$1.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location$$1.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]], ["".concat(lineNum, ": "), lines[lineIndex]], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = existingLines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref4 = _step.value;
      var prefix = _ref4[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}
});

unwrapExports(printError_1);
var printError_2 = printError_1.printError;

var GraphQLError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;





/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return (0, location.getLocation)(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, location.getLocation)(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions || originalError && originalError.extensions;

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return (0, printError_1.printError)(this);
    }
  }
});
});

unwrapExports(GraphQLError_1);
var GraphQLError_2 = GraphQLError_1.GraphQLError;

var assertValidName_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertValidName = assertValidName;
exports.isValidNameError = isValidNameError;



var _invariant = _interopRequireDefault(invariant_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */


function isValidNameError(name, node) {
  !(typeof name === 'string') ? (0, _invariant.default)(0, 'Expected string') : void 0;

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new GraphQLError_1.GraphQLError("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by ") + 'GraphQL introspection.', node);
  }

  if (!NAME_RX.test(name)) {
    return new GraphQLError_1.GraphQLError("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."), node);
  }
}
});

unwrapExports(assertValidName_1);
var assertValidName_2 = assertValidName_1.assertValidName;
var assertValidName_3 = assertValidName_1.isValidNameError;

var typeComparators = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqualType = isEqualType;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.doTypesOverlap = doTypesOverlap;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Provided two types, return true if the types are equal (invariant).
 */
function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if ((0, definition.isNonNullType)(typeA) && (0, definition.isNonNullType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if ((0, definition.isListType)(typeA) && (0, definition.isListType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */


function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if ((0, definition.isNonNullType)(superType)) {
    if ((0, definition.isNonNullType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if ((0, definition.isNonNullType)(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if ((0, definition.isListType)(superType)) {
    if ((0, definition.isListType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if ((0, definition.isListType)(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.


  if ((0, definition.isAbstractType)(superType) && (0, definition.isObjectType)(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  } // Otherwise, the child type is not a valid subtype of the parent type.


  return false;
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */


function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if ((0, definition.isAbstractType)(typeA)) {
    if ((0, definition.isAbstractType)(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isPossibleType(typeA, typeB);
  }

  if ((0, definition.isAbstractType)(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}
});

unwrapExports(typeComparators);
var typeComparators_1 = typeComparators.isEqualType;
var typeComparators_2 = typeComparators.isTypeSubTypeOf;
var typeComparators_3 = typeComparators.doTypesOverlap;

var validate = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = validateSchema;
exports.assertValidSchema = assertValidSchema;









var _inspect = _interopRequireDefault(inspect_1);

var _find = _interopRequireDefault(find_1);

var _invariant = _interopRequireDefault(invariant_1);

var _objectValues = _interopRequireDefault(objectValues_1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
function validateSchema(schema$$1) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  !(0, schema.isSchema)(schema$$1) ? (0, _invariant.default)(0, "Expected ".concat((0, _inspect.default)(schema$$1), " to be a GraphQL schema.")) : void 0; // If this Schema has already been validated, return the previous results.

  if (schema$$1.__validationErrors) {
    return schema$$1.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema$$1);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema$$1.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */


function assertValidSchema(schema$$1) {
  var errors = validateSchema(schema$$1);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext =
/*#__PURE__*/
function () {
  function SchemaValidationContext(schema$$1) {
    _defineProperty(this, "_errors", void 0);

    _defineProperty(this, "schema", void 0);

    this._errors = [];
    this.schema = schema$$1;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);

    this.addError(new GraphQLError_1.GraphQLError(message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema$$1 = context.schema;
  var queryType = schema$$1.getQueryType();

  if (!queryType) {
    context.reportError("Query root type must be provided.", schema$$1.astNode);
  } else if (!(0, definition.isObjectType)(queryType)) {
    context.reportError("Query root type must be Object type, it cannot be ".concat((0, _inspect.default)(queryType), "."), getOperationTypeNode(schema$$1, queryType, 'query'));
  }

  var mutationType = schema$$1.getMutationType();

  if (mutationType && !(0, definition.isObjectType)(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat((0, _inspect.default)(mutationType), "."), getOperationTypeNode(schema$$1, mutationType, 'mutation'));
  }

  var subscriptionType = schema$$1.getSubscriptionType();

  if (subscriptionType && !(0, definition.isObjectType)(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat((0, _inspect.default)(subscriptionType), "."), getOperationTypeNode(schema$$1, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema$$1, type, operation) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = getAllNodes(schema$$1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.operationTypes) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = node.operationTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var operationType = _step2.value;

            if (operationType.operation === operation) {
              return operationType.type;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return type.astNode;
}

function validateDirectives(context) {
  var directives$$1 = context.schema.getDirectives();
  directives$$1.forEach(function (directive) {
    // Ensure all directives are in fact GraphQL directives.
    if (!(0, directives.isDirective)(directive)) {
      context.reportError("Expected directive but got: ".concat((0, _inspect.default)(directive), "."), directive && directive.astNode);
      return;
    } // Ensure they are named correctly.


    validateName(context, directive); // TODO: Ensure proper locations.
    // Ensure the arguments are valid.

    var argNames = Object.create(null);
    directive.args.forEach(function (arg) {
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per directive.

      if (argNames[argName]) {
        context.reportError("Argument @".concat(directive.name, "(").concat(argName, ":) can only be defined once."), getAllDirectiveArgNodes(directive, argName));
        return; // continue loop
      }

      argNames[argName] = true; // Ensure the type is an input type.

      if (!(0, definition.isInputType)(arg.type)) {
        context.reportError("The type of @".concat(directive.name, "(").concat(argName, ":) must be Input Type ") + "but got: ".concat((0, _inspect.default)(arg.type), "."), getDirectiveArgTypeNode(directive, argName));
      }
    });
  });
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  } // Ensure names are valid, however introspection types opt out.


  var error = (0, assertValidName_1.isValidNameError)(node.name, node.astNode || undefined);

  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var typeMap = context.schema.getTypeMap();
  (0, _objectValues.default)(typeMap).forEach(function (type) {
    // Ensure all provided types are in fact GraphQL type.
    if (!(0, definition.isNamedType)(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat((0, _inspect.default)(type), "."), type && type.astNode);
      return;
    } // Ensure it is named correctly (excluding introspection types).


    if (!(0, introspection.isIntrospectionType)(type)) {
      validateName(context, type);
    }

    if ((0, definition.isObjectType)(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateObjectInterfaces(context, type);
    } else if ((0, definition.isInterfaceType)(type)) {
      // Ensure fields are valid.
      validateFields(context, type);
    } else if ((0, definition.isUnionType)(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if ((0, definition.isEnumType)(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if ((0, definition.isInputObjectType)(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type);
    }
  });
}

function validateFields(context, type) {
  var fields = (0, _objectValues.default)(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field); // Ensure they were defined at most once.

    var fieldNodes = getAllFieldNodes(type, field.name);

    if (fieldNodes.length > 1) {
      context.reportError("Field ".concat(type.name, ".").concat(field.name, " can only be defined once."), fieldNodes);
      return; // continue loop
    } // Ensure the type is an output type


    if (!(0, definition.isOutputType)(field.type)) {
      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat((0, _inspect.default)(field.type), "."), getFieldTypeNode(type, field.name));
    } // Ensure the arguments are valid


    var argNames = Object.create(null);
    field.args.forEach(function (arg) {
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per field.

      if (argNames[argName]) {
        context.reportError("Field argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) can only ") + 'be defined once.', getAllFieldArgNodes(type, field.name, argName));
      }

      argNames[argName] = true; // Ensure the type is an input type

      if (!(0, definition.isInputType)(arg.type)) {
        context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat((0, _inspect.default)(arg.type), "."), getFieldArgTypeNode(type, field.name, argName));
      }
    });
  });
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);
  object.getInterfaces().forEach(function (iface) {
    if (!(0, definition.isInterfaceType)(iface)) {
      context.reportError("Type ".concat((0, _inspect.default)(object), " must only implement Interface types, ") + "it cannot implement ".concat((0, _inspect.default)(iface), "."), getImplementsInterfaceNode(object, iface));
      return;
    }

    if (implementedTypeNames[iface.name]) {
      context.reportError("Type ".concat(object.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(object, iface));
      return; // continue loop
    }

    implementedTypeNames[iface.name] = true;
    validateObjectImplementsInterface(context, object, iface);
  });
}

function validateObjectImplementsInterface(context, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields(); // Assert each interface field is implemented.

  Object.keys(ifaceFieldMap).forEach(function (fieldName) {
    var objectField = objectFieldMap[fieldName];
    var ifaceField = ifaceFieldMap[fieldName]; // Assert interface field exists on object.

    if (!objectField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ") + "".concat(object.name, " does not provide it."), [getFieldNode(iface, fieldName), object.astNode]); // Continue loop over fields.

      return;
    } // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)


    if (!(0, typeComparators.isTypeSubTypeOf)(context.schema, objectField.type, ifaceField.type)) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat((0, _inspect.default)(ifaceField.type), " but ").concat(object.name, ".").concat(fieldName, " ") + "is type ".concat((0, _inspect.default)(objectField.type), "."), [getFieldTypeNode(iface, fieldName), getFieldTypeNode(object, fieldName)]);
    } // Assert each interface field arg is implemented.


    ifaceField.args.forEach(function (ifaceArg) {
      var argName = ifaceArg.name;
      var objectArg = (0, _find.default)(objectField.args, function (arg) {
        return arg.name === argName;
      }); // Assert interface field arg exists on object field.

      if (!objectArg) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expected but ".concat(object.name, ".").concat(fieldName, " does not provide it."), [getFieldArgNode(iface, fieldName, argName), getFieldNode(object, fieldName)]); // Continue loop over arguments.

        return;
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?


      if (!(0, typeComparators.isEqualType)(ifaceArg.type, objectArg.type)) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat((0, _inspect.default)(ifaceArg.type), " but ") + "".concat(object.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat((0, _inspect.default)(objectArg.type), "."), [getFieldArgTypeNode(iface, fieldName, argName), getFieldArgTypeNode(object, fieldName, argName)]);
      } // TODO: validate default values?

    }); // Assert additional arguments must not be required.

    objectField.args.forEach(function (objectArg) {
      var argName = objectArg.name;
      var ifaceArg = (0, _find.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });

      if (!ifaceArg && (0, definition.isNonNullType)(objectArg.type)) {
        context.reportError("Object field argument ".concat(object.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "is of required type ".concat((0, _inspect.default)(objectArg.type), " but is not also ") + "provided by the Interface field ".concat(iface.name, ".").concat(fieldName, "."), [getFieldArgTypeNode(object, fieldName, argName), getFieldNode(iface, fieldName)]);
      }
    });
  });
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), union.astNode);
  }

  var includedTypeNames = Object.create(null);
  memberTypes.forEach(function (memberType) {
    if (includedTypeNames[memberType.name]) {
      context.reportError("Union type ".concat(union.name, " can only include type ") + "".concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
      return; // continue loop
    }

    includedTypeNames[memberType.name] = true;

    if (!(0, definition.isObjectType)(memberType)) {
      context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat((0, _inspect.default)(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
    }
  });
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), enumType.astNode);
  }

  enumValues.forEach(function (enumValue) {
    var valueName = enumValue.name; // Ensure no duplicates.

    var allNodes = getEnumValueNodes(enumType, valueName);

    if (allNodes && allNodes.length > 1) {
      context.reportError("Enum type ".concat(enumType.name, " can include value ").concat(valueName, " only once."), allNodes);
    } // Ensure valid name.


    validateName(context, enumValue);

    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
    }
  });
}

function validateInputFields(context, inputObj) {
  var fields = (0, _objectValues.default)(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), inputObj.astNode);
  } // Ensure the arguments are valid


  fields.forEach(function (field) {
    // Ensure they are named correctly.
    validateName(context, field); // TODO: Ensure they are unique per field.
    // Ensure the type is an input type

    if (!(0, definition.isInputType)(field.type)) {
      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat((0, _inspect.default)(field.type), "."), field.astNode && field.astNode.type);
    }
  });
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes || [];
}

function getImplementsInterfaceNode(type, iface) {
  return getAllImplementsInterfaceNodes(type, iface)[0];
}

function getAllImplementsInterfaceNodes(type, iface) {
  var implementsNodes = [];
  var astNodes = getAllNodes(type);

  for (var i = 0; i < astNodes.length; i++) {
    var _astNode = astNodes[i];

    if (_astNode && _astNode.interfaces) {
      _astNode.interfaces.forEach(function (node) {
        if (node.name.value === iface.name) {
          implementsNodes.push(node);
        }
      });
    }
  }

  return implementsNodes;
}

function getFieldNode(type, fieldName) {
  return getAllFieldNodes(type, fieldName)[0];
}

function getAllFieldNodes(type, fieldName) {
  var fieldNodes = [];
  var astNodes = getAllNodes(type);

  for (var i = 0; i < astNodes.length; i++) {
    var _astNode2 = astNodes[i];

    if (_astNode2 && _astNode2.fields) {
      _astNode2.fields.forEach(function (node) {
        if (node.name.value === fieldName) {
          fieldNodes.push(node);
        }
      });
    }
  }

  return fieldNodes;
}

function getFieldTypeNode(type, fieldName) {
  var fieldNode = getFieldNode(type, fieldName);
  return fieldNode && fieldNode.type;
}

function getFieldArgNode(type, fieldName, argName) {
  return getAllFieldArgNodes(type, fieldName, argName)[0];
}

function getAllFieldArgNodes(type, fieldName, argName) {
  var argNodes = [];
  var fieldNode = getFieldNode(type, fieldName);

  if (fieldNode && fieldNode.arguments) {
    fieldNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }

  return argNodes;
}

function getFieldArgTypeNode(type, fieldName, argName) {
  var fieldArgNode = getFieldArgNode(type, fieldName, argName);
  return fieldArgNode && fieldArgNode.type;
}

function getAllDirectiveArgNodes(directive, argName) {
  var argNodes = [];
  var directiveNode = directive.astNode;

  if (directiveNode && directiveNode.arguments) {
    directiveNode.arguments.forEach(function (node) {
      if (node.name.value === argName) {
        argNodes.push(node);
      }
    });
  }

  return argNodes;
}

function getDirectiveArgTypeNode(directive, argName) {
  var argNode = getAllDirectiveArgNodes(directive, argName)[0];
  return argNode && argNode.type;
}

function getUnionMemberTypeNodes(union, typeName) {
  return union.astNode && union.astNode.types && union.astNode.types.filter(function (type) {
    return type.name.value === typeName;
  });
}

function getEnumValueNodes(enumType, valueName) {
  return enumType.astNode && enumType.astNode.values && enumType.astNode.values.filter(function (value) {
    return value.name.value === valueName;
  });
}
});

unwrapExports(validate);
var validate_1 = validate.validateSchema;
var validate_2 = validate.assertValidSchema;

var source = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;

var _invariant = _interopRequireDefault(invariant_1);

var _applyToStringTag = _interopRequireDefault(applyToStringTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  _defineProperty(this, "body", void 0);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "locationOffset", void 0);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  !(this.locationOffset.line > 0) ? (0, _invariant.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.Source = Source;
(0, _applyToStringTag.default)(Source);
});

unwrapExports(source);
var source_1 = source.Source;

var syntaxError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
function syntaxError(source, position, description) {
  return new GraphQLError_1.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}
});

unwrapExports(syntaxError_1);
var syntaxError_2 = syntaxError_1.syntaxError;

var locatedError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new GraphQLError_1.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}
});

unwrapExports(locatedError_1);
var locatedError_2 = locatedError_1.locatedError;

var formatError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _invariant = _interopRequireDefault(invariant_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant.default)(0, 'Received null or undefined error.') : void 0;
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
});

unwrapExports(formatError_1);
var formatError_2 = formatError_1.formatError;

var error = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GraphQLError", {
  enumerable: true,
  get: function get() {
    return GraphQLError_1.GraphQLError;
  }
});
Object.defineProperty(exports, "syntaxError", {
  enumerable: true,
  get: function get() {
    return syntaxError_1.syntaxError;
  }
});
Object.defineProperty(exports, "locatedError", {
  enumerable: true,
  get: function get() {
    return locatedError_1.locatedError;
  }
});
Object.defineProperty(exports, "printError", {
  enumerable: true,
  get: function get() {
    return printError_1.printError;
  }
});
Object.defineProperty(exports, "formatError", {
  enumerable: true,
  get: function get() {
    return formatError_1.formatError;
  }
});
});

unwrapExports(error);

var blockStringValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStringValue;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
});

unwrapExports(blockStringValue_1);

var lexer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;
exports.TokenKind = void 0;



var _blockStringValue = _interopRequireDefault(blockStringValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

exports.TokenKind = TokenKind;

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev);
      }

      return readString(source, pos, line, col, prev);
  }

  throw (0, error.syntaxError)(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = charCodeAt.call(body, position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);

    if (code >= 48 && code <= 57) {
      throw (0, error.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = charCodeAt.call(body, ++position);

    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }

    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0, error.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0, error.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));

          if (charCode < 0) {
            throw (0, error.syntaxError)(source, position, 'Invalid character escape sequence: ' + "\\u".concat(body.slice(position + 1, position + 5), "."));
          }

          value += String.fromCharCode(charCode);
          position += 4;
          break;

        default:
          throw (0, error.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0, error.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockStringValue.default)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, error.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    } // Escape Triple-Quote (\""")


    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, error.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}
});

unwrapExports(lexer);
var lexer_1 = lexer.createLexer;
var lexer_2 = lexer.getTokenDesc;
var lexer_3 = lexer.TokenKind;

var parser = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _inspect = _interopRequireDefault(inspect_1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source$$1, options) {
  var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;

  if (!(sourceObj instanceof source.Source)) {
    throw new TypeError("Must provide Source. Received: ".concat((0, _inspect.default)(sourceObj)));
  }

  var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer$$1);
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */


function parseValue(source$$1, options) {
  var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;
  var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
  expect(lexer$$1, lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer$$1, false);
  expect(lexer$$1, lexer.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */


function parseType(source$$1, options) {
  var sourceObj = typeof source$$1 === 'string' ? new source.Source(source$$1) : source$$1;
  var lexer$$1 = (0, lexer.createLexer)(sourceObj, options || {});
  expect(lexer$$1, lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer$$1);
  expect(lexer$$1, lexer.TokenKind.EOF);
  return type;
}
/**
 * Converts a name lex token into a name parse node.
 */


function parseName(lexer$$1) {
  var token = expect(lexer$$1, lexer.TokenKind.NAME);
  return {
    kind: kinds.Kind.NAME,
    value: token.value,
    loc: loc(lexer$$1, token)
  };
} // Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */


function parseDocument(lexer$$1) {
  var start = lexer$$1.token;
  expect(lexer$$1, lexer.TokenKind.SOF);
  var definitions = [];

  do {
    definitions.push(parseDefinition(lexer$$1));
  } while (!skip(lexer$$1, lexer.TokenKind.EOF));

  return {
    kind: kinds.Kind.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer$$1, start)
  };
}
/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 *   - TypeSystemExtension
 */


function parseDefinition(lexer$$1) {
  if (peek(lexer$$1, lexer.TokenKind.NAME)) {
    switch (lexer$$1.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer$$1);

      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'directive':
        return parseTypeSystemDefinition(lexer$$1);

      case 'extend':
        return parseTypeSystemExtension(lexer$$1);
    }
  } else if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
    return parseExecutableDefinition(lexer$$1);
  } else if (peekDescription(lexer$$1)) {
    return parseTypeSystemDefinition(lexer$$1);
  }

  throw unexpected(lexer$$1);
}
/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */


function parseExecutableDefinition(lexer$$1) {
  if (peek(lexer$$1, lexer.TokenKind.NAME)) {
    switch (lexer$$1.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer$$1);

      case 'fragment':
        return parseFragmentDefinition(lexer$$1);
    }
  } else if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer$$1);
  }

  throw unexpected(lexer$$1);
} // Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */


function parseOperationDefinition(lexer$$1) {
  var start = lexer$$1.token;

  if (peek(lexer$$1, lexer.TokenKind.BRACE_L)) {
    return {
      kind: kinds.Kind.OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer$$1),
      loc: loc(lexer$$1, start)
    };
  }

  var operation = parseOperationType(lexer$$1);
  var name;

  if (peek(lexer$$1, lexer.TokenKind.NAME)) {
    name = parseName(lexer$$1);
  }

  return {
    kind: kinds.Kind.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer$$1),
    directives: parseDirectives(lexer$$1, false),
    selectionSet: parseSelectionSet(lexer$$1),
    loc: loc(lexer$$1, start)
  };
}
/**
 * OperationType : one of query mutation subscription
 */


function parseOperationType(lexer$$1) {
  var operationToken = expect(lexer$$1, lexer.TokenKind.NAME);

  switch (operationToken.value) {
    case 'query':
      return 'query';

    case 'mutation':
      return 'mutation';

    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer$$1, operationToken);
}
/**
 * VariableDefinitions : ( VariableDefinition+ )
 */


function parseVariableDefinitions(lexer$$1) {
  return peek(lexer$$1, lexer.TokenKind.PAREN_L) ? many(lexer$$1, lexer.TokenKind.PAREN_L, parseVariableDefinition, lexer.TokenKind.PAREN_R) : [];
}
/**
 * VariableDefinition : Variable : Type DefaultValue?
 */


function parseVariableDefinition(lexer$$1) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.VARIABLE_DEFINITION,
    variable: parseVariable(lexer$$1),
    type: (expect(lexer$$1, lexer.TokenKind.COLON), parseTypeReference(lexer$$1)),
    defaultValue: skip(lexer$$1, lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer$$1, true) : undefined,
    loc: loc(lexer$$1, start)
  };
}
/**
 * Variable : $ Name
 */


function parseVariable(lexer$$1) {
  var start = lexer$$1.token;
  expect(lexer$$1, lexer.TokenKind.DOLLAR);
  return {
    kind: kinds.Kind.VARIABLE,
    name: parseName(lexer$$1),
    loc: loc(lexer$$1, start)
  };
}
/**
 * SelectionSet : { Selection+ }
 */


function parseSelectionSet(lexer$$1) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.SELECTION_SET,
    selections: many(lexer$$1, lexer.TokenKind.BRACE_L, parseSelection, lexer.TokenKind.BRACE_R),
    loc: loc(lexer$$1, start)
  };
}
/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */


function parseSelection(lexer$$1) {
  return peek(lexer$$1, lexer.TokenKind.SPREAD) ? parseFragment(lexer$$1) : parseField(lexer$$1);
}
/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */


function parseField(lexer$$1) {
  var start = lexer$$1.token;
  var nameOrAlias = parseName(lexer$$1);
  var alias;
  var name;

  if (skip(lexer$$1, lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer$$1);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: kinds.Kind.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer$$1, false),
    directives: parseDirectives(lexer$$1, false),
    selectionSet: peek(lexer$$1, lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer$$1) : undefined,
    loc: loc(lexer$$1, start)
  };
}
/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */


function parseArguments(lexer$$1, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer$$1, lexer.TokenKind.PAREN_L) ? many(lexer$$1, lexer.TokenKind.PAREN_L, item, lexer.TokenKind.PAREN_R) : [];
}
/**
 * Argument[Const] : Name : Value[?Const]
 */


function parseArgument(lexer$$1) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.ARGUMENT,
    name: parseName(lexer$$1),
    value: (expect(lexer$$1, lexer.TokenKind.COLON), parseValueLiteral(lexer$$1, false)),
    loc: loc(lexer$$1, start)
  };
}

function parseConstArgument(lexer$$1) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.ARGUMENT,
    name: parseName(lexer$$1),
    value: (expect(lexer$$1, lexer.TokenKind.COLON), parseConstValue(lexer$$1)),
    loc: loc(lexer$$1, start)
  };
} // Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */


function parseFragment(lexer$$1) {
  var start = lexer$$1.token;
  expect(lexer$$1, lexer.TokenKind.SPREAD);

  if (peek(lexer$$1, lexer.TokenKind.NAME) && lexer$$1.token.value !== 'on') {
    return {
      kind: kinds.Kind.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer$$1),
      directives: parseDirectives(lexer$$1, false),
      loc: loc(lexer$$1, start)
    };
  }

  var typeCondition;

  if (lexer$$1.token.value === 'on') {
    lexer$$1.advance();
    typeCondition = parseNamedType(lexer$$1);
  }

  return {
    kind: kinds.Kind.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer$$1, false),
    selectionSet: parseSelectionSet(lexer$$1),
    loc: loc(lexer$$1, start)
  };
}
/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */


function parseFragmentDefinition(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'fragment'); // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

  if (lexer$$1.options.experimentalFragmentVariables) {
    return {
      kind: kinds.Kind.FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer$$1),
      variableDefinitions: parseVariableDefinitions(lexer$$1),
      typeCondition: (expectKeyword(lexer$$1, 'on'), parseNamedType(lexer$$1)),
      directives: parseDirectives(lexer$$1, false),
      selectionSet: parseSelectionSet(lexer$$1),
      loc: loc(lexer$$1, start)
    };
  }

  return {
    kind: kinds.Kind.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer$$1),
    typeCondition: (expectKeyword(lexer$$1, 'on'), parseNamedType(lexer$$1)),
    directives: parseDirectives(lexer$$1, false),
    selectionSet: parseSelectionSet(lexer$$1),
    loc: loc(lexer$$1, start)
  };
}
/**
 * FragmentName : Name but not `on`
 */


function parseFragmentName(lexer$$1) {
  if (lexer$$1.token.value === 'on') {
    throw unexpected(lexer$$1);
  }

  return parseName(lexer$$1);
} // Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */


function parseValueLiteral(lexer$$1, isConst) {
  var token = lexer$$1.token;

  switch (token.kind) {
    case lexer.TokenKind.BRACKET_L:
      return parseList(lexer$$1, isConst);

    case lexer.TokenKind.BRACE_L:
      return parseObject(lexer$$1, isConst);

    case lexer.TokenKind.INT:
      lexer$$1.advance();
      return {
        kind: kinds.Kind.INT,
        value: token.value,
        loc: loc(lexer$$1, token)
      };

    case lexer.TokenKind.FLOAT:
      lexer$$1.advance();
      return {
        kind: kinds.Kind.FLOAT,
        value: token.value,
        loc: loc(lexer$$1, token)
      };

    case lexer.TokenKind.STRING:
    case lexer.TokenKind.BLOCK_STRING:
      return parseStringLiteral(lexer$$1);

    case lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer$$1.advance();
        return {
          kind: kinds.Kind.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer$$1, token)
        };
      } else if (token.value === 'null') {
        lexer$$1.advance();
        return {
          kind: kinds.Kind.NULL,
          loc: loc(lexer$$1, token)
        };
      }

      lexer$$1.advance();
      return {
        kind: kinds.Kind.ENUM,
        value: token.value,
        loc: loc(lexer$$1, token)
      };

    case lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer$$1);
      }

      break;
  }

  throw unexpected(lexer$$1);
}

function parseStringLiteral(lexer$$1) {
  var token = lexer$$1.token;
  lexer$$1.advance();
  return {
    kind: kinds.Kind.STRING,
    value: token.value,
    block: token.kind === lexer.TokenKind.BLOCK_STRING,
    loc: loc(lexer$$1, token)
  };
}

function parseConstValue(lexer$$1) {
  return parseValueLiteral(lexer$$1, true);
}

function parseValueValue(lexer$$1) {
  return parseValueLiteral(lexer$$1, false);
}
/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */


function parseList(lexer$$1, isConst) {
  var start = lexer$$1.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: kinds.Kind.LIST,
    values: any(lexer$$1, lexer.TokenKind.BRACKET_L, item, lexer.TokenKind.BRACKET_R),
    loc: loc(lexer$$1, start)
  };
}
/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */


function parseObject(lexer$$1, isConst) {
  var start = lexer$$1.token;
  expect(lexer$$1, lexer.TokenKind.BRACE_L);
  var fields = [];

  while (!skip(lexer$$1, lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer$$1, isConst));
  }

  return {
    kind: kinds.Kind.OBJECT,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ObjectField[Const] : Name : Value[?Const]
 */


function parseObjectField(lexer$$1, isConst) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.OBJECT_FIELD,
    name: parseName(lexer$$1),
    value: (expect(lexer$$1, lexer.TokenKind.COLON), parseValueLiteral(lexer$$1, isConst)),
    loc: loc(lexer$$1, start)
  };
} // Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */


function parseDirectives(lexer$$1, isConst) {
  var directives = [];

  while (peek(lexer$$1, lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer$$1, isConst));
  }

  return directives;
}
/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */


function parseDirective(lexer$$1, isConst) {
  var start = lexer$$1.token;
  expect(lexer$$1, lexer.TokenKind.AT);
  return {
    kind: kinds.Kind.DIRECTIVE,
    name: parseName(lexer$$1),
    arguments: parseArguments(lexer$$1, isConst),
    loc: loc(lexer$$1, start)
  };
} // Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */


function parseTypeReference(lexer$$1) {
  var start = lexer$$1.token;
  var type;

  if (skip(lexer$$1, lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer$$1);
    expect(lexer$$1, lexer.TokenKind.BRACKET_R);
    type = {
      kind: kinds.Kind.LIST_TYPE,
      type: type,
      loc: loc(lexer$$1, start)
    };
  } else {
    type = parseNamedType(lexer$$1);
  }

  if (skip(lexer$$1, lexer.TokenKind.BANG)) {
    return {
      kind: kinds.Kind.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer$$1, start)
    };
  }

  return type;
}
/**
 * NamedType : Name
 */


function parseNamedType(lexer$$1) {
  var start = lexer$$1.token;
  return {
    kind: kinds.Kind.NAMED_TYPE,
    name: parseName(lexer$$1),
    loc: loc(lexer$$1, start)
  };
} // Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemDefinition(lexer$$1) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer$$1) ? lexer$$1.lookahead() : lexer$$1.token;

  if (keywordToken.kind === lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer$$1);

      case 'scalar':
        return parseScalarTypeDefinition(lexer$$1);

      case 'type':
        return parseObjectTypeDefinition(lexer$$1);

      case 'interface':
        return parseInterfaceTypeDefinition(lexer$$1);

      case 'union':
        return parseUnionTypeDefinition(lexer$$1);

      case 'enum':
        return parseEnumTypeDefinition(lexer$$1);

      case 'input':
        return parseInputObjectTypeDefinition(lexer$$1);

      case 'directive':
        return parseDirectiveDefinition(lexer$$1);
    }
  }

  throw unexpected(lexer$$1, keywordToken);
}

function peekDescription(lexer$$1) {
  return peek(lexer$$1, lexer.TokenKind.STRING) || peek(lexer$$1, lexer.TokenKind.BLOCK_STRING);
}
/**
 * Description : StringValue
 */


function parseDescription(lexer$$1) {
  if (peekDescription(lexer$$1)) {
    return parseStringLiteral(lexer$$1);
  }
}
/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */


function parseSchemaDefinition(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'schema');
  var directives = parseDirectives(lexer$$1, true);
  var operationTypes = many(lexer$$1, lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, lexer.TokenKind.BRACE_R);
  return {
    kind: kinds.Kind.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer$$1, start)
  };
}
/**
 * OperationTypeDefinition : OperationType : NamedType
 */


function parseOperationTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var operation = parseOperationType(lexer$$1);
  expect(lexer$$1, lexer.TokenKind.COLON);
  var type = parseNamedType(lexer$$1);
  return {
    kind: kinds.Kind.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */


function parseScalarTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'scalar');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  return {
    kind: kinds.Kind.SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */


function parseObjectTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'type');
  var name = parseName(lexer$$1);
  var interfaces = parseImplementsInterfaces(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseFieldsDefinition(lexer$$1);
  return {
    kind: kinds.Kind.OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */


function parseImplementsInterfaces(lexer$$1) {
  var types = [];

  if (lexer$$1.token.value === 'implements') {
    lexer$$1.advance(); // Optional leading ampersand

    skip(lexer$$1, lexer.TokenKind.AMP);

    do {
      types.push(parseNamedType(lexer$$1));
    } while (skip(lexer$$1, lexer.TokenKind.AMP) || // Legacy support for the SDL?
    lexer$$1.options.allowLegacySDLImplementsInterfaces && peek(lexer$$1, lexer.TokenKind.NAME));
  }

  return types;
}
/**
 * FieldsDefinition : { FieldDefinition+ }
 */


function parseFieldsDefinition(lexer$$1) {
  // Legacy support for the SDL?
  if (lexer$$1.options.allowLegacySDLEmptyFields && peek(lexer$$1, lexer.TokenKind.BRACE_L) && lexer$$1.lookahead().kind === lexer.TokenKind.BRACE_R) {
    lexer$$1.advance();
    lexer$$1.advance();
    return [];
  }

  return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseFieldDefinition, lexer.TokenKind.BRACE_R) : [];
}
/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */


function parseFieldDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  var name = parseName(lexer$$1);
  var args = parseArgumentDefs(lexer$$1);
  expect(lexer$$1, lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  return {
    kind: kinds.Kind.FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */


function parseArgumentDefs(lexer$$1) {
  if (!peek(lexer$$1, lexer.TokenKind.PAREN_L)) {
    return [];
  }

  return many(lexer$$1, lexer.TokenKind.PAREN_L, parseInputValueDef, lexer.TokenKind.PAREN_R);
}
/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */


function parseInputValueDef(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  var name = parseName(lexer$$1);
  expect(lexer$$1, lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer$$1);
  var defaultValue;

  if (skip(lexer$$1, lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer$$1);
  }

  var directives = parseDirectives(lexer$$1, true);
  return {
    kind: kinds.Kind.INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer$$1, start)
  };
}
/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */


function parseInterfaceTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'interface');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseFieldsDefinition(lexer$$1);
  return {
    kind: kinds.Kind.INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */


function parseUnionTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'union');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var types = parseUnionMemberTypes(lexer$$1);
  return {
    kind: kinds.Kind.UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer$$1, start)
  };
}
/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */


function parseUnionMemberTypes(lexer$$1) {
  var types = [];

  if (skip(lexer$$1, lexer.TokenKind.EQUALS)) {
    // Optional leading pipe
    skip(lexer$$1, lexer.TokenKind.PIPE);

    do {
      types.push(parseNamedType(lexer$$1));
    } while (skip(lexer$$1, lexer.TokenKind.PIPE));
  }

  return types;
}
/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */


function parseEnumTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'enum');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var values = parseEnumValuesDefinition(lexer$$1);
  return {
    kind: kinds.Kind.ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer$$1, start)
  };
}
/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */


function parseEnumValuesDefinition(lexer$$1) {
  return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseEnumValueDefinition, lexer.TokenKind.BRACE_R) : [];
}
/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */


function parseEnumValueDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  return {
    kind: kinds.Kind.ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer$$1, start)
  };
}
/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */


function parseInputObjectTypeDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'input');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseInputFieldsDefinition(lexer$$1);
  return {
    kind: kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */


function parseInputFieldsDefinition(lexer$$1) {
  return peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseInputValueDef, lexer.TokenKind.BRACE_R) : [];
}
/**
 * TypeSystemExtension :
 *   - SchemaExtension
 *   - TypeExtension
 *
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemExtension(lexer$$1) {
  var keywordToken = lexer$$1.lookahead();

  if (keywordToken.kind === lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaExtension(lexer$$1);

      case 'scalar':
        return parseScalarTypeExtension(lexer$$1);

      case 'type':
        return parseObjectTypeExtension(lexer$$1);

      case 'interface':
        return parseInterfaceTypeExtension(lexer$$1);

      case 'union':
        return parseUnionTypeExtension(lexer$$1);

      case 'enum':
        return parseEnumTypeExtension(lexer$$1);

      case 'input':
        return parseInputObjectTypeExtension(lexer$$1);
    }
  }

  throw unexpected(lexer$$1, keywordToken);
}
/**
 * SchemaExtension :
 *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
 *  - extend schema Directives[Const]
 */


function parseSchemaExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'schema');
  var directives = parseDirectives(lexer$$1, true);
  var operationTypes = peek(lexer$$1, lexer.TokenKind.BRACE_L) ? many(lexer$$1, lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, lexer.TokenKind.BRACE_R) : [];

  if (directives.length === 0 && operationTypes.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.SCHEMA_EXTENSION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */


function parseScalarTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'scalar');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);

  if (directives.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer$$1, start)
  };
}
/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */


function parseObjectTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'type');
  var name = parseName(lexer$$1);
  var interfaces = parseImplementsInterfaces(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseFieldsDefinition(lexer$$1);

  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */


function parseInterfaceTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'interface');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseFieldsDefinition(lexer$$1);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */


function parseUnionTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'union');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var types = parseUnionMemberTypes(lexer$$1);

  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer$$1, start)
  };
}
/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */


function parseEnumTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'enum');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var values = parseEnumValuesDefinition(lexer$$1);

  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer$$1, start)
  };
}
/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */


function parseInputObjectTypeExtension(lexer$$1) {
  var start = lexer$$1.token;
  expectKeyword(lexer$$1, 'extend');
  expectKeyword(lexer$$1, 'input');
  var name = parseName(lexer$$1);
  var directives = parseDirectives(lexer$$1, true);
  var fields = parseInputFieldsDefinition(lexer$$1);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer$$1);
  }

  return {
    kind: kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer$$1, start)
  };
}
/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */


function parseDirectiveDefinition(lexer$$1) {
  var start = lexer$$1.token;
  var description = parseDescription(lexer$$1);
  expectKeyword(lexer$$1, 'directive');
  expect(lexer$$1, lexer.TokenKind.AT);
  var name = parseName(lexer$$1);
  var args = parseArgumentDefs(lexer$$1);
  expectKeyword(lexer$$1, 'on');
  var locations = parseDirectiveLocations(lexer$$1);
  return {
    kind: kinds.Kind.DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer$$1, start)
  };
}
/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */


function parseDirectiveLocations(lexer$$1) {
  // Optional leading pipe
  skip(lexer$$1, lexer.TokenKind.PIPE);
  var locations = [];

  do {
    locations.push(parseDirectiveLocation(lexer$$1));
  } while (skip(lexer$$1, lexer.TokenKind.PIPE));

  return locations;
}
/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */


function parseDirectiveLocation(lexer$$1) {
  var start = lexer$$1.token;
  var name = parseName(lexer$$1);

  if (directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
    return name;
  }

  throw unexpected(lexer$$1, start);
} // Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */


function loc(lexer$$1, startToken) {
  if (!lexer$$1.options.noLocation) {
    return new Loc(startToken, lexer$$1.lastToken, lexer$$1.source);
  }
}

function Loc(startToken, endToken, source$$1) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source$$1;
} // Print a simplified form when appearing in JSON/util.inspect.


Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return {
    start: this.start,
    end: this.end
  };
};
/**
 * Determines if the next token is of a given kind
 */


function peek(lexer$$1, kind) {
  return lexer$$1.token.kind === kind;
}
/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */


function skip(lexer$$1, kind) {
  var match = lexer$$1.token.kind === kind;

  if (match) {
    lexer$$1.advance();
  }

  return match;
}
/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */


function expect(lexer$$1, kind) {
  var token = lexer$$1.token;

  if (token.kind === kind) {
    lexer$$1.advance();
    return token;
  }

  throw (0, error.syntaxError)(lexer$$1.source, token.start, "Expected ".concat(kind, ", found ").concat((0, lexer.getTokenDesc)(token)));
}
/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */


function expectKeyword(lexer$$1, value) {
  var token = lexer$$1.token;

  if (token.kind === lexer.TokenKind.NAME && token.value === value) {
    lexer$$1.advance();
    return token;
  }

  throw (0, error.syntaxError)(lexer$$1.source, token.start, "Expected \"".concat(value, "\", found ").concat((0, lexer.getTokenDesc)(token)));
}
/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */


function unexpected(lexer$$1, atToken) {
  var token = atToken || lexer$$1.token;
  return (0, error.syntaxError)(lexer$$1.source, token.start, "Unexpected ".concat((0, lexer.getTokenDesc)(token)));
}
/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function any(lexer$$1, openKind, parseFn, closeKind) {
  expect(lexer$$1, openKind);
  var nodes = [];

  while (!skip(lexer$$1, closeKind)) {
    nodes.push(parseFn(lexer$$1));
  }

  return nodes;
}
/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function many(lexer$$1, openKind, parseFn, closeKind) {
  expect(lexer$$1, openKind);
  var nodes = [parseFn(lexer$$1)];

  while (!skip(lexer$$1, closeKind)) {
    nodes.push(parseFn(lexer$$1));
  }

  return nodes;
}
});

unwrapExports(parser);
var parser_1 = parser.parse;
var parser_2 = parser.parseValue;
var parser_3 = parser.parseType;
var parser_4 = parser.parseConstValue;
var parser_5 = parser.parseTypeReference;
var parser_6 = parser.parseNamedType;

var typeFromAST_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFromAST = typeFromAST;





/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === kinds.Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && (0, definition.GraphQLList)(innerType);
  }

  if (typeNode.kind === kinds.Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && (0, definition.GraphQLNonNull)(innerType);
  }

  if (typeNode.kind === kinds.Kind.NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  }
  /* istanbul ignore next */


  throw new Error("Unexpected type kind: ".concat(typeNode.kind, "."));
}
});

unwrapExports(typeFromAST_1);
var typeFromAST_2 = typeFromAST_1.typeFromAST;

var TypeInfo_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeInfo = void 0;









var _find = _interopRequireDefault(find_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
var TypeInfo =
/*#__PURE__*/
function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  initialType) {
    _defineProperty(this, "_schema", void 0);

    _defineProperty(this, "_typeStack", void 0);

    _defineProperty(this, "_parentTypeStack", void 0);

    _defineProperty(this, "_inputTypeStack", void 0);

    _defineProperty(this, "_fieldDefStack", void 0);

    _defineProperty(this, "_defaultValueStack", void 0);

    _defineProperty(this, "_directive", void 0);

    _defineProperty(this, "_argument", void 0);

    _defineProperty(this, "_enumValue", void 0);

    _defineProperty(this, "_getFieldDef", void 0);

    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef;

    if (initialType) {
      if ((0, definition.isInputType)(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if ((0, definition.isCompositeType)(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if ((0, definition.isOutputType)(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  }; // Flow does not yet handle this case.


  _proto.enter = function enter(node
  /* ASTNode */
  ) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case kinds.Kind.SELECTION_SET:
        var namedType = (0, definition.getNamedType)(this.getType());

        this._parentTypeStack.push((0, definition.isCompositeType)(namedType) ? namedType : undefined);

        break;

      case kinds.Kind.FIELD:
        var parentType = this.getParentType();
        var fieldDef;
        var fieldType;

        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);

          if (fieldDef) {
            fieldType = fieldDef.type;
          }
        }

        this._fieldDefStack.push(fieldDef);

        this._typeStack.push((0, definition.isOutputType)(fieldType) ? fieldType : undefined);

        break;

      case kinds.Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case kinds.Kind.OPERATION_DEFINITION:
        var type;

        if (node.operation === 'query') {
          type = schema.getQueryType();
        } else if (node.operation === 'mutation') {
          type = schema.getMutationType();
        } else if (node.operation === 'subscription') {
          type = schema.getSubscriptionType();
        }

        this._typeStack.push((0, definition.isObjectType)(type) ? type : undefined);

        break;

      case kinds.Kind.INLINE_FRAGMENT:
      case kinds.Kind.FRAGMENT_DEFINITION:
        var typeConditionAST = node.typeCondition;
        var outputType = typeConditionAST ? (0, typeFromAST_1.typeFromAST)(schema, typeConditionAST) : (0, definition.getNamedType)(this.getType());

        this._typeStack.push((0, definition.isOutputType)(outputType) ? outputType : undefined);

        break;

      case kinds.Kind.VARIABLE_DEFINITION:
        var inputType = (0, typeFromAST_1.typeFromAST)(schema, node.type);

        this._inputTypeStack.push((0, definition.isInputType)(inputType) ? inputType : undefined);

        break;

      case kinds.Kind.ARGUMENT:
        var argDef;
        var argType;
        var fieldOrDirective = this.getDirective() || this.getFieldDef();

        if (fieldOrDirective) {
          argDef = (0, _find.default)(fieldOrDirective.args, function (arg) {
            return arg.name === node.name.value;
          });

          if (argDef) {
            argType = argDef.type;
          }
        }

        this._argument = argDef;

        this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

        this._inputTypeStack.push((0, definition.isInputType)(argType) ? argType : undefined);

        break;

      case kinds.Kind.LIST:
        var listType = (0, definition.getNullableType)(this.getInputType());
        var itemType = (0, definition.isListType)(listType) ? listType.ofType : listType; // List positions never have a default value.

        this._defaultValueStack.push(undefined);

        this._inputTypeStack.push((0, definition.isInputType)(itemType) ? itemType : undefined);

        break;

      case kinds.Kind.OBJECT_FIELD:
        var objectType = (0, definition.getNamedType)(this.getInputType());
        var inputFieldType;
        var inputField;

        if ((0, definition.isInputObjectType)(objectType)) {
          inputField = objectType.getFields()[node.name.value];

          if (inputField) {
            inputFieldType = inputField.type;
          }
        }

        this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

        this._inputTypeStack.push((0, definition.isInputType)(inputFieldType) ? inputFieldType : undefined);

        break;

      case kinds.Kind.ENUM:
        var enumType = (0, definition.getNamedType)(this.getInputType());
        var enumValue;

        if ((0, definition.isEnumType)(enumType)) {
          enumValue = enumType.getValue(node.value);
        }

        this._enumValue = enumValue;
        break;
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case kinds.Kind.SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case kinds.Kind.FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case kinds.Kind.DIRECTIVE:
        this._directive = null;
        break;

      case kinds.Kind.OPERATION_DEFINITION:
      case kinds.Kind.INLINE_FRAGMENT:
      case kinds.Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case kinds.Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case kinds.Kind.ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case kinds.Kind.LIST:
      case kinds.Kind.OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case kinds.Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */


exports.TypeInfo = TypeInfo;

function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === introspection.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return introspection.SchemaMetaFieldDef;
  }

  if (name === introspection.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return introspection.TypeMetaFieldDef;
  }

  if (name === introspection.TypeNameMetaFieldDef.name && (0, definition.isCompositeType)(parentType)) {
    return introspection.TypeNameMetaFieldDef;
  }

  if ((0, definition.isObjectType)(parentType) || (0, definition.isInterfaceType)(parentType)) {
    return parentType.getFields()[name];
  }
}
});

unwrapExports(TypeInfo_1);
var TypeInfo_2 = TypeInfo_1.TypeInfo;

var ExecutableDefinitions_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonExecutableDefinitionMessage = nonExecutableDefinitionMessage;
exports.ExecutableDefinitions = ExecutableDefinitions;





/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function nonExecutableDefinitionMessage(defName) {
  return "The ".concat(defName, " definition is not executable.");
}
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */


function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      node.definitions.forEach(function (definition) {
        if (definition.kind !== kinds.Kind.OPERATION_DEFINITION && definition.kind !== kinds.Kind.FRAGMENT_DEFINITION) {
          context.reportError(new error.GraphQLError(nonExecutableDefinitionMessage(definition.kind === kinds.Kind.SCHEMA_DEFINITION || definition.kind === kinds.Kind.SCHEMA_EXTENSION ? 'schema' : definition.name.value), [definition]));
        }
      });
      return false;
    }
  };
}
});

unwrapExports(ExecutableDefinitions_1);
var ExecutableDefinitions_2 = ExecutableDefinitions_1.nonExecutableDefinitionMessage;
var ExecutableDefinitions_3 = ExecutableDefinitions_1.ExecutableDefinitions;

var UniqueOperationNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateOperationNameMessage = duplicateOperationNameMessage;
exports.UniqueOperationNames = UniqueOperationNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateOperationNameMessage(operationName) {
  return "There can be only one operation named \"".concat(operationName, "\".");
}
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */


function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new error.GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}
});

unwrapExports(UniqueOperationNames_1);
var UniqueOperationNames_2 = UniqueOperationNames_1.duplicateOperationNameMessage;
var UniqueOperationNames_3 = UniqueOperationNames_1.UniqueOperationNames;

var LoneAnonymousOperation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anonOperationNotAloneMessage = anonOperationNotAloneMessage;
exports.LoneAnonymousOperation = LoneAnonymousOperation;





/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */


function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === kinds.Kind.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new error.GraphQLError(anonOperationNotAloneMessage(), [node]));
      }
    }
  };
}
});

unwrapExports(LoneAnonymousOperation_1);
var LoneAnonymousOperation_2 = LoneAnonymousOperation_1.anonOperationNotAloneMessage;
var LoneAnonymousOperation_3 = LoneAnonymousOperation_1.LoneAnonymousOperation;

var SingleFieldSubscriptions_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleFieldOnlyMessage = singleFieldOnlyMessage;
exports.SingleFieldSubscriptions = SingleFieldSubscriptions;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function singleFieldOnlyMessage(name) {
  return (name ? "Subscription \"".concat(name, "\" ") : 'Anonymous Subscription ') + 'must select only one top level field.';
}
/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */


function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new error.GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}
});

unwrapExports(SingleFieldSubscriptions_1);
var SingleFieldSubscriptions_2 = SingleFieldSubscriptions_1.singleFieldOnlyMessage;
var SingleFieldSubscriptions_3 = SingleFieldSubscriptions_1.SingleFieldSubscriptions;

var suggestionList_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = suggestionList;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var oLength = options.length;
  var inputThreshold = input.length / 2;

  for (var i = 0; i < oLength; i++) {
    var distance = lexicalDistance(input, options[i]);
    var threshold = Math.max(inputThreshold, options[i].length / 2, 1);

    if (distance <= threshold) {
      optionsByDistance[options[i]] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */


function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var i;
  var j;
  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length; // Any case change counts as a single edit

  if (a === b) {
    return 1;
  }

  for (i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (i = 1; i <= aLength; i++) {
    for (j = 1; j <= bLength; j++) {
      var cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}
});

unwrapExports(suggestionList_1);

var orList_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orList;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
var MAX_LENGTH = 5;
/**
 * Given [ A, B, C ] return 'A, B, or C'.
 */

function orList(items) {
  var selected = items.slice(0, MAX_LENGTH);
  return selected.reduce(function (list, quoted, index) {
    return list + (selected.length > 2 ? ', ' : ' ') + (index === selected.length - 1 ? 'or ' : '') + quoted;
  });
}
});

unwrapExports(orList_1);

var quotedOrList_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = quotedOrList;

var _orList = _interopRequireDefault(orList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Given [ A, B, C ] return '"A", "B", or "C"'.
 */
function quotedOrList(items) {
  return (0, _orList.default)(items.map(function (item) {
    return "\"".concat(item, "\"");
  }));
}
});

unwrapExports(quotedOrList_1);

var KnownTypeNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownTypeMessage = unknownTypeMessage;
exports.KnownTypeNames = KnownTypeNames;



var _suggestionList = _interopRequireDefault(suggestionList_1);

var _quotedOrList = _interopRequireDefault(quotedOrList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unknownTypeMessage(typeName, suggestedTypes) {
  var message = "Unknown type \"".concat(typeName, "\".");

  if (suggestedTypes.length) {
    message += " Did you mean ".concat((0, _quotedOrList.default)(suggestedTypes), "?");
  }

  return message;
}
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */


function KnownTypeNames(context) {
  return {
    // TODO: when validating IDL, re-enable these. Experimental version does not
    // add unreferenced types, resulting in false-positive errors. Squelched
    // errors for now.
    ObjectTypeDefinition: function ObjectTypeDefinition() {
      return false;
    },
    InterfaceTypeDefinition: function InterfaceTypeDefinition() {
      return false;
    },
    UnionTypeDefinition: function UnionTypeDefinition() {
      return false;
    },
    InputObjectTypeDefinition: function InputObjectTypeDefinition() {
      return false;
    },
    NamedType: function NamedType(node) {
      var schema = context.getSchema();
      var typeName = node.name.value;
      var type = schema.getType(typeName);

      if (!type) {
        context.reportError(new error.GraphQLError(unknownTypeMessage(typeName, (0, _suggestionList.default)(typeName, Object.keys(schema.getTypeMap()))), [node]));
      }
    }
  };
}
});

unwrapExports(KnownTypeNames_1);
var KnownTypeNames_2 = KnownTypeNames_1.unknownTypeMessage;
var KnownTypeNames_3 = KnownTypeNames_1.KnownTypeNames;

var FragmentsOnCompositeTypes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inlineFragmentOnNonCompositeErrorMessage = inlineFragmentOnNonCompositeErrorMessage;
exports.fragmentOnNonCompositeErrorMessage = fragmentOnNonCompositeErrorMessage;
exports.FragmentsOnCompositeTypes = FragmentsOnCompositeTypes;

var _inspect = _interopRequireDefault(inspect_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function inlineFragmentOnNonCompositeErrorMessage(type) {
  return "Fragment cannot condition on non composite type \"".concat((0, _inspect.default)(type), "\".");
}

function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return "Fragment \"".concat(fragName, "\" cannot condition on non composite ") + "type \"".concat((0, _inspect.default)(type), "\".");
}
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */


function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = (0, typeFromAST_1.typeFromAST)(context.getSchema(), typeCondition);

        if (type && !(0, definition.isCompositeType)(type)) {
          context.reportError(new error.GraphQLError(inlineFragmentOnNonCompositeErrorMessage((0, printer.print)(typeCondition)), [typeCondition]));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = (0, typeFromAST_1.typeFromAST)(context.getSchema(), node.typeCondition);

      if (type && !(0, definition.isCompositeType)(type)) {
        context.reportError(new error.GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, (0, printer.print)(node.typeCondition)), [node.typeCondition]));
      }
    }
  };
}
});

unwrapExports(FragmentsOnCompositeTypes_1);
var FragmentsOnCompositeTypes_2 = FragmentsOnCompositeTypes_1.inlineFragmentOnNonCompositeErrorMessage;
var FragmentsOnCompositeTypes_3 = FragmentsOnCompositeTypes_1.fragmentOnNonCompositeErrorMessage;
var FragmentsOnCompositeTypes_4 = FragmentsOnCompositeTypes_1.FragmentsOnCompositeTypes;

var VariablesAreInputTypes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonInputTypeOnVarMessage = nonInputTypeOnVarMessage;
exports.VariablesAreInputTypes = VariablesAreInputTypes;









/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function nonInputTypeOnVarMessage(variableName, typeName) {
  return "Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\".");
}
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */


function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = (0, typeFromAST_1.typeFromAST)(context.getSchema(), node.type); // If the variable type is not an input type, return an error.

      if (type && !(0, definition.isInputType)(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new error.GraphQLError(nonInputTypeOnVarMessage(variableName, (0, printer.print)(node.type)), [node.type]));
      }
    }
  };
}
});

unwrapExports(VariablesAreInputTypes_1);
var VariablesAreInputTypes_2 = VariablesAreInputTypes_1.nonInputTypeOnVarMessage;
var VariablesAreInputTypes_3 = VariablesAreInputTypes_1.VariablesAreInputTypes;

var ScalarLeafs_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSubselectionAllowedMessage = noSubselectionAllowedMessage;
exports.requiredSubselectionMessage = requiredSubselectionMessage;
exports.ScalarLeafs = ScalarLeafs;

var _inspect = _interopRequireDefault(inspect_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function noSubselectionAllowedMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" must not have a selection since ") + "type \"".concat((0, _inspect.default)(type), "\" has no subfields.");
}

function requiredSubselectionMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" of type \"").concat((0, _inspect.default)(type), "\" must have a ") + "selection of subfields. Did you mean \"".concat(fieldName, " { ... }\"?");
}
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */


function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if ((0, definition.isLeafType)((0, definition.getNamedType)(type))) {
          if (selectionSet) {
            context.reportError(new error.GraphQLError(noSubselectionAllowedMessage(node.name.value, type), [selectionSet]));
          }
        } else if (!selectionSet) {
          context.reportError(new error.GraphQLError(requiredSubselectionMessage(node.name.value, type), [node]));
        }
      }
    }
  };
}
});

unwrapExports(ScalarLeafs_1);
var ScalarLeafs_2 = ScalarLeafs_1.noSubselectionAllowedMessage;
var ScalarLeafs_3 = ScalarLeafs_1.requiredSubselectionMessage;
var ScalarLeafs_4 = ScalarLeafs_1.ScalarLeafs;

var FieldsOnCorrectType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedFieldMessage = undefinedFieldMessage;
exports.FieldsOnCorrectType = FieldsOnCorrectType;



var _suggestionList = _interopRequireDefault(suggestionList_1);

var _quotedOrList = _interopRequireDefault(quotedOrList_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var message = "Cannot query field \"".concat(fieldName, "\" on type \"").concat(type, "\".");

  if (suggestedTypeNames.length !== 0) {
    var suggestions = (0, _quotedOrList.default)(suggestedTypeNames);
    message += " Did you mean to use an inline fragment on ".concat(suggestions, "?");
  } else if (suggestedFieldNames.length !== 0) {
    message += " Did you mean ".concat((0, _quotedOrList.default)(suggestedFieldNames), "?");
  }

  return message;
}
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */


function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName); // If there are no suggested types, then perhaps this was a typo?

          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName); // Report an error, including helpful suggestions.

          context.reportError(new error.GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), [node]));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces
 * that they implement. If any of those types include the provided field,
 * suggest them, sorted by how often the type is referenced,  starting
 * with Interfaces.
 */


function getSuggestedTypeNames(schema, type, fieldName) {
  if ((0, definition.isAbstractType)(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);
    schema.getPossibleTypes(type).forEach(function (possibleType) {
      if (!possibleType.getFields()[fieldName]) {
        return;
      } // This object type defines this field.


      suggestedObjectTypes.push(possibleType.name);
      possibleType.getInterfaces().forEach(function (possibleInterface) {
        if (!possibleInterface.getFields()[fieldName]) {
          return;
        } // This interface type defines this field.


        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      });
    }); // Suggest interface types based on how common they are.

    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    }); // Suggest both interface and object types.

    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  } // Otherwise, must be an Object type, which does not have possible fields.


  return [];
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(schema, type, fieldName) {
  if ((0, definition.isObjectType)(type) || (0, definition.isInterfaceType)(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return (0, _suggestionList.default)(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}
});

unwrapExports(FieldsOnCorrectType_1);
var FieldsOnCorrectType_2 = FieldsOnCorrectType_1.undefinedFieldMessage;
var FieldsOnCorrectType_3 = FieldsOnCorrectType_1.FieldsOnCorrectType;

var UniqueFragmentNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateFragmentNameMessage = duplicateFragmentNameMessage;
exports.UniqueFragmentNames = UniqueFragmentNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateFragmentNameMessage(fragName) {
  return "There can be only one fragment named \"".concat(fragName, "\".");
}
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */


function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new error.GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}
});

unwrapExports(UniqueFragmentNames_1);
var UniqueFragmentNames_2 = UniqueFragmentNames_1.duplicateFragmentNameMessage;
var UniqueFragmentNames_3 = UniqueFragmentNames_1.UniqueFragmentNames;

var KnownFragmentNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownFragmentMessage = unknownFragmentMessage;
exports.KnownFragmentNames = KnownFragmentNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unknownFragmentMessage(fragName) {
  return "Unknown fragment \"".concat(fragName, "\".");
}
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */


function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new error.GraphQLError(unknownFragmentMessage(fragmentName), [node.name]));
      }
    }
  };
}
});

unwrapExports(KnownFragmentNames_1);
var KnownFragmentNames_2 = KnownFragmentNames_1.unknownFragmentMessage;
var KnownFragmentNames_3 = KnownFragmentNames_1.KnownFragmentNames;

var NoUnusedFragments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedFragMessage = unusedFragMessage;
exports.NoUnusedFragments = NoUnusedFragments;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unusedFragMessage(fragName) {
  return "Fragment \"".concat(fragName, "\" is never used.");
}
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */


function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);
        operationDefs.forEach(function (operation) {
          context.getRecursivelyReferencedFragments(operation).forEach(function (fragment) {
            fragmentNameUsed[fragment.name.value] = true;
          });
        });
        fragmentDefs.forEach(function (fragmentDef) {
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new error.GraphQLError(unusedFragMessage(fragName), [fragmentDef]));
          }
        });
      }
    }
  };
}
});

unwrapExports(NoUnusedFragments_1);
var NoUnusedFragments_2 = NoUnusedFragments_1.unusedFragMessage;
var NoUnusedFragments_3 = NoUnusedFragments_1.NoUnusedFragments;

var PossibleFragmentSpreads_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeIncompatibleSpreadMessage = typeIncompatibleSpreadMessage;
exports.typeIncompatibleAnonSpreadMessage = typeIncompatibleAnonSpreadMessage;
exports.PossibleFragmentSpreads = PossibleFragmentSpreads;

var _inspect = _interopRequireDefault(inspect_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return "Fragment \"".concat(fragName, "\" cannot be spread here as objects of ") + "type \"".concat((0, _inspect.default)(parentType), "\" can never be of type \"").concat((0, _inspect.default)(fragType), "\".");
}

function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return 'Fragment cannot be spread here as objects of ' + "type \"".concat((0, _inspect.default)(parentType), "\" can never be of type \"").concat((0, _inspect.default)(fragType), "\".");
}
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */


function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if ((0, definition.isCompositeType)(fragType) && (0, definition.isCompositeType)(parentType) && !(0, typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new error.GraphQLError(typeIncompatibleAnonSpreadMessage(parentType, fragType), [node]));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !(0, typeComparators.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        context.reportError(new error.GraphQLError(typeIncompatibleSpreadMessage(fragName, parentType, fragType), [node]));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = (0, typeFromAST_1.typeFromAST)(context.getSchema(), frag.typeCondition);

    if ((0, definition.isCompositeType)(type)) {
      return type;
    }
  }
}
});

unwrapExports(PossibleFragmentSpreads_1);
var PossibleFragmentSpreads_2 = PossibleFragmentSpreads_1.typeIncompatibleSpreadMessage;
var PossibleFragmentSpreads_3 = PossibleFragmentSpreads_1.typeIncompatibleAnonSpreadMessage;
var PossibleFragmentSpreads_4 = PossibleFragmentSpreads_1.PossibleFragmentSpreads;

var NoFragmentCycles_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycleErrorMessage = cycleErrorMessage;
exports.NoFragmentCycles = NoFragmentCycles;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return "Cannot spread fragment \"".concat(fragName, "\" within itself").concat(via, ".");
}

function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      if (!visitedFrags[node.name.value]) {
        detectCycleRecursive(node);
      }

      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var i = 0; i < spreadNodes.length; i++) {
      var spreadNode = spreadNodes[i];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];

      if (cycleIndex === undefined) {
        spreadPath.push(spreadNode);

        if (!visitedFrags[spreadName]) {
          var spreadFragment = context.getFragment(spreadName);

          if (spreadFragment) {
            detectCycleRecursive(spreadFragment);
          }
        }

        spreadPath.pop();
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        context.reportError(new error.GraphQLError(cycleErrorMessage(spreadName, cyclePath.map(function (s) {
          return s.name.value;
        })), cyclePath.concat(spreadNode)));
      }
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}
});

unwrapExports(NoFragmentCycles_1);
var NoFragmentCycles_2 = NoFragmentCycles_1.cycleErrorMessage;
var NoFragmentCycles_3 = NoFragmentCycles_1.NoFragmentCycles;

var UniqueVariableNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateVariableMessage = duplicateVariableMessage;
exports.UniqueVariableNames = UniqueVariableNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateVariableMessage(variableName) {
  return "There can be only one variable named \"".concat(variableName, "\".");
}
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */


function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new error.GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}
});

unwrapExports(UniqueVariableNames_1);
var UniqueVariableNames_2 = UniqueVariableNames_1.duplicateVariableMessage;
var UniqueVariableNames_3 = UniqueVariableNames_1.UniqueVariableNames;

var NoUndefinedVariables_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.undefinedVarMessage = undefinedVarMessage;
exports.NoUndefinedVariables = NoUndefinedVariables;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function undefinedVarMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is not defined.");
}
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */


function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        usages.forEach(function (_ref) {
          var node = _ref.node;
          var varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(new error.GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}
});

unwrapExports(NoUndefinedVariables_1);
var NoUndefinedVariables_2 = NoUndefinedVariables_1.undefinedVarMessage;
var NoUndefinedVariables_3 = NoUndefinedVariables_1.NoUndefinedVariables;

var NoUnusedVariables_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unusedVariableMessage = unusedVariableMessage;
exports.NoUnusedVariables = NoUnusedVariables;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unusedVariableMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is never used in operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is never used.");
}
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */


function NoUnusedVariables(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;
        usages.forEach(function (_ref) {
          var node = _ref.node;
          variableNameUsed[node.name.value] = true;
        });
        variableDefs.forEach(function (variableDef) {
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new error.GraphQLError(unusedVariableMessage(variableName, opName), [variableDef]));
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}
});

unwrapExports(NoUnusedVariables_1);
var NoUnusedVariables_2 = NoUnusedVariables_1.unusedVariableMessage;
var NoUnusedVariables_3 = NoUnusedVariables_1.NoUnusedVariables;

var KnownDirectives_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownDirectiveMessage = unknownDirectiveMessage;
exports.misplacedDirectiveMessage = misplacedDirectiveMessage;
exports.KnownDirectives = KnownDirectives;



var _find = _interopRequireDefault(find_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unknownDirectiveMessage(directiveName) {
  return "Unknown directive \"".concat(directiveName, "\".");
}

function misplacedDirectiveMessage(directiveName, location) {
  return "Directive \"".concat(directiveName, "\" may not be used on ").concat(location, ".");
}
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */


function KnownDirectives(context) {
  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var directiveDef = (0, _find.default)(context.getSchema().getDirectives(), function (def) {
        return def.name === node.name.value;
      });

      if (!directiveDef) {
        context.reportError(new error.GraphQLError(unknownDirectiveMessage(node.name.value), [node]));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && directiveDef.locations.indexOf(candidateLocation) === -1) {
        context.reportError(new error.GraphQLError(misplacedDirectiveMessage(node.name.value, candidateLocation), [node]));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];

  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case kinds.Kind.OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return directiveLocation.DirectiveLocation.QUERY;

          case 'mutation':
            return directiveLocation.DirectiveLocation.MUTATION;

          case 'subscription':
            return directiveLocation.DirectiveLocation.SUBSCRIPTION;
        }

        break;

      case kinds.Kind.FIELD:
        return directiveLocation.DirectiveLocation.FIELD;

      case kinds.Kind.FRAGMENT_SPREAD:
        return directiveLocation.DirectiveLocation.FRAGMENT_SPREAD;

      case kinds.Kind.INLINE_FRAGMENT:
        return directiveLocation.DirectiveLocation.INLINE_FRAGMENT;

      case kinds.Kind.FRAGMENT_DEFINITION:
        return directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION;

      case kinds.Kind.SCHEMA_DEFINITION:
      case kinds.Kind.SCHEMA_EXTENSION:
        return directiveLocation.DirectiveLocation.SCHEMA;

      case kinds.Kind.SCALAR_TYPE_DEFINITION:
      case kinds.Kind.SCALAR_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.SCALAR;

      case kinds.Kind.OBJECT_TYPE_DEFINITION:
      case kinds.Kind.OBJECT_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.OBJECT;

      case kinds.Kind.FIELD_DEFINITION:
        return directiveLocation.DirectiveLocation.FIELD_DEFINITION;

      case kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case kinds.Kind.INTERFACE_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.INTERFACE;

      case kinds.Kind.UNION_TYPE_DEFINITION:
      case kinds.Kind.UNION_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.UNION;

      case kinds.Kind.ENUM_TYPE_DEFINITION:
      case kinds.Kind.ENUM_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.ENUM;

      case kinds.Kind.ENUM_VALUE_DEFINITION:
        return directiveLocation.DirectiveLocation.ENUM_VALUE;

      case kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
      case kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return directiveLocation.DirectiveLocation.INPUT_OBJECT;

      case kinds.Kind.INPUT_VALUE_DEFINITION:
        var parentNode = ancestors[ancestors.length - 3];
        return parentNode.kind === kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION ? directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION : directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION;
    }
  }
}
});

unwrapExports(KnownDirectives_1);
var KnownDirectives_2 = KnownDirectives_1.unknownDirectiveMessage;
var KnownDirectives_3 = KnownDirectives_1.misplacedDirectiveMessage;
var KnownDirectives_4 = KnownDirectives_1.KnownDirectives;

var UniqueDirectivesPerLocation_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateDirectiveMessage = duplicateDirectiveMessage;
exports.UniqueDirectivesPerLocation = UniqueDirectivesPerLocation;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateDirectiveMessage(directiveName) {
  return "The directive \"".concat(directiveName, "\" can only be used once at ") + 'this location.';
}
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all directives at a given location
 * are uniquely named.
 */


function UniqueDirectivesPerLocation(context) {
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      var directives = node.directives;

      if (directives) {
        var knownDirectives = Object.create(null);
        directives.forEach(function (directive) {
          var directiveName = directive.name.value;

          if (knownDirectives[directiveName]) {
            context.reportError(new error.GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], directive]));
          } else {
            knownDirectives[directiveName] = directive;
          }
        });
      }
    }
  };
}
});

unwrapExports(UniqueDirectivesPerLocation_1);
var UniqueDirectivesPerLocation_2 = UniqueDirectivesPerLocation_1.duplicateDirectiveMessage;
var UniqueDirectivesPerLocation_3 = UniqueDirectivesPerLocation_1.UniqueDirectivesPerLocation;

var KnownArgumentNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unknownArgMessage = unknownArgMessage;
exports.unknownDirectiveArgMessage = unknownDirectiveArgMessage;
exports.KnownArgumentNames = KnownArgumentNames;



var _suggestionList = _interopRequireDefault(suggestionList_1);

var _quotedOrList = _interopRequireDefault(quotedOrList_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  var message = "Unknown argument \"".concat(argName, "\" on field \"").concat(fieldName, "\" of ") + "type \"".concat(typeName, "\".");

  if (suggestedArgs.length) {
    message += " Did you mean ".concat((0, _quotedOrList.default)(suggestedArgs), "?");
  }

  return message;
}

function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  var message = "Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".");

  if (suggestedArgs.length) {
    message += " Did you mean ".concat((0, _quotedOrList.default)(suggestedArgs), "?");
  }

  return message;
}
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */


function KnownArgumentNames(context) {
  return {
    Argument: function Argument(node, key, parent, path, ancestors) {
      var argDef = context.getArgument();

      if (!argDef) {
        var argumentOf = ancestors[ancestors.length - 1];

        if (argumentOf.kind === kinds.Kind.FIELD) {
          var fieldDef = context.getFieldDef();
          var parentType = context.getParentType();

          if (fieldDef && parentType) {
            context.reportError(new error.GraphQLError(unknownArgMessage(node.name.value, fieldDef.name, parentType.name, (0, _suggestionList.default)(node.name.value, fieldDef.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        } else if (argumentOf.kind === kinds.Kind.DIRECTIVE) {
          var directive = context.getDirective();

          if (directive) {
            context.reportError(new error.GraphQLError(unknownDirectiveArgMessage(node.name.value, directive.name, (0, _suggestionList.default)(node.name.value, directive.args.map(function (arg) {
              return arg.name;
            }))), [node]));
          }
        }
      }
    }
  };
}
});

unwrapExports(KnownArgumentNames_1);
var KnownArgumentNames_2 = KnownArgumentNames_1.unknownArgMessage;
var KnownArgumentNames_3 = KnownArgumentNames_1.unknownDirectiveArgMessage;
var KnownArgumentNames_4 = KnownArgumentNames_1.KnownArgumentNames;

var UniqueArgumentNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateArgMessage = duplicateArgMessage;
exports.UniqueArgumentNames = UniqueArgumentNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateArgMessage(argName) {
  return "There can be only one argument named \"".concat(argName, "\".");
}
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */


function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new error.GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}
});

unwrapExports(UniqueArgumentNames_1);
var UniqueArgumentNames_2 = UniqueArgumentNames_1.duplicateArgMessage;
var UniqueArgumentNames_3 = UniqueArgumentNames_1.UniqueArgumentNames;

var ValuesOfCorrectType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badValueMessage = badValueMessage;
exports.requiredFieldMessage = requiredFieldMessage;
exports.unknownFieldMessage = unknownFieldMessage;
exports.ValuesOfCorrectType = ValuesOfCorrectType;







var _inspect = _interopRequireDefault(inspect_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _keyMap = _interopRequireDefault(keyMap_1);

var _orList = _interopRequireDefault(orList_1);

var _suggestionList = _interopRequireDefault(suggestionList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function badValueMessage(typeName, valueName, message) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName) + (message ? "; ".concat(message) : '.');
}

function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return "Field ".concat(typeName, ".").concat(fieldName, " of required type ") + "".concat(fieldTypeName, " was not provided.");
}

function unknownFieldMessage(typeName, fieldName, message) {
  return "Field \"".concat(fieldName, "\" is not defined by type ").concat(typeName) + (message ? "; ".concat(message) : '.');
}
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */


function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if ((0, definition.isNonNullType)(type)) {
        context.reportError(new error.GraphQLError(badValueMessage((0, _inspect.default)(type), (0, printer.print)(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = (0, definition.getNullableType)(context.getParentInputType());

      if (!(0, definition.isListType)(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = (0, definition.getNamedType)(context.getInputType());

      if (!(0, definition.isInputObjectType)(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var inputFields = type.getFields();
      var fieldNodeMap = (0, _keyMap.default)(node.fields, function (field) {
        return field.name.value;
      });
      Object.keys(inputFields).forEach(function (fieldName) {
        var fieldDef = inputFields[fieldName];
        var fieldType = fieldDef.type;
        var fieldNode = fieldNodeMap[fieldName];

        if (!fieldNode && (0, definition.isNonNullType)(fieldType) && fieldDef.defaultValue === undefined) {
          context.reportError(new error.GraphQLError(requiredFieldMessage(type.name, fieldName, (0, _inspect.default)(fieldType)), node));
        }
      });
    },
    ObjectField: function ObjectField(node) {
      var parentType = (0, definition.getNamedType)(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && (0, definition.isInputObjectType)(parentType)) {
        var suggestions = (0, _suggestionList.default)(node.name.value, Object.keys(parentType.getFields()));
        var didYouMean = suggestions.length !== 0 ? "Did you mean ".concat((0, _orList.default)(suggestions), "?") : undefined;
        context.reportError(new error.GraphQLError(unknownFieldMessage(parentType.name, node.name.value, didYouMean), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = (0, definition.getNamedType)(context.getInputType());

      if (!(0, definition.isEnumType)(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new error.GraphQLError(badValueMessage(type.name, (0, printer.print)(node), enumTypeSuggestion(type, node)), node));
      }
    },
    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */


function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = (0, definition.getNamedType)(locationType);

  if (!(0, definition.isScalarType)(type)) {
    context.reportError(new error.GraphQLError(badValueMessage((0, _inspect.default)(locationType), (0, printer.print)(node), enumTypeSuggestion(type, node)), node));
    return;
  } // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if ((0, _isInvalid.default)(parseResult)) {
      context.reportError(new error.GraphQLError(badValueMessage((0, _inspect.default)(locationType), (0, printer.print)(node)), node));
    }
  } catch (error$$1) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new error.GraphQLError(badValueMessage((0, _inspect.default)(locationType), (0, printer.print)(node), error$$1.message), node, undefined, undefined, undefined, error$$1));
  }
}

function enumTypeSuggestion(type, node) {
  if ((0, definition.isEnumType)(type)) {
    var suggestions = (0, _suggestionList.default)((0, printer.print)(node), type.getValues().map(function (value) {
      return value.name;
    }));

    if (suggestions.length !== 0) {
      return "Did you mean the enum value ".concat((0, _orList.default)(suggestions), "?");
    }
  }
}
});

unwrapExports(ValuesOfCorrectType_1);
var ValuesOfCorrectType_2 = ValuesOfCorrectType_1.badValueMessage;
var ValuesOfCorrectType_3 = ValuesOfCorrectType_1.requiredFieldMessage;
var ValuesOfCorrectType_4 = ValuesOfCorrectType_1.unknownFieldMessage;
var ValuesOfCorrectType_5 = ValuesOfCorrectType_1.ValuesOfCorrectType;

var ProvidedRequiredArguments_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missingFieldArgMessage = missingFieldArgMessage;
exports.missingDirectiveArgMessage = missingDirectiveArgMessage;
exports.ProvidedRequiredArguments = ProvidedRequiredArguments;



var _inspect = _interopRequireDefault(inspect_1);

var _keyMap = _interopRequireDefault(keyMap_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function missingFieldArgMessage(fieldName, argName, type) {
  return "Field \"".concat(fieldName, "\" argument \"").concat(argName, "\" of type ") + "\"".concat((0, _inspect.default)(type), "\" is required but not provided.");
}

function missingDirectiveArgMessage(directiveName, argName, type) {
  return "Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type ") + "\"".concat((0, _inspect.default)(type), "\" is required but not provided.");
}
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */


function ProvidedRequiredArguments(context) {
  return {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        }

        var argNodes = node.arguments || [];
        var argNodeMap = (0, _keyMap.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        fieldDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];

          if (!argNode && (0, definition.isNonNullType)(argDef.type) && argDef.defaultValue === undefined) {
            context.reportError(new error.GraphQLError(missingFieldArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    },
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(node) {
        var directiveDef = context.getDirective();

        if (!directiveDef) {
          return false;
        }

        var argNodes = node.arguments || [];
        var argNodeMap = (0, _keyMap.default)(argNodes, function (arg) {
          return arg.name.value;
        });
        directiveDef.args.forEach(function (argDef) {
          var argNode = argNodeMap[argDef.name];

          if (!argNode && (0, definition.isNonNullType)(argDef.type) && argDef.defaultValue === undefined) {
            context.reportError(new error.GraphQLError(missingDirectiveArgMessage(node.name.value, argDef.name, argDef.type), [node]));
          }
        });
      }
    }
  };
}
});

unwrapExports(ProvidedRequiredArguments_1);
var ProvidedRequiredArguments_2 = ProvidedRequiredArguments_1.missingFieldArgMessage;
var ProvidedRequiredArguments_3 = ProvidedRequiredArguments_1.missingDirectiveArgMessage;
var ProvidedRequiredArguments_4 = ProvidedRequiredArguments_1.ProvidedRequiredArguments;

var VariablesInAllowedPosition_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badVarPosMessage = badVarPosMessage;
exports.VariablesInAllowedPosition = VariablesInAllowedPosition;

var _inspect = _interopRequireDefault(inspect_1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function badVarPosMessage(varName, varType, expectedType) {
  return "Variable \"$".concat(varName, "\" of type \"").concat((0, _inspect.default)(varType), "\" used in ") + "position expecting type \"".concat((0, _inspect.default)(expectedType), "\".");
}
/**
 * Variables passed to field arguments conform to type
 */


function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);
        usages.forEach(function (_ref) {
          var node = _ref.node,
              type = _ref.type,
              defaultValue = _ref.defaultValue;
          var varName = node.name.value;
          var varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = (0, typeFromAST_1.typeFromAST)(schema, varDef.type);

            if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
              context.reportError(new error.GraphQLError(badVarPosMessage(varName, varType, type), [varDef, node]));
            }
          }
        });
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */


function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if ((0, definition.isNonNullType)(locationType) && !(0, definition.isNonNullType)(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue && varDefaultValue.kind !== kinds.Kind.NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return (0, typeComparators.isTypeSubTypeOf)(schema, varType, nullableLocationType);
  }

  return (0, typeComparators.isTypeSubTypeOf)(schema, varType, locationType);
}
});

unwrapExports(VariablesInAllowedPosition_1);
var VariablesInAllowedPosition_2 = VariablesInAllowedPosition_1.badVarPosMessage;
var VariablesInAllowedPosition_3 = VariablesInAllowedPosition_1.VariablesInAllowedPosition;

var OverlappingFieldsCanBeMerged_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsConflictMessage = fieldsConflictMessage;
exports.OverlappingFieldsCanBeMerged = OverlappingFieldsCanBeMerged;



var _inspect = _interopRequireDefault(inspect_1);

var _find = _interopRequireDefault(find_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fieldsConflictMessage(responseName, reason) {
  return "Fields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(reason)) + '. Use different aliases on the fields to fetch both if this was ' + 'intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(subreason));
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);
      conflicts.forEach(function (_ref2) {
        var _ref2$ = _ref2[0],
            responseName = _ref2$[0],
            reason = _ref2$[1],
            fields1 = _ref2[1],
            fields2 = _ref2[2];
        return context.reportError(new error.GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      });
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }

  comparedFragments[fragmentName] = true;
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);

    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i = 0; _i < fragmentNames1.length; _i++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  Object.keys(fieldMap).forEach(function (responseName) {
    var fields = fieldMap[responseName]; // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.

    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  Object.keys(fieldMap1).forEach(function (responseName) {
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  });
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0, definition.isObjectType)(parentType1) && (0, definition.isObjectType)(parentType2); // The return type for each field.

  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "".concat(name1, " and ").concat(name2, " are different fields")], [node1], [node2]];
    } // Two field calls must have the same arguments.


    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types ".concat((0, _inspect.default)(type1), " and ").concat((0, _inspect.default)(type2))], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0, definition.getNamedType)(type1), selectionSet1, (0, definition.getNamedType)(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = (0, _find.default)(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || (0, printer.print)(value1) === (0, printer.print)(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if ((0, definition.isListType)(type1)) {
    return (0, definition.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if ((0, definition.isListType)(type2)) {
    return true;
  }

  if ((0, definition.isNonNullType)(type1)) {
    return (0, definition.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if ((0, definition.isNonNullType)(type2)) {
    return true;
  }

  if ((0, definition.isLeafType)(type1) || (0, definition.isLeafType)(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = (0, typeFromAST_1.typeFromAST)(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];

    switch (selection.kind) {
      case kinds.Kind.FIELD:
        var fieldName = selection.name.value;
        var fieldDef = void 0;

        if ((0, definition.isObjectType)(parentType) || (0, definition.isInterfaceType)(parentType)) {
          fieldDef = parentType.getFields()[fieldName];
        }

        var responseName = selection.alias ? selection.alias.value : fieldName;

        if (!nodeAndDefs[responseName]) {
          nodeAndDefs[responseName] = [];
        }

        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
        break;

      case kinds.Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case kinds.Kind.INLINE_FRAGMENT:
        var typeCondition = selection.typeCondition;
        var inlineFragmentType = typeCondition ? (0, typeFromAST_1.typeFromAST)(context.getSchema(), typeCondition) : parentType;

        _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

        break;
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref3) {
      var reason = _ref3[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref4) {
      var fields1 = _ref4[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref5) {
      var fields2 = _ref5[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet =
/*#__PURE__*/
function () {
  function PairSet() {
    _defineProperty(this, "_data", void 0);

    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);

    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];

  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }

  map[b] = areMutuallyExclusive;
}
});

unwrapExports(OverlappingFieldsCanBeMerged_1);
var OverlappingFieldsCanBeMerged_2 = OverlappingFieldsCanBeMerged_1.fieldsConflictMessage;
var OverlappingFieldsCanBeMerged_3 = OverlappingFieldsCanBeMerged_1.OverlappingFieldsCanBeMerged;

var UniqueInputFieldNames_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicateInputFieldMessage = duplicateInputFieldMessage;
exports.UniqueInputFieldNames = UniqueInputFieldNames;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function duplicateInputFieldMessage(fieldName) {
  return "There can be only one input field named \"".concat(fieldName, "\".");
}
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */


function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new error.GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }

      return false;
    }
  };
}
});

unwrapExports(UniqueInputFieldNames_1);
var UniqueInputFieldNames_2 = UniqueInputFieldNames_1.duplicateInputFieldMessage;
var UniqueInputFieldNames_3 = UniqueInputFieldNames_1.UniqueInputFieldNames;

var specifiedRules_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifiedRules = void 0;





















































/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
// Spec Section: "Executable Definitions"
// Spec Section: "Operation Name Uniqueness"
// Spec Section: "Lone Anonymous Operation"
// Spec Section: "Subscriptions with Single Root Field"
// Spec Section: "Fragment Spread Type Existence"
// Spec Section: "Fragments on Composite Types"
// Spec Section: "Variables are Input Types"
// Spec Section: "Leaf Field Selections"
// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"
// Spec Section: "Fragment Name Uniqueness"
// Spec Section: "Fragment spread target defined"
// Spec Section: "Fragments must be used"
// Spec Section: "Fragment spread is possible"
// Spec Section: "Fragments must not form cycles"
// Spec Section: "Variable Uniqueness"
// Spec Section: "All Variable Used Defined"
// Spec Section: "All Variables Used"
// Spec Section: "Directives Are Defined"
// Spec Section: "Directives Are Unique Per Location"
// Spec Section: "Argument Names"
// Spec Section: "Argument Uniqueness"
// Spec Section: "Value Type Correctness"
// Spec Section: "Argument Optionality"
// Spec Section: "All Variable Usages Are Allowed"
// Spec Section: "Field Selection Merging"
// Spec Section: "Input Object Field Uniqueness"

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
var specifiedRules = [ExecutableDefinitions_1.ExecutableDefinitions, UniqueOperationNames_1.UniqueOperationNames, LoneAnonymousOperation_1.LoneAnonymousOperation, SingleFieldSubscriptions_1.SingleFieldSubscriptions, KnownTypeNames_1.KnownTypeNames, FragmentsOnCompositeTypes_1.FragmentsOnCompositeTypes, VariablesAreInputTypes_1.VariablesAreInputTypes, ScalarLeafs_1.ScalarLeafs, FieldsOnCorrectType_1.FieldsOnCorrectType, UniqueFragmentNames_1.UniqueFragmentNames, KnownFragmentNames_1.KnownFragmentNames, NoUnusedFragments_1.NoUnusedFragments, PossibleFragmentSpreads_1.PossibleFragmentSpreads, NoFragmentCycles_1.NoFragmentCycles, UniqueVariableNames_1.UniqueVariableNames, NoUndefinedVariables_1.NoUndefinedVariables, NoUnusedVariables_1.NoUnusedVariables, KnownDirectives_1.KnownDirectives, UniqueDirectivesPerLocation_1.UniqueDirectivesPerLocation, KnownArgumentNames_1.KnownArgumentNames, UniqueArgumentNames_1.UniqueArgumentNames, ValuesOfCorrectType_1.ValuesOfCorrectType, ProvidedRequiredArguments_1.ProvidedRequiredArguments, VariablesInAllowedPosition_1.VariablesInAllowedPosition, OverlappingFieldsCanBeMerged_1.OverlappingFieldsCanBeMerged, UniqueInputFieldNames_1.UniqueInputFieldNames];
exports.specifiedRules = specifiedRules;
});

unwrapExports(specifiedRules_1);
var specifiedRules_2 = specifiedRules_1.specifiedRules;

var ValidationContext_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;











function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ValidationContext =
/*#__PURE__*/
function () {
  function ValidationContext(schema$$1, ast, typeInfo) {
    _defineProperty(this, "_schema", void 0);

    _defineProperty(this, "_ast", void 0);

    _defineProperty(this, "_typeInfo", void 0);

    _defineProperty(this, "_errors", void 0);

    _defineProperty(this, "_fragments", void 0);

    _defineProperty(this, "_fragmentSpreads", void 0);

    _defineProperty(this, "_recursivelyReferencedFragments", void 0);

    _defineProperty(this, "_variableUsages", void 0);

    _defineProperty(this, "_recursiveVariableUsages", void 0);

    this._schema = schema$$1;
    this._ast = ast;
    this._typeInfo = typeInfo;
    this._errors = [];
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._variableUsages = new Map();
    this._recursiveVariableUsages = new Map();
  }

  var _proto = ValidationContext.prototype;

  _proto.reportError = function reportError(error$$1) {
    this._errors.push(error$$1);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  _proto.getSchema = function getSchema() {
    return this._schema;
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === kinds.Kind.FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var i = 0; i < set.selections.length; i++) {
          var selection = set.selections[i];

          if (selection.kind === kinds.Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var _node = nodesToVisit.pop();

        var spreads = this.getFragmentSpreads(_node);

        for (var i = 0; i < spreads.length; i++) {
          var fragName = spreads[i].name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  _proto.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new TypeInfo_1.TypeInfo(this._schema);
      (0, visitor.visit)(node, (0, visitor.visitWithTypeInfo)(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);
      var fragments = this.getRecursivelyReferencedFragments(operation);

      for (var i = 0; i < fragments.length; i++) {
        Array.prototype.push.apply(usages, this.getVariableUsages(fragments[i]));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}();

exports.default = ValidationContext;
});

unwrapExports(ValidationContext_1);

var validate_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate$$1;

var _invariant = _interopRequireDefault(invariant_1);













var _ValidationContext = _interopRequireDefault(ValidationContext_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
function validate$$1(schema$$1, ast, rules, typeInfo) {
  !ast ? (0, _invariant.default)(0, 'Must provide document') : void 0; // If the schema used for validation is invalid, throw an error.

  (0, validate.assertValidSchema)(schema$$1);
  return visitUsingRules(schema$$1, typeInfo || new TypeInfo_1.TypeInfo(schema$$1), ast, rules || specifiedRules_1.specifiedRules);
}
/**
 * This uses a specialized visitor which runs multiple visitors in parallel,
 * while maintaining the visitor skip and break API.
 *
 * @internal
 */


function visitUsingRules(schema$$1, typeInfo, documentAST, rules) {
  var context = new _ValidationContext.default(schema$$1, documentAST, typeInfo);
  var visitors = rules.map(function (rule) {
    return rule(context);
  }); // Visit the whole document with each instance of all provided rules.

  (0, visitor.visit)(documentAST, (0, visitor.visitWithTypeInfo)(typeInfo, (0, visitor.visitInParallel)(visitors)));
  return context.getErrors();
}
});

unwrapExports(validate_1$1);
var validate_2$1 = validate_1$1.validate;

var isPromise_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPromise;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}
});

unwrapExports(isPromise_1);

var memoize3_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize3;

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;

  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn.apply(this, arguments);
    cache2.set(a3, newValue);
    return newValue;
  }

  return memoized;
}
});

unwrapExports(memoize3_1);

var promiseForObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseForObject;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}
});

unwrapExports(promiseForObject_1);

var promiseReduce_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseReduce;

var _isPromise = _interopRequireDefault(isPromise_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return (0, _isPromise.default)(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}
});

unwrapExports(promiseReduce_1);

var getOperationRootType_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationRootType = getOperationRootType;





/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema$$1, operation) {
  switch (operation.operation) {
    case 'query':
      var queryType = schema$$1.getQueryType();

      if (!queryType) {
        throw new GraphQLError_1.GraphQLError('Schema does not define the required query root type.', [operation]);
      }

      return queryType;

    case 'mutation':
      var mutationType = schema$$1.getMutationType();

      if (!mutationType) {
        throw new GraphQLError_1.GraphQLError('Schema is not configured for mutations.', [operation]);
      }

      return mutationType;

    case 'subscription':
      var subscriptionType = schema$$1.getSubscriptionType();

      if (!subscriptionType) {
        throw new GraphQLError_1.GraphQLError('Schema is not configured for subscriptions.', [operation]);
      }

      return subscriptionType;

    default:
      throw new GraphQLError_1.GraphQLError('Can only have query, mutation and subscription operations.', [operation]);
  }
}
});

unwrapExports(getOperationRootType_1);
var getOperationRootType_2 = getOperationRootType_1.getOperationRootType;

var coerceValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coerceValue = coerceValue;



var _inspect = _interopRequireDefault(inspect_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _orList = _interopRequireDefault(orList_1);

var _suggestionList = _interopRequireDefault(suggestionList_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Coerces a JavaScript value given a GraphQL Type.
 *
 * Returns either a value which is valid for the provided type or a list of
 * encountered coercion errors.
 *
 */
function coerceValue(value, type, blameNode, path) {
  // A value must be provided if the type is non-null.
  if ((0, definition.isNonNullType)(type)) {
    if (value == null) {
      return ofErrors([coercionError("Expected non-nullable type ".concat((0, _inspect.default)(type), " not to be null"), blameNode, path)]);
    }

    return coerceValue(value, type.ofType, blameNode, path);
  }

  if (value == null) {
    // Explicitly return the value null.
    return ofValue(null);
  }

  if ((0, definition.isScalarType)(type)) {
    // Scalars determine if a value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.
    try {
      var parseResult = type.parseValue(value);

      if ((0, _isInvalid.default)(parseResult)) {
        return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path)]);
      }

      return ofValue(parseResult);
    } catch (error$$1) {
      return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path, error$$1.message, error$$1)]);
    }
  }

  if ((0, definition.isEnumType)(type)) {
    if (typeof value === 'string') {
      var enumValue = type.getValue(value);

      if (enumValue) {
        return ofValue(enumValue.value);
      }
    }

    var suggestions = (0, _suggestionList.default)(String(value), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));
    var didYouMean = suggestions.length !== 0 ? "did you mean ".concat((0, _orList.default)(suggestions), "?") : undefined;
    return ofErrors([coercionError("Expected type ".concat(type.name), blameNode, path, didYouMean)]);
  }

  if ((0, definition.isListType)(type)) {
    var itemType = type.ofType;

    if ((0, iterall.isCollection)(value)) {
      var _errors;

      var coercedValue = [];
      (0, iterall.forEach)(value, function (itemValue, index) {
        var coercedItem = coerceValue(itemValue, itemType, blameNode, atPath(path, index));

        if (coercedItem.errors) {
          _errors = add(_errors, coercedItem.errors);
        } else if (!_errors) {
          coercedValue.push(coercedItem.value);
        }
      });
      return _errors ? ofErrors(_errors) : ofValue(coercedValue);
    } // Lists accept a non-list value as a list of one.


    var coercedItem = coerceValue(value, itemType, blameNode);
    return coercedItem.errors ? coercedItem : ofValue([coercedItem.value]);
  }

  if ((0, definition.isInputObjectType)(type)) {
    if (_typeof(value) !== 'object') {
      return ofErrors([coercionError("Expected type ".concat(type.name, " to be an object"), blameNode, path)]);
    }

    var _errors2;

    var _coercedValue = {};
    var fields = type.getFields(); // Ensure every defined field is valid.

    for (var fieldName in fields) {
      if (hasOwnProperty.call(fields, fieldName)) {
        var field = fields[fieldName];
        var fieldValue = value[fieldName];

        if ((0, _isInvalid.default)(fieldValue)) {
          if (!(0, _isInvalid.default)(field.defaultValue)) {
            _coercedValue[fieldName] = field.defaultValue;
          } else if ((0, definition.isNonNullType)(field.type)) {
            _errors2 = add(_errors2, coercionError("Field ".concat(printPath(atPath(path, fieldName)), " of required ") + "type ".concat((0, _inspect.default)(field.type), " was not provided"), blameNode));
          }
        } else {
          var coercedField = coerceValue(fieldValue, field.type, blameNode, atPath(path, fieldName));

          if (coercedField.errors) {
            _errors2 = add(_errors2, coercedField.errors);
          } else if (!_errors2) {
            _coercedValue[fieldName] = coercedField.value;
          }
        }
      }
    } // Ensure every provided field is defined.


    for (var _fieldName in value) {
      if (hasOwnProperty.call(value, _fieldName)) {
        if (!fields[_fieldName]) {
          var _suggestions = (0, _suggestionList.default)(_fieldName, Object.keys(fields));

          var _didYouMean = _suggestions.length !== 0 ? "did you mean ".concat((0, _orList.default)(_suggestions), "?") : undefined;

          _errors2 = add(_errors2, coercionError("Field \"".concat(_fieldName, "\" is not defined by type ").concat(type.name), blameNode, path, _didYouMean));
        }
      }
    }

    return _errors2 ? ofErrors(_errors2) : ofValue(_coercedValue);
  }
  /* istanbul ignore next */


  throw new Error("Unexpected type: ".concat(type, "."));
}

function ofValue(value) {
  return {
    errors: undefined,
    value: value
  };
}

function ofErrors(errors) {
  return {
    errors: errors,
    value: undefined
  };
}

function add(errors, moreErrors) {
  return (errors || []).concat(moreErrors);
}

function atPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}

function coercionError(message, blameNode, path, subMessage, originalError) {
  var pathStr = printPath(path); // Return a GraphQLError instance

  return new error.GraphQLError(message + (pathStr ? ' at ' + pathStr : '') + (subMessage ? '; ' + subMessage : '.'), blameNode, undefined, undefined, undefined, originalError);
} // Build a string describing the path into the value where the error was found


function printPath(path) {
  var pathStr = '';
  var currentPath = path;

  while (currentPath) {
    pathStr = (typeof currentPath.key === 'string' ? '.' + currentPath.key : '[' + String(currentPath.key) + ']') + pathStr;
    currentPath = currentPath.prev;
  }

  return pathStr ? 'value' + pathStr : '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
});

unwrapExports(coerceValue_1);
var coerceValue_2 = coerceValue_1.coerceValue;

var valueFromAST_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueFromAST = valueFromAST;

var _keyMap = _interopRequireDefault(keyMap_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _objectValues = _interopRequireDefault(objectValues_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if ((0, definition.isNonNullType)(type)) {
    if (valueNode.kind === kinds.Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === kinds.Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === kinds.Kind.VARIABLE) {
    var variableName = valueNode.name.value;

    if (!variables || (0, _isInvalid.default)(variables[variableName])) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && (0, definition.isNonNullType)(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if ((0, definition.isListType)(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === kinds.Kind.LIST) {
      var coercedValues = [];
      var itemNodes = valueNode.values;

      for (var i = 0; i < itemNodes.length; i++) {
        if (isMissingVariable(itemNodes[i], variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if ((0, definition.isNonNullType)(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNodes[i], itemType, variables);

          if ((0, _isInvalid.default)(itemValue)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if ((0, _isInvalid.default)(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if ((0, definition.isInputObjectType)(type)) {
    if (valueNode.kind !== kinds.Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = (0, _keyMap.default)(valueNode.fields, function (field) {
      return field.name.value;
    });
    var fields = (0, _objectValues.default)(type.getFields());

    for (var _i = 0; _i < fields.length; _i++) {
      var field = fields[_i];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if ((0, definition.isNonNullType)(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if ((0, _isInvalid.default)(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  }

  if ((0, definition.isEnumType)(type)) {
    if (valueNode.kind !== kinds.Kind.ENUM) {
      return; // Invalid: intentionally return no value.
    }

    var enumValue = type.getValue(valueNode.value);

    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }

    return enumValue.value;
  }

  if ((0, definition.isScalarType)(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if ((0, _isInvalid.default)(result)) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  }
  /* istanbul ignore next */


  throw new Error("Unknown type: ".concat(type, "."));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.


function isMissingVariable(valueNode, variables) {
  return valueNode.kind === kinds.Kind.VARIABLE && (!variables || (0, _isInvalid.default)(variables[valueNode.name.value]));
}
});

unwrapExports(valueFromAST_1);
var valueFromAST_2 = valueFromAST_1.valueFromAST;

var values = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariableValues = getVariableValues;
exports.getArgumentValues = getArgumentValues;
exports.getDirectiveValues = getDirectiveValues;



var _find = _interopRequireDefault(find_1);

var _inspect = _interopRequireDefault(inspect_1);

var _invariant = _interopRequireDefault(invariant_1);

var _keyMap = _interopRequireDefault(keyMap_1);













function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs) {
  var errors = [];
  var coercedValues = {};

  var _loop = function _loop(i) {
    var varDefNode = varDefNodes[i];
    var varName = varDefNode.variable.name.value;
    var varType = (0, typeFromAST_1.typeFromAST)(schema, varDefNode.type);

    if (!(0, definition.isInputType)(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      errors.push(new error.GraphQLError("Variable \"$".concat(varName, "\" expected value of type ") + "\"".concat((0, printer.print)(varDefNode.type), "\" which cannot be used as an input type."), [varDefNode.type]));
    } else {
      var hasValue = hasOwnProperty(inputs, varName);
      var value = hasValue ? inputs[varName] : undefined;

      if (!hasValue && varDefNode.defaultValue) {
        // If no value was provided to a variable with a default value,
        // use the default value.
        coercedValues[varName] = (0, valueFromAST_1.valueFromAST)(varDefNode.defaultValue, varType);
      } else if ((!hasValue || value === null) && (0, definition.isNonNullType)(varType)) {
        // If no value or a nullish value was provided to a variable with a
        // non-null type (required), produce an error.
        errors.push(new error.GraphQLError(hasValue ? "Variable \"$".concat(varName, "\" of non-null type ") + "\"".concat((0, _inspect.default)(varType), "\" must not be null.") : "Variable \"$".concat(varName, "\" of required type ") + "\"".concat((0, _inspect.default)(varType), "\" was not provided."), [varDefNode]));
      } else if (hasValue) {
        if (value === null) {
          // If the explicit value `null` was provided, an entry in the coerced
          // values must exist as the value `null`.
          coercedValues[varName] = null;
        } else {
          // Otherwise, a non-null value was provided, coerce it to the expected
          // type or report an error if coercion fails.
          var _coerced = (0, coerceValue_1.coerceValue)(value, varType, varDefNode);

          var coercionErrors = _coerced.errors;

          if (coercionErrors) {
            coercionErrors.forEach(function (error$$1) {
              error$$1.message = "Variable \"$".concat(varName, "\" got invalid ") + "value ".concat(JSON.stringify(value), "; ").concat(error$$1.message);
            });
            errors.push.apply(errors, coercionErrors);
          } else {
            coercedValues[varName] = _coerced.value;
          }
        }
      }
    }
  };

  for (var i = 0; i < varDefNodes.length; i++) {
    _loop(i);
  }

  return errors.length === 0 ? {
    errors: undefined,
    coerced: coercedValues
  } : {
    errors: errors,
    coerced: undefined
  };
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */


function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argDefs = def.args;
  var argNodes = node.arguments;

  if (!argDefs || !argNodes) {
    return coercedValues;
  }

  var argNodeMap = (0, _keyMap.default)(argNodes, function (arg) {
    return arg.name.value;
  });

  for (var i = 0; i < argDefs.length; i++) {
    var argDef = argDefs[i];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];
    var hasValue = void 0;
    var isNull = void 0;

    if (argumentNode && argumentNode.value.kind === kinds.Kind.VARIABLE) {
      var variableName = argumentNode.value.name.value;
      hasValue = variableValues && hasOwnProperty(variableValues, variableName);
      isNull = variableValues && variableValues[variableName] === null;
    } else {
      hasValue = argumentNode != null;
      isNull = argumentNode && argumentNode.value.kind === kinds.Kind.NULL;
    }

    if (!hasValue && argDef.defaultValue !== undefined) {
      // If no argument was provided where the definition has a default value,
      // use the default value.
      coercedValues[name] = argDef.defaultValue;
    } else if ((!hasValue || isNull) && (0, definition.isNonNullType)(argType)) {
      // If no argument or a null value was provided to an argument with a
      // non-null type (required), produce a field error.
      if (isNull) {
        throw new error.GraphQLError("Argument \"".concat(name, "\" of non-null type \"").concat((0, _inspect.default)(argType), "\" ") + 'must not be null.', [argumentNode.value]);
      } else if (argumentNode && argumentNode.value.kind === kinds.Kind.VARIABLE) {
        var _variableName = argumentNode.value.name.value;
        throw new error.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0, _inspect.default)(argType), "\" ") + "was provided the variable \"$".concat(_variableName, "\" ") + 'which was not provided a runtime value.', [argumentNode.value]);
      } else {
        throw new error.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0, _inspect.default)(argType), "\" ") + 'was not provided.', [node]);
      }
    } else if (hasValue) {
      if (argumentNode.value.kind === kinds.Kind.NULL) {
        // If the explicit value `null` was provided, an entry in the coerced
        // values must exist as the value `null`.
        coercedValues[name] = null;
      } else if (argumentNode.value.kind === kinds.Kind.VARIABLE) {
        var _variableName2 = argumentNode.value.name.value;
        !variableValues ? (0, _invariant.default)(0, 'Must exist for hasValue to be true.') : void 0; // Note: This does no further checking that this variable is correct.
        // This assumes that this query has been validated and the variable
        // usage here is of the correct type.

        coercedValues[name] = variableValues[_variableName2];
      } else {
        var valueNode = argumentNode.value;
        var coercedValue = (0, valueFromAST_1.valueFromAST)(valueNode, argType, variableValues);

        if (coercedValue === undefined) {
          // Note: ValuesOfCorrectType validation should catch this before
          // execution. This is a runtime check to ensure execution does not
          // continue with an invalid argument value.
          throw new error.GraphQLError("Argument \"".concat(name, "\" has invalid value ").concat((0, printer.print)(valueNode), "."), [argumentNode.value]);
        }

        coercedValues[name] = coercedValue;
      }
    }
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */


function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && (0, _find.default)(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
});

unwrapExports(values);
var values_1 = values.getVariableValues;
var values_2 = values.getArgumentValues;
var values_3 = values.getDirectiveValues;

var execute_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execute = execute;
exports.responsePathAsArray = responsePathAsArray;
exports.addPath = addPath;
exports.assertValidExecutionArguments = assertValidExecutionArguments;
exports.buildExecutionContext = buildExecutionContext;
exports.collectFields = collectFields;
exports.buildResolveInfo = buildResolveInfo;
exports.resolveFieldValueOrError = resolveFieldValueOrError;
exports.getFieldDef = getFieldDef;
exports.defaultFieldResolver = void 0;





var _inspect = _interopRequireDefault(inspect_1);

var _invariant = _interopRequireDefault(invariant_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _isNullish = _interopRequireDefault(isNullish_1);

var _isPromise = _interopRequireDefault(isPromise_1);

var _memoize = _interopRequireDefault(memoize3_1);

var _promiseForObject = _interopRequireDefault(promiseForObject_1);

var _promiseReduce = _interopRequireDefault(promiseReduce_1);



















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : executeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}

function executeImpl(schema$$1, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrect, throw an error.
  assertValidExecutionArguments(schema$$1, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema$$1, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if ((0, _isPromise.default)(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */


function responsePathAsArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}
/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.
 */


function addPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */


function assertValidExecutionArguments(schema$$1, document, rawVariableValues) {
  !document ? (0, _invariant.default)(0, 'Must provide document') : void 0; // If the schema used for execution is invalid, throw an error.

  (0, validate.assertValidSchema)(schema$$1); // Variables, if provided, must be an object.

  !(!rawVariableValues || _typeof(rawVariableValues) === 'object') ? (0, _invariant.default)(0, 'Variables must be provided as an Object where each property is a ' + 'variable value. Perhaps look to see if an unparsed JSON string ' + 'was provided.') : void 0;
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */


function buildExecutionContext(schema$$1, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver) {
  var errors = [];
  var operation;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);

  for (var i = 0; i < document.definitions.length; i++) {
    var definition$$1 = document.definitions[i];

    switch (definition$$1.kind) {
      case kinds.Kind.OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition$$1.name && definition$$1.name.value === operationName) {
          operation = definition$$1;
        }

        break;

      case kinds.Kind.FRAGMENT_DEFINITION:
        fragments[definition$$1.name.value] = definition$$1;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      errors.push(new error.GraphQLError("Unknown operation named \"".concat(operationName, "\".")));
    } else {
      errors.push(new error.GraphQLError('Must provide an operation.'));
    }
  } else if (hasMultipleAssumedOperations) {
    errors.push(new error.GraphQLError('Must provide operation name if query contains ' + 'multiple operations.'));
  }

  var variableValues;

  if (operation) {
    var coercedVariableValues = (0, values.getVariableValues)(schema$$1, operation.variableDefinitions || [], rawVariableValues || {});

    if (coercedVariableValues.errors) {
      errors.push.apply(errors, coercedVariableValues.errors);
    } else {
      variableValues = coercedVariableValues.coerced;
    }
  }

  if (errors.length !== 0) {
    return errors;
  }

  !operation ? (0, _invariant.default)(0, 'Has operation if no errors.') : void 0;
  !variableValues ? (0, _invariant.default)(0, 'Has variables if no errors.') : void 0;
  return {
    schema: schema$$1,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: variableValues,
    fieldResolver: fieldResolver || defaultFieldResolver,
    errors: errors
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */


function executeOperation(exeContext, operation, rootValue) {
  var type = (0, getOperationRootType_1.getOperationRootType)(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if ((0, _isPromise.default)(result)) {
      return result.then(undefined, function (error$$1) {
        exeContext.errors.push(error$$1);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error$$1) {
    exeContext.errors.push(error$$1);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return (0, _promiseReduce.default)(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if ((0, _isPromise.default)(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var i = 0, keys = Object.keys(fields); i < keys.length; ++i) {
    var responseName = keys[i];
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && (0, _isPromise.default)(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return (0, _promiseForObject.default)(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var i = 0; i < selectionSet.selections.length; i++) {
    var selection = selectionSet.selections[i];

    switch (selection.kind) {
      case kinds.Kind.FIELD:
        if (!shouldIncludeNode(exeContext, selection)) {
          continue;
        }

        var name = getFieldEntryKey(selection);

        if (!fields[name]) {
          fields[name] = [];
        }

        fields[name].push(selection);
        break;

      case kinds.Kind.INLINE_FRAGMENT:
        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
          continue;
        }

        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;

      case kinds.Kind.FRAGMENT_SPREAD:
        var fragName = selection.name.value;

        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
          continue;
        }

        visitedFragmentNames[fragName] = true;
        var fragment = exeContext.fragments[fragName];

        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
          continue;
        }

        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precidence than @include.
 */


function shouldIncludeNode(exeContext, node) {
  var skip = (0, values.getDirectiveValues)(directives.GraphQLSkipDirective, node, exeContext.variableValues);

  if (skip && skip.if === true) {
    return false;
  }

  var include = (0, values.getDirectiveValues)(directives.GraphQLIncludeDirective, node, exeContext.variableValues);

  if (include && include.if === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = (0, typeFromAST_1.typeFromAST)(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if ((0, definition.isAbstractType)(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
} // Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.


function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = (0, values.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    return (0, _isPromise.default)(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error$$1) {
    return asErrorInstance(error$$1);
  }
} // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.


function asErrorInstance(error$$1) {
  return error$$1 instanceof Error ? error$$1 : new Error(error$$1 || undefined);
} // This is a small wrapper around completeValue which detects and logs errors
// in the execution context.


function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed;

    if ((0, _isPromise.default)(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if ((0, _isPromise.default)(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error$$1) {
        return handleFieldError(error$$1, fieldNodes, path, returnType, exeContext);
      });
    }

    return completed;
  } catch (error$$1) {
    return handleFieldError(error$$1, fieldNodes, path, returnType, exeContext);
  }
}

function handleFieldError(rawError, fieldNodes, path, returnType, exeContext) {
  var error$$1 = (0, error.locatedError)(asErrorInstance(rawError), fieldNodes, responsePathAsArray(path)); // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.

  if ((0, definition.isNonNullType)(returnType)) {
    throw error$$1;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error$$1);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if ((0, definition.isNonNullType)(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null-ish (null, undefined, or NaN) then return null.


  if ((0, _isNullish.default)(result)) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if ((0, definition.isListType)(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if ((0, definition.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if ((0, definition.isAbstractType)(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.


  if ((0, definition.isObjectType)(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // Not reachable. All possible output types have been considered.

  /* istanbul ignore next */


  throw new Error("Cannot complete value of unexpected type \"".concat((0, _inspect.default)(returnType), "\"."));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  !(0, iterall.isCollection)(result) ? (0, _invariant.default)(0, "Expected Iterable, but did not find one for field ".concat(info.parentType.name, ".").concat(info.fieldName, ".")) : void 0; // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.

  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  (0, iterall.forEach)(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && (0, _isPromise.default)(completedItem)) {
      containsPromise = true;
    }

    completedResults.push(completedItem);
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  !returnType.serialize ? (0, _invariant.default)(0, 'Missing serialize method on type') : void 0;
  var serializedResult = returnType.serialize(result);

  if ((0, _isInvalid.default)(serializedResult)) {
    throw new Error("Expected a value of type \"".concat((0, _inspect.default)(returnType), "\" but ") + "received: ".concat((0, _inspect.default)(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var runtimeType = returnType.resolveType ? returnType.resolveType(result, exeContext.contextValue, info) : defaultResolveTypeFn(result, exeContext.contextValue, info, returnType);

  if ((0, _isPromise.default)(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!(0, definition.isObjectType)(runtimeType)) {
    throw new error.GraphQLError("Abstract type ".concat(returnType.name, " must resolve to an Object type at ") + "runtime for field ".concat(info.parentType.name, ".").concat(info.fieldName, " with ") + "value \"".concat((0, _inspect.default)(result), "\", received \"").concat((0, _inspect.default)(runtimeType), "\". ") + "Either the ".concat(returnType.name, " type should provide a \"resolveType\" ") + 'function or each possible types should provide an ' + '"isTypeOf" function.', fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new error.GraphQLError("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type ") + "for \"".concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if ((0, _isPromise.default)(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new error.GraphQLError("Expected value of type \"".concat(returnType.name, "\" but got: ").concat((0, _inspect.default)(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = (0, _memoize.default)(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var i = 0; i < fieldNodes.length; i++) {
    var selectionSet = fieldNodes[i].selectionSet;

    if (selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


function defaultResolveTypeFn(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (value !== null && _typeof(value) === 'object' && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if ((0, _isPromise.default)(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i = 0; _i < isTypeOfResults.length; _i++) {
        if (isTypeOfResults[_i]) {
          return possibleTypes[_i];
        }
      }
    });
  }
}
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */


var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if (_typeof(source) === 'object' || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type defintion.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */


exports.defaultFieldResolver = defaultFieldResolver;

function getFieldDef(schema$$1, parentType, fieldName) {
  if (fieldName === introspection.SchemaMetaFieldDef.name && schema$$1.getQueryType() === parentType) {
    return introspection.SchemaMetaFieldDef;
  } else if (fieldName === introspection.TypeMetaFieldDef.name && schema$$1.getQueryType() === parentType) {
    return introspection.TypeMetaFieldDef;
  } else if (fieldName === introspection.TypeNameMetaFieldDef.name) {
    return introspection.TypeNameMetaFieldDef;
  }

  return parentType.getFields()[fieldName];
}
});

unwrapExports(execute_1);
var execute_2 = execute_1.execute;
var execute_3 = execute_1.responsePathAsArray;
var execute_4 = execute_1.addPath;
var execute_5 = execute_1.assertValidExecutionArguments;
var execute_6 = execute_1.buildExecutionContext;
var execute_7 = execute_1.collectFields;
var execute_8 = execute_1.buildResolveInfo;
var execute_9 = execute_1.resolveFieldValueOrError;
var execute_10 = execute_1.getFieldDef;
var execute_11 = execute_1.defaultFieldResolver;

var graphql_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;









/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */


function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema.schema, argsOrSchema.source, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver) : graphqlImpl(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver); // Assert that the execution was synchronous.

  if (result.then) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(schema, source, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // Validate Schema
  var schemaValidationErrors = (0, validate.validateSchema)(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = (0, parser.parse)(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = (0, validate_1$1.validate)(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return (0, execute_1.execute)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
}
});

unwrapExports(graphql_1);
var graphql_2 = graphql_1.graphql;
var graphql_3 = graphql_1.graphqlSync;

var type = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isSchema", {
  enumerable: true,
  get: function get() {
    return schema.isSchema;
  }
});
Object.defineProperty(exports, "GraphQLSchema", {
  enumerable: true,
  get: function get() {
    return schema.GraphQLSchema;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function get() {
    return definition.isType;
  }
});
Object.defineProperty(exports, "isScalarType", {
  enumerable: true,
  get: function get() {
    return definition.isScalarType;
  }
});
Object.defineProperty(exports, "isObjectType", {
  enumerable: true,
  get: function get() {
    return definition.isObjectType;
  }
});
Object.defineProperty(exports, "isInterfaceType", {
  enumerable: true,
  get: function get() {
    return definition.isInterfaceType;
  }
});
Object.defineProperty(exports, "isUnionType", {
  enumerable: true,
  get: function get() {
    return definition.isUnionType;
  }
});
Object.defineProperty(exports, "isEnumType", {
  enumerable: true,
  get: function get() {
    return definition.isEnumType;
  }
});
Object.defineProperty(exports, "isInputObjectType", {
  enumerable: true,
  get: function get() {
    return definition.isInputObjectType;
  }
});
Object.defineProperty(exports, "isListType", {
  enumerable: true,
  get: function get() {
    return definition.isListType;
  }
});
Object.defineProperty(exports, "isNonNullType", {
  enumerable: true,
  get: function get() {
    return definition.isNonNullType;
  }
});
Object.defineProperty(exports, "isInputType", {
  enumerable: true,
  get: function get() {
    return definition.isInputType;
  }
});
Object.defineProperty(exports, "isOutputType", {
  enumerable: true,
  get: function get() {
    return definition.isOutputType;
  }
});
Object.defineProperty(exports, "isLeafType", {
  enumerable: true,
  get: function get() {
    return definition.isLeafType;
  }
});
Object.defineProperty(exports, "isCompositeType", {
  enumerable: true,
  get: function get() {
    return definition.isCompositeType;
  }
});
Object.defineProperty(exports, "isAbstractType", {
  enumerable: true,
  get: function get() {
    return definition.isAbstractType;
  }
});
Object.defineProperty(exports, "isWrappingType", {
  enumerable: true,
  get: function get() {
    return definition.isWrappingType;
  }
});
Object.defineProperty(exports, "isNullableType", {
  enumerable: true,
  get: function get() {
    return definition.isNullableType;
  }
});
Object.defineProperty(exports, "isNamedType", {
  enumerable: true,
  get: function get() {
    return definition.isNamedType;
  }
});
Object.defineProperty(exports, "assertType", {
  enumerable: true,
  get: function get() {
    return definition.assertType;
  }
});
Object.defineProperty(exports, "assertScalarType", {
  enumerable: true,
  get: function get() {
    return definition.assertScalarType;
  }
});
Object.defineProperty(exports, "assertObjectType", {
  enumerable: true,
  get: function get() {
    return definition.assertObjectType;
  }
});
Object.defineProperty(exports, "assertInterfaceType", {
  enumerable: true,
  get: function get() {
    return definition.assertInterfaceType;
  }
});
Object.defineProperty(exports, "assertUnionType", {
  enumerable: true,
  get: function get() {
    return definition.assertUnionType;
  }
});
Object.defineProperty(exports, "assertEnumType", {
  enumerable: true,
  get: function get() {
    return definition.assertEnumType;
  }
});
Object.defineProperty(exports, "assertInputObjectType", {
  enumerable: true,
  get: function get() {
    return definition.assertInputObjectType;
  }
});
Object.defineProperty(exports, "assertListType", {
  enumerable: true,
  get: function get() {
    return definition.assertListType;
  }
});
Object.defineProperty(exports, "assertNonNullType", {
  enumerable: true,
  get: function get() {
    return definition.assertNonNullType;
  }
});
Object.defineProperty(exports, "assertInputType", {
  enumerable: true,
  get: function get() {
    return definition.assertInputType;
  }
});
Object.defineProperty(exports, "assertOutputType", {
  enumerable: true,
  get: function get() {
    return definition.assertOutputType;
  }
});
Object.defineProperty(exports, "assertLeafType", {
  enumerable: true,
  get: function get() {
    return definition.assertLeafType;
  }
});
Object.defineProperty(exports, "assertCompositeType", {
  enumerable: true,
  get: function get() {
    return definition.assertCompositeType;
  }
});
Object.defineProperty(exports, "assertAbstractType", {
  enumerable: true,
  get: function get() {
    return definition.assertAbstractType;
  }
});
Object.defineProperty(exports, "assertWrappingType", {
  enumerable: true,
  get: function get() {
    return definition.assertWrappingType;
  }
});
Object.defineProperty(exports, "assertNullableType", {
  enumerable: true,
  get: function get() {
    return definition.assertNullableType;
  }
});
Object.defineProperty(exports, "assertNamedType", {
  enumerable: true,
  get: function get() {
    return definition.assertNamedType;
  }
});
Object.defineProperty(exports, "getNullableType", {
  enumerable: true,
  get: function get() {
    return definition.getNullableType;
  }
});
Object.defineProperty(exports, "getNamedType", {
  enumerable: true,
  get: function get() {
    return definition.getNamedType;
  }
});
Object.defineProperty(exports, "GraphQLScalarType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLScalarType;
  }
});
Object.defineProperty(exports, "GraphQLObjectType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLObjectType;
  }
});
Object.defineProperty(exports, "GraphQLInterfaceType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, "GraphQLUnionType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLUnionType;
  }
});
Object.defineProperty(exports, "GraphQLEnumType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLEnumType;
  }
});
Object.defineProperty(exports, "GraphQLInputObjectType", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, "GraphQLList", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLList;
  }
});
Object.defineProperty(exports, "GraphQLNonNull", {
  enumerable: true,
  get: function get() {
    return definition.GraphQLNonNull;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function get() {
    return directives.isDirective;
  }
});
Object.defineProperty(exports, "GraphQLDirective", {
  enumerable: true,
  get: function get() {
    return directives.GraphQLDirective;
  }
});
Object.defineProperty(exports, "isSpecifiedDirective", {
  enumerable: true,
  get: function get() {
    return directives.isSpecifiedDirective;
  }
});
Object.defineProperty(exports, "specifiedDirectives", {
  enumerable: true,
  get: function get() {
    return directives.specifiedDirectives;
  }
});
Object.defineProperty(exports, "GraphQLIncludeDirective", {
  enumerable: true,
  get: function get() {
    return directives.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, "GraphQLSkipDirective", {
  enumerable: true,
  get: function get() {
    return directives.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
  enumerable: true,
  get: function get() {
    return directives.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
  enumerable: true,
  get: function get() {
    return directives.DEFAULT_DEPRECATION_REASON;
  }
});
Object.defineProperty(exports, "isSpecifiedScalarType", {
  enumerable: true,
  get: function get() {
    return scalars.isSpecifiedScalarType;
  }
});
Object.defineProperty(exports, "specifiedScalarTypes", {
  enumerable: true,
  get: function get() {
    return scalars.specifiedScalarTypes;
  }
});
Object.defineProperty(exports, "GraphQLInt", {
  enumerable: true,
  get: function get() {
    return scalars.GraphQLInt;
  }
});
Object.defineProperty(exports, "GraphQLFloat", {
  enumerable: true,
  get: function get() {
    return scalars.GraphQLFloat;
  }
});
Object.defineProperty(exports, "GraphQLString", {
  enumerable: true,
  get: function get() {
    return scalars.GraphQLString;
  }
});
Object.defineProperty(exports, "GraphQLBoolean", {
  enumerable: true,
  get: function get() {
    return scalars.GraphQLBoolean;
  }
});
Object.defineProperty(exports, "GraphQLID", {
  enumerable: true,
  get: function get() {
    return scalars.GraphQLID;
  }
});
Object.defineProperty(exports, "TypeKind", {
  enumerable: true,
  get: function get() {
    return introspection.TypeKind;
  }
});
Object.defineProperty(exports, "isIntrospectionType", {
  enumerable: true,
  get: function get() {
    return introspection.isIntrospectionType;
  }
});
Object.defineProperty(exports, "introspectionTypes", {
  enumerable: true,
  get: function get() {
    return introspection.introspectionTypes;
  }
});
Object.defineProperty(exports, "__Schema", {
  enumerable: true,
  get: function get() {
    return introspection.__Schema;
  }
});
Object.defineProperty(exports, "__Directive", {
  enumerable: true,
  get: function get() {
    return introspection.__Directive;
  }
});
Object.defineProperty(exports, "__DirectiveLocation", {
  enumerable: true,
  get: function get() {
    return introspection.__DirectiveLocation;
  }
});
Object.defineProperty(exports, "__Type", {
  enumerable: true,
  get: function get() {
    return introspection.__Type;
  }
});
Object.defineProperty(exports, "__Field", {
  enumerable: true,
  get: function get() {
    return introspection.__Field;
  }
});
Object.defineProperty(exports, "__InputValue", {
  enumerable: true,
  get: function get() {
    return introspection.__InputValue;
  }
});
Object.defineProperty(exports, "__EnumValue", {
  enumerable: true,
  get: function get() {
    return introspection.__EnumValue;
  }
});
Object.defineProperty(exports, "__TypeKind", {
  enumerable: true,
  get: function get() {
    return introspection.__TypeKind;
  }
});
Object.defineProperty(exports, "SchemaMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return introspection.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return introspection.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeNameMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return introspection.TypeNameMetaFieldDef;
  }
});
Object.defineProperty(exports, "validateSchema", {
  enumerable: true,
  get: function get() {
    return validate.validateSchema;
  }
});
Object.defineProperty(exports, "assertValidSchema", {
  enumerable: true,
  get: function get() {
    return validate.assertValidSchema;
  }
});
});

unwrapExports(type);

var language = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getLocation", {
  enumerable: true,
  get: function get() {
    return location.getLocation;
  }
});
Object.defineProperty(exports, "Kind", {
  enumerable: true,
  get: function get() {
    return kinds.Kind;
  }
});
Object.defineProperty(exports, "createLexer", {
  enumerable: true,
  get: function get() {
    return lexer.createLexer;
  }
});
Object.defineProperty(exports, "TokenKind", {
  enumerable: true,
  get: function get() {
    return lexer.TokenKind;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return parser.parse;
  }
});
Object.defineProperty(exports, "parseValue", {
  enumerable: true,
  get: function get() {
    return parser.parseValue;
  }
});
Object.defineProperty(exports, "parseType", {
  enumerable: true,
  get: function get() {
    return parser.parseType;
  }
});
Object.defineProperty(exports, "print", {
  enumerable: true,
  get: function get() {
    return printer.print;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function get() {
    return source.Source;
  }
});
Object.defineProperty(exports, "visit", {
  enumerable: true,
  get: function get() {
    return visitor.visit;
  }
});
Object.defineProperty(exports, "visitInParallel", {
  enumerable: true,
  get: function get() {
    return visitor.visitInParallel;
  }
});
Object.defineProperty(exports, "visitWithTypeInfo", {
  enumerable: true,
  get: function get() {
    return visitor.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, "getVisitFn", {
  enumerable: true,
  get: function get() {
    return visitor.getVisitFn;
  }
});
Object.defineProperty(exports, "BREAK", {
  enumerable: true,
  get: function get() {
    return visitor.BREAK;
  }
});
Object.defineProperty(exports, "DirectiveLocation", {
  enumerable: true,
  get: function get() {
    return directiveLocation.DirectiveLocation;
  }
});
});

unwrapExports(language);

var execution = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "execute", {
  enumerable: true,
  get: function get() {
    return execute_1.execute;
  }
});
Object.defineProperty(exports, "defaultFieldResolver", {
  enumerable: true,
  get: function get() {
    return execute_1.defaultFieldResolver;
  }
});
Object.defineProperty(exports, "responsePathAsArray", {
  enumerable: true,
  get: function get() {
    return execute_1.responsePathAsArray;
  }
});
Object.defineProperty(exports, "getDirectiveValues", {
  enumerable: true,
  get: function get() {
    return values.getDirectiveValues;
  }
});
});

unwrapExports(execution);

var mapAsyncIterator_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapAsyncIterator;



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = (0, iterall.getAsyncIterator)(iterable);
  var $return;
  var abruptClose; // $FlowFixMe(>=0.68.0)

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      // $FlowFixMe(>=0.68.0)
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, iterall.$$asyncIterator, function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}
});

unwrapExports(mapAsyncIterator_1);

var subscribe_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = subscribe;
exports.createSourceEventStream = createSourceEventStream;



var _inspect = _interopRequireDefault(inspect_1);









var _mapAsyncIterator = _interopRequireDefault(mapAsyncIterator_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema.schema, argsOrSchema.document, argsOrSchema.rootValue, argsOrSchema.contextValue, argsOrSchema.variableValues, argsOrSchema.operationName, argsOrSchema.fieldResolver, argsOrSchema.subscribeFieldResolver) : subscribeImpl(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver);
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */


function reportGraphQLError(error) {
  if (error instanceof GraphQLError_1.GraphQLError) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(schema$$1, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  var sourcePromise = createSourceEventStream(schema$$1, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return (0, execute_1.execute)(schema$$1, document, payload, contextValue, variableValues, operationName, fieldResolver);
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      (0, iterall.isAsyncIterable)(resultOrStream) ? (0, _mapAsyncIterator.default)(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  }, reportGraphQLError);
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema$$1, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  (0, execute_1.assertValidExecutionArguments)(schema$$1, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = (0, execute_1.buildExecutionContext)(schema$$1, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

    if (Array.isArray(exeContext)) {
      return Promise.resolve({
        errors: exeContext
      });
    }

    var type = (0, getOperationRootType_1.getOperationRootType)(schema$$1, exeContext.operation);
    var fields = (0, execute_1.collectFields)(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = (0, execute_1.getFieldDef)(schema$$1, type, fieldName);

    if (!fieldDef) {
      throw new GraphQLError_1.GraphQLError("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
    } // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.


    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;
    var path = (0, execute_1.addPath)(undefined, responseName);
    var info = (0, execute_1.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path); // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.

    var result = (0, execute_1.resolveFieldValueOrError)(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info); // Coerce to Promise for easier error handling and consistent return type.

    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        throw (0, locatedError_1.locatedError)(eventStream, fieldNodes, (0, execute_1.responsePathAsArray)(path));
      } // Assert field returned an event stream, otherwise yield an error.


      if ((0, iterall.isAsyncIterable)(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }

      throw new Error('Subscription field must return Async Iterable. Received: ' + (0, _inspect.default)(eventStream));
    });
  } catch (error) {
    return Promise.reject(error);
  }
}
});

unwrapExports(subscribe_1);
var subscribe_2 = subscribe_1.subscribe;
var subscribe_3 = subscribe_1.createSourceEventStream;

var subscription = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "subscribe", {
  enumerable: true,
  get: function get() {
    return subscribe_1.subscribe;
  }
});
Object.defineProperty(exports, "createSourceEventStream", {
  enumerable: true,
  get: function get() {
    return subscribe_1.createSourceEventStream;
  }
});
});

unwrapExports(subscription);

var validation = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function get() {
    return validate_1$1.validate;
  }
});
Object.defineProperty(exports, "ValidationContext", {
  enumerable: true,
  get: function get() {
    return _ValidationContext.default;
  }
});
Object.defineProperty(exports, "specifiedRules", {
  enumerable: true,
  get: function get() {
    return specifiedRules_1.specifiedRules;
  }
});
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
  enumerable: true,
  get: function get() {
    return FieldsOnCorrectType_1.FieldsOnCorrectType;
  }
});
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
  enumerable: true,
  get: function get() {
    return FragmentsOnCompositeTypes_1.FragmentsOnCompositeTypes;
  }
});
Object.defineProperty(exports, "KnownArgumentNamesRule", {
  enumerable: true,
  get: function get() {
    return KnownArgumentNames_1.KnownArgumentNames;
  }
});
Object.defineProperty(exports, "KnownDirectivesRule", {
  enumerable: true,
  get: function get() {
    return KnownDirectives_1.KnownDirectives;
  }
});
Object.defineProperty(exports, "KnownFragmentNamesRule", {
  enumerable: true,
  get: function get() {
    return KnownFragmentNames_1.KnownFragmentNames;
  }
});
Object.defineProperty(exports, "KnownTypeNamesRule", {
  enumerable: true,
  get: function get() {
    return KnownTypeNames_1.KnownTypeNames;
  }
});
Object.defineProperty(exports, "LoneAnonymousOperationRule", {
  enumerable: true,
  get: function get() {
    return LoneAnonymousOperation_1.LoneAnonymousOperation;
  }
});
Object.defineProperty(exports, "NoFragmentCyclesRule", {
  enumerable: true,
  get: function get() {
    return NoFragmentCycles_1.NoFragmentCycles;
  }
});
Object.defineProperty(exports, "NoUndefinedVariablesRule", {
  enumerable: true,
  get: function get() {
    return NoUndefinedVariables_1.NoUndefinedVariables;
  }
});
Object.defineProperty(exports, "NoUnusedFragmentsRule", {
  enumerable: true,
  get: function get() {
    return NoUnusedFragments_1.NoUnusedFragments;
  }
});
Object.defineProperty(exports, "NoUnusedVariablesRule", {
  enumerable: true,
  get: function get() {
    return NoUnusedVariables_1.NoUnusedVariables;
  }
});
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
  enumerable: true,
  get: function get() {
    return OverlappingFieldsCanBeMerged_1.OverlappingFieldsCanBeMerged;
  }
});
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
  enumerable: true,
  get: function get() {
    return PossibleFragmentSpreads_1.PossibleFragmentSpreads;
  }
});
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
  enumerable: true,
  get: function get() {
    return ProvidedRequiredArguments_1.ProvidedRequiredArguments;
  }
});
Object.defineProperty(exports, "ScalarLeafsRule", {
  enumerable: true,
  get: function get() {
    return ScalarLeafs_1.ScalarLeafs;
  }
});
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
  enumerable: true,
  get: function get() {
    return SingleFieldSubscriptions_1.SingleFieldSubscriptions;
  }
});
Object.defineProperty(exports, "UniqueArgumentNamesRule", {
  enumerable: true,
  get: function get() {
    return UniqueArgumentNames_1.UniqueArgumentNames;
  }
});
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
  enumerable: true,
  get: function get() {
    return UniqueDirectivesPerLocation_1.UniqueDirectivesPerLocation;
  }
});
Object.defineProperty(exports, "UniqueFragmentNamesRule", {
  enumerable: true,
  get: function get() {
    return UniqueFragmentNames_1.UniqueFragmentNames;
  }
});
Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
  enumerable: true,
  get: function get() {
    return UniqueInputFieldNames_1.UniqueInputFieldNames;
  }
});
Object.defineProperty(exports, "UniqueOperationNamesRule", {
  enumerable: true,
  get: function get() {
    return UniqueOperationNames_1.UniqueOperationNames;
  }
});
Object.defineProperty(exports, "UniqueVariableNamesRule", {
  enumerable: true,
  get: function get() {
    return UniqueVariableNames_1.UniqueVariableNames;
  }
});
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
  enumerable: true,
  get: function get() {
    return ValuesOfCorrectType_1.ValuesOfCorrectType;
  }
});
Object.defineProperty(exports, "VariablesAreInputTypesRule", {
  enumerable: true,
  get: function get() {
    return VariablesAreInputTypes_1.VariablesAreInputTypes;
  }
});
Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
  enumerable: true,
  get: function get() {
    return VariablesInAllowedPosition_1.VariablesInAllowedPosition;
  }
});



var _ValidationContext = _interopRequireDefault(ValidationContext_1);





















































function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

unwrapExports(validation);

var introspectionQuery_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIntrospectionQuery = getIntrospectionQuery;
exports.introspectionQuery = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return "\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(descriptions ? 'description' : '', "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions ? 'description' : '', "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions ? 'description' : '', "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}

var introspectionQuery = getIntrospectionQuery();
exports.introspectionQuery = introspectionQuery;
});

unwrapExports(introspectionQuery_1);
var introspectionQuery_2 = introspectionQuery_1.getIntrospectionQuery;
var introspectionQuery_3 = introspectionQuery_1.introspectionQuery;

var getOperationAST_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperationAST = getOperationAST;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var definition = documentAST.definitions[i];

    if (definition.kind === kinds.Kind.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }

  return operation;
}
});

unwrapExports(getOperationAST_1);
var getOperationAST_2 = getOperationAST_1.getOperationAST;

var introspectionFromSchema_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.introspectionFromSchema = introspectionFromSchema;

var _invariant = _interopRequireDefault(invariant_1);









function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
function introspectionFromSchema(schema$$1, options) {
  var queryAST = (0, parser.parse)((0, introspectionQuery_1.getIntrospectionQuery)(options));
  var result = (0, execute_1.execute)(schema$$1, queryAST);
  !(!result.then && !result.errors && result.data) ? (0, _invariant.default)(0) : void 0;
  return result.data;
}
});

unwrapExports(introspectionFromSchema_1);
var introspectionFromSchema_2 = introspectionFromSchema_1.introspectionFromSchema;

var buildClientSchema_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildClientSchema = buildClientSchema;

var _invariant = _interopRequireDefault(invariant_1);

var _keyMap = _interopRequireDefault(keyMap_1);

var _keyValMap = _interopRequireDefault(keyValMap_1);

















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection$$1, options) {
  // Get the schema from the introspection result.
  var schemaIntrospection = introspection$$1.__schema; // Converts the list of types into a keyMap based on the type names.

  var typeIntrospectionMap = (0, _keyMap.default)(schemaIntrospection.types, function (type) {
    return type.name;
  }); // A cache to use to store the actual GraphQLType definition objects by name.
  // Initialize to the GraphQL built in scalars. All functions below are inline
  // so that this type def cache is within the scope of the closure.

  var typeDefCache = (0, _keyMap.default)(scalars.specifiedScalarTypes.concat(introspection.introspectionTypes), function (type) {
    return type.name;
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === introspection.TypeKind.LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return (0, definition.GraphQLList)(getType(itemRef));
    }

    if (typeRef.kind === introspection.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return (0, definition.GraphQLNonNull)((0, definition.assertNullableType)(nullableType));
    }

    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + JSON.stringify(typeRef));
    }

    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    if (typeDefCache[typeName]) {
      return typeDefCache[typeName];
    }

    var typeIntrospection = typeIntrospectionMap[typeName];

    if (!typeIntrospection) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure ") + 'that a full introspection query is used in order to build a ' + 'client schema.');
    }

    var typeDef = buildType(typeIntrospection);
    typeDefCache[typeName] = typeDef;
    return typeDef;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);
    !(0, definition.isInputType)(type) ? (0, _invariant.default)(0, 'Introspection must provide input type for arguments.') : void 0;
    return type;
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);
    !(0, definition.isOutputType)(type) ? (0, _invariant.default)(0, 'Introspection must provide output type for fields.') : void 0;
    return type;
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return (0, definition.assertObjectType)(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return (0, definition.assertInterfaceType)(type);
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case introspection.TypeKind.SCALAR:
          return buildScalarDef(type);

        case introspection.TypeKind.OBJECT:
          return buildObjectDef(type);

        case introspection.TypeKind.INTERFACE:
          return buildInterfaceDef(type);

        case introspection.TypeKind.UNION:
          return buildUnionDef(type);

        case introspection.TypeKind.ENUM:
          return buildEnumDef(type);

        case introspection.TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    throw new Error('Invalid or incomplete introspection result. Ensure that a full ' + 'introspection query is used in order to build a client schema:' + JSON.stringify(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new definition.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      serialize: function serialize(value) {
        return value;
      }
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + JSON.stringify(objectIntrospection));
    }

    return new definition.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: objectIntrospection.interfaces.map(getInterfaceType),
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new definition.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + JSON.stringify(unionIntrospection));
    }

    return new definition.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: unionIntrospection.possibleTypes.map(getObjectType)
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + JSON.stringify(enumIntrospection));
    }

    return new definition.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0, _keyValMap.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + JSON.stringify(inputObjectIntrospection));
    }

    return new definition.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + JSON.stringify(typeIntrospection));
    }

    return (0, _keyValMap.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + JSON.stringify(fieldIntrospection));
      }

      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0, _keyValMap.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? (0, valueFromAST_1.valueFromAST)((0, parser.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      name: inputValueIntrospection.name,
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    // Support deprecated `on****` fields for building `locations`, as this
    // is used by GraphiQL which may need to support outdated servers.
    var locations = directiveIntrospection.locations ? directiveIntrospection.locations.slice() : [].concat(!directiveIntrospection.onField ? [] : [directiveLocation.DirectiveLocation.FIELD], !directiveIntrospection.onOperation ? [] : [directiveLocation.DirectiveLocation.QUERY, directiveLocation.DirectiveLocation.MUTATION, directiveLocation.DirectiveLocation.SUBSCRIPTION], !directiveIntrospection.onFragment ? [] : [directiveLocation.DirectiveLocation.FRAGMENT_DEFINITION, directiveLocation.DirectiveLocation.FRAGMENT_SPREAD, directiveLocation.DirectiveLocation.INLINE_FRAGMENT]);

    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + JSON.stringify(directiveIntrospection));
    }

    return new directives.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: locations,
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  } // Iterate through all types, getting the type definition for each, ensuring
  // that any type not directly referenced by a field will get created.


  var types = schemaIntrospection.types.map(function (typeIntrospection) {
    return getNamedType(typeIntrospection.name);
  }); // Get the root Query, Mutation, and Subscription types.

  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives$$1 = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new schema.GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: types,
    directives: directives$$1,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });
}
});

unwrapExports(buildClientSchema_1);
var buildClientSchema_2 = buildClientSchema_1.buildClientSchema;

var buildASTSchema_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildASTSchema = buildASTSchema;
exports.getDescription = getDescription;
exports.buildSchema = buildSchema;
exports.ASTDefinitionBuilder = void 0;

var _keyMap = _interopRequireDefault(keyMap_1);

var _keyValMap = _interopRequireDefault(keyValMap_1);



var _blockStringValue = _interopRequireDefault(blockStringValue_1);



















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function buildWrappedType(innerType, inputTypeNode) {
  if (inputTypeNode.kind === kinds.Kind.LIST_TYPE) {
    return (0, definition.GraphQLList)(buildWrappedType(innerType, inputTypeNode.type));
  }

  if (inputTypeNode.kind === kinds.Kind.NON_NULL_TYPE) {
    var wrappedType = buildWrappedType(innerType, inputTypeNode.type);
    return (0, definition.GraphQLNonNull)((0, definition.assertNullableType)(wrappedType));
  }

  return innerType;
}

function getNamedTypeNode(typeNode) {
  var namedType = typeNode;

  while (namedType.kind === kinds.Kind.LIST_TYPE || namedType.kind === kinds.Kind.NON_NULL_TYPE) {
    namedType = namedType.type;
  }

  return namedType;
}
/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function buildASTSchema(ast, options) {
  if (!ast || ast.kind !== kinds.Kind.DOCUMENT) {
    throw new Error('Must provide a document ast.');
  }

  var schemaDef;
  var typeDefs = [];
  var nodeMap = Object.create(null);
  var directiveDefs = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var d = ast.definitions[i];

    switch (d.kind) {
      case kinds.Kind.SCHEMA_DEFINITION:
        if (schemaDef) {
          throw new Error('Must provide only one schema definition.');
        }

        schemaDef = d;
        break;

      case kinds.Kind.SCALAR_TYPE_DEFINITION:
      case kinds.Kind.OBJECT_TYPE_DEFINITION:
      case kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case kinds.Kind.ENUM_TYPE_DEFINITION:
      case kinds.Kind.UNION_TYPE_DEFINITION:
      case kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        var typeName = d.name.value;

        if (nodeMap[typeName]) {
          throw new Error("Type \"".concat(typeName, "\" was defined more than once."));
        }

        typeDefs.push(d);
        nodeMap[typeName] = d;
        break;

      case kinds.Kind.DIRECTIVE_DEFINITION:
        directiveDefs.push(d);
        break;
    }
  }

  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: nodeMap.Query,
    mutation: nodeMap.Mutation,
    subscription: nodeMap.Subscription
  };
  var definitionBuilder = new ASTDefinitionBuilder(nodeMap, options, function (typeRef) {
    throw new Error("Type \"".concat(typeRef.name.value, "\" not found in document."));
  });
  var types = definitionBuilder.buildTypes(typeDefs);
  var directives$$1 = directiveDefs.map(function (def) {
    return definitionBuilder.buildDirective(def);
  }); // If specified directives were not explicitly declared, add them.

  if (!directives$$1.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives$$1.push(directives.GraphQLSkipDirective);
  }

  if (!directives$$1.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives$$1.push(directives.GraphQLIncludeDirective);
  }

  if (!directives$$1.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives$$1.push(directives.GraphQLDeprecatedDirective);
  } // Note: While this could make early assertions to get the correctly
  // typed values below, that would throw immediately while type system
  // validation with validateSchema() will produce more actionable results.


  return new schema.GraphQLSchema({
    query: operationTypes.query ? definitionBuilder.buildType(operationTypes.query) : null,
    mutation: operationTypes.mutation ? definitionBuilder.buildType(operationTypes.mutation) : null,
    subscription: operationTypes.subscription ? definitionBuilder.buildType(operationTypes.subscription) : null,
    types: types,
    directives: directives$$1,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });

  function getOperationTypes(schema$$1) {
    var opTypes = {};
    schema$$1.operationTypes.forEach(function (operationType) {
      var typeName = operationType.type.name.value;
      var operation = operationType.operation;

      if (opTypes[operation]) {
        throw new Error("Must provide only one ".concat(operation, " type in schema."));
      }

      if (!nodeMap[typeName]) {
        throw new Error("Specified ".concat(operation, " type \"").concat(typeName, "\" not found in document."));
      }

      opTypes[operation] = operationType.type;
    });
    return opTypes;
  }
}

var ASTDefinitionBuilder =
/*#__PURE__*/
function () {
  function ASTDefinitionBuilder(typeDefinitionsMap, options, resolveType) {
    _defineProperty(this, "_typeDefinitionsMap", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_resolveType", void 0);

    _defineProperty(this, "_cache", void 0);

    this._typeDefinitionsMap = typeDefinitionsMap;
    this._options = options;
    this._resolveType = resolveType; // Initialize to the GraphQL built in scalars and introspection types.

    this._cache = (0, _keyMap.default)(scalars.specifiedScalarTypes.concat(introspection.introspectionTypes), function (type) {
      return type.name;
    });
  }

  var _proto = ASTDefinitionBuilder.prototype;

  _proto.buildTypes = function buildTypes(nodes) {
    var _this = this;

    return nodes.map(function (node) {
      return _this.buildType(node);
    });
  };

  _proto.buildType = function buildType(node) {
    var typeName = node.name.value;

    if (!this._cache[typeName]) {
      if (node.kind === kinds.Kind.NAMED_TYPE) {
        var defNode = this._typeDefinitionsMap[typeName];
        this._cache[typeName] = defNode ? this._makeSchemaDef(defNode) : this._resolveType(node);
      } else {
        this._cache[typeName] = this._makeSchemaDef(node);
      }
    }

    return this._cache[typeName];
  };

  _proto._buildWrappedType = function _buildWrappedType(typeNode) {
    var typeDef = this.buildType(getNamedTypeNode(typeNode));
    return buildWrappedType(typeDef, typeNode);
  };

  _proto.buildDirective = function buildDirective(directiveNode) {
    return new directives.GraphQLDirective({
      name: directiveNode.name.value,
      description: getDescription(directiveNode, this._options),
      locations: directiveNode.locations.map(function (node) {
        return node.value;
      }),
      args: directiveNode.arguments && this._makeInputValues(directiveNode.arguments),
      astNode: directiveNode
    });
  };

  _proto.buildField = function buildField(field) {
    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this._buildWrappedType(field.type),
      description: getDescription(field, this._options),
      args: field.arguments && this._makeInputValues(field.arguments),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  _proto.buildInputField = function buildInputField(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    var type = this._buildWrappedType(value.type);

    return {
      name: value.name.value,
      type: type,
      description: getDescription(value, this._options),
      defaultValue: (0, valueFromAST_1.valueFromAST)(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildEnumValue = function buildEnumValue(value) {
    return {
      description: getDescription(value, this._options),
      deprecationReason: getDeprecationReason(value),
      astNode: value
    };
  };

  _proto._makeSchemaDef = function _makeSchemaDef(def) {
    switch (def.kind) {
      case kinds.Kind.OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(def);

      case kinds.Kind.INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(def);

      case kinds.Kind.ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(def);

      case kinds.Kind.UNION_TYPE_DEFINITION:
        return this._makeUnionDef(def);

      case kinds.Kind.SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(def);

      case kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(def);

      default:
        throw new Error("Type kind \"".concat(def.kind, "\" not supported."));
    }
  };

  _proto._makeTypeDef = function _makeTypeDef(def) {
    var _this2 = this;

    var typeName = def.name.value;
    var interfaces = def.interfaces;
    return new definition.GraphQLObjectType({
      name: typeName,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this2._makeFieldDefMap(def);
      },
      // Note: While this could make early assertions to get the correctly
      // typed values, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      interfaces: interfaces ? function () {
        return _this2.buildTypes(interfaces);
      } : [],
      astNode: def
    });
  };

  _proto._makeFieldDefMap = function _makeFieldDefMap(def) {
    var _this3 = this;

    return def.fields ? (0, _keyValMap.default)(def.fields, function (field) {
      return field.name.value;
    }, function (field) {
      return _this3.buildField(field);
    }) : {};
  };

  _proto._makeInputValues = function _makeInputValues(values$$1) {
    var _this4 = this;

    return (0, _keyValMap.default)(values$$1, function (value) {
      return value.name.value;
    }, function (value) {
      return _this4.buildInputField(value);
    });
  };

  _proto._makeInterfaceDef = function _makeInterfaceDef(def) {
    var _this5 = this;

    return new definition.GraphQLInterfaceType({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return _this5._makeFieldDefMap(def);
      },
      astNode: def
    });
  };

  _proto._makeEnumDef = function _makeEnumDef(def) {
    return new definition.GraphQLEnumType({
      name: def.name.value,
      description: getDescription(def, this._options),
      values: this._makeValueDefMap(def),
      astNode: def
    });
  };

  _proto._makeValueDefMap = function _makeValueDefMap(def) {
    var _this6 = this;

    return def.values ? (0, _keyValMap.default)(def.values, function (enumValue) {
      return enumValue.name.value;
    }, function (enumValue) {
      return _this6.buildEnumValue(enumValue);
    }) : {};
  };

  _proto._makeUnionDef = function _makeUnionDef(def) {
    return new definition.GraphQLUnionType({
      name: def.name.value,
      description: getDescription(def, this._options),
      // Note: While this could make assertions to get the correctly typed
      // values below, that would throw immediately while type system
      // validation with validateSchema() will produce more actionable results.
      types: def.types ? this.buildTypes(def.types) : [],
      astNode: def
    });
  };

  _proto._makeScalarDef = function _makeScalarDef(def) {
    return new definition.GraphQLScalarType({
      name: def.name.value,
      description: getDescription(def, this._options),
      astNode: def,
      serialize: function serialize(value) {
        return value;
      }
    });
  };

  _proto._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this7 = this;

    return new definition.GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: function fields() {
        return def.fields ? _this7._makeInputValues(def.fields) : {};
      },
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */


exports.ASTDefinitionBuilder = ASTDefinitionBuilder;

function getDeprecationReason(node) {
  var deprecated = (0, values.getDirectiveValues)(directives.GraphQLDeprecatedDirective, node);
  return deprecated && deprecated.reason;
}
/**
 * Given an ast node, returns its string description.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return (0, _blockStringValue.default)('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token && token.kind === lexer.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.reverse().join('\n');
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */


function buildSchema(source, options) {
  return buildASTSchema((0, parser.parse)(source, options), options);
}
});

unwrapExports(buildASTSchema_1);
var buildASTSchema_2 = buildASTSchema_1.buildASTSchema;
var buildASTSchema_3 = buildASTSchema_1.getDescription;
var buildASTSchema_4 = buildASTSchema_1.buildSchema;
var buildASTSchema_5 = buildASTSchema_1.ASTDefinitionBuilder;

var extendSchema_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendSchema = extendSchema;

var _invariant = _interopRequireDefault(invariant_1);

var _keyMap = _interopRequireDefault(keyMap_1);

var _keyValMap = _interopRequireDefault(keyValMap_1);

var _objectValues = _interopRequireDefault(objectValues_1);















function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema$$1, documentAST, options) {
  !(0, schema.isSchema)(schema$$1) ? (0, _invariant.default)(0, 'Must provide valid GraphQLSchema') : void 0;
  !(documentAST && documentAST.kind === kinds.Kind.DOCUMENT) ? (0, _invariant.default)(0, 'Must provide valid Document AST') : void 0; // Collect the type definitions and extensions found in the document.

  var typeDefinitionMap = Object.create(null);
  var typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefinitions = []; // Schema extensions are collected which may add additional operation types.

  var schemaExtensions = [];

  for (var i = 0; i < documentAST.definitions.length; i++) {
    var def = documentAST.definitions[i];

    switch (def.kind) {
      case kinds.Kind.SCHEMA_DEFINITION:
        // Sanity check that a schema extension is not defining a new schema
        throw new GraphQLError_1.GraphQLError('Cannot define a new schema within a schema extension.', [def]);

      case kinds.Kind.SCHEMA_EXTENSION:
        schemaExtensions.push(def);
        break;

      case kinds.Kind.OBJECT_TYPE_DEFINITION:
      case kinds.Kind.INTERFACE_TYPE_DEFINITION:
      case kinds.Kind.ENUM_TYPE_DEFINITION:
      case kinds.Kind.UNION_TYPE_DEFINITION:
      case kinds.Kind.SCALAR_TYPE_DEFINITION:
      case kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        // Sanity check that none of the defined types conflict with the
        // schema's existing types.
        var typeName = def.name.value;

        if (schema$$1.getType(typeName)) {
          throw new GraphQLError_1.GraphQLError("Type \"".concat(typeName, "\" already exists in the schema. It cannot also ") + 'be defined in this type definition.', [def]);
        }

        typeDefinitionMap[typeName] = def;
        break;

      case kinds.Kind.OBJECT_TYPE_EXTENSION:
      case kinds.Kind.INTERFACE_TYPE_EXTENSION:
      case kinds.Kind.ENUM_TYPE_EXTENSION:
      case kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      case kinds.Kind.UNION_TYPE_EXTENSION:
        // Sanity check that this type extension exists within the
        // schema's existing types.
        var extendedTypeName = def.name.value;
        var existingType = schema$$1.getType(extendedTypeName);

        if (!existingType) {
          throw new GraphQLError_1.GraphQLError("Cannot extend type \"".concat(extendedTypeName, "\" because it does not ") + 'exist in the existing schema.', [def]);
        }

        checkExtensionNode(existingType, def);
        var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
        typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
        break;

      case kinds.Kind.DIRECTIVE_DEFINITION:
        var directiveName = def.name.value;
        var existingDirective = schema$$1.getDirective(directiveName);

        if (existingDirective) {
          throw new GraphQLError_1.GraphQLError("Directive \"".concat(directiveName, "\" already exists in the schema. It ") + 'cannot be redefined.', [def]);
        }

        directiveDefinitions.push(def);
        break;

      case kinds.Kind.SCALAR_TYPE_EXTENSION:
        throw new Error("The ".concat(def.kind, " kind is not yet supported by extendSchema()."));
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.


  if (Object.keys(typeExtensionsMap).length === 0 && Object.keys(typeDefinitionMap).length === 0 && directiveDefinitions.length === 0 && schemaExtensions.length === 0) {
    return schema$$1;
  }

  var astBuilder = new buildASTSchema_1.ASTDefinitionBuilder(typeDefinitionMap, options, function (typeRef) {
    var typeName = typeRef.name.value;
    var existingType = schema$$1.getType(typeName);

    if (existingType) {
      return extendNamedType(existingType);
    }

    throw new GraphQLError_1.GraphQLError("Unknown type: \"".concat(typeName, "\". Ensure that this type exists ") + 'either in the original schema, or is added in a type definition.', [typeRef]);
  });
  var extendTypeCache = Object.create(null); // Get the extended root operation types.

  var operationTypes = {
    query: extendMaybeNamedType(schema$$1.getQueryType()),
    mutation: extendMaybeNamedType(schema$$1.getMutationType()),
    subscription: extendMaybeNamedType(schema$$1.getSubscriptionType())
  }; // Then, incorporate all schema extensions.

  schemaExtensions.forEach(function (schemaExtension) {
    if (schemaExtension.operationTypes) {
      schemaExtension.operationTypes.forEach(function (operationType) {
        var operation = operationType.operation;

        if (operationTypes[operation]) {
          throw new Error("Must provide only one ".concat(operation, " type in schema."));
        }

        var typeRef = operationType.type; // Note: While this could make early assertions to get the correctly
        // typed values, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.

        operationTypes[operation] = astBuilder.buildType(typeRef);
      });
    }
  });
  var schemaExtensionASTNodes = schemaExtensions ? schema$$1.extensionASTNodes ? schema$$1.extensionASTNodes.concat(schemaExtensions) : schemaExtensions : schema$$1.extensionASTNodes;
  var types = (0, _objectValues.default)(schema$$1.getTypeMap()).map(function (type) {
    return extendNamedType(type);
  }).concat(astBuilder.buildTypes((0, _objectValues.default)(typeDefinitionMap))); // Support both original legacy names and extended legacy names.

  var allowedLegacyNames = schema$$1.__allowedLegacyNames.concat(options && options.allowedLegacyNames || []); // Then produce and return a Schema with these types.


  return new schema.GraphQLSchema({
    query: operationTypes.query,
    mutation: operationTypes.mutation,
    subscription: operationTypes.subscription,
    types: types,
    directives: getMergedDirectives(),
    astNode: schema$$1.astNode,
    extensionASTNodes: schemaExtensionASTNodes,
    allowedLegacyNames: allowedLegacyNames
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function getMergedDirectives() {
    var existingDirectives = schema$$1.getDirectives().map(extendDirective);
    !existingDirectives ? (0, _invariant.default)(0, 'schema must have default directives') : void 0;
    return existingDirectives.concat(directiveDefinitions.map(function (node) {
      return astBuilder.buildDirective(node);
    }));
  }

  function extendMaybeNamedType(type) {
    return type ? extendNamedType(type) : null;
  }

  function extendNamedType(type) {
    if ((0, introspection.isIntrospectionType)(type)) {
      // Introspection types are not extended.
      return type;
    }

    var name = type.name;

    if (!extendTypeCache[name]) {
      if ((0, definition.isObjectType)(type)) {
        extendTypeCache[name] = extendObjectType(type);
      } else if ((0, definition.isInterfaceType)(type)) {
        extendTypeCache[name] = extendInterfaceType(type);
      } else if ((0, definition.isUnionType)(type)) {
        extendTypeCache[name] = extendUnionType(type);
      } else if ((0, definition.isEnumType)(type)) {
        extendTypeCache[name] = extendEnumType(type);
      } else if ((0, definition.isInputObjectType)(type)) {
        extendTypeCache[name] = extendInputObjectType(type);
      } else {
        // This type is not yet extendable.
        extendTypeCache[name] = type;
      }
    }

    return extendTypeCache[name];
  }

  function extendDirective(directive) {
    return new directives.GraphQLDirective({
      name: directive.name,
      description: directive.description,
      locations: directive.locations,
      args: extendArgs(directive.args),
      astNode: directive.astNode
    });
  }

  function getExtendedType(type) {
    if (!extendTypeCache[type.name]) {
      extendTypeCache[type.name] = extendType(type);
    }

    return extendTypeCache[type.name];
  }

  function extendInputObjectType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new definition.GraphQLInputObjectType({
      name: name,
      description: type.description,
      fields: function fields() {
        return extendInputFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes
    });
  }

  function extendInputFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        type: extendType(field.type),
        defaultValue: field.defaultValue,
        astNode: field.astNode
      };
    }); // If there are any extensions to the fields, apply those here.

    var extensions = typeExtensionsMap[type.name];

    if (extensions) {
      extensions.forEach(function (extension) {
        extension.fields.forEach(function (field) {
          var fieldName = field.name.value;

          if (oldFieldMap[fieldName]) {
            throw new GraphQLError_1.GraphQLError("Field \"".concat(type.name, ".").concat(fieldName, "\" already exists in the ") + 'schema. It cannot also be defined in this type extension.', [field]);
          }

          newFieldMap[fieldName] = astBuilder.buildInputField(field);
        });
      });
    }

    return newFieldMap;
  }

  function extendEnumType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new definition.GraphQLEnumType({
      name: name,
      description: type.description,
      values: extendValueMap(type),
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes
    });
  }

  function extendValueMap(type) {
    var newValueMap = Object.create(null);
    var oldValueMap = (0, _keyMap.default)(type.getValues(), function (value) {
      return value.name;
    });
    Object.keys(oldValueMap).forEach(function (valueName) {
      var value = oldValueMap[valueName];
      newValueMap[valueName] = {
        name: value.name,
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        astNode: value.astNode
      };
    }); // If there are any extensions to the values, apply those here.

    var extensions = typeExtensionsMap[type.name];

    if (extensions) {
      extensions.forEach(function (extension) {
        extension.values.forEach(function (value) {
          var valueName = value.name.value;

          if (oldValueMap[valueName]) {
            throw new GraphQLError_1.GraphQLError("Enum value \"".concat(type.name, ".").concat(valueName, "\" already exists in the ") + 'schema. It cannot also be defined in this type extension.', [value]);
          }

          newValueMap[valueName] = astBuilder.buildEnumValue(value);
        });
      });
    }

    return newValueMap;
  }

  function extendObjectType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new definition.GraphQLObjectType({
      name: name,
      description: type.description,
      interfaces: function interfaces() {
        return extendImplementedInterfaces(type);
      },
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      isTypeOf: type.isTypeOf
    });
  }

  function extendArgs(args) {
    return (0, _keyValMap.default)(args, function (arg) {
      return arg.name;
    }, function (arg) {
      return {
        type: extendType(arg.type),
        defaultValue: arg.defaultValue,
        description: arg.description,
        astNode: arg.astNode
      };
    });
  }

  function extendInterfaceType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    return new definition.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      fields: function fields() {
        return extendFieldMap(type);
      },
      astNode: type.astNode,
      extensionASTNodes: extensionASTNodes,
      resolveType: type.resolveType
    });
  }

  function extendUnionType(type) {
    var name = type.name;
    var extensionASTNodes = typeExtensionsMap[name] ? type.extensionASTNodes ? type.extensionASTNodes.concat(typeExtensionsMap[name]) : typeExtensionsMap[name] : type.extensionASTNodes;
    var unionTypes = type.getTypes().map(getExtendedType); // If there are any extensions to the union, apply those here.

    var extensions = typeExtensionsMap[type.name];

    if (extensions) {
      extensions.forEach(function (extension) {
        extension.types.forEach(function (namedType) {
          // Note: While this could make early assertions to get the correctly
          // typed values, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          unionTypes.push(astBuilder.buildType(namedType));
        });
      });
    }

    return new definition.GraphQLUnionType({
      name: name,
      description: type.description,
      types: unionTypes,
      astNode: type.astNode,
      resolveType: type.resolveType,
      extensionASTNodes: extensionASTNodes
    });
  }

  function extendImplementedInterfaces(type) {
    var interfaces = type.getInterfaces().map(extendNamedType); // If there are any extensions to the interfaces, apply those here.

    var extensions = typeExtensionsMap[type.name];

    if (extensions) {
      extensions.forEach(function (extension) {
        extension.interfaces.forEach(function (namedType) {
          // Note: While this could make early assertions to get the correctly
          // typed values, that would throw immediately while type system
          // validation with validateSchema() will produce more actionable results.
          interfaces.push(astBuilder.buildType(namedType));
        });
      });
    }

    return interfaces;
  }

  function extendFieldMap(type) {
    var newFieldMap = Object.create(null);
    var oldFieldMap = type.getFields();
    Object.keys(oldFieldMap).forEach(function (fieldName) {
      var field = oldFieldMap[fieldName];
      newFieldMap[fieldName] = {
        description: field.description,
        deprecationReason: field.deprecationReason,
        type: extendType(field.type),
        args: extendArgs(field.args),
        astNode: field.astNode,
        resolve: field.resolve
      };
    }); // If there are any extensions to the fields, apply those here.

    var extensions = typeExtensionsMap[type.name];

    if (extensions) {
      extensions.forEach(function (extension) {
        extension.fields.forEach(function (field) {
          var fieldName = field.name.value;

          if (oldFieldMap[fieldName]) {
            throw new GraphQLError_1.GraphQLError("Field \"".concat(type.name, ".").concat(fieldName, "\" already exists in the ") + 'schema. It cannot also be defined in this type extension.', [field]);
          }

          newFieldMap[fieldName] = astBuilder.buildField(field);
        });
      });
    }

    return newFieldMap;
  }

  function extendType(typeDef) {
    if ((0, definition.isListType)(typeDef)) {
      return (0, definition.GraphQLList)(extendType(typeDef.ofType));
    }

    if ((0, definition.isNonNullType)(typeDef)) {
      return (0, definition.GraphQLNonNull)(extendType(typeDef.ofType));
    }

    return extendNamedType(typeDef);
  }
}

function checkExtensionNode(type, node) {
  switch (node.kind) {
    case kinds.Kind.OBJECT_TYPE_EXTENSION:
      if (!(0, definition.isObjectType)(type)) {
        throw new GraphQLError_1.GraphQLError("Cannot extend non-object type \"".concat(type.name, "\"."), [node]);
      }

      break;

    case kinds.Kind.INTERFACE_TYPE_EXTENSION:
      if (!(0, definition.isInterfaceType)(type)) {
        throw new GraphQLError_1.GraphQLError("Cannot extend non-interface type \"".concat(type.name, "\"."), [node]);
      }

      break;

    case kinds.Kind.ENUM_TYPE_EXTENSION:
      if (!(0, definition.isEnumType)(type)) {
        throw new GraphQLError_1.GraphQLError("Cannot extend non-enum type \"".concat(type.name, "\"."), [node]);
      }

      break;

    case kinds.Kind.UNION_TYPE_EXTENSION:
      if (!(0, definition.isUnionType)(type)) {
        throw new GraphQLError_1.GraphQLError("Cannot extend non-union type \"".concat(type.name, "\"."), [node]);
      }

      break;

    case kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      if (!(0, definition.isInputObjectType)(type)) {
        throw new GraphQLError_1.GraphQLError("Cannot extend non-input object type \"".concat(type.name, "\"."), [node]);
      }

      break;
  }
}
});

unwrapExports(extendSchema_1);
var extendSchema_2 = extendSchema_1.extendSchema;

var lexicographicSortSchema_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lexicographicSortSchema = lexicographicSortSchema;

var _keyValMap = _interopRequireDefault(keyValMap_1);

var _objectValues = _interopRequireDefault(objectValues_1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sort GraphQLSchema.
 */
function lexicographicSortSchema(schema$$1) {
  var cache = Object.create(null);

  var sortMaybeType = function sortMaybeType(maybeType) {
    return maybeType && sortNamedType(maybeType);
  };

  return new schema.GraphQLSchema({
    types: sortTypes((0, _objectValues.default)(schema$$1.getTypeMap())),
    directives: sortByName(schema$$1.getDirectives()).map(sortDirective),
    query: sortMaybeType(schema$$1.getQueryType()),
    mutation: sortMaybeType(schema$$1.getMutationType()),
    subscription: sortMaybeType(schema$$1.getSubscriptionType()),
    astNode: schema$$1.astNode
  });

  function sortDirective(directive) {
    return new directives.GraphQLDirective({
      name: directive.name,
      description: directive.description,
      locations: sortBy(directive.locations, function (x) {
        return x;
      }),
      args: sortArgs(directive.args),
      astNode: directive.astNode
    });
  }

  function sortArgs(args) {
    return (0, _keyValMap.default)(sortByName(args), function (arg) {
      return arg.name;
    }, function (arg) {
      return _objectSpread({}, arg, {
        type: sortType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return {
        type: sortType(field.type),
        args: sortArgs(field.args),
        resolve: field.resolve,
        subscribe: field.subscribe,
        deprecationReason: field.deprecationReason,
        description: field.description,
        astNode: field.astNode
      };
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return {
        type: sortType(field.type),
        defaultValue: field.defaultValue,
        description: field.description,
        astNode: field.astNode
      };
    });
  }

  function sortType(type) {
    if ((0, definition.isListType)(type)) {
      return new definition.GraphQLList(sortType(type.ofType));
    } else if ((0, definition.isNonNullType)(type)) {
      return new definition.GraphQLNonNull(sortType(type.ofType));
    }

    return sortNamedType(type);
  }

  function sortTypes(arr) {
    return sortByName(arr).map(sortNamedType);
  }

  function sortNamedType(type) {
    if ((0, scalars.isSpecifiedScalarType)(type) || (0, introspection.isIntrospectionType)(type)) {
      return type;
    }

    var sortedType = cache[type.name];

    if (!sortedType) {
      sortedType = sortNamedTypeImpl(type);
      cache[type.name] = sortedType;
    }

    return sortedType;
  }

  function sortNamedTypeImpl(type) {
    if ((0, definition.isScalarType)(type)) {
      return type;
    } else if ((0, definition.isObjectType)(type)) {
      return new definition.GraphQLObjectType({
        name: type.name,
        interfaces: function interfaces() {
          return sortTypes(type.getInterfaces());
        },
        fields: function fields() {
          return sortFields(type.getFields());
        },
        isTypeOf: type.isTypeOf,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if ((0, definition.isInterfaceType)(type)) {
      return new definition.GraphQLInterfaceType({
        name: type.name,
        fields: function fields() {
          return sortFields(type.getFields());
        },
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode,
        extensionASTNodes: type.extensionASTNodes
      });
    } else if ((0, definition.isUnionType)(type)) {
      return new definition.GraphQLUnionType({
        name: type.name,
        types: function types() {
          return sortTypes(type.getTypes());
        },
        resolveType: type.resolveType,
        description: type.description,
        astNode: type.astNode
      });
    } else if ((0, definition.isEnumType)(type)) {
      return new definition.GraphQLEnumType({
        name: type.name,
        values: (0, _keyValMap.default)(sortByName(type.getValues()), function (val) {
          return val.name;
        }, function (val) {
          return {
            value: val.value,
            deprecationReason: val.deprecationReason,
            description: val.description,
            astNode: val.astNode
          };
        }),
        description: type.description,
        astNode: type.astNode
      });
    } else if ((0, definition.isInputObjectType)(type)) {
      return new definition.GraphQLInputObjectType({
        name: type.name,
        fields: function fields() {
          return sortInputFields(type.getFields());
        },
        description: type.description,
        astNode: type.astNode
      });
    }

    throw new Error("Unknown type: \"".concat(type, "\""));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i = 0; _i < sortedKeys.length; _i++) {
    var key = sortedKeys[_i];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}
});

unwrapExports(lexicographicSortSchema_1);
var lexicographicSortSchema_2 = lexicographicSortSchema_1.lexicographicSortSchema;

var schemaPrinter = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printSchema = printSchema;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printType = printType;

var _isNullish = _interopRequireDefault(isNullish_1);

var _isInvalid = _interopRequireDefault(isInvalid_1);

var _objectValues = _interopRequireDefault(objectValues_1);













function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !(0, directives.isSpecifiedDirective)(n);
  }, isDefinedType, options);
}

function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, directives.isSpecifiedDirective, introspection.isIntrospectionType, options);
}

function isDefinedType(type) {
  return !(0, scalars.isSpecifiedScalarType)(type) && !(0, introspection.isIntrospectionType)(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives$$1 = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = (0, _objectValues.default)(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives$$1.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if ((0, definition.isScalarType)(type)) {
    return printScalar(type, options);
  } else if ((0, definition.isObjectType)(type)) {
    return printObject(type, options);
  } else if ((0, definition.isInterfaceType)(type)) {
    return printInterface(type, options);
  } else if ((0, definition.isUnionType)(type)) {
    return printUnion(type, options);
  } else if ((0, definition.isEnumType)(type)) {
    return printEnum(type, options);
  } else if ((0, definition.isInputObjectType)(type)) {
    return printInputObject(type, options);
  }
  /* istanbul ignore next */


  throw new Error("Unknown type: ".concat(type, "."));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + "type ".concat(type.name).concat(implementedInterfaces, " {\n") + printFields(options, type) + '\n' + '}';
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name, " {\n") + printFields(options, type) + '\n' + '}';
}

function printUnion(type, options) {
  return printDescription(options, type) + "union ".concat(type.name, " = ").concat(type.getTypes().join(' | '));
}

function printEnum(type, options) {
  return printDescription(options, type) + "enum ".concat(type.name, " {\n") + printEnumValues(type.getValues(), options) + '\n' + '}';
}

function printEnumValues(values, options) {
  return values.map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  }).join('\n');
}

function printInputObject(type, options) {
  var fields = (0, _objectValues.default)(type.getFields());
  return printDescription(options, type) + "input ".concat(type.name, " {\n") + fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  }).join('\n') + '\n' + '}';
}

function printFields(options, type) {
  var fields = (0, _objectValues.default)(type.getFields());
  return fields.map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  }).join('\n');
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var argDecl = arg.name + ': ' + String(arg.type);

  if (!(0, _isInvalid.default)(arg.defaultValue)) {
    argDecl += " = ".concat((0, printer.print)((0, astFromValue_1.astFromValue)(arg.defaultValue, arg.type)));
  }

  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }

  var reason = fieldOrEnumVal.deprecationReason;

  if ((0, _isNullish.default)(reason) || reason === '' || reason === directives.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated';
  }

  return ' @deprecated(reason: ' + (0, printer.print)((0, astFromValue_1.astFromValue)(reason, scalars.GraphQLString)) + ')';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);

  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var description = indentation && !firstInBlock ? '\n' + indentation + '"""' : indentation + '"""'; // In some circumstances, a single line can be used for the description.

  if (lines.length === 1 && lines[0].length < 70 && lines[0][lines[0].length - 1] !== '"') {
    return description + escapeQuote(lines[0]) + '"""\n';
  } // Format a multi-line block quote to account for leading space.


  var hasLeadingSpace = lines[0][0] === ' ' || lines[0][0] === '\t';

  if (!hasLeadingSpace) {
    description += '\n';
  }

  for (var i = 0; i < lines.length; i++) {
    if (i !== 0 || !hasLeadingSpace) {
      description += indentation;
    }

    description += escapeQuote(lines[i]) + '\n';
  }

  description += indentation + '"""\n';
  return description;
}

function escapeQuote(line) {
  return line.replace(/"""/g, '\\"""');
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';

  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + lines[i] + '\n';
    }
  }

  return description;
}

function descriptionLines(description, maxLen) {
  var lines = [];
  var rawLines = description.split('\n');

  for (var i = 0; i < rawLines.length; i++) {
    if (rawLines[i] === '') {
      lines.push(rawLines[i]);
    } else {
      // For > 120 character long lines, cut at space boundaries into sublines
      // of ~80 chars.
      var sublines = breakLine(rawLines[i], maxLen);

      for (var j = 0; j < sublines.length; j++) {
        lines.push(sublines[j]);
      }
    }
  }

  return lines;
}

function breakLine(line, maxLen) {
  if (line.length < maxLen + 5) {
    return [line];
  }

  var parts = line.split(new RegExp("((?: |^).{15,".concat(maxLen - 40, "}(?= |$))")));

  if (parts.length < 4) {
    return [line];
  }

  var sublines = [parts[0] + parts[1] + parts[2]];

  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }

  return sublines;
}
});

unwrapExports(schemaPrinter);
var schemaPrinter_1 = schemaPrinter.printSchema;
var schemaPrinter_2 = schemaPrinter.printIntrospectionSchema;
var schemaPrinter_3 = schemaPrinter.printType;

var isValidJSValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidJSValue = isValidJSValue;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Deprecated. Use coerceValue() directly for richer information.
 */
function isValidJSValue(value, type) {
  var errors = (0, coerceValue_1.coerceValue)(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
}
});

unwrapExports(isValidJSValue_1);
var isValidJSValue_2 = isValidJSValue_1.isValidJSValue;

var isValidLiteralValue_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidLiteralValue = isValidLiteralValue;











var _ValidationContext = _interopRequireDefault(ValidationContext_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 */
function isValidLiteralValue(type, valueNode) {
  var emptySchema = new schema.GraphQLSchema({});
  var emptyDoc = {
    kind: kinds.Kind.DOCUMENT,
    definitions: []
  };
  var typeInfo = new TypeInfo_1.TypeInfo(emptySchema, undefined, type);
  var context = new _ValidationContext.default(emptySchema, emptyDoc, typeInfo);
  var visitor$$1 = (0, ValuesOfCorrectType_1.ValuesOfCorrectType)(context);
  (0, visitor.visit)(valueNode, (0, visitor.visitWithTypeInfo)(typeInfo, visitor$$1));
  return context.getErrors();
}
});

unwrapExports(isValidLiteralValue_1);
var isValidLiteralValue_2 = isValidLiteralValue_1.isValidLiteralValue;

var concatAST_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAST = concatAST;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  var batchDefinitions = [];

  for (var i = 0; i < asts.length; i++) {
    var definitions = asts[i].definitions;

    for (var j = 0; j < definitions.length; j++) {
      batchDefinitions.push(definitions[j]);
    }
  }

  return {
    kind: 'Document',
    definitions: batchDefinitions
  };
}
});

unwrapExports(concatAST_1);
var concatAST_2 = concatAST_1.concatAST;

var separateOperations_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateOperations = separateOperations;



/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName;
  var idx = 0; // Populate metadata and build a dependency graph.

  (0, visitor.visit)(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  }); // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.

  var separatedDocumentASTs = Object.create(null);
  operations.forEach(function (operation) {
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName); // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    var definitions = [operation];
    Object.keys(dependencies).forEach(function (name) {
      definitions.push(fragments[name]);
    });
    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });
    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  });
  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
} // From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.


function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];

  if (immediateDeps) {
    Object.keys(immediateDeps).forEach(function (toName) {
      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    });
  }
}
});

unwrapExports(separateOperations_1);
var separateOperations_2 = separateOperations_1.separateOperations;

var findBreakingChanges_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
exports.findRemovedTypes = findRemovedTypes;
exports.findTypesThatChangedKind = findTypesThatChangedKind;
exports.findArgChanges = findArgChanges;
exports.findFieldsThatChangedTypeOnObjectOrInterfaceTypes = findFieldsThatChangedTypeOnObjectOrInterfaceTypes;
exports.findFieldsThatChangedTypeOnInputObjectTypes = findFieldsThatChangedTypeOnInputObjectTypes;
exports.findTypesRemovedFromUnions = findTypesRemovedFromUnions;
exports.findTypesAddedToUnions = findTypesAddedToUnions;
exports.findValuesRemovedFromEnums = findValuesRemovedFromEnums;
exports.findValuesAddedToEnums = findValuesAddedToEnums;
exports.findInterfacesRemovedFromObjectTypes = findInterfacesRemovedFromObjectTypes;
exports.findInterfacesAddedToObjectTypes = findInterfacesAddedToObjectTypes;
exports.findRemovedDirectives = findRemovedDirectives;
exports.findRemovedDirectiveArgs = findRemovedDirectiveArgs;
exports.findAddedNonNullDirectiveArgs = findAddedNonNullDirectiveArgs;
exports.findRemovedLocationsForDirective = findRemovedLocationsForDirective;
exports.findRemovedDirectiveLocations = findRemovedDirectiveLocations;
exports.DangerousChangeType = exports.BreakingChangeType = void 0;







var _keyMap = _interopRequireDefault(keyMap_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */
var BreakingChangeType = {
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  FIELD_REMOVED: 'FIELD_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  NON_NULL_ARG_ADDED: 'NON_NULL_ARG_ADDED',
  NON_NULL_INPUT_FIELD_ADDED: 'NON_NULL_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED',
  NON_NULL_DIRECTIVE_ARG_ADDED: 'NON_NULL_DIRECTIVE_ARG_ADDED'
};
exports.BreakingChangeType = BreakingChangeType;
var DangerousChangeType = {
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE',
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  NULLABLE_INPUT_FIELD_ADDED: 'NULLABLE_INPUT_FIELD_ADDED',
  NULLABLE_ARG_ADDED: 'NULLABLE_ARG_ADDED'
};
exports.DangerousChangeType = DangerousChangeType;

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  return findRemovedTypes(oldSchema, newSchema).concat(findTypesThatChangedKind(oldSchema, newSchema), findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).breakingChanges, findTypesRemovedFromUnions(oldSchema, newSchema), findValuesRemovedFromEnums(oldSchema, newSchema), findArgChanges(oldSchema, newSchema).breakingChanges, findInterfacesRemovedFromObjectTypes(oldSchema, newSchema), findRemovedDirectives(oldSchema, newSchema), findRemovedDirectiveArgs(oldSchema, newSchema), findAddedNonNullDirectiveArgs(oldSchema, newSchema), findRemovedDirectiveLocations(oldSchema, newSchema));
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */


function findDangerousChanges(oldSchema, newSchema) {
  return findArgChanges(oldSchema, newSchema).dangerousChanges.concat(findValuesAddedToEnums(oldSchema, newSchema), findInterfacesAddedToObjectTypes(oldSchema, newSchema), findTypesAddedToUnions(oldSchema, newSchema), findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema).dangerousChanges);
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing an entire type.
 */


function findRemovedTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_REMOVED,
        description: "".concat(typeName, " was removed.")
      });
    }
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to changing the type of a type.
 */


function findTypesThatChangedKind(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    if (!newTypeMap[typeName]) {
      return;
    }

    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (oldType.constructor !== newType.constructor) {
      breakingChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(typeName, " changed from ") + "".concat(typeKindName(oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of any
 * breaking or dangerous changes in the newSchema related to arguments
 * (such as removal or change of type of an argument, or a change in an
 * argument's default value).
 */


function findArgChanges(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  var dangerousChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!((0, definition.isObjectType)(oldType) || (0, definition.isInterfaceType)(oldType)) || !((0, definition.isObjectType)(newType) || (0, definition.isInterfaceType)(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFields = oldType.getFields();
    var newTypeFields = newType.getFields();
    Object.keys(oldTypeFields).forEach(function (fieldName) {
      if (!newTypeFields[fieldName]) {
        return;
      }

      oldTypeFields[fieldName].args.forEach(function (oldArgDef) {
        var newArgs = newTypeFields[fieldName].args;
        var newArgDef = newArgs.find(function (arg) {
          return arg.name === oldArgDef.name;
        }); // Arg not present

        if (!newArgDef) {
          breakingChanges.push({
            type: BreakingChangeType.ARG_REMOVED,
            description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " was removed")
          });
        } else {
          var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldArgDef.type, newArgDef.type);

          if (!isSafe) {
            breakingChanges.push({
              type: BreakingChangeType.ARG_CHANGED_KIND,
              description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " has changed type from ") + "".concat(oldArgDef.type.toString(), " to ").concat(newArgDef.type.toString())
            });
          } else if (oldArgDef.defaultValue !== undefined && oldArgDef.defaultValue !== newArgDef.defaultValue) {
            dangerousChanges.push({
              type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
              description: "".concat(oldType.name, ".").concat(fieldName, " arg ") + "".concat(oldArgDef.name, " has changed defaultValue")
            });
          }
        }
      }); // Check if a non-null arg was added to the field

      newTypeFields[fieldName].args.forEach(function (newArgDef) {
        var oldArgs = oldTypeFields[fieldName].args;
        var oldArgDef = oldArgs.find(function (arg) {
          return arg.name === newArgDef.name;
        });

        if (!oldArgDef) {
          if ((0, definition.isNonNullType)(newArgDef.type)) {
            breakingChanges.push({
              type: BreakingChangeType.NON_NULL_ARG_ADDED,
              description: "A non-null arg ".concat(newArgDef.name, " on ") + "".concat(newType.name, ".").concat(fieldName, " was added")
            });
          } else {
            dangerousChanges.push({
              type: DangerousChangeType.NULLABLE_ARG_ADDED,
              description: "A nullable arg ".concat(newArgDef.name, " on ") + "".concat(newType.name, ".").concat(fieldName, " was added")
            });
          }
        }
      });
    });
  });
  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function typeKindName(type) {
  if ((0, definition.isScalarType)(type)) {
    return 'a Scalar type';
  }

  if ((0, definition.isObjectType)(type)) {
    return 'an Object type';
  }

  if ((0, definition.isInterfaceType)(type)) {
    return 'an Interface type';
  }

  if ((0, definition.isUnionType)(type)) {
    return 'a Union type';
  }

  if ((0, definition.isEnumType)(type)) {
    return 'an Enum type';
  }

  if ((0, definition.isInputObjectType)(type)) {
    return 'an Input type';
  }

  throw new TypeError('Unknown type ' + type.constructor.name);
}

function findFieldsThatChangedTypeOnObjectOrInterfaceTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!((0, definition.isObjectType)(oldType) || (0, definition.isInterfaceType)(oldType)) || !((0, definition.isObjectType)(newType) || (0, definition.isInterfaceType)(newType)) || newType.constructor !== oldType.constructor) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(typeName, ".").concat(fieldName, " was removed.")
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForObjectOrInterfaceField(oldFieldType, newFieldType);

        if (!isSafe) {
          var oldFieldTypeString = (0, definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(typeName, ".").concat(fieldName, " changed type from ") + "".concat(oldFieldTypeString, " to ").concat(newFieldTypeString, ".")
          });
        }
      }
    });
  });
  return breakingChanges;
}

function findFieldsThatChangedTypeOnInputObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  var dangerousChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isInputObjectType)(oldType) || !(0, definition.isInputObjectType)(newType)) {
      return;
    }

    var oldTypeFieldsDef = oldType.getFields();
    var newTypeFieldsDef = newType.getFields();
    Object.keys(oldTypeFieldsDef).forEach(function (fieldName) {
      // Check if the field is missing on the type in the new schema.
      if (!(fieldName in newTypeFieldsDef)) {
        breakingChanges.push({
          type: BreakingChangeType.FIELD_REMOVED,
          description: "".concat(typeName, ".").concat(fieldName, " was removed.")
        });
      } else {
        var oldFieldType = oldTypeFieldsDef[fieldName].type;
        var newFieldType = newTypeFieldsDef[fieldName].type;
        var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(oldFieldType, newFieldType);

        if (!isSafe) {
          var oldFieldTypeString = (0, definition.isNamedType)(oldFieldType) ? oldFieldType.name : oldFieldType.toString();
          var newFieldTypeString = (0, definition.isNamedType)(newFieldType) ? newFieldType.name : newFieldType.toString();
          breakingChanges.push({
            type: BreakingChangeType.FIELD_CHANGED_KIND,
            description: "".concat(typeName, ".").concat(fieldName, " changed type from ") + "".concat(oldFieldTypeString, " to ").concat(newFieldTypeString, ".")
          });
        }
      }
    }); // Check if a field was added to the input object type

    Object.keys(newTypeFieldsDef).forEach(function (fieldName) {
      if (!(fieldName in oldTypeFieldsDef)) {
        if ((0, definition.isNonNullType)(newTypeFieldsDef[fieldName].type)) {
          breakingChanges.push({
            type: BreakingChangeType.NON_NULL_INPUT_FIELD_ADDED,
            description: "A non-null field ".concat(fieldName, " on ") + "input type ".concat(newType.name, " was added.")
          });
        } else {
          dangerousChanges.push({
            type: DangerousChangeType.NULLABLE_INPUT_FIELD_ADDED,
            description: "A nullable field ".concat(fieldName, " on ") + "input type ".concat(newType.name, " was added.")
          });
        }
      }
    });
  });
  return {
    breakingChanges: breakingChanges,
    dangerousChanges: dangerousChanges
  };
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0, definition.isNamedType)(oldType)) {
    return (// if they're both named types, see if their names are equivalent
      (0, definition.isNamedType)(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
      (0, definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if ((0, definition.isListType)(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      (0, definition.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      (0, definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  } else if ((0, definition.isNonNullType)(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return (0, definition.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return false;
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0, definition.isNamedType)(oldType)) {
    // if they're both named types, see if their names are equivalent
    return (0, definition.isNamedType)(newType) && oldType.name === newType.name;
  } else if ((0, definition.isListType)(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return (0, definition.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  } else if ((0, definition.isNonNullType)(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      (0, definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !(0, definition.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  }

  return false;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing types from a union type.
 */


function findTypesRemovedFromUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var typesRemovedFromUnion = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isUnionType)(oldType) || !(0, definition.isUnionType)(newType)) {
      return;
    }

    var typeNamesInNewUnion = Object.create(null);
    newType.getTypes().forEach(function (type) {
      typeNamesInNewUnion[type.name] = true;
    });
    oldType.getTypes().forEach(function (type) {
      if (!typeNamesInNewUnion[type.name]) {
        typesRemovedFromUnion.push({
          type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
          description: "".concat(type.name, " was removed from union type ").concat(typeName, ".")
        });
      }
    });
  });
  return typesRemovedFromUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding types to a union type.
 */


function findTypesAddedToUnions(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var typesAddedToUnion = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isUnionType)(oldType) || !(0, definition.isUnionType)(newType)) {
      return;
    }

    var typeNamesInOldUnion = Object.create(null);
    oldType.getTypes().forEach(function (type) {
      typeNamesInOldUnion[type.name] = true;
    });
    newType.getTypes().forEach(function (type) {
      if (!typeNamesInOldUnion[type.name]) {
        typesAddedToUnion.push({
          type: DangerousChangeType.TYPE_ADDED_TO_UNION,
          description: "".concat(type.name, " was added to union type ").concat(typeName, ".")
        });
      }
    });
  });
  return typesAddedToUnion;
}
/**
 * Given two schemas, returns an Array containing descriptions of any breaking
 * changes in the newSchema related to removing values from an enum type.
 */


function findValuesRemovedFromEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var valuesRemovedFromEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isEnumType)(oldType) || !(0, definition.isEnumType)(newType)) {
      return;
    }

    var valuesInNewEnum = Object.create(null);
    newType.getValues().forEach(function (value) {
      valuesInNewEnum[value.name] = true;
    });
    oldType.getValues().forEach(function (value) {
      if (!valuesInNewEnum[value.name]) {
        valuesRemovedFromEnums.push({
          type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
          description: "".concat(value.name, " was removed from enum type ").concat(typeName, ".")
        });
      }
    });
  });
  return valuesRemovedFromEnums;
}
/**
 * Given two schemas, returns an Array containing descriptions of any dangerous
 * changes in the newSchema related to adding values to an enum type.
 */


function findValuesAddedToEnums(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var valuesAddedToEnums = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isEnumType)(oldType) || !(0, definition.isEnumType)(newType)) {
      return;
    }

    var valuesInOldEnum = Object.create(null);
    oldType.getValues().forEach(function (value) {
      valuesInOldEnum[value.name] = true;
    });
    newType.getValues().forEach(function (value) {
      if (!valuesInOldEnum[value.name]) {
        valuesAddedToEnums.push({
          type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
          description: "".concat(value.name, " was added to enum type ").concat(typeName, ".")
        });
      }
    });
  });
  return valuesAddedToEnums;
}

function findInterfacesRemovedFromObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var breakingChanges = [];
  Object.keys(oldTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isObjectType)(oldType) || !(0, definition.isObjectType)(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    oldInterfaces.forEach(function (oldInterface) {
      if (!newInterfaces.some(function (int) {
        return int.name === oldInterface.name;
      })) {
        breakingChanges.push({
          type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
          description: "".concat(typeName, " no longer implements interface ") + "".concat(oldInterface.name, ".")
        });
      }
    });
  });
  return breakingChanges;
}

function findInterfacesAddedToObjectTypes(oldSchema, newSchema) {
  var oldTypeMap = oldSchema.getTypeMap();
  var newTypeMap = newSchema.getTypeMap();
  var interfacesAddedToObjectTypes = [];
  Object.keys(newTypeMap).forEach(function (typeName) {
    var oldType = oldTypeMap[typeName];
    var newType = newTypeMap[typeName];

    if (!(0, definition.isObjectType)(oldType) || !(0, definition.isObjectType)(newType)) {
      return;
    }

    var oldInterfaces = oldType.getInterfaces();
    var newInterfaces = newType.getInterfaces();
    newInterfaces.forEach(function (newInterface) {
      if (!oldInterfaces.some(function (int) {
        return int.name === newInterface.name;
      })) {
        interfacesAddedToObjectTypes.push({
          type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
          description: "".concat(newInterface.name, " added to interfaces implemented ") + "by ".concat(typeName, ".")
        });
      }
    });
  });
  return interfacesAddedToObjectTypes;
}

function findRemovedDirectives(oldSchema, newSchema) {
  var removedDirectives = [];
  var newSchemaDirectiveMap = getDirectiveMapForSchema(newSchema);
  oldSchema.getDirectives().forEach(function (directive) {
    if (!newSchemaDirectiveMap[directive.name]) {
      removedDirectives.push({
        type: BreakingChangeType.DIRECTIVE_REMOVED,
        description: "".concat(directive.name, " was removed")
      });
    }
  });
  return removedDirectives;
}

function findRemovedArgsForDirective(oldDirective, newDirective) {
  var removedArgs = [];
  var newArgMap = getArgumentMapForDirective(newDirective);
  oldDirective.args.forEach(function (arg) {
    if (!newArgMap[arg.name]) {
      removedArgs.push(arg);
    }
  });
  return removedArgs;
}

function findRemovedDirectiveArgs(oldSchema, newSchema) {
  var removedDirectiveArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];

    if (!oldDirective) {
      return;
    }

    findRemovedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      removedDirectiveArgs.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(arg.name, " was removed from ").concat(newDirective.name)
      });
    });
  });
  return removedDirectiveArgs;
}

function findAddedArgsForDirective(oldDirective, newDirective) {
  var addedArgs = [];
  var oldArgMap = getArgumentMapForDirective(oldDirective);
  newDirective.args.forEach(function (arg) {
    if (!oldArgMap[arg.name]) {
      addedArgs.push(arg);
    }
  });
  return addedArgs;
}

function findAddedNonNullDirectiveArgs(oldSchema, newSchema) {
  var addedNonNullableArgs = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];

    if (!oldDirective) {
      return;
    }

    findAddedArgsForDirective(oldDirective, newDirective).forEach(function (arg) {
      if (!(0, definition.isNonNullType)(arg.type)) {
        return;
      }

      addedNonNullableArgs.push({
        type: BreakingChangeType.NON_NULL_DIRECTIVE_ARG_ADDED,
        description: "A non-null arg ".concat(arg.name, " on directive ") + "".concat(newDirective.name, " was added")
      });
    });
  });
  return addedNonNullableArgs;
}

function findRemovedLocationsForDirective(oldDirective, newDirective) {
  var removedLocations = [];
  var newLocationSet = new Set(newDirective.locations);
  oldDirective.locations.forEach(function (oldLocation) {
    if (!newLocationSet.has(oldLocation)) {
      removedLocations.push(oldLocation);
    }
  });
  return removedLocations;
}

function findRemovedDirectiveLocations(oldSchema, newSchema) {
  var removedLocations = [];
  var oldSchemaDirectiveMap = getDirectiveMapForSchema(oldSchema);
  newSchema.getDirectives().forEach(function (newDirective) {
    var oldDirective = oldSchemaDirectiveMap[newDirective.name];

    if (!oldDirective) {
      return;
    }

    findRemovedLocationsForDirective(oldDirective, newDirective).forEach(function (location) {
      removedLocations.push({
        type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
        description: "".concat(location, " was removed from ").concat(newDirective.name)
      });
    });
  });
  return removedLocations;
}

function getDirectiveMapForSchema(schema$$1) {
  return (0, _keyMap.default)(schema$$1.getDirectives(), function (dir) {
    return dir.name;
  });
}

function getArgumentMapForDirective(directive) {
  return (0, _keyMap.default)(directive.args, function (arg) {
    return arg.name;
  });
}
});

unwrapExports(findBreakingChanges_1);
var findBreakingChanges_2 = findBreakingChanges_1.findBreakingChanges;
var findBreakingChanges_3 = findBreakingChanges_1.findDangerousChanges;
var findBreakingChanges_4 = findBreakingChanges_1.findRemovedTypes;
var findBreakingChanges_5 = findBreakingChanges_1.findTypesThatChangedKind;
var findBreakingChanges_6 = findBreakingChanges_1.findArgChanges;
var findBreakingChanges_7 = findBreakingChanges_1.findFieldsThatChangedTypeOnObjectOrInterfaceTypes;
var findBreakingChanges_8 = findBreakingChanges_1.findFieldsThatChangedTypeOnInputObjectTypes;
var findBreakingChanges_9 = findBreakingChanges_1.findTypesRemovedFromUnions;
var findBreakingChanges_10 = findBreakingChanges_1.findTypesAddedToUnions;
var findBreakingChanges_11 = findBreakingChanges_1.findValuesRemovedFromEnums;
var findBreakingChanges_12 = findBreakingChanges_1.findValuesAddedToEnums;
var findBreakingChanges_13 = findBreakingChanges_1.findInterfacesRemovedFromObjectTypes;
var findBreakingChanges_14 = findBreakingChanges_1.findInterfacesAddedToObjectTypes;
var findBreakingChanges_15 = findBreakingChanges_1.findRemovedDirectives;
var findBreakingChanges_16 = findBreakingChanges_1.findRemovedDirectiveArgs;
var findBreakingChanges_17 = findBreakingChanges_1.findAddedNonNullDirectiveArgs;
var findBreakingChanges_18 = findBreakingChanges_1.findRemovedLocationsForDirective;
var findBreakingChanges_19 = findBreakingChanges_1.findRemovedDirectiveLocations;
var findBreakingChanges_20 = findBreakingChanges_1.DangerousChangeType;
var findBreakingChanges_21 = findBreakingChanges_1.BreakingChangeType;

var findDeprecatedUsages_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDeprecatedUsages = findDeprecatedUsages;











/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *  strict
 */

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
function findDeprecatedUsages(schema$$1, ast) {
  var errors = [];
  var typeInfo = new TypeInfo_1.TypeInfo(schema$$1);
  (0, visitor.visit)(ast, (0, visitor.visitWithTypeInfo)(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();

      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();

        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new GraphQLError_1.GraphQLError("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated.") + (reason ? ' ' + reason : ''), [node]));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();

      if (enumVal && enumVal.isDeprecated) {
        var type = (0, definition.getNamedType)(typeInfo.getInputType());

        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new GraphQLError_1.GraphQLError("The enum value ".concat(type.name, ".").concat(enumVal.name, " is deprecated.") + (reason ? ' ' + reason : ''), [node]));
        }
      }
    }
  }));
  return errors;
}
});

unwrapExports(findDeprecatedUsages_1);
var findDeprecatedUsages_2 = findDeprecatedUsages_1.findDeprecatedUsages;

var utilities = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getIntrospectionQuery", {
  enumerable: true,
  get: function get() {
    return introspectionQuery_1.getIntrospectionQuery;
  }
});
Object.defineProperty(exports, "introspectionQuery", {
  enumerable: true,
  get: function get() {
    return introspectionQuery_1.introspectionQuery;
  }
});
Object.defineProperty(exports, "getOperationAST", {
  enumerable: true,
  get: function get() {
    return getOperationAST_1.getOperationAST;
  }
});
Object.defineProperty(exports, "getOperationRootType", {
  enumerable: true,
  get: function get() {
    return getOperationRootType_1.getOperationRootType;
  }
});
Object.defineProperty(exports, "introspectionFromSchema", {
  enumerable: true,
  get: function get() {
    return introspectionFromSchema_1.introspectionFromSchema;
  }
});
Object.defineProperty(exports, "buildClientSchema", {
  enumerable: true,
  get: function get() {
    return buildClientSchema_1.buildClientSchema;
  }
});
Object.defineProperty(exports, "buildASTSchema", {
  enumerable: true,
  get: function get() {
    return buildASTSchema_1.buildASTSchema;
  }
});
Object.defineProperty(exports, "buildSchema", {
  enumerable: true,
  get: function get() {
    return buildASTSchema_1.buildSchema;
  }
});
Object.defineProperty(exports, "getDescription", {
  enumerable: true,
  get: function get() {
    return buildASTSchema_1.getDescription;
  }
});
Object.defineProperty(exports, "extendSchema", {
  enumerable: true,
  get: function get() {
    return extendSchema_1.extendSchema;
  }
});
Object.defineProperty(exports, "lexicographicSortSchema", {
  enumerable: true,
  get: function get() {
    return lexicographicSortSchema_1.lexicographicSortSchema;
  }
});
Object.defineProperty(exports, "printSchema", {
  enumerable: true,
  get: function get() {
    return schemaPrinter.printSchema;
  }
});
Object.defineProperty(exports, "printType", {
  enumerable: true,
  get: function get() {
    return schemaPrinter.printType;
  }
});
Object.defineProperty(exports, "printIntrospectionSchema", {
  enumerable: true,
  get: function get() {
    return schemaPrinter.printIntrospectionSchema;
  }
});
Object.defineProperty(exports, "typeFromAST", {
  enumerable: true,
  get: function get() {
    return typeFromAST_1.typeFromAST;
  }
});
Object.defineProperty(exports, "valueFromAST", {
  enumerable: true,
  get: function get() {
    return valueFromAST_1.valueFromAST;
  }
});
Object.defineProperty(exports, "valueFromASTUntyped", {
  enumerable: true,
  get: function get() {
    return valueFromASTUntyped_1.valueFromASTUntyped;
  }
});
Object.defineProperty(exports, "astFromValue", {
  enumerable: true,
  get: function get() {
    return astFromValue_1.astFromValue;
  }
});
Object.defineProperty(exports, "TypeInfo", {
  enumerable: true,
  get: function get() {
    return TypeInfo_1.TypeInfo;
  }
});
Object.defineProperty(exports, "coerceValue", {
  enumerable: true,
  get: function get() {
    return coerceValue_1.coerceValue;
  }
});
Object.defineProperty(exports, "isValidJSValue", {
  enumerable: true,
  get: function get() {
    return isValidJSValue_1.isValidJSValue;
  }
});
Object.defineProperty(exports, "isValidLiteralValue", {
  enumerable: true,
  get: function get() {
    return isValidLiteralValue_1.isValidLiteralValue;
  }
});
Object.defineProperty(exports, "concatAST", {
  enumerable: true,
  get: function get() {
    return concatAST_1.concatAST;
  }
});
Object.defineProperty(exports, "separateOperations", {
  enumerable: true,
  get: function get() {
    return separateOperations_1.separateOperations;
  }
});
Object.defineProperty(exports, "isEqualType", {
  enumerable: true,
  get: function get() {
    return typeComparators.isEqualType;
  }
});
Object.defineProperty(exports, "isTypeSubTypeOf", {
  enumerable: true,
  get: function get() {
    return typeComparators.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, "doTypesOverlap", {
  enumerable: true,
  get: function get() {
    return typeComparators.doTypesOverlap;
  }
});
Object.defineProperty(exports, "assertValidName", {
  enumerable: true,
  get: function get() {
    return assertValidName_1.assertValidName;
  }
});
Object.defineProperty(exports, "isValidNameError", {
  enumerable: true,
  get: function get() {
    return assertValidName_1.isValidNameError;
  }
});
Object.defineProperty(exports, "BreakingChangeType", {
  enumerable: true,
  get: function get() {
    return findBreakingChanges_1.BreakingChangeType;
  }
});
Object.defineProperty(exports, "DangerousChangeType", {
  enumerable: true,
  get: function get() {
    return findBreakingChanges_1.DangerousChangeType;
  }
});
Object.defineProperty(exports, "findBreakingChanges", {
  enumerable: true,
  get: function get() {
    return findBreakingChanges_1.findBreakingChanges;
  }
});
Object.defineProperty(exports, "findDangerousChanges", {
  enumerable: true,
  get: function get() {
    return findBreakingChanges_1.findDangerousChanges;
  }
});
Object.defineProperty(exports, "findDeprecatedUsages", {
  enumerable: true,
  get: function get() {
    return findDeprecatedUsages_1.findDeprecatedUsages;
  }
});
});

unwrapExports(utilities);

var graphql$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "graphql", {
  enumerable: true,
  get: function get() {
    return graphql_1.graphql;
  }
});
Object.defineProperty(exports, "graphqlSync", {
  enumerable: true,
  get: function get() {
    return graphql_1.graphqlSync;
  }
});
Object.defineProperty(exports, "GraphQLSchema", {
  enumerable: true,
  get: function get() {
    return type.GraphQLSchema;
  }
});
Object.defineProperty(exports, "GraphQLScalarType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLScalarType;
  }
});
Object.defineProperty(exports, "GraphQLObjectType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLObjectType;
  }
});
Object.defineProperty(exports, "GraphQLInterfaceType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLInterfaceType;
  }
});
Object.defineProperty(exports, "GraphQLUnionType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLUnionType;
  }
});
Object.defineProperty(exports, "GraphQLEnumType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLEnumType;
  }
});
Object.defineProperty(exports, "GraphQLInputObjectType", {
  enumerable: true,
  get: function get() {
    return type.GraphQLInputObjectType;
  }
});
Object.defineProperty(exports, "GraphQLList", {
  enumerable: true,
  get: function get() {
    return type.GraphQLList;
  }
});
Object.defineProperty(exports, "GraphQLNonNull", {
  enumerable: true,
  get: function get() {
    return type.GraphQLNonNull;
  }
});
Object.defineProperty(exports, "GraphQLDirective", {
  enumerable: true,
  get: function get() {
    return type.GraphQLDirective;
  }
});
Object.defineProperty(exports, "TypeKind", {
  enumerable: true,
  get: function get() {
    return type.TypeKind;
  }
});
Object.defineProperty(exports, "specifiedScalarTypes", {
  enumerable: true,
  get: function get() {
    return type.specifiedScalarTypes;
  }
});
Object.defineProperty(exports, "GraphQLInt", {
  enumerable: true,
  get: function get() {
    return type.GraphQLInt;
  }
});
Object.defineProperty(exports, "GraphQLFloat", {
  enumerable: true,
  get: function get() {
    return type.GraphQLFloat;
  }
});
Object.defineProperty(exports, "GraphQLString", {
  enumerable: true,
  get: function get() {
    return type.GraphQLString;
  }
});
Object.defineProperty(exports, "GraphQLBoolean", {
  enumerable: true,
  get: function get() {
    return type.GraphQLBoolean;
  }
});
Object.defineProperty(exports, "GraphQLID", {
  enumerable: true,
  get: function get() {
    return type.GraphQLID;
  }
});
Object.defineProperty(exports, "specifiedDirectives", {
  enumerable: true,
  get: function get() {
    return type.specifiedDirectives;
  }
});
Object.defineProperty(exports, "GraphQLIncludeDirective", {
  enumerable: true,
  get: function get() {
    return type.GraphQLIncludeDirective;
  }
});
Object.defineProperty(exports, "GraphQLSkipDirective", {
  enumerable: true,
  get: function get() {
    return type.GraphQLSkipDirective;
  }
});
Object.defineProperty(exports, "GraphQLDeprecatedDirective", {
  enumerable: true,
  get: function get() {
    return type.GraphQLDeprecatedDirective;
  }
});
Object.defineProperty(exports, "DEFAULT_DEPRECATION_REASON", {
  enumerable: true,
  get: function get() {
    return type.DEFAULT_DEPRECATION_REASON;
  }
});
Object.defineProperty(exports, "SchemaMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return type.SchemaMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return type.TypeMetaFieldDef;
  }
});
Object.defineProperty(exports, "TypeNameMetaFieldDef", {
  enumerable: true,
  get: function get() {
    return type.TypeNameMetaFieldDef;
  }
});
Object.defineProperty(exports, "introspectionTypes", {
  enumerable: true,
  get: function get() {
    return type.introspectionTypes;
  }
});
Object.defineProperty(exports, "__Schema", {
  enumerable: true,
  get: function get() {
    return type.__Schema;
  }
});
Object.defineProperty(exports, "__Directive", {
  enumerable: true,
  get: function get() {
    return type.__Directive;
  }
});
Object.defineProperty(exports, "__DirectiveLocation", {
  enumerable: true,
  get: function get() {
    return type.__DirectiveLocation;
  }
});
Object.defineProperty(exports, "__Type", {
  enumerable: true,
  get: function get() {
    return type.__Type;
  }
});
Object.defineProperty(exports, "__Field", {
  enumerable: true,
  get: function get() {
    return type.__Field;
  }
});
Object.defineProperty(exports, "__InputValue", {
  enumerable: true,
  get: function get() {
    return type.__InputValue;
  }
});
Object.defineProperty(exports, "__EnumValue", {
  enumerable: true,
  get: function get() {
    return type.__EnumValue;
  }
});
Object.defineProperty(exports, "__TypeKind", {
  enumerable: true,
  get: function get() {
    return type.__TypeKind;
  }
});
Object.defineProperty(exports, "isSchema", {
  enumerable: true,
  get: function get() {
    return type.isSchema;
  }
});
Object.defineProperty(exports, "isDirective", {
  enumerable: true,
  get: function get() {
    return type.isDirective;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function get() {
    return type.isType;
  }
});
Object.defineProperty(exports, "isScalarType", {
  enumerable: true,
  get: function get() {
    return type.isScalarType;
  }
});
Object.defineProperty(exports, "isObjectType", {
  enumerable: true,
  get: function get() {
    return type.isObjectType;
  }
});
Object.defineProperty(exports, "isInterfaceType", {
  enumerable: true,
  get: function get() {
    return type.isInterfaceType;
  }
});
Object.defineProperty(exports, "isUnionType", {
  enumerable: true,
  get: function get() {
    return type.isUnionType;
  }
});
Object.defineProperty(exports, "isEnumType", {
  enumerable: true,
  get: function get() {
    return type.isEnumType;
  }
});
Object.defineProperty(exports, "isInputObjectType", {
  enumerable: true,
  get: function get() {
    return type.isInputObjectType;
  }
});
Object.defineProperty(exports, "isListType", {
  enumerable: true,
  get: function get() {
    return type.isListType;
  }
});
Object.defineProperty(exports, "isNonNullType", {
  enumerable: true,
  get: function get() {
    return type.isNonNullType;
  }
});
Object.defineProperty(exports, "isInputType", {
  enumerable: true,
  get: function get() {
    return type.isInputType;
  }
});
Object.defineProperty(exports, "isOutputType", {
  enumerable: true,
  get: function get() {
    return type.isOutputType;
  }
});
Object.defineProperty(exports, "isLeafType", {
  enumerable: true,
  get: function get() {
    return type.isLeafType;
  }
});
Object.defineProperty(exports, "isCompositeType", {
  enumerable: true,
  get: function get() {
    return type.isCompositeType;
  }
});
Object.defineProperty(exports, "isAbstractType", {
  enumerable: true,
  get: function get() {
    return type.isAbstractType;
  }
});
Object.defineProperty(exports, "isWrappingType", {
  enumerable: true,
  get: function get() {
    return type.isWrappingType;
  }
});
Object.defineProperty(exports, "isNullableType", {
  enumerable: true,
  get: function get() {
    return type.isNullableType;
  }
});
Object.defineProperty(exports, "isNamedType", {
  enumerable: true,
  get: function get() {
    return type.isNamedType;
  }
});
Object.defineProperty(exports, "isSpecifiedScalarType", {
  enumerable: true,
  get: function get() {
    return type.isSpecifiedScalarType;
  }
});
Object.defineProperty(exports, "isIntrospectionType", {
  enumerable: true,
  get: function get() {
    return type.isIntrospectionType;
  }
});
Object.defineProperty(exports, "isSpecifiedDirective", {
  enumerable: true,
  get: function get() {
    return type.isSpecifiedDirective;
  }
});
Object.defineProperty(exports, "assertType", {
  enumerable: true,
  get: function get() {
    return type.assertType;
  }
});
Object.defineProperty(exports, "assertScalarType", {
  enumerable: true,
  get: function get() {
    return type.assertScalarType;
  }
});
Object.defineProperty(exports, "assertObjectType", {
  enumerable: true,
  get: function get() {
    return type.assertObjectType;
  }
});
Object.defineProperty(exports, "assertInterfaceType", {
  enumerable: true,
  get: function get() {
    return type.assertInterfaceType;
  }
});
Object.defineProperty(exports, "assertUnionType", {
  enumerable: true,
  get: function get() {
    return type.assertUnionType;
  }
});
Object.defineProperty(exports, "assertEnumType", {
  enumerable: true,
  get: function get() {
    return type.assertEnumType;
  }
});
Object.defineProperty(exports, "assertInputObjectType", {
  enumerable: true,
  get: function get() {
    return type.assertInputObjectType;
  }
});
Object.defineProperty(exports, "assertListType", {
  enumerable: true,
  get: function get() {
    return type.assertListType;
  }
});
Object.defineProperty(exports, "assertNonNullType", {
  enumerable: true,
  get: function get() {
    return type.assertNonNullType;
  }
});
Object.defineProperty(exports, "assertInputType", {
  enumerable: true,
  get: function get() {
    return type.assertInputType;
  }
});
Object.defineProperty(exports, "assertOutputType", {
  enumerable: true,
  get: function get() {
    return type.assertOutputType;
  }
});
Object.defineProperty(exports, "assertLeafType", {
  enumerable: true,
  get: function get() {
    return type.assertLeafType;
  }
});
Object.defineProperty(exports, "assertCompositeType", {
  enumerable: true,
  get: function get() {
    return type.assertCompositeType;
  }
});
Object.defineProperty(exports, "assertAbstractType", {
  enumerable: true,
  get: function get() {
    return type.assertAbstractType;
  }
});
Object.defineProperty(exports, "assertWrappingType", {
  enumerable: true,
  get: function get() {
    return type.assertWrappingType;
  }
});
Object.defineProperty(exports, "assertNullableType", {
  enumerable: true,
  get: function get() {
    return type.assertNullableType;
  }
});
Object.defineProperty(exports, "assertNamedType", {
  enumerable: true,
  get: function get() {
    return type.assertNamedType;
  }
});
Object.defineProperty(exports, "getNullableType", {
  enumerable: true,
  get: function get() {
    return type.getNullableType;
  }
});
Object.defineProperty(exports, "getNamedType", {
  enumerable: true,
  get: function get() {
    return type.getNamedType;
  }
});
Object.defineProperty(exports, "validateSchema", {
  enumerable: true,
  get: function get() {
    return type.validateSchema;
  }
});
Object.defineProperty(exports, "assertValidSchema", {
  enumerable: true,
  get: function get() {
    return type.assertValidSchema;
  }
});
Object.defineProperty(exports, "Source", {
  enumerable: true,
  get: function get() {
    return language.Source;
  }
});
Object.defineProperty(exports, "getLocation", {
  enumerable: true,
  get: function get() {
    return language.getLocation;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return language.parse;
  }
});
Object.defineProperty(exports, "parseValue", {
  enumerable: true,
  get: function get() {
    return language.parseValue;
  }
});
Object.defineProperty(exports, "parseType", {
  enumerable: true,
  get: function get() {
    return language.parseType;
  }
});
Object.defineProperty(exports, "print", {
  enumerable: true,
  get: function get() {
    return language.print;
  }
});
Object.defineProperty(exports, "visit", {
  enumerable: true,
  get: function get() {
    return language.visit;
  }
});
Object.defineProperty(exports, "visitInParallel", {
  enumerable: true,
  get: function get() {
    return language.visitInParallel;
  }
});
Object.defineProperty(exports, "visitWithTypeInfo", {
  enumerable: true,
  get: function get() {
    return language.visitWithTypeInfo;
  }
});
Object.defineProperty(exports, "getVisitFn", {
  enumerable: true,
  get: function get() {
    return language.getVisitFn;
  }
});
Object.defineProperty(exports, "Kind", {
  enumerable: true,
  get: function get() {
    return language.Kind;
  }
});
Object.defineProperty(exports, "TokenKind", {
  enumerable: true,
  get: function get() {
    return language.TokenKind;
  }
});
Object.defineProperty(exports, "DirectiveLocation", {
  enumerable: true,
  get: function get() {
    return language.DirectiveLocation;
  }
});
Object.defineProperty(exports, "BREAK", {
  enumerable: true,
  get: function get() {
    return language.BREAK;
  }
});
Object.defineProperty(exports, "execute", {
  enumerable: true,
  get: function get() {
    return execution.execute;
  }
});
Object.defineProperty(exports, "defaultFieldResolver", {
  enumerable: true,
  get: function get() {
    return execution.defaultFieldResolver;
  }
});
Object.defineProperty(exports, "responsePathAsArray", {
  enumerable: true,
  get: function get() {
    return execution.responsePathAsArray;
  }
});
Object.defineProperty(exports, "getDirectiveValues", {
  enumerable: true,
  get: function get() {
    return execution.getDirectiveValues;
  }
});
Object.defineProperty(exports, "subscribe", {
  enumerable: true,
  get: function get() {
    return subscription.subscribe;
  }
});
Object.defineProperty(exports, "createSourceEventStream", {
  enumerable: true,
  get: function get() {
    return subscription.createSourceEventStream;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function get() {
    return validation.validate;
  }
});
Object.defineProperty(exports, "ValidationContext", {
  enumerable: true,
  get: function get() {
    return validation.ValidationContext;
  }
});
Object.defineProperty(exports, "specifiedRules", {
  enumerable: true,
  get: function get() {
    return validation.specifiedRules;
  }
});
Object.defineProperty(exports, "FieldsOnCorrectTypeRule", {
  enumerable: true,
  get: function get() {
    return validation.FieldsOnCorrectTypeRule;
  }
});
Object.defineProperty(exports, "FragmentsOnCompositeTypesRule", {
  enumerable: true,
  get: function get() {
    return validation.FragmentsOnCompositeTypesRule;
  }
});
Object.defineProperty(exports, "KnownArgumentNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.KnownArgumentNamesRule;
  }
});
Object.defineProperty(exports, "KnownDirectivesRule", {
  enumerable: true,
  get: function get() {
    return validation.KnownDirectivesRule;
  }
});
Object.defineProperty(exports, "KnownFragmentNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.KnownFragmentNamesRule;
  }
});
Object.defineProperty(exports, "KnownTypeNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.KnownTypeNamesRule;
  }
});
Object.defineProperty(exports, "LoneAnonymousOperationRule", {
  enumerable: true,
  get: function get() {
    return validation.LoneAnonymousOperationRule;
  }
});
Object.defineProperty(exports, "NoFragmentCyclesRule", {
  enumerable: true,
  get: function get() {
    return validation.NoFragmentCyclesRule;
  }
});
Object.defineProperty(exports, "NoUndefinedVariablesRule", {
  enumerable: true,
  get: function get() {
    return validation.NoUndefinedVariablesRule;
  }
});
Object.defineProperty(exports, "NoUnusedFragmentsRule", {
  enumerable: true,
  get: function get() {
    return validation.NoUnusedFragmentsRule;
  }
});
Object.defineProperty(exports, "NoUnusedVariablesRule", {
  enumerable: true,
  get: function get() {
    return validation.NoUnusedVariablesRule;
  }
});
Object.defineProperty(exports, "OverlappingFieldsCanBeMergedRule", {
  enumerable: true,
  get: function get() {
    return validation.OverlappingFieldsCanBeMergedRule;
  }
});
Object.defineProperty(exports, "PossibleFragmentSpreadsRule", {
  enumerable: true,
  get: function get() {
    return validation.PossibleFragmentSpreadsRule;
  }
});
Object.defineProperty(exports, "ProvidedRequiredArgumentsRule", {
  enumerable: true,
  get: function get() {
    return validation.ProvidedRequiredArgumentsRule;
  }
});
Object.defineProperty(exports, "ScalarLeafsRule", {
  enumerable: true,
  get: function get() {
    return validation.ScalarLeafsRule;
  }
});
Object.defineProperty(exports, "SingleFieldSubscriptionsRule", {
  enumerable: true,
  get: function get() {
    return validation.SingleFieldSubscriptionsRule;
  }
});
Object.defineProperty(exports, "UniqueArgumentNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueArgumentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueDirectivesPerLocationRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueDirectivesPerLocationRule;
  }
});
Object.defineProperty(exports, "UniqueFragmentNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueFragmentNamesRule;
  }
});
Object.defineProperty(exports, "UniqueInputFieldNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueInputFieldNamesRule;
  }
});
Object.defineProperty(exports, "UniqueOperationNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueOperationNamesRule;
  }
});
Object.defineProperty(exports, "UniqueVariableNamesRule", {
  enumerable: true,
  get: function get() {
    return validation.UniqueVariableNamesRule;
  }
});
Object.defineProperty(exports, "ValuesOfCorrectTypeRule", {
  enumerable: true,
  get: function get() {
    return validation.ValuesOfCorrectTypeRule;
  }
});
Object.defineProperty(exports, "VariablesAreInputTypesRule", {
  enumerable: true,
  get: function get() {
    return validation.VariablesAreInputTypesRule;
  }
});
Object.defineProperty(exports, "VariablesInAllowedPositionRule", {
  enumerable: true,
  get: function get() {
    return validation.VariablesInAllowedPositionRule;
  }
});
Object.defineProperty(exports, "GraphQLError", {
  enumerable: true,
  get: function get() {
    return error.GraphQLError;
  }
});
Object.defineProperty(exports, "formatError", {
  enumerable: true,
  get: function get() {
    return error.formatError;
  }
});
Object.defineProperty(exports, "printError", {
  enumerable: true,
  get: function get() {
    return error.printError;
  }
});
Object.defineProperty(exports, "getIntrospectionQuery", {
  enumerable: true,
  get: function get() {
    return utilities.getIntrospectionQuery;
  }
});
Object.defineProperty(exports, "introspectionQuery", {
  enumerable: true,
  get: function get() {
    return utilities.introspectionQuery;
  }
});
Object.defineProperty(exports, "getOperationAST", {
  enumerable: true,
  get: function get() {
    return utilities.getOperationAST;
  }
});
Object.defineProperty(exports, "getOperationRootType", {
  enumerable: true,
  get: function get() {
    return utilities.getOperationRootType;
  }
});
Object.defineProperty(exports, "introspectionFromSchema", {
  enumerable: true,
  get: function get() {
    return utilities.introspectionFromSchema;
  }
});
Object.defineProperty(exports, "buildClientSchema", {
  enumerable: true,
  get: function get() {
    return utilities.buildClientSchema;
  }
});
Object.defineProperty(exports, "buildASTSchema", {
  enumerable: true,
  get: function get() {
    return utilities.buildASTSchema;
  }
});
Object.defineProperty(exports, "buildSchema", {
  enumerable: true,
  get: function get() {
    return utilities.buildSchema;
  }
});
Object.defineProperty(exports, "getDescription", {
  enumerable: true,
  get: function get() {
    return utilities.getDescription;
  }
});
Object.defineProperty(exports, "extendSchema", {
  enumerable: true,
  get: function get() {
    return utilities.extendSchema;
  }
});
Object.defineProperty(exports, "lexicographicSortSchema", {
  enumerable: true,
  get: function get() {
    return utilities.lexicographicSortSchema;
  }
});
Object.defineProperty(exports, "printSchema", {
  enumerable: true,
  get: function get() {
    return utilities.printSchema;
  }
});
Object.defineProperty(exports, "printIntrospectionSchema", {
  enumerable: true,
  get: function get() {
    return utilities.printIntrospectionSchema;
  }
});
Object.defineProperty(exports, "printType", {
  enumerable: true,
  get: function get() {
    return utilities.printType;
  }
});
Object.defineProperty(exports, "typeFromAST", {
  enumerable: true,
  get: function get() {
    return utilities.typeFromAST;
  }
});
Object.defineProperty(exports, "valueFromAST", {
  enumerable: true,
  get: function get() {
    return utilities.valueFromAST;
  }
});
Object.defineProperty(exports, "valueFromASTUntyped", {
  enumerable: true,
  get: function get() {
    return utilities.valueFromASTUntyped;
  }
});
Object.defineProperty(exports, "astFromValue", {
  enumerable: true,
  get: function get() {
    return utilities.astFromValue;
  }
});
Object.defineProperty(exports, "TypeInfo", {
  enumerable: true,
  get: function get() {
    return utilities.TypeInfo;
  }
});
Object.defineProperty(exports, "coerceValue", {
  enumerable: true,
  get: function get() {
    return utilities.coerceValue;
  }
});
Object.defineProperty(exports, "isValidJSValue", {
  enumerable: true,
  get: function get() {
    return utilities.isValidJSValue;
  }
});
Object.defineProperty(exports, "isValidLiteralValue", {
  enumerable: true,
  get: function get() {
    return utilities.isValidLiteralValue;
  }
});
Object.defineProperty(exports, "concatAST", {
  enumerable: true,
  get: function get() {
    return utilities.concatAST;
  }
});
Object.defineProperty(exports, "separateOperations", {
  enumerable: true,
  get: function get() {
    return utilities.separateOperations;
  }
});
Object.defineProperty(exports, "isEqualType", {
  enumerable: true,
  get: function get() {
    return utilities.isEqualType;
  }
});
Object.defineProperty(exports, "isTypeSubTypeOf", {
  enumerable: true,
  get: function get() {
    return utilities.isTypeSubTypeOf;
  }
});
Object.defineProperty(exports, "doTypesOverlap", {
  enumerable: true,
  get: function get() {
    return utilities.doTypesOverlap;
  }
});
Object.defineProperty(exports, "assertValidName", {
  enumerable: true,
  get: function get() {
    return utilities.assertValidName;
  }
});
Object.defineProperty(exports, "isValidNameError", {
  enumerable: true,
  get: function get() {
    return utilities.isValidNameError;
  }
});
Object.defineProperty(exports, "findBreakingChanges", {
  enumerable: true,
  get: function get() {
    return utilities.findBreakingChanges;
  }
});
Object.defineProperty(exports, "findDangerousChanges", {
  enumerable: true,
  get: function get() {
    return utilities.findDangerousChanges;
  }
});
Object.defineProperty(exports, "BreakingChangeType", {
  enumerable: true,
  get: function get() {
    return utilities.BreakingChangeType;
  }
});
Object.defineProperty(exports, "DangerousChangeType", {
  enumerable: true,
  get: function get() {
    return utilities.DangerousChangeType;
  }
});
Object.defineProperty(exports, "findDeprecatedUsages", {
  enumerable: true,
  get: function get() {
    return utilities.findDeprecatedUsages;
  }
});
});

unwrapExports(graphql$1);

var schemaVisitor = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });


var hasOwn = Object.prototype.hasOwnProperty;
// Abstract base class of any visitor implementation, defining the available
// visitor methods along with their parameter types, and providing a static
// helper function for determining whether a subclass implements a given
// visitor method, as opposed to inheriting one of the stubs defined here.
var SchemaVisitor = /** @class */ (function () {
    function SchemaVisitor() {
    }
    // Determine if this SchemaVisitor (sub)class implements a particular
    // visitor method.
    SchemaVisitor.implementsVisitorMethod = function (methodName) {
        if (!methodName.startsWith('visit')) {
            return false;
        }
        var method = this.prototype[methodName];
        if (typeof method !== 'function') {
            return false;
        }
        if (this === SchemaVisitor) {
            // The SchemaVisitor class implements every visitor method.
            return true;
        }
        var stub = SchemaVisitor.prototype[methodName];
        if (method === stub) {
            // If this.prototype[methodName] was just inherited from SchemaVisitor,
            // then this class does not really implement the method.
            return false;
        }
        return true;
    };
    // Concrete subclasses of SchemaVisitor should override one or more of these
    // visitor methods, in order to express their interest in handling certain
    // schema types/locations. Each method may return null to remove the given
    // type from the schema, a non-null value of the same type to update the
    // type in the schema, or nothing to leave the type as it was.
    /* tslint:disable:no-empty */
    SchemaVisitor.prototype.visitSchema = function (schema) { };
    SchemaVisitor.prototype.visitScalar = function (scalar) { };
    SchemaVisitor.prototype.visitObject = function (object) { };
    SchemaVisitor.prototype.visitFieldDefinition = function (field, details) { };
    SchemaVisitor.prototype.visitArgumentDefinition = function (argument, details) { };
    SchemaVisitor.prototype.visitInterface = function (iface) { };
    SchemaVisitor.prototype.visitUnion = function (union) { };
    SchemaVisitor.prototype.visitEnum = function (type) { };
    SchemaVisitor.prototype.visitEnumValue = function (value, details) { };
    SchemaVisitor.prototype.visitInputObject = function (object) { };
    SchemaVisitor.prototype.visitInputFieldDefinition = function (field, details) { };
    return SchemaVisitor;
}());
exports.SchemaVisitor = SchemaVisitor;
// Generic function for visiting GraphQLSchema objects.
function visitSchema(schema, 
    // To accommodate as many different visitor patterns as possible, the
    // visitSchema function does not simply accept a single instance of the
    // SchemaVisitor class, but instead accepts a function that takes the
    // current VisitableSchemaType object and the name of a visitor method and
    // returns an array of SchemaVisitor instances that implement the visitor
    // method and have an interest in handling the given VisitableSchemaType
    // object. In the simplest case, this function can always return an array
    // containing a single visitor object, without even looking at the type or
    // methodName parameters. In other cases, this function might sometimes
    // return an empty array to indicate there are no visitors that should be
    // applied to the given VisitableSchemaType object. For an example of a
    // visitor pattern that benefits from this abstraction, see the
    // SchemaDirectiveVisitor class below.
    visitorSelector) {
    // Helper function that calls visitorSelector and applies the resulting
    // visitors to the given type, with arguments [type, ...args].
    function callMethod(methodName, type) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        visitorSelector(type, methodName).every(function (visitor) {
            var newType = visitor[methodName].apply(visitor, [type].concat(args));
            if (typeof newType === 'undefined') {
                // Keep going without modifying type.
                return true;
            }
            if (methodName === 'visitSchema' ||
                type instanceof graphql$1.GraphQLSchema) {
                throw new Error("Method " + methodName + " cannot replace schema with " + newType);
            }
            if (newType === null) {
                // Stop the loop and return null form callMethod, which will cause
                // the type to be removed from the schema.
                type = null;
                return false;
            }
            // Update type to the new type returned by the visitor method, so that
            // later directives will see the new type, and callMethod will return
            // the final type.
            type = newType;
            return true;
        });
        // If there were no directives for this type object, or if all visitor
        // methods returned nothing, type will be returned unmodified.
        return type;
    }
    // Recursive helper function that calls any appropriate visitor methods for
    // each object in the schema, then traverses the object's children (if any).
    function visit(type) {
        if (type instanceof graphql$1.GraphQLSchema) {
            // Unlike the other types, the root GraphQLSchema object cannot be
            // replaced by visitor methods, because that would make life very hard
            // for SchemaVisitor subclasses that rely on the original schema object.
            callMethod('visitSchema', type);
            updateEachKey(type.getTypeMap(), function (namedType, typeName) {
                if (!typeName.startsWith('__')) {
                    // Call visit recursively to let it determine which concrete
                    // subclass of GraphQLNamedType we found in the type map. Because
                    // we're using updateEachKey, the result of visit(namedType) may
                    // cause the type to be removed or replaced.
                    return visit(namedType);
                }
            });
            return type;
        }
        if (type instanceof graphql$1.GraphQLObjectType) {
            // Note that callMethod('visitObject', type) may not actually call any
            // methods, if there are no @directive annotations associated with this
            // type, or if this SchemaDirectiveVisitor subclass does not override
            // the visitObject method.
            var newObject = callMethod('visitObject', type);
            if (newObject) {
                visitFields(newObject);
            }
            return newObject;
        }
        if (type instanceof graphql$1.GraphQLInterfaceType) {
            var newInterface = callMethod('visitInterface', type);
            if (newInterface) {
                visitFields(newInterface);
            }
            return newInterface;
        }
        if (type instanceof graphql$1.GraphQLInputObjectType) {
            var newInputObject_1 = callMethod('visitInputObject', type);
            if (newInputObject_1) {
                updateEachKey(newInputObject_1.getFields(), function (field) {
                    // Since we call a different method for input object fields, we
                    // can't reuse the visitFields function here.
                    return callMethod('visitInputFieldDefinition', field, {
                        objectType: newInputObject_1,
                    });
                });
            }
            return newInputObject_1;
        }
        if (type instanceof graphql$1.GraphQLScalarType) {
            return callMethod('visitScalar', type);
        }
        if (type instanceof graphql$1.GraphQLUnionType) {
            return callMethod('visitUnion', type);
        }
        if (type instanceof graphql$1.GraphQLEnumType) {
            var newEnum_1 = callMethod('visitEnum', type);
            if (newEnum_1) {
                updateEachKey(newEnum_1.getValues(), function (value) {
                    return callMethod('visitEnumValue', value, {
                        enumType: newEnum_1,
                    });
                });
            }
            return newEnum_1;
        }
        throw new Error("Unexpected schema type: " + type);
    }
    function visitFields(type) {
        updateEachKey(type.getFields(), function (field) {
            // It would be nice if we could call visit(field) recursively here, but
            // GraphQLField is merely a type, not a value that can be detected using
            // an instanceof check, so we have to visit the fields in this lexical
            // context, so that TypeScript can validate the call to
            // visitFieldDefinition.
            var newField = callMethod('visitFieldDefinition', field, {
                // While any field visitor needs a reference to the field object, some
                // field visitors may also need to know the enclosing (parent) type,
                // perhaps to determine if the parent is a GraphQLObjectType or a
                // GraphQLInterfaceType. To obtain a reference to the parent, a
                // visitor method can have a second parameter, which will be an object
                // with an .objectType property referring to the parent.
                objectType: type,
            });
            if (newField && newField.args) {
                updateEachKey(newField.args, function (arg) {
                    return callMethod('visitArgumentDefinition', arg, {
                        // Like visitFieldDefinition, visitArgumentDefinition takes a
                        // second parameter that provides additional context, namely the
                        // parent .field and grandparent .objectType. Remember that the
                        // current GraphQLSchema is always available via this.schema.
                        field: newField,
                        objectType: type,
                    });
                });
            }
            return newField;
        });
    }
    visit(schema);
    // Return the original schema for convenience, even though it cannot have
    // been replaced or removed by the code above.
    return schema;
}
exports.visitSchema = visitSchema;
// Update any references to named schema types that disagree with the named
// types found in schema.getTypeMap().
function healSchema(schema) {
    heal(schema);
    return schema;
    function heal(type) {
        if (type instanceof graphql$1.GraphQLSchema) {
            var originalTypeMap_1 = type.getTypeMap();
            var actualNamedTypeMap_1 = Object.create(null);
            // If any of the .name properties of the GraphQLNamedType objects in
            // schema.getTypeMap() have changed, the keys of the type map need to
            // be updated accordingly.
            each(originalTypeMap_1, function (namedType, typeName) {
                if (typeName.startsWith('__')) {
                    return;
                }
                var actualName = namedType.name;
                if (actualName.startsWith('__')) {
                    return;
                }
                if (hasOwn.call(actualNamedTypeMap_1, actualName)) {
                    throw new Error("Duplicate schema type name " + actualName);
                }
                actualNamedTypeMap_1[actualName] = namedType;
                // Note: we are deliberately leaving namedType in the schema by its
                // original name (which might be different from actualName), so that
                // references by that name can be healed.
            });
            // Now add back every named type by its actual name.
            each(actualNamedTypeMap_1, function (namedType, typeName) {
                originalTypeMap_1[typeName] = namedType;
            });
            // Directive declaration argument types can refer to named types.
            each(type.getDirectives(), function (decl) {
                if (decl.args) {
                    each(decl.args, function (arg) {
                        arg.type = healType(arg.type);
                    });
                }
            });
            each(originalTypeMap_1, function (namedType, typeName) {
                if (!typeName.startsWith('__')) {
                    heal(namedType);
                }
            });
            updateEachKey(originalTypeMap_1, function (namedType, typeName) {
                // Dangling references to renamed types should remain in the schema
                // during healing, but must be removed now, so that the following
                // invariant holds for all names: schema.getType(name).name === name
                if (!typeName.startsWith('__') &&
                    !hasOwn.call(actualNamedTypeMap_1, typeName)) {
                    return null;
                }
            });
        }
        else if (type instanceof graphql$1.GraphQLObjectType) {
            healFields(type);
            each(type.getInterfaces(), function (iface) { return heal(iface); });
        }
        else if (type instanceof graphql$1.GraphQLInterfaceType) {
            healFields(type);
        }
        else if (type instanceof graphql$1.GraphQLInputObjectType) {
            each(type.getFields(), function (field) {
                field.type = healType(field.type);
            });
        }
        else if (type instanceof graphql$1.GraphQLScalarType) ;
        else if (type instanceof graphql$1.GraphQLUnionType) {
            updateEachKey(type.getTypes(), function (t) { return healType(t); });
        }
        else if (type instanceof graphql$1.GraphQLEnumType) ;
        else {
            throw new Error("Unexpected schema type: " + type);
        }
    }
    function healFields(type) {
        each(type.getFields(), function (field) {
            field.type = healType(field.type);
            if (field.args) {
                each(field.args, function (arg) {
                    arg.type = healType(arg.type);
                });
            }
        });
    }
    function healType(type) {
        if (type instanceof graphql$1.GraphQLList ||
            type instanceof graphql$1.GraphQLNonNull) {
            // Unwrap the two known wrapper types:
            // https://github.com/graphql/graphql-js/blob/master/src/type/wrappers.js
            type.ofType = healType(type.ofType);
        }
        else if (graphql$1.isNamedType(type)) {
            // If a type annotation on a field or an argument or a union member is
            // any `GraphQLNamedType` with a `name`, then it must end up identical
            // to `schema.getType(name)`, since `schema.getTypeMap()` is the source
            // of truth for all named schema types.
            var namedType = type;
            var officialType = schema.getType(namedType.name);
            if (officialType && namedType !== officialType) {
                return officialType;
            }
        }
        return type;
    }
}
exports.healSchema = healSchema;
// This class represents a reusable implementation of a @directive that may
// appear in a GraphQL schema written in Schema Definition Language.
//
// By overriding one or more visit{Object,Union,...} methods, a subclass
// registers interest in certain schema types, such as GraphQLObjectType,
// GraphQLUnionType, etc. When SchemaDirectiveVisitor.visitSchemaDirectives is
// called with a GraphQLSchema object and a map of visitor subclasses, the
// overidden methods of those subclasses allow the visitors to obtain
// references to any type objects that have @directives attached to them,
// enabling visitors to inspect or modify the schema as appropriate.
//
// For example, if a directive called @rest(url: "...") appears after a field
// definition, a SchemaDirectiveVisitor subclass could provide meaning to that
// directive by overriding the visitFieldDefinition method (which receives a
// GraphQLField parameter), and then the body of that visitor method could
// manipulate the field's resolver function to fetch data from a REST endpoint
// described by the url argument passed to the @rest directive:
//
//   const typeDefs = `
//   type Query {
//     people: [Person] @rest(url: "/api/v1/people")
//   }`;
//
//   const schema = makeExecutableSchema({ typeDefs });
//
//   SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
//     rest: class extends SchemaDirectiveVisitor {
//       public visitFieldDefinition(field: GraphQLField<any, any>) {
//         const { url } = this.args;
//         field.resolve = () => fetch(url);
//       }
//     }
//   });
//
// The subclass in this example is defined as an anonymous class expression,
// for brevity. A truly reusable SchemaDirectiveVisitor would most likely be
// defined in a library using a named class declaration, and then exported for
// consumption by other modules and packages.
//
// See below for a complete list of overridable visitor methods, their
// parameter types, and more details about the properties exposed by instances
// of the SchemaDirectiveVisitor class.
var SchemaDirectiveVisitor = /** @class */ (function (_super) {
    __extends(SchemaDirectiveVisitor, _super);
    // Mark the constructor protected to enforce passing SchemaDirectiveVisitor
    // subclasses (not instances) to visitSchemaDirectives.
    function SchemaDirectiveVisitor(config) {
        var _this = _super.call(this) || this;
        _this.name = config.name;
        _this.args = config.args;
        _this.visitedType = config.visitedType;
        _this.schema = config.schema;
        _this.context = config.context;
        return _this;
    }
    // Override this method to return a custom GraphQLDirective (or modify one
    // already present in the schema) to enforce argument types, provide default
    // argument values, or specify schema locations where this @directive may
    // appear. By default, any declaration found in the schema will be returned.
    SchemaDirectiveVisitor.getDirectiveDeclaration = function (directiveName, schema) {
        return schema.getDirective(directiveName);
    };
    // Call SchemaDirectiveVisitor.visitSchemaDirectives to visit every
    // @directive in the schema and create an appropriate SchemaDirectiveVisitor
    // instance to visit the object decorated by the @directive.
    SchemaDirectiveVisitor.visitSchemaDirectives = function (schema, directiveVisitors, 
        // Optional context object that will be available to all visitor instances
        // via this.context. Defaults to an empty null-prototype object.
        context) {
        // Optional context object that will be available to all visitor instances
        // via this.context. Defaults to an empty null-prototype object.
        if (context === void 0) { context = Object.create(null); }
        // If the schema declares any directives for public consumption, record
        // them here so that we can properly coerce arguments when/if we encounter
        // an occurrence of the directive while walking the schema below.
        var declaredDirectives = this.getDeclaredDirectives(schema, directiveVisitors);
        // Map from directive names to lists of SchemaDirectiveVisitor instances
        // created while visiting the schema.
        var createdVisitors = Object.create(null);
        Object.keys(directiveVisitors).forEach(function (directiveName) {
            createdVisitors[directiveName] = [];
        });
        function visitorSelector(type, methodName) {
            var visitors = [];
            var directiveNodes = type.astNode && type.astNode.directives;
            if (!directiveNodes) {
                return visitors;
            }
            directiveNodes.forEach(function (directiveNode) {
                var directiveName = directiveNode.name.value;
                if (!hasOwn.call(directiveVisitors, directiveName)) {
                    return;
                }
                var visitorClass = directiveVisitors[directiveName];
                // Avoid creating visitor objects if visitorClass does not override
                // the visitor method named by methodName.
                if (!visitorClass.implementsVisitorMethod(methodName)) {
                    return;
                }
                var decl = declaredDirectives[directiveName];
                var args;
                if (decl) {
                    // If this directive was explicitly declared, use the declared
                    // argument types (and any default values) to check, coerce, and/or
                    // supply default values for the given arguments.
                    args = values.getArgumentValues(decl, directiveNode);
                }
                else {
                    // If this directive was not explicitly declared, just convert the
                    // argument nodes to their corresponding JavaScript values.
                    args = Object.create(null);
                    directiveNode.arguments.forEach(function (arg) {
                        args[arg.name.value] = valueFromASTUntyped(arg.value);
                    });
                }
                // As foretold in comments near the top of the visitSchemaDirectives
                // method, this is where instances of the SchemaDirectiveVisitor class
                // get created and assigned names. While subclasses could override the
                // constructor method, the constructor is marked as protected, so
                // these are the only arguments that will ever be passed.
                visitors.push(new visitorClass({
                    name: directiveName,
                    args: args,
                    visitedType: type,
                    schema: schema,
                    context: context,
                }));
            });
            if (visitors.length > 0) {
                visitors.forEach(function (visitor) {
                    createdVisitors[visitor.name].push(visitor);
                });
            }
            return visitors;
        }
        visitSchema(schema, visitorSelector);
        // Automatically update any references to named schema types replaced
        // during the traversal, so implementors don't have to worry about that.
        healSchema(schema);
        return createdVisitors;
    };
    SchemaDirectiveVisitor.getDeclaredDirectives = function (schema, directiveVisitors) {
        var declaredDirectives = Object.create(null);
        each(schema.getDirectives(), function (decl) {
            declaredDirectives[decl.name] = decl;
        });
        // If the visitor subclass overrides getDirectiveDeclaration, and it
        // returns a non-null GraphQLDirective, use that instead of any directive
        // declared in the schema itself. Reasoning: if a SchemaDirectiveVisitor
        // goes to the trouble of implementing getDirectiveDeclaration, it should
        // be able to rely on that implementation.
        each(directiveVisitors, function (visitorClass, directiveName) {
            var decl = visitorClass.getDirectiveDeclaration(directiveName, schema);
            if (decl) {
                declaredDirectives[directiveName] = decl;
            }
        });
        each(declaredDirectives, function (decl, name) {
            if (!hasOwn.call(directiveVisitors, name)) {
                // SchemaDirectiveVisitors.visitSchemaDirectives might be called
                // multiple times with partial directiveVisitors maps, so it's not
                // necessarily an error for directiveVisitors to be missing an
                // implementation of a directive that was declared in the schema.
                return;
            }
            var visitorClass = directiveVisitors[name];
            each(decl.locations, function (loc) {
                var visitorMethodName = directiveLocationToVisitorMethodName(loc);
                if (SchemaVisitor.implementsVisitorMethod(visitorMethodName) &&
                    !visitorClass.implementsVisitorMethod(visitorMethodName)) {
                    // While visitor subclasses may implement extra visitor methods,
                    // it's definitely a mistake if the GraphQLDirective declares itself
                    // applicable to certain schema locations, and the visitor subclass
                    // does not implement all the corresponding methods.
                    throw new Error("SchemaDirectiveVisitor for @" + name + " must implement " + visitorMethodName + " method");
                }
            });
        });
        return declaredDirectives;
    };
    return SchemaDirectiveVisitor;
}(SchemaVisitor));
exports.SchemaDirectiveVisitor = SchemaDirectiveVisitor;
// Convert a string like "FIELD_DEFINITION" to "visitFieldDefinition".
function directiveLocationToVisitorMethodName(loc) {
    return 'visit' + loc.replace(/([^_]*)_?/g, function (wholeMatch, part) {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    });
}
function each(arrayOrObject, callback) {
    Object.keys(arrayOrObject).forEach(function (key) {
        callback(arrayOrObject[key], key);
    });
}
// A more powerful version of each that has the ability to replace or remove
// array or object keys.
function updateEachKey(arrayOrObject, 
    // The callback can return nothing to leave the key untouched, null to remove
    // the key from the array or object, or a non-null V to replace the value.
    callback) {
    var deletedCount = 0;
    Object.keys(arrayOrObject).forEach(function (key) {
        var result = callback(arrayOrObject[key], key);
        if (typeof result === 'undefined') {
            return;
        }
        if (result === null) {
            delete arrayOrObject[key];
            deletedCount++;
            return;
        }
        arrayOrObject[key] = result;
    });
    if (deletedCount > 0 && Array.isArray(arrayOrObject)) {
        // Remove any holes from the array due to deleted elements.
        arrayOrObject.splice(0).forEach(function (elem) {
            arrayOrObject.push(elem);
        });
    }
}
// Similar to the graphql-js function of the same name, slightly simplified:
// https://github.com/graphql/graphql-js/blob/master/src/utilities/valueFromASTUntyped.js
function valueFromASTUntyped(valueNode) {
    switch (valueNode.kind) {
        case graphql$1.Kind.NULL:
            return null;
        case graphql$1.Kind.INT:
            return parseInt(valueNode.value, 10);
        case graphql$1.Kind.FLOAT:
            return parseFloat(valueNode.value);
        case graphql$1.Kind.STRING:
        case graphql$1.Kind.ENUM:
        case graphql$1.Kind.BOOLEAN:
            return valueNode.value;
        case graphql$1.Kind.LIST:
            return valueNode.values.map(valueFromASTUntyped);
        case graphql$1.Kind.OBJECT:
            var obj_1 = Object.create(null);
            valueNode.fields.forEach(function (field) {
                obj_1[field.name.value] = valueFromASTUntyped(field.value);
            });
            return obj_1;
        /* istanbul ignore next */
        default:
            throw new Error('Unexpected value kind: ' + valueNode.kind);
    }
}

});

unwrapExports(schemaVisitor);
var schemaVisitor_1 = schemaVisitor.SchemaVisitor;
var schemaVisitor_2 = schemaVisitor.visitSchema;
var schemaVisitor_3 = schemaVisitor.healSchema;
var schemaVisitor_4 = schemaVisitor.SchemaDirectiveVisitor;

var mergeDeep_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}
exports.default = mergeDeep;
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}

});

unwrapExports(mergeDeep_1);

var addResolveFunctionsToSchema_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var _2 = generate;
function addResolveFunctionsToSchema(options, legacyInputResolvers, legacyInputValidationOptions) {
    if (options instanceof graphql$1.GraphQLSchema) {
        console.warn('The addResolveFunctionsToSchema function takes named options now; see IAddResolveFunctionsToSchemaOptions');
        options = {
            schema: options,
            resolvers: legacyInputResolvers,
            resolverValidationOptions: legacyInputValidationOptions,
        };
    }
    var schema = options.schema, inputResolvers = options.resolvers, _a = options.resolverValidationOptions, resolverValidationOptions = _a === void 0 ? {} : _a, _b = options.inheritResolversFromInterfaces, inheritResolversFromInterfaces = _b === void 0 ? false : _b;
    var _c = resolverValidationOptions.allowResolversNotInSchema, allowResolversNotInSchema = _c === void 0 ? false : _c, requireResolversForResolveType = resolverValidationOptions.requireResolversForResolveType;
    var resolvers = inheritResolversFromInterfaces
        ? _2.extendResolversFromInterfaces(schema, inputResolvers)
        : inputResolvers;
    Object.keys(resolvers).forEach(function (typeName) {
        var type = schema.getType(typeName);
        if (!type && typeName !== '__schema') {
            if (allowResolversNotInSchema) {
                return;
            }
            throw new generate.SchemaError("\"" + typeName + "\" defined in resolvers, but not in schema");
        }
        Object.keys(resolvers[typeName]).forEach(function (fieldName) {
            if (fieldName.startsWith('__')) {
                // this is for isTypeOf and resolveType and all the other stuff.
                type[fieldName.substring(2)] = resolvers[typeName][fieldName];
                return;
            }
            if (type instanceof graphql$1.GraphQLScalarType) {
                type[fieldName] = resolvers[typeName][fieldName];
                return;
            }
            if (type instanceof graphql$1.GraphQLEnumType) {
                if (!type.getValue(fieldName)) {
                    throw new generate.SchemaError(typeName + "." + fieldName + " was defined in resolvers, but enum is not in schema");
                }
                type.getValue(fieldName)['value'] = resolvers[typeName][fieldName];
                return;
            }
            // object type
            var fields = getFieldsForType(type);
            if (!fields) {
                if (allowResolversNotInSchema) {
                    return;
                }
                throw new generate.SchemaError(typeName + " was defined in resolvers, but it's not an object");
            }
            if (!fields[fieldName]) {
                if (allowResolversNotInSchema) {
                    return;
                }
                throw new generate.SchemaError(typeName + "." + fieldName + " defined in resolvers, but not in schema");
            }
            var field = fields[fieldName];
            var fieldResolve = resolvers[typeName][fieldName];
            if (typeof fieldResolve === 'function') {
                // for convenience. Allows shorter syntax in resolver definition file
                setFieldProperties(field, { resolve: fieldResolve });
            }
            else {
                if (typeof fieldResolve !== 'object') {
                    throw new generate.SchemaError("Resolver " + typeName + "." + fieldName + " must be object or function");
                }
                setFieldProperties(field, fieldResolve);
            }
        });
    });
    _2.checkForResolveTypeResolver(schema, requireResolversForResolveType);
}
function getFieldsForType(type) {
    if (type instanceof graphql$1.GraphQLObjectType ||
        type instanceof graphql$1.GraphQLInterfaceType) {
        return type.getFields();
    }
    else {
        return undefined;
    }
}
function setFieldProperties(field, propertiesObj) {
    Object.keys(propertiesObj).forEach(function (propertyName) {
        field[propertyName] = propertiesObj[propertyName];
    });
}
exports.default = addResolveFunctionsToSchema;

});

unwrapExports(addResolveFunctionsToSchema_1);

var addSchemaLevelResolveFunction_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

// wraps all resolve functions of query, mutation or subscription fields
// with the provided function to simulate a root schema level resolve funciton
function addSchemaLevelResolveFunction(schema, fn) {
    // TODO test that schema is a schema, fn is a function
    var rootTypes = [
        schema.getQueryType(),
        schema.getMutationType(),
        schema.getSubscriptionType(),
    ].filter(function (x) { return !!x; });
    rootTypes.forEach(function (type) {
        // XXX this should run at most once per request to simulate a true root resolver
        // for graphql-js this is an approximation that works with queries but not mutations
        var rootResolveFn = runAtMostOncePerRequest(fn);
        var fields = type.getFields();
        Object.keys(fields).forEach(function (fieldName) {
            // XXX if the type is a subscription, a same query AST will be ran multiple times so we
            // deactivate here the runOnce if it's a subscription. This may not be optimal though...
            if (type === schema.getSubscriptionType()) {
                fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, fn);
            }
            else {
                fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, rootResolveFn);
            }
        });
    });
}
// XXX badly named function. this doesn't really wrap, it just chains resolvers...
function wrapResolver(innerResolver, outerResolver) {
    return function (obj, args, ctx, info) {
        return Promise.resolve(outerResolver(obj, args, ctx, info)).then(function (root) {
            if (innerResolver) {
                return innerResolver(root, args, ctx, info);
            }
            return graphql$1.defaultFieldResolver(root, args, ctx, info);
        });
    };
}
// XXX this function only works for resolvers
// XXX very hacky way to remember if the function
// already ran for this request. This will only work
// if people don't actually cache the operation.
// if they do cache the operation, they will have to
// manually remove the __runAtMostOnce before every request.
function runAtMostOncePerRequest(fn) {
    var value;
    var randomNumber = Math.random();
    return function (root, args, ctx, info) {
        if (!info.operation['__runAtMostOnce']) {
            info.operation['__runAtMostOnce'] = {};
        }
        if (!info.operation['__runAtMostOnce'][randomNumber]) {
            info.operation['__runAtMostOnce'][randomNumber] = true;
            value = fn(root, args, ctx, info);
        }
        return value;
    };
}
exports.default = addSchemaLevelResolveFunction;

});

unwrapExports(addSchemaLevelResolveFunction_1);

var assertResolveFunctionsPresent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function assertResolveFunctionsPresent(schema, resolverValidationOptions) {
    if (resolverValidationOptions === void 0) { resolverValidationOptions = {}; }
    var _a = resolverValidationOptions.requireResolversForArgs, requireResolversForArgs = _a === void 0 ? false : _a, _b = resolverValidationOptions.requireResolversForNonScalar, requireResolversForNonScalar = _b === void 0 ? false : _b, _c = resolverValidationOptions.requireResolversForAllFields, requireResolversForAllFields = _c === void 0 ? false : _c;
    if (requireResolversForAllFields &&
        (requireResolversForArgs || requireResolversForNonScalar)) {
        throw new TypeError('requireResolversForAllFields takes precedence over the more specific assertions. ' +
            'Please configure either requireResolversForAllFields or requireResolversForArgs / ' +
            'requireResolversForNonScalar, but not a combination of them.');
    }
    generate.forEachField(schema, function (field, typeName, fieldName) {
        // requires a resolve function for *every* field.
        if (requireResolversForAllFields) {
            expectResolveFunction(field, typeName, fieldName);
        }
        // requires a resolve function on every field that has arguments
        if (requireResolversForArgs && field.args.length > 0) {
            expectResolveFunction(field, typeName, fieldName);
        }
        // requires a resolve function on every field that returns a non-scalar type
        if (requireResolversForNonScalar &&
            !(graphql$1.getNamedType(field.type) instanceof graphql$1.GraphQLScalarType)) {
            expectResolveFunction(field, typeName, fieldName);
        }
    });
}
function expectResolveFunction(field, typeName, fieldName) {
    if (!field.resolve) {
        console.warn(
        // tslint:disable-next-line: max-line-length
        "Resolve function missing for \"" + typeName + "." + fieldName + "\". To disable this warning check https://github.com/apollostack/graphql-tools/issues/131");
        return;
    }
    if (typeof field.resolve !== 'function') {
        throw new generate.SchemaError("Resolver \"" + typeName + "." + fieldName + "\" must be a function");
    }
}
exports.default = assertResolveFunctionsPresent;

});

unwrapExports(assertResolveFunctionsPresent_1);

var attachDirectiveResolvers_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });


function attachDirectiveResolvers(schema, directiveResolvers) {
    if (typeof directiveResolvers !== 'object') {
        throw new Error("Expected directiveResolvers to be of type object, got " + typeof directiveResolvers);
    }
    if (Array.isArray(directiveResolvers)) {
        throw new Error('Expected directiveResolvers to be of type object, got Array');
    }
    var schemaDirectives = Object.create(null);
    Object.keys(directiveResolvers).forEach(function (directiveName) {
        schemaDirectives[directiveName] = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.visitFieldDefinition = function (field) {
                var _this = this;
                var resolver = directiveResolvers[directiveName];
                var originalResolver = field.resolve || graphql$1.defaultFieldResolver;
                var directiveArgs = this.args;
                field.resolve = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var source = args[0] /* original args */, context = args[2], info = args[3];
                    return resolver(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, originalResolver.apply(field, args)];
                    }); }); }, source, directiveArgs, context, info);
                };
            };
            return class_1;
        }(schemaVisitor.SchemaDirectiveVisitor));
    });
    schemaVisitor.SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
}
exports.default = attachDirectiveResolvers;

});

unwrapExports(attachDirectiveResolvers_1);

var bld = createCommonjsModule(function (module, exports) {
/** @internal */
exports.options = {
    getWarner: undefined
};
function createWarner(type, name, alternative, version, url) {
    var warnedPositions = {};
    return function () {
        var stack = (new Error()).stack || '';
        var at = (stack.match(/(?:\s+at\s.+){2}\s+at\s(.+)/) || [undefined, ''])[1];
        if (/\)$/.test(at)) {
            at = at.match(/[^(]+(?=\)$)/)[0];
        }
        else {
            at = at.trim();
        }
        if (at in warnedPositions) {
            return;
        }
        warnedPositions[at] = true;
        var message;
        switch (type) {
            case 'class':
                message = 'Class';
                break;
            case 'property':
                message = 'Property';
                break;
            case 'method':
                message = 'Method';
                break;
            case 'function':
                message = 'Function';
                break;
        }
        message += " `" + name + "` has been deprecated";
        if (version) {
            message += " since version " + version;
        }
        if (alternative) {
            message += ", use `" + alternative + "` instead";
        }
        message += '.';
        if (at) {
            message += "\n    at " + at;
        }
        if (url) {
            message += "\nCheck out " + url + " for more information.";
        }
        console.warn(message);
    };
}
function decorateProperty(type, name, descriptor, alternative, version, url) {
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    descriptor = descriptor || {
        writable: true,
        enumerable: false,
        configurable: true
    };
    var deprecatedDescriptor = {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable
    };
    if (descriptor.get || descriptor.set) {
        if (descriptor.get) {
            deprecatedDescriptor.get = function () {
                warner();
                return descriptor.get.call(this);
            };
        }
        if (descriptor.set) {
            deprecatedDescriptor.set = function (value) {
                warner();
                return descriptor.set.call(this, value);
            };
        }
    }
    else {
        var propertyValue_1 = descriptor.value;
        deprecatedDescriptor.get = function () {
            warner();
            return propertyValue_1;
        };
        if (descriptor.writable) {
            deprecatedDescriptor.set = function (value) {
                warner();
                propertyValue_1 = value;
            };
        }
    }
    return deprecatedDescriptor;
}
function decorateFunction(type, target, alternative, version, url) {
    var name = target.name;
    var warner = (exports.options.getWarner || createWarner)(type, name, alternative, version, url);
    var fn = function () {
        warner();
        return target.apply(this, arguments);
    };
    for (var _i = 0, _a = Object.getOwnPropertyNames(target); _i < _a.length; _i++) {
        var propertyName = _a[_i];
        var descriptor = Object.getOwnPropertyDescriptor(target, propertyName);
        if (descriptor.writable) {
            fn[propertyName] = target[propertyName];
        }
        else if (descriptor.configurable) {
            Object.defineProperty(fn, propertyName, descriptor);
        }
    }
    return fn;
}
function deprecated() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var fn = args[args.length - 1];
    if (typeof fn === 'function') {
        fn = args.pop();
    }
    else {
        fn = undefined;
    }
    var options = args[0];
    var alternative;
    var version;
    var url;
    if (typeof options === 'string') {
        alternative = options;
        version = args[1];
        url = args[2];
    }
    else if (options) {
        (alternative = options.alternative, version = options.version, url = options.url, options);
    }
    if (fn) {
        return decorateFunction('function', fn, alternative, version, url);
    }
    return function (target, name, descriptor) {
        if (typeof name === 'string') {
            var type = descriptor && typeof descriptor.value === 'function' ?
                'method' : 'property';
            return decorateProperty(type, name, descriptor, alternative, version, url);
        }
        else if (typeof target === 'function') {
            var constructor = decorateFunction('class', target, alternative, version, url);
            var className = target.name;
            for (var _i = 0, _a = Object.getOwnPropertyNames(constructor); _i < _a.length; _i++) {
                var propertyName = _a[_i];
                var descriptor_1 = Object.getOwnPropertyDescriptor(constructor, propertyName);
                descriptor_1 = decorateProperty('class', className, descriptor_1, alternative, version, url);
                if (descriptor_1.writable) {
                    constructor[propertyName] = target[propertyName];
                }
                else if (descriptor_1.configurable) {
                    Object.defineProperty(constructor, propertyName, descriptor_1);
                }
            }
            return constructor;
        }
    };
}
exports.deprecated = deprecated;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deprecated;

});

unwrapExports(bld);
var bld_1 = bld.options;
var bld_2 = bld.deprecated;

var attachConnectorsToContext_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



// takes a GraphQL-JS schema and an object of connectors, then attaches
// the connectors to the context by wrapping each query or mutation resolve
// function with a function that attaches connectors if they don't exist.
// attaches connectors only once to make sure they are singletons
var attachConnectorsToContext = bld.deprecated({
    version: '0.7.0',
    url: 'https://github.com/apollostack/graphql-tools/issues/140',
}, function (schema, connectors) {
    if (!schema || !(schema instanceof graphql$1.GraphQLSchema)) {
        throw new Error('schema must be an instance of GraphQLSchema. ' +
            'This error could be caused by installing more than one version of GraphQL-JS');
    }
    if (typeof connectors !== 'object') {
        var connectorType = typeof connectors;
        throw new Error("Expected connectors to be of type object, got " + connectorType);
    }
    if (Object.keys(connectors).length === 0) {
        throw new Error('Expected connectors to not be an empty object');
    }
    if (Array.isArray(connectors)) {
        throw new Error('Expected connectors to be of type object, got Array');
    }
    if (schema['_apolloConnectorsAttached']) {
        throw new Error('Connectors already attached to context, cannot attach more than once');
    }
    schema['_apolloConnectorsAttached'] = true;
    var attachconnectorFn = function (root, args, ctx) {
        if (typeof ctx !== 'object') {
            // if in any way possible, we should throw an error when the attachconnectors
            // function is called, not when a query is executed.
            var contextType = typeof ctx;
            throw new Error("Cannot attach connector because context is not an object: " + contextType);
        }
        if (typeof ctx.connectors === 'undefined') {
            ctx.connectors = {};
        }
        Object.keys(connectors).forEach(function (connectorName) {
            var connector = connectors[connectorName];
            if (!!connector.prototype) {
                ctx.connectors[connectorName] = new connector(ctx);
            }
            else {
                throw new Error("Connector must be a function or an class");
            }
        });
        return root;
    };
    generate.addSchemaLevelResolveFunction(schema, attachconnectorFn);
});
exports.default = attachConnectorsToContext;

});

unwrapExports(attachConnectorsToContext_1);

var buildSchemaFromTypeDefinitions_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function buildSchemaFromTypeDefinitions(typeDefinitions, parseOptions) {
    // TODO: accept only array here, otherwise interfaces get confusing.
    var myDefinitions = typeDefinitions;
    var astDocument;
    if (isDocumentNode(typeDefinitions)) {
        astDocument = typeDefinitions;
    }
    else if (typeof myDefinitions !== 'string') {
        if (!Array.isArray(myDefinitions)) {
            var type = typeof myDefinitions;
            throw new generate.SchemaError("typeDefs must be a string, array or schema AST, got " + type);
        }
        myDefinitions = generate.concatenateTypeDefs(myDefinitions);
    }
    if (typeof myDefinitions === 'string') {
        astDocument = graphql$1.parse(myDefinitions, parseOptions);
    }
    var backcompatOptions = { commentDescriptions: true };
    // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
    var schema = graphql$1.buildASTSchema(astDocument, backcompatOptions);
    var extensionsAst = generate.extractExtensionDefinitions(astDocument);
    if (extensionsAst.definitions.length > 0) {
        // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
        schema = graphql$1.extendSchema(schema, extensionsAst, backcompatOptions);
    }
    return schema;
}
function isDocumentNode(typeDefinitions) {
    return typeDefinitions.kind !== undefined;
}
exports.default = buildSchemaFromTypeDefinitions;

});

unwrapExports(buildSchemaFromTypeDefinitions_1);

var chainResolvers_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function chainResolvers(resolvers) {
    return function (root, args, ctx, info) {
        return resolvers.reduce(function (prev, curResolver) {
            if (curResolver) {
                return curResolver(prev, args, ctx, info);
            }
            return graphql$1.defaultFieldResolver(prev, args, ctx, info);
        }, root);
    };
}
exports.default = chainResolvers;

});

unwrapExports(chainResolvers_1);

var checkForResolveTypeResolver_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


// If we have any union or interface types throw if no there is no resolveType or isTypeOf resolvers
function checkForResolveTypeResolver(schema, requireResolversForResolveType) {
    Object.keys(schema.getTypeMap())
        .map(function (typeName) { return schema.getType(typeName); })
        .forEach(function (type) {
        if (!(type instanceof graphql$1.GraphQLUnionType ||
            type instanceof graphql$1.GraphQLInterfaceType)) {
            return;
        }
        if (!type.resolveType) {
            if (requireResolversForResolveType === false) {
                return;
            }
            if (requireResolversForResolveType === true) {
                throw new generate.SchemaError("Type \"" + type.name + "\" is missing a \"resolveType\" resolver");
            }
            // tslint:disable-next-line:max-line-length
            console.warn("Type \"" + type.name + "\" is missing a \"resolveType\" resolver. Pass false into " +
                "\"resolverValidationOptions.requireResolversForResolveType\" to disable this warning.");
        }
    });
}
exports.default = checkForResolveTypeResolver;

});

unwrapExports(checkForResolveTypeResolver_1);

var concatenateTypeDefs_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


function concatenateTypeDefs(typeDefinitionsAry, calledFunctionRefs) {
    if (calledFunctionRefs === void 0) { calledFunctionRefs = []; }
    var resolvedTypeDefinitions = [];
    typeDefinitionsAry.forEach(function (typeDef) {
        if (typeDef.kind !== undefined) {
            typeDef = graphql$1.print(typeDef);
        }
        if (typeof typeDef === 'function') {
            if (calledFunctionRefs.indexOf(typeDef) === -1) {
                calledFunctionRefs.push(typeDef);
                resolvedTypeDefinitions = resolvedTypeDefinitions.concat(concatenateTypeDefs(typeDef(), calledFunctionRefs));
            }
        }
        else if (typeof typeDef === 'string') {
            resolvedTypeDefinitions.push(typeDef.trim());
        }
        else {
            var type = typeof typeDef;
            throw new generate.SchemaError("typeDef array must contain only strings and functions, got " + type);
        }
    });
    return uniq(resolvedTypeDefinitions.map(function (x) { return x.trim(); })).join('\n');
}
function uniq(array) {
    return array.reduce(function (accumulator, currentValue) {
        return accumulator.indexOf(currentValue) === -1
            ? accumulator.concat([currentValue]) : accumulator;
    }, []);
}
exports.default = concatenateTypeDefs;

});

unwrapExports(concatenateTypeDefs_1);

var decorateWithLogger_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

/*
 * fn: The function to decorate with the logger
 * logger: an object instance of type Logger
 * hint: an optional hint to add to the error's message
 */
function decorateWithLogger(fn, logger, hint) {
    if (typeof fn === 'undefined') {
        fn = graphql$1.defaultFieldResolver;
    }
    var logError = function (e) {
        // TODO: clone the error properly
        var newE = new Error();
        newE.stack = e.stack;
        /* istanbul ignore else: always get the hint from addErrorLoggingToSchema */
        if (hint) {
            newE['originalMessage'] = e.message;
            newE['message'] = "Error in resolver " + hint + "\n" + e.message;
        }
        logger.log(newE);
    };
    return function (root, args, ctx, info) {
        try {
            var result = fn(root, args, ctx, info);
            // If the resolve function returns a Promise log any Promise rejects.
            if (result &&
                typeof result.then === 'function' &&
                typeof result.catch === 'function') {
                result.catch(function (reason) {
                    // make sure that it's an error we're logging.
                    var error = reason instanceof Error ? reason : new Error(reason);
                    logError(error);
                    // We don't want to leave an unhandled exception so pass on error.
                    return reason;
                });
            }
            return result;
        }
        catch (e) {
            logError(e);
            // we want to pass on the error, just in case.
            throw e;
        }
    };
}
exports.default = decorateWithLogger;

});

unwrapExports(decorateWithLogger_1);

var extendResolversFromInterfaces_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

function extendResolversFromInterfaces(schema, resolvers) {
    var typeNames = Object.keys(__assign({}, schema.getTypeMap(), resolvers));
    var extendedResolvers = {};
    typeNames.forEach(function (typeName) {
        var typeResolvers = resolvers[typeName];
        var type = schema.getType(typeName);
        if (type instanceof graphql$1.GraphQLObjectType) {
            var interfaceResolvers = type
                .getInterfaces()
                .map(function (iFace) { return resolvers[iFace.name]; });
            extendedResolvers[typeName] = Object.assign.apply(Object, [{}].concat(interfaceResolvers, [typeResolvers]));
        }
        else {
            if (typeResolvers) {
                extendedResolvers[typeName] = typeResolvers;
            }
        }
    });
    return extendedResolvers;
}
exports.default = extendResolversFromInterfaces;

});

unwrapExports(extendResolversFromInterfaces_1);

var extractExtensionDefinitions_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
// This was changed in graphql@0.12
// See https://github.com/apollographql/graphql-tools/pull/541
// TODO fix types https://github.com/apollographql/graphql-tools/issues/542
var oldTypeExtensionDefinitionKind = 'TypeExtensionDefinition';
var newExtensionDefinitionKind = 'ObjectTypeExtension';
var interfaceExtensionDefinitionKind = 'InterfaceTypeExtension';
function extractExtensionDefinitions(ast) {
    var extensionDefs = ast.definitions.filter(function (def) {
        return def.kind === oldTypeExtensionDefinitionKind ||
            def.kind === newExtensionDefinitionKind ||
            def.kind === interfaceExtensionDefinitionKind;
    });
    return Object.assign({}, ast, {
        definitions: extensionDefs,
    });
}
exports.default = extractExtensionDefinitions;

});

unwrapExports(extractExtensionDefinitions_1);

var forEachField_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function forEachField(schema, fn) {
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        // TODO: maybe have an option to include these?
        if (!graphql$1.getNamedType(type).name.startsWith('__') &&
            type instanceof graphql$1.GraphQLObjectType) {
            var fields_1 = type.getFields();
            Object.keys(fields_1).forEach(function (fieldName) {
                var field = fields_1[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
exports.default = forEachField;

});

unwrapExports(forEachField_1);

var SchemaError_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @schemaDefinition: A GraphQL type schema in shorthand
// @resolvers: Definitions for resolvers to be merged with schema
var SchemaError = /** @class */ (function (_super) {
    __extends(SchemaError, _super);
    function SchemaError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return SchemaError;
}(Error));
exports.default = SchemaError;

});

unwrapExports(SchemaError_1);

var generate = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.addResolveFunctionsToSchema = addResolveFunctionsToSchema_1.default;

exports.addSchemaLevelResolveFunction = addSchemaLevelResolveFunction_1.default;

exports.assertResolveFunctionsPresent = assertResolveFunctionsPresent_1.default;

exports.attachDirectiveResolvers = attachDirectiveResolvers_1.default;

exports.attachConnectorsToContext = attachConnectorsToContext_1.default;

exports.buildSchemaFromTypeDefinitions = buildSchemaFromTypeDefinitions_1.default;

exports.chainResolvers = chainResolvers_1.default;

exports.checkForResolveTypeResolver = checkForResolveTypeResolver_1.default;

exports.concatenateTypeDefs = concatenateTypeDefs_1.default;

exports.decorateWithLogger = decorateWithLogger_1.default;

exports.extendResolversFromInterfaces = extendResolversFromInterfaces_1.default;

exports.extractExtensionDefinitions = extractExtensionDefinitions_1.default;

exports.forEachField = forEachField_1.default;

exports.SchemaError = SchemaError_1.default;

});

unwrapExports(generate);
var generate_1 = generate.addResolveFunctionsToSchema;
var generate_2 = generate.addSchemaLevelResolveFunction;
var generate_3 = generate.assertResolveFunctionsPresent;
var generate_4 = generate.attachDirectiveResolvers;
var generate_5 = generate.attachConnectorsToContext;
var generate_6 = generate.buildSchemaFromTypeDefinitions;
var generate_7 = generate.chainResolvers;
var generate_8 = generate.checkForResolveTypeResolver;
var generate_9 = generate.concatenateTypeDefs;
var generate_10 = generate.decorateWithLogger;
var generate_11 = generate.extendResolversFromInterfaces;
var generate_12 = generate.extractExtensionDefinitions;
var generate_13 = generate.forEachField;
var generate_14 = generate.SchemaError;

var makeExecutableSchema_1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });




// type definitions can be a string or an array of strings.
function _generateSchema(typeDefinitions, resolveFunctions, logger, 
    // TODO: rename to allowUndefinedInResolve to be consistent
    allowUndefinedInResolve, resolverValidationOptions, parseOptions, inheritResolversFromInterfaces) {
    if (typeof resolverValidationOptions !== 'object') {
        throw new generate.SchemaError('Expected `resolverValidationOptions` to be an object');
    }
    if (!typeDefinitions) {
        throw new generate.SchemaError('Must provide typeDefs');
    }
    if (!resolveFunctions) {
        throw new generate.SchemaError('Must provide resolvers');
    }
    var resolvers = Array.isArray(resolveFunctions)
        ? resolveFunctions
            .filter(function (resolverObj) { return typeof resolverObj === 'object'; })
            .reduce(mergeDeep_1.default, {})
        : resolveFunctions;
    // TODO: check that typeDefinitions is either string or array of strings
    var schema = generate.buildSchemaFromTypeDefinitions(typeDefinitions, parseOptions);
    generate.addResolveFunctionsToSchema({
        schema: schema,
        resolvers: resolvers,
        resolverValidationOptions: resolverValidationOptions,
        inheritResolversFromInterfaces: inheritResolversFromInterfaces,
    });
    generate.assertResolveFunctionsPresent(schema, resolverValidationOptions);
    if (!allowUndefinedInResolve) {
        addCatchUndefinedToSchema(schema);
    }
    if (logger) {
        addErrorLoggingToSchema(schema, logger);
    }
    return schema;
}
function makeExecutableSchema(_a) {
    var typeDefs = _a.typeDefs, _b = _a.resolvers, resolvers = _b === void 0 ? {} : _b, connectors = _a.connectors, logger = _a.logger, _c = _a.allowUndefinedInResolve, allowUndefinedInResolve = _c === void 0 ? true : _c, _d = _a.resolverValidationOptions, resolverValidationOptions = _d === void 0 ? {} : _d, _e = _a.directiveResolvers, directiveResolvers = _e === void 0 ? null : _e, _f = _a.schemaDirectives, schemaDirectives = _f === void 0 ? null : _f, _g = _a.parseOptions, parseOptions = _g === void 0 ? {} : _g, _h = _a.inheritResolversFromInterfaces, inheritResolversFromInterfaces = _h === void 0 ? false : _h;
    var jsSchema = _generateSchema(typeDefs, resolvers, logger, allowUndefinedInResolve, resolverValidationOptions, parseOptions, inheritResolversFromInterfaces);
    if (typeof resolvers['__schema'] === 'function') {
        // TODO a bit of a hack now, better rewrite generateSchema to attach it there.
        // not doing that now, because I'd have to rewrite a lot of tests.
        generate.addSchemaLevelResolveFunction(jsSchema, resolvers['__schema']);
    }
    if (connectors) {
        // connectors are optional, at least for now. That means you can just import them in the resolve
        // function if you want.
        generate.attachConnectorsToContext(jsSchema, connectors);
    }
    if (directiveResolvers) {
        generate.attachDirectiveResolvers(jsSchema, directiveResolvers);
    }
    if (schemaDirectives) {
        schemaVisitor.SchemaDirectiveVisitor.visitSchemaDirectives(jsSchema, schemaDirectives);
    }
    return jsSchema;
}
exports.makeExecutableSchema = makeExecutableSchema;
function decorateToCatchUndefined(fn, hint) {
    if (typeof fn === 'undefined') {
        fn = graphql$1.defaultFieldResolver;
    }
    return function (root, args, ctx, info) {
        var result = fn(root, args, ctx, info);
        if (typeof result === 'undefined') {
            throw new Error("Resolve function for \"" + hint + "\" returned undefined");
        }
        return result;
    };
}
function addCatchUndefinedToSchema(schema) {
    generate.forEachField(schema, function (field, typeName, fieldName) {
        var errorHint = typeName + "." + fieldName;
        field.resolve = decorateToCatchUndefined(field.resolve, errorHint);
    });
}
exports.addCatchUndefinedToSchema = addCatchUndefinedToSchema;
function addErrorLoggingToSchema(schema, logger) {
    if (!logger) {
        throw new Error('Must provide a logger');
    }
    if (typeof logger.log !== 'function') {
        throw new Error('Logger.log must be a function');
    }
    generate.forEachField(schema, function (field, typeName, fieldName) {
        var errorHint = typeName + "." + fieldName;
        field.resolve = generate.decorateWithLogger(field.resolve, logger, errorHint);
    });
}
exports.addErrorLoggingToSchema = addErrorLoggingToSchema;
__export(generate);

});

unwrapExports(makeExecutableSchema_1);
var makeExecutableSchema_2 = makeExecutableSchema_1.makeExecutableSchema;
var makeExecutableSchema_3 = makeExecutableSchema_1.addCatchUndefinedToSchema;
var makeExecutableSchema_4 = makeExecutableSchema_1.addErrorLoggingToSchema;

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid_1(b);
}

var v1_1 = v1;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

var uuid = v4_1;
uuid.v1 = v1_1;
uuid.v4 = v4_1;

var uuid_1 = uuid;

var mock = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var graphql_2 = graphql$1;


// This function wraps addMockFunctionsToSchema for more convenience
function mockServer(schema, mocks, preserveResolvers) {
    if (preserveResolvers === void 0) { preserveResolvers = false; }
    var mySchema;
    if (!(schema instanceof graphql$1.GraphQLSchema)) {
        // TODO: provide useful error messages here if this fails
        mySchema = makeExecutableSchema_1.buildSchemaFromTypeDefinitions(schema);
    }
    else {
        mySchema = schema;
    }
    addMockFunctionsToSchema({ schema: mySchema, mocks: mocks, preserveResolvers: preserveResolvers });
    return { query: function (query, vars) { return graphql_2.graphql(mySchema, query, {}, {}, vars); } };
}
exports.mockServer = mockServer;
// TODO allow providing a seed such that lengths of list could be deterministic
// this could be done by using casual to get a random list length if the casual
// object is global.
function addMockFunctionsToSchema(_a) {
    var schema = _a.schema, _b = _a.mocks, mocks = _b === void 0 ? {} : _b, _c = _a.preserveResolvers, preserveResolvers = _c === void 0 ? false : _c;
    function isObject(thing) {
        return thing === Object(thing) && !Array.isArray(thing);
    }
    if (!schema) {
        throw new Error('Must provide schema to mock');
    }
    if (!(schema instanceof graphql$1.GraphQLSchema)) {
        throw new Error('Value at "schema" must be of type GraphQLSchema');
    }
    if (!isObject(mocks)) {
        throw new Error('mocks must be of type Object');
    }
    // use Map internally, because that API is nicer.
    var mockFunctionMap = new Map();
    Object.keys(mocks).forEach(function (typeName) {
        mockFunctionMap.set(typeName, mocks[typeName]);
    });
    mockFunctionMap.forEach(function (mockFunction, mockTypeName) {
        if (typeof mockFunction !== 'function') {
            throw new Error("mockFunctionMap[" + mockTypeName + "] must be a function");
        }
    });
    var defaultMockMap = new Map();
    defaultMockMap.set('Int', function () { return Math.round(Math.random() * 200) - 100; });
    defaultMockMap.set('Float', function () { return Math.random() * 200 - 100; });
    defaultMockMap.set('String', function () { return 'Hello World'; });
    defaultMockMap.set('Boolean', function () { return Math.random() > 0.5; });
    defaultMockMap.set('ID', function () { return uuid_1.v4(); });
    function mergeObjects(a, b) {
        return Object.assign(a, b);
    }
    function copyOwnPropsIfNotPresent(target, source) {
        Object.getOwnPropertyNames(source).forEach(function (prop) {
            if (!Object.getOwnPropertyDescriptor(target, prop)) {
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            }
        });
    }
    function copyOwnProps(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            var chain = source;
            while (chain) {
                copyOwnPropsIfNotPresent(target, chain);
                chain = Object.getPrototypeOf(chain);
            }
        });
        return target;
    }
    // returns a random element from that ary
    function getRandomElement(ary) {
        var sample = Math.floor(Math.random() * ary.length);
        return ary[sample];
    }
    // takes either an object or a (possibly nested) array
    // and completes the customMock object with any fields
    // defined on genericMock
    // only merges objects or arrays. Scalars are returned as is
    function mergeMocks(genericMockFunction, customMock) {
        if (Array.isArray(customMock)) {
            return customMock.map(function (el) { return mergeMocks(genericMockFunction, el); });
        }
        if (isObject(customMock)) {
            return mergeObjects(genericMockFunction(), customMock);
        }
        return customMock;
    }
    function getResolveType(namedFieldType) {
        if (namedFieldType instanceof graphql$1.GraphQLInterfaceType ||
            namedFieldType instanceof graphql$1.GraphQLUnionType) {
            return namedFieldType.resolveType;
        }
        else {
            return undefined;
        }
    }
    function assignResolveType(type) {
        var fieldType = graphql$1.getNullableType(type);
        var namedFieldType = graphql$1.getNamedType(fieldType);
        var oldResolveType = getResolveType(namedFieldType);
        if (preserveResolvers && oldResolveType && oldResolveType.length) {
            return;
        }
        if (namedFieldType instanceof graphql$1.GraphQLUnionType ||
            namedFieldType instanceof graphql$1.GraphQLInterfaceType) {
            // the default `resolveType` always returns null. We add a fallback
            // resolution that works with how unions and interface are mocked
            namedFieldType.resolveType = function (data, context, info) {
                return info.schema.getType(data.__typename);
            };
        }
    }
    var mockType = function (type, typeName, fieldName) {
        // order of precendence for mocking:
        // 1. if the object passed in already has fieldName, just use that
        // --> if it's a function, that becomes your resolver
        // --> if it's a value, the mock resolver will return that
        // 2. if the nullableType is a list, recurse
        // 2. if there's a mock defined for this typeName, that will be used
        // 3. if there's no mock defined, use the default mocks for this type
        return function (root, args, context, info) {
            // nullability doesn't matter for the purpose of mocking.
            var fieldType = graphql$1.getNullableType(type);
            var namedFieldType = graphql$1.getNamedType(fieldType);
            if (root && typeof root[fieldName] !== 'undefined') {
                var result = void 0;
                // if we're here, the field is already defined
                if (typeof root[fieldName] === 'function') {
                    result = root[fieldName](root, args, context, info);
                    if (result instanceof MockList) {
                        result = result.mock(root, args, context, info, fieldType, mockType);
                    }
                }
                else {
                    result = root[fieldName];
                }
                // Now we merge the result with the default mock for this type.
                // This allows overriding defaults while writing very little code.
                if (mockFunctionMap.has(namedFieldType.name)) {
                    result = mergeMocks(mockFunctionMap
                        .get(namedFieldType.name)
                        .bind(null, root, args, context, info), result);
                }
                return result;
            }
            if (fieldType instanceof graphql$1.GraphQLList) {
                return [
                    mockType(fieldType.ofType)(root, args, context, info),
                    mockType(fieldType.ofType)(root, args, context, info),
                ];
            }
            if (mockFunctionMap.has(fieldType.name) &&
                !(fieldType instanceof graphql$1.GraphQLUnionType ||
                    fieldType instanceof graphql$1.GraphQLInterfaceType)) {
                // the object passed doesn't have this field, so we apply the default mock
                return mockFunctionMap.get(fieldType.name)(root, args, context, info);
            }
            if (fieldType instanceof graphql$1.GraphQLObjectType) {
                // objects don't return actual data, we only need to mock scalars!
                return {};
            }
            // if a mock function is provided for unionType or interfaceType, execute it to resolve the concrete type
            // otherwise randomly pick a type from all implementation types
            if (fieldType instanceof graphql$1.GraphQLUnionType ||
                fieldType instanceof graphql$1.GraphQLInterfaceType) {
                var implementationType = void 0;
                if (mockFunctionMap.has(fieldType.name)) {
                    var interfaceMockObj = mockFunctionMap.get(fieldType.name)(root, args, context, info);
                    if (!interfaceMockObj || !interfaceMockObj.__typename) {
                        return Error("Please return a __typename in \"" + fieldType.name + "\"");
                    }
                    implementationType = schema.getType(interfaceMockObj.__typename);
                }
                else {
                    var possibleTypes = schema.getPossibleTypes(fieldType);
                    implementationType = getRandomElement(possibleTypes);
                }
                return Object.assign({ __typename: implementationType }, mockType(implementationType)(root, args, context, info));
            }
            if (fieldType instanceof graphql$1.GraphQLEnumType) {
                return getRandomElement(fieldType.getValues()).value;
            }
            if (defaultMockMap.has(fieldType.name)) {
                return defaultMockMap.get(fieldType.name)(root, args, context, info);
            }
            // if we get to here, we don't have a value, and we don't have a mock for this type,
            // we could return undefined, but that would be hard to debug, so we throw instead.
            // however, we returning it instead of throwing it, so preserveResolvers can handle the failures.
            return Error("No mock defined for type \"" + fieldType.name + "\"");
        };
    };
    makeExecutableSchema_1.forEachField(schema, function (field, typeName, fieldName) {
        assignResolveType(field.type);
        var mockResolver;
        // we have to handle the root mutation and root query types differently,
        // because no resolver is called at the root.
        /* istanbul ignore next: Must provide schema DefinitionNode with query type or a type named Query. */
        var isOnQueryType = schema.getQueryType()
            ? schema.getQueryType().name === typeName
            : false;
        var isOnMutationType = schema.getMutationType()
            ? schema.getMutationType().name === typeName
            : false;
        if (isOnQueryType || isOnMutationType) {
            if (mockFunctionMap.has(typeName)) {
                var rootMock_1 = mockFunctionMap.get(typeName);
                // XXX: BUG in here, need to provide proper signature for rootMock.
                if (rootMock_1(undefined, {}, {}, {})[fieldName]) {
                    // TODO: assert that it's a function
                    mockResolver = function (root, args, context, info) {
                        var updatedRoot = root || {}; // TODO: should we clone instead?
                        updatedRoot[fieldName] = rootMock_1(root, args, context, info)[fieldName];
                        // XXX this is a bit of a hack to still use mockType, which
                        // lets you mock lists etc. as well
                        // otherwise we could just set field.resolve to rootMock()[fieldName]
                        // it's like pretending there was a resolve function that ran before
                        // the root resolve function.
                        return mockType(field.type, typeName, fieldName)(updatedRoot, args, context, info);
                    };
                }
            }
        }
        if (!mockResolver) {
            mockResolver = mockType(field.type, typeName, fieldName);
        }
        if (!preserveResolvers || !field.resolve) {
            field.resolve = mockResolver;
        }
        else {
            var oldResolver_1 = field.resolve;
            field.resolve = function (rootObject, args, context, info) {
                return Promise.all([
                    mockResolver(rootObject, args, context, info),
                    oldResolver_1(rootObject, args, context, info),
                ]).then(function (values) {
                    var mockedValue = values[0], resolvedValue = values[1];
                    // In case we couldn't mock
                    if (mockedValue instanceof Error) {
                        // only if value was not resolved, populate the error.
                        if (undefined === resolvedValue) {
                            throw mockedValue;
                        }
                        return resolvedValue;
                    }
                    if (resolvedValue instanceof Date && mockedValue instanceof Date) {
                        return undefined !== resolvedValue ? resolvedValue : mockedValue;
                    }
                    if (isObject(mockedValue) && isObject(resolvedValue)) {
                        // Object.assign() won't do here, as we need to all properties, including
                        // the non-enumerable ones and defined using Object.defineProperty
                        var emptyObject = Object.create(Object.getPrototypeOf(resolvedValue));
                        return copyOwnProps(emptyObject, resolvedValue, mockedValue);
                    }
                    return undefined !== resolvedValue ? resolvedValue : mockedValue;
                });
            };
        }
    });
}
exports.addMockFunctionsToSchema = addMockFunctionsToSchema;
var MockList = /** @class */ (function () {
    // wrappedFunction can return another MockList or a value
    function MockList(len, wrappedFunction) {
        this.len = len;
        if (typeof wrappedFunction !== 'undefined') {
            if (typeof wrappedFunction !== 'function') {
                throw new Error('Second argument to MockList must be a function or undefined');
            }
            this.wrappedFunction = wrappedFunction;
        }
    }
    MockList.prototype.mock = function (root, args, context, info, fieldType, mockTypeFunc) {
        var arr;
        if (Array.isArray(this.len)) {
            arr = new Array(this.randint(this.len[0], this.len[1]));
        }
        else {
            arr = new Array(this.len);
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof this.wrappedFunction === 'function') {
                var res = this.wrappedFunction(root, args, context, info);
                if (res instanceof MockList) {
                    var nullableType = graphql$1.getNullableType(fieldType.ofType);
                    arr[i] = res.mock(root, args, context, info, nullableType, mockTypeFunc);
                }
                else {
                    arr[i] = res;
                }
            }
            else {
                arr[i] = mockTypeFunc(fieldType.ofType)(root, args, context, info);
            }
        }
        return arr;
    };
    MockList.prototype.randint = function (low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    };
    return MockList;
}());
exports.MockList = MockList;

});

unwrapExports(mock);
var mock_1 = mock.mockServer;
var mock_2 = mock.addMockFunctionsToSchema;
var mock_3 = mock.MockList;

var fastJsonStableStringify = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};

var bundle_umd = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    factory(exports, fastJsonStableStringify);
}(commonjsGlobal, (function (exports,stringify) {
    stringify = stringify && stringify.hasOwnProperty('default') ? stringify['default'] : stringify;

    var __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    function isScalarValue(value) {
        return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
    }
    function isNumberValue(value) {
        return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
    }
    function isStringValue(value) {
        return value.kind === 'StringValue';
    }
    function isBooleanValue(value) {
        return value.kind === 'BooleanValue';
    }
    function isIntValue(value) {
        return value.kind === 'IntValue';
    }
    function isFloatValue(value) {
        return value.kind === 'FloatValue';
    }
    function isVariable(value) {
        return value.kind === 'Variable';
    }
    function isObjectValue(value) {
        return value.kind === 'ObjectValue';
    }
    function isListValue(value) {
        return value.kind === 'ListValue';
    }
    function isEnumValue(value) {
        return value.kind === 'EnumValue';
    }
    function isNullValue(value) {
        return value.kind === 'NullValue';
    }
    function valueToObjectRepresentation(argObj, name, value, variables) {
        if (isIntValue(value) || isFloatValue(value)) {
            argObj[name.value] = Number(value.value);
        }
        else if (isBooleanValue(value) || isStringValue(value)) {
            argObj[name.value] = value.value;
        }
        else if (isObjectValue(value)) {
            var nestedArgObj_1 = {};
            value.fields.map(function (obj) {
                return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
            });
            argObj[name.value] = nestedArgObj_1;
        }
        else if (isVariable(value)) {
            var variableValue = (variables || {})[value.name.value];
            argObj[name.value] = variableValue;
        }
        else if (isListValue(value)) {
            argObj[name.value] = value.values.map(function (listValue) {
                var nestedArgArrayObj = {};
                valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
                return nestedArgArrayObj[name.value];
            });
        }
        else if (isEnumValue(value)) {
            argObj[name.value] = value.value;
        }
        else if (isNullValue(value)) {
            argObj[name.value] = null;
        }
        else {
            throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
                'is not supported. Use variables instead of inline arguments to ' +
                'overcome this limitation.');
        }
    }
    function storeKeyNameFromField(field, variables) {
        var directivesObj = null;
        if (field.directives) {
            directivesObj = {};
            field.directives.forEach(function (directive) {
                directivesObj[directive.name.value] = {};
                if (directive.arguments) {
                    directive.arguments.forEach(function (_a) {
                        var name = _a.name, value = _a.value;
                        return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                    });
                }
            });
        }
        var argObj = null;
        if (field.arguments && field.arguments.length) {
            argObj = {};
            field.arguments.forEach(function (_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(argObj, name, value, variables);
            });
        }
        return getStoreKeyName(field.name.value, argObj, directivesObj);
    }
    var KNOWN_DIRECTIVES = [
        'connection',
        'include',
        'skip',
        'client',
        'rest',
        'export',
    ];
    function getStoreKeyName(fieldName, args, directives) {
        if (directives &&
            directives['connection'] &&
            directives['connection']['key']) {
            if (directives['connection']['filter'] &&
                directives['connection']['filter'].length > 0) {
                var filterKeys = directives['connection']['filter']
                    ? directives['connection']['filter']
                    : [];
                filterKeys.sort();
                var queryArgs_1 = args;
                var filteredArgs_1 = {};
                filterKeys.forEach(function (key) {
                    filteredArgs_1[key] = queryArgs_1[key];
                });
                return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
            }
            else {
                return directives['connection']['key'];
            }
        }
        var completeFieldName = fieldName;
        if (args) {
            // We can't use `JSON.stringify` here since it's non-deterministic,
            // and can lead to different store key names being created even though
            // the `args` object used during creation has the same properties/values.
            var stringifiedArgs = stringify(args);
            completeFieldName += "(" + stringifiedArgs + ")";
        }
        if (directives) {
            Object.keys(directives).forEach(function (key) {
                if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                    return;
                if (directives[key] && Object.keys(directives[key]).length) {
                    completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
                }
                else {
                    completeFieldName += "@" + key;
                }
            });
        }
        return completeFieldName;
    }
    function argumentsObjectFromField(field, variables) {
        if (field.arguments && field.arguments.length) {
            var argObj_1 = {};
            field.arguments.forEach(function (_a) {
                var name = _a.name, value = _a.value;
                return valueToObjectRepresentation(argObj_1, name, value, variables);
            });
            return argObj_1;
        }
        return null;
    }
    function resultKeyNameFromField(field) {
        return field.alias ? field.alias.value : field.name.value;
    }
    function isField(selection) {
        return selection.kind === 'Field';
    }
    function isInlineFragment(selection) {
        return selection.kind === 'InlineFragment';
    }
    function isIdValue(idObject) {
        return idObject && idObject.type === 'id';
    }
    function toIdValue(idConfig, generated) {
        if (generated === void 0) { generated = false; }
        return __assign({ type: 'id', generated: generated }, (typeof idConfig === 'string'
            ? { id: idConfig, typename: undefined }
            : idConfig));
    }
    function isJsonValue(jsonObject) {
        return (jsonObject != null &&
            typeof jsonObject === 'object' &&
            jsonObject.type === 'json');
    }
    function defaultValueFromVariable(node) {
        throw new Error("Variable nodes are not supported by valueFromNode");
    }
    /**
     * Evaluate a ValueNode and yield its value in its natural JS form.
     */
    function valueFromNode(node, onVariable) {
        if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
        switch (node.kind) {
            case 'Variable':
                return onVariable(node);
            case 'NullValue':
                return null;
            case 'IntValue':
                return parseInt(node.value, 10);
            case 'FloatValue':
                return parseFloat(node.value);
            case 'ListValue':
                return node.values.map(function (v) { return valueFromNode(v, onVariable); });
            case 'ObjectValue': {
                var value = {};
                for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                    var field = _a[_i];
                    value[field.name.value] = valueFromNode(field.value, onVariable);
                }
                return value;
            }
            default:
                return node.value;
        }
    }

    function getDirectiveInfoFromField(field, variables) {
        if (field.directives && field.directives.length) {
            var directiveObj_1 = {};
            field.directives.forEach(function (directive) {
                directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
            });
            return directiveObj_1;
        }
        return null;
    }
    function shouldInclude(selection, variables) {
        if (variables === void 0) { variables = {}; }
        if (!selection.directives) {
            return true;
        }
        var res = true;
        selection.directives.forEach(function (directive) {
            // TODO should move this validation to GraphQL validation once that's implemented.
            if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
                // Just don't worry about directives we don't understand
                return;
            }
            //evaluate the "if" argument and skip (i.e. return undefined) if it evaluates to true.
            var directiveArguments = directive.arguments || [];
            var directiveName = directive.name.value;
            if (directiveArguments.length !== 1) {
                throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
            }
            var ifArgument = directiveArguments[0];
            if (!ifArgument.name || ifArgument.name.value !== 'if') {
                throw new Error("Invalid argument for the @" + directiveName + " directive.");
            }
            var ifValue = directiveArguments[0].value;
            var evaledValue = false;
            if (!ifValue || ifValue.kind !== 'BooleanValue') {
                // means it has to be a variable value if this is a valid @skip or @include directive
                if (ifValue.kind !== 'Variable') {
                    throw new Error("Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
                }
                else {
                    evaledValue = variables[ifValue.name.value];
                    if (evaledValue === undefined) {
                        throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                    }
                }
            }
            else {
                evaledValue = ifValue.value;
            }
            if (directiveName === 'skip') {
                evaledValue = !evaledValue;
            }
            if (!evaledValue) {
                res = false;
            }
        });
        return res;
    }
    function flattenSelections(selection) {
        if (!selection.selectionSet ||
            !(selection.selectionSet.selections.length > 0))
            return [selection];
        return [selection].concat(selection.selectionSet.selections
            .map(function (selectionNode) {
            return [selectionNode].concat(flattenSelections(selectionNode));
        })
            .reduce(function (selections, selected) { return selections.concat(selected); }, []));
    }
    function getDirectiveNames(doc) {
        // operation => [names of directives];
        var directiveNames = doc.definitions
            .filter(function (definition) {
            return definition.selectionSet && definition.selectionSet.selections;
        })
            // operation => [[Selection]]
            .map(function (x) { return flattenSelections(x); })
            // [[Selection]] => [Selection]
            .reduce(function (selections, selected) { return selections.concat(selected); }, [])
            // [Selection] => [Selection with Directives]
            .filter(function (selection) {
            return selection.directives && selection.directives.length > 0;
        })
            // [Selection with Directives] => [[Directives]]
            .map(function (selection) { return selection.directives; })
            // [[Directives]] => [Directives]
            .reduce(function (directives, directive) { return directives.concat(directive); }, [])
            // [Directives] => [Name]
            .map(function (directive) { return directive.name.value; });
        return directiveNames;
    }
    function hasDirectives(names, doc) {
        return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
    }

    var __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    /**
     * Returns a query document which adds a single query operation that only
     * spreads the target fragment inside of it.
     *
     * So for example a document of:
     *
     * ```graphql
     * fragment foo on Foo { a b c }
     * ```
     *
     * Turns into:
     *
     * ```graphql
     * { ...foo }
     *
     * fragment foo on Foo { a b c }
     * ```
     *
     * The target fragment will either be the only fragment in the document, or a
     * fragment specified by the provided `fragmentName`. If there is more then one
     * fragment, but a `fragmentName` was not defined then an error will be thrown.
     */
    function getFragmentQueryDocument(document, fragmentName) {
        var actualFragmentName = fragmentName;
        // Build an array of all our fragment definitions that will be used for
        // validations. We also do some validations on the other definitions in the
        // document while building this list.
        var fragments = [];
        document.definitions.forEach(function (definition) {
            // Throw an error if we encounter an operation definition because we will
            // define our own operation definition later on.
            if (definition.kind === 'OperationDefinition') {
                throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                    'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
            }
            // Add our definition to the fragments array if it is a fragment
            // definition.
            if (definition.kind === 'FragmentDefinition') {
                fragments.push(definition);
            }
        });
        // If the user did not give us a fragment name then let us try to get a
        // name from a single fragment in the definition.
        if (typeof actualFragmentName === 'undefined') {
            if (fragments.length !== 1) {
                throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
            }
            actualFragmentName = fragments[0].name.value;
        }
        // Generate a query document with an operation that simply spreads the
        // fragment inside of it.
        var query = __assign$1({}, document, { definitions: [
                {
                    kind: 'OperationDefinition',
                    operation: 'query',
                    selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                            {
                                kind: 'FragmentSpread',
                                name: {
                                    kind: 'Name',
                                    value: actualFragmentName,
                                },
                            },
                        ],
                    },
                }
            ].concat(document.definitions) });
        return query;
    }

    function assign(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            if (typeof source === 'undefined' || source === null) {
                return;
            }
            Object.keys(source).forEach(function (key) {
                target[key] = source[key];
            });
        });
        return target;
    }

    function getMutationDefinition(doc) {
        checkDocument(doc);
        var mutationDef = doc.definitions.filter(function (definition) {
            return definition.kind === 'OperationDefinition' &&
                definition.operation === 'mutation';
        })[0];
        if (!mutationDef) {
            throw new Error('Must contain a mutation definition.');
        }
        return mutationDef;
    }
    // Checks the document for errors and throws an exception if there is an error.
    function checkDocument(doc) {
        if (doc.kind !== 'Document') {
            throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
        }
        var operations = doc.definitions
            .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
            .map(function (definition) {
            if (definition.kind !== 'OperationDefinition') {
                throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
            }
            return definition;
        });
        if (operations.length > 1) {
            throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
        }
    }
    function getOperationDefinition(doc) {
        checkDocument(doc);
        return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
    }
    function getOperationDefinitionOrDie(document) {
        var def = getOperationDefinition(document);
        if (!def) {
            throw new Error("GraphQL document is missing an operation");
        }
        return def;
    }
    function getOperationName(doc) {
        return (doc.definitions
            .filter(function (definition) {
            return definition.kind === 'OperationDefinition' && definition.name;
        })
            .map(function (x) { return x.name.value; })[0] || null);
    }
    // Returns the FragmentDefinitions from a particular document as an array
    function getFragmentDefinitions(doc) {
        return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
    }
    function getQueryDefinition(doc) {
        var queryDef = getOperationDefinition(doc);
        if (!queryDef || queryDef.operation !== 'query') {
            throw new Error('Must contain a query definition.');
        }
        return queryDef;
    }
    function getFragmentDefinition(doc) {
        if (doc.kind !== 'Document') {
            throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
        }
        if (doc.definitions.length > 1) {
            throw new Error('Fragment must have exactly one definition.');
        }
        var fragmentDef = doc.definitions[0];
        if (fragmentDef.kind !== 'FragmentDefinition') {
            throw new Error('Must be a fragment definition.');
        }
        return fragmentDef;
    }
    /**
     * Returns the first operation definition found in this document.
     * If no operation definition is found, the first fragment definition will be returned.
     * If no definitions are found, an error will be thrown.
     */
    function getMainDefinition(queryDoc) {
        checkDocument(queryDoc);
        var fragmentDefinition;
        for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            if (definition.kind === 'OperationDefinition') {
                var operation = definition.operation;
                if (operation === 'query' ||
                    operation === 'mutation' ||
                    operation === 'subscription') {
                    return definition;
                }
            }
            if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
                // we do this because we want to allow multiple fragment definitions
                // to precede an operation definition.
                fragmentDefinition = definition;
            }
        }
        if (fragmentDefinition) {
            return fragmentDefinition;
        }
        throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
    }
    // Utility function that takes a list of fragment definitions and makes a hash out of them
    // that maps the name of the fragment to the fragment definition.
    function createFragmentMap(fragments) {
        if (fragments === void 0) { fragments = []; }
        var symTable = {};
        fragments.forEach(function (fragment) {
            symTable[fragment.name.value] = fragment;
        });
        return symTable;
    }
    function getDefaultValues(definition) {
        if (definition &&
            definition.variableDefinitions &&
            definition.variableDefinitions.length) {
            var defaultValues = definition.variableDefinitions
                .filter(function (_a) {
                var defaultValue = _a.defaultValue;
                return defaultValue;
            })
                .map(function (_a) {
                var variable = _a.variable, defaultValue = _a.defaultValue;
                var defaultValueObj = {};
                valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
                return defaultValueObj;
            });
            return assign.apply(void 0, [{}].concat(defaultValues));
        }
        return {};
    }
    /**
     * Returns the names of all variables declared by the operation.
     */
    function variablesInOperation(operation) {
        var names = new Set();
        if (operation.variableDefinitions) {
            for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
                var definition = _a[_i];
                names.add(definition.variable.name.value);
            }
        }
        return names;
    }

    /**
     * Deeply clones a value to create a new instance.
     */
    function cloneDeep(value) {
        // If the value is an array, create a new array where every item has been cloned.
        if (Array.isArray(value)) {
            return value.map(function (item) { return cloneDeep(item); });
        }
        // If the value is an object, go through all of the object’s properties and add them to a new
        // object.
        if (value !== null && typeof value === 'object') {
            var nextValue = {};
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    nextValue[key] = cloneDeep(value[key]);
                }
            }
            return nextValue;
        }
        // Otherwise this is some primitive value and it is therefore immutable so we can just return it
        // directly.
        return value;
    }

    var TYPENAME_FIELD = {
        kind: 'Field',
        name: {
            kind: 'Name',
            value: '__typename',
        },
    };
    function isNotEmpty(op, fragments) {
        // keep selections that are still valid
        return (op.selectionSet.selections.filter(function (selectionSet) {
            // anything that doesn't match the compound filter is okay
            return !(selectionSet &&
                // look into fragments to verify they should stay
                selectionSet.kind === 'FragmentSpread' &&
                // see if the fragment in the map is valid (recursively)
                !isNotEmpty(fragments[selectionSet.name.value], fragments));
        }).length > 0);
    }
    function getDirectiveMatcher(directives) {
        return function directiveMatcher(directive) {
            return directives.some(function (dir) {
                if (dir.name && dir.name === directive.name.value)
                    return true;
                if (dir.test && dir.test(directive))
                    return true;
                return false;
            });
        };
    }
    function addTypenameToSelectionSet(selectionSet, isRoot) {
        if (isRoot === void 0) { isRoot = false; }
        if (selectionSet.selections) {
            if (!isRoot) {
                var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                    return (selection.kind === 'Field' &&
                        selection.name.value === '__typename');
                });
                if (!alreadyHasThisField) {
                    selectionSet.selections.push(TYPENAME_FIELD);
                }
            }
            selectionSet.selections.forEach(function (selection) {
                // Must not add __typename if we're inside an introspection query
                if (selection.kind === 'Field') {
                    if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                        selection.selectionSet) {
                        addTypenameToSelectionSet(selection.selectionSet);
                    }
                }
                else if (selection.kind === 'InlineFragment') {
                    if (selection.selectionSet) {
                        addTypenameToSelectionSet(selection.selectionSet);
                    }
                }
            });
        }
    }
    function removeDirectivesFromSelectionSet(directives, selectionSet) {
        if (!selectionSet.selections)
            return selectionSet;
        // if any of the directives are set to remove this selectionSet, remove it
        var agressiveRemove = directives.some(function (dir) { return dir.remove; });
        selectionSet.selections = selectionSet.selections
            .map(function (selection) {
            if (selection.kind !== 'Field' ||
                !selection ||
                !selection.directives)
                return selection;
            var directiveMatcher = getDirectiveMatcher(directives);
            var remove;
            selection.directives = selection.directives.filter(function (directive) {
                var shouldKeep = !directiveMatcher(directive);
                if (!remove && !shouldKeep && agressiveRemove)
                    remove = true;
                return shouldKeep;
            });
            return remove ? null : selection;
        })
            .filter(function (x) { return !!x; });
        selectionSet.selections.forEach(function (selection) {
            if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
                selection.selectionSet) {
                removeDirectivesFromSelectionSet(directives, selection.selectionSet);
            }
        });
        return selectionSet;
    }
    function removeDirectivesFromDocument(directives, doc) {
        var docClone = cloneDeep(doc);
        docClone.definitions.forEach(function (definition) {
            removeDirectivesFromSelectionSet(directives, definition.selectionSet);
        });
        var operation = getOperationDefinitionOrDie(docClone);
        var fragments = createFragmentMap(getFragmentDefinitions(docClone));
        return isNotEmpty(operation, fragments) ? docClone : null;
    }
    function addTypenameToDocument(doc) {
        checkDocument(doc);
        var docClone = cloneDeep(doc);
        docClone.definitions.forEach(function (definition) {
            var isRoot = definition.kind === 'OperationDefinition';
            addTypenameToSelectionSet(definition.selectionSet, isRoot);
        });
        return docClone;
    }
    var connectionRemoveConfig = {
        test: function (directive) {
            var willRemove = directive.name.value === 'connection';
            if (willRemove) {
                if (!directive.arguments ||
                    !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                    console.warn('Removing an @connection directive even though it does not have a key. ' +
                        'You may want to use the key parameter to specify a store key.');
                }
            }
            return willRemove;
        },
    };
    function removeConnectionDirectiveFromDocument(doc) {
        checkDocument(doc);
        return removeDirectivesFromDocument([connectionRemoveConfig], doc);
    }
    function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
        if (nestedCheck === void 0) { nestedCheck = true; }
        if (!(selectionSet && selectionSet.selections)) {
            return false;
        }
        var matchedSelections = selectionSet.selections.filter(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        });
        return matchedSelections.length > 0;
    }
    function hasDirectivesInSelection(directives, selection, nestedCheck) {
        if (nestedCheck === void 0) { nestedCheck = true; }
        if (selection.kind !== 'Field' || !selection) {
            return true;
        }
        if (!selection.directives) {
            return false;
        }
        var directiveMatcher = getDirectiveMatcher(directives);
        var matchedDirectives = selection.directives.filter(directiveMatcher);
        return (matchedDirectives.length > 0 ||
            (nestedCheck &&
                hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
    }
    function getDirectivesFromSelectionSet(directives, selectionSet) {
        selectionSet.selections = selectionSet.selections
            .filter(function (selection) {
            return hasDirectivesInSelection(directives, selection, true);
        })
            .map(function (selection) {
            if (hasDirectivesInSelection(directives, selection, false)) {
                return selection;
            }
            if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
                selection.selectionSet) {
                selection.selectionSet = getDirectivesFromSelectionSet(directives, selection.selectionSet);
            }
            return selection;
        });
        return selectionSet;
    }
    function getDirectivesFromDocument(directives, doc, includeAllFragments) {
        if (includeAllFragments === void 0) { includeAllFragments = false; }
        checkDocument(doc);
        var docClone = cloneDeep(doc);
        docClone.definitions = docClone.definitions.map(function (definition) {
            if ((definition.kind === 'OperationDefinition' ||
                (definition.kind === 'FragmentDefinition' && !includeAllFragments)) &&
                definition.selectionSet) {
                definition.selectionSet = getDirectivesFromSelectionSet(directives, definition.selectionSet);
            }
            return definition;
        });
        var operation = getOperationDefinitionOrDie(docClone);
        var fragments = createFragmentMap(getFragmentDefinitions(docClone));
        return isNotEmpty(operation, fragments) ? docClone : null;
    }

    function getEnv() {
        if (typeof process !== 'undefined' && process.env.NODE_ENV) {
            return process.env.NODE_ENV;
        }
        // default environment
        return 'development';
    }
    function isEnv(env) {
        return getEnv() === env;
    }
    function isProduction() {
        return isEnv('production') === true;
    }
    function isDevelopment() {
        return isEnv('development') === true;
    }
    function isTest() {
        return isEnv('test') === true;
    }

    function tryFunctionOrLogError(f) {
        try {
            return f();
        }
        catch (e) {
            if (console.error) {
                console.error(e);
            }
        }
    }
    function graphQLResultHasError(result) {
        return result.errors && result.errors.length;
    }

    /**
     * Performs a deep equality check on two JavaScript values.
     */
    function isEqual(a, b) {
        // If the two values are strictly equal, we are good.
        if (a === b) {
            return true;
        }
        // Dates are equivalent if their time values are equal.
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() === b.getTime();
        }
        // If a and b are both objects, we will compare their properties. This will compare arrays as
        // well.
        if (a != null &&
            typeof a === 'object' &&
            b != null &&
            typeof b === 'object') {
            // Compare all of the keys in `a`. If one of the keys has a different value, or that key does
            // not exist in `b` return false immediately.
            for (var key in a) {
                if (Object.prototype.hasOwnProperty.call(a, key)) {
                    if (!Object.prototype.hasOwnProperty.call(b, key)) {
                        return false;
                    }
                    if (!isEqual(a[key], b[key])) {
                        return false;
                    }
                }
            }
            // Look through all the keys in `b`. If `b` has a key that `a` does not, return false.
            for (var key in b) {
                if (!Object.prototype.hasOwnProperty.call(a, key)) {
                    return false;
                }
            }
            // If we made it this far the objects are equal!
            return true;
        }
        // Otherwise the values are not equal.
        return false;
    }

    // Taken (mostly) from https://github.com/substack/deep-freeze to avoid
    // import hassles with rollup.
    function deepFreeze(o) {
        Object.freeze(o);
        Object.getOwnPropertyNames(o).forEach(function (prop) {
            if (o[prop] !== null &&
                (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
                !Object.isFrozen(o[prop])) {
                deepFreeze(o[prop]);
            }
        });
        return o;
    }
    function maybeDeepFreeze(obj) {
        if (isDevelopment() || isTest()) {
            // Polyfilled Symbols potentially cause infinite / very deep recursion while deep freezing
            // which is known to crash IE11 (https://github.com/apollographql/apollo-client/issues/3043).
            var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
            if (!symbolIsPolyfilled) {
                return deepFreeze(obj);
            }
        }
        return obj;
    }

    var haveWarned = Object.create({});
    /**
     * Print a warning only once in development.
     * In production no warnings are printed.
     * In test all warnings are printed.
     *
     * @param msg The warning message
     * @param type warn or error (will call console.warn or console.error)
     */
    function warnOnceInDevelopment(msg, type) {
        if (type === void 0) { type = 'warn'; }
        if (isProduction()) {
            return;
        }
        if (!haveWarned[msg]) {
            if (!isTest()) {
                haveWarned[msg] = true;
            }
            switch (type) {
                case 'error':
                    console.error(msg);
                    break;
                default:
                    console.warn(msg);
            }
        }
    }

    /**
     * In order to make assertions easier, this function strips `symbol`'s from
     * the incoming data.
     *
     * This can be handy when running tests against `apollo-client` for example,
     * since it adds `symbol`'s to the data in the store. Jest's `toEqual`
     * function now covers `symbol`'s (https://github.com/facebook/jest/pull/3437),
     * which means all test data used in a `toEqual` comparison would also have to
     * include `symbol`'s, to pass. By stripping `symbol`'s from the cache data
     * we can compare against more simplified test data.
     */
    function stripSymbols(data) {
        return JSON.parse(JSON.stringify(data));
    }

    exports.getDirectiveInfoFromField = getDirectiveInfoFromField;
    exports.shouldInclude = shouldInclude;
    exports.flattenSelections = flattenSelections;
    exports.getDirectiveNames = getDirectiveNames;
    exports.hasDirectives = hasDirectives;
    exports.getFragmentQueryDocument = getFragmentQueryDocument;
    exports.getMutationDefinition = getMutationDefinition;
    exports.checkDocument = checkDocument;
    exports.getOperationDefinition = getOperationDefinition;
    exports.getOperationDefinitionOrDie = getOperationDefinitionOrDie;
    exports.getOperationName = getOperationName;
    exports.getFragmentDefinitions = getFragmentDefinitions;
    exports.getQueryDefinition = getQueryDefinition;
    exports.getFragmentDefinition = getFragmentDefinition;
    exports.getMainDefinition = getMainDefinition;
    exports.createFragmentMap = createFragmentMap;
    exports.getDefaultValues = getDefaultValues;
    exports.variablesInOperation = variablesInOperation;
    exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
    exports.addTypenameToDocument = addTypenameToDocument;
    exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
    exports.getDirectivesFromDocument = getDirectivesFromDocument;
    exports.isScalarValue = isScalarValue;
    exports.isNumberValue = isNumberValue;
    exports.valueToObjectRepresentation = valueToObjectRepresentation;
    exports.storeKeyNameFromField = storeKeyNameFromField;
    exports.getStoreKeyName = getStoreKeyName;
    exports.argumentsObjectFromField = argumentsObjectFromField;
    exports.resultKeyNameFromField = resultKeyNameFromField;
    exports.isField = isField;
    exports.isInlineFragment = isInlineFragment;
    exports.isIdValue = isIdValue;
    exports.toIdValue = toIdValue;
    exports.isJsonValue = isJsonValue;
    exports.valueFromNode = valueFromNode;
    exports.assign = assign;
    exports.cloneDeep = cloneDeep;
    exports.getEnv = getEnv;
    exports.isEnv = isEnv;
    exports.isProduction = isProduction;
    exports.isDevelopment = isDevelopment;
    exports.isTest = isTest;
    exports.tryFunctionOrLogError = tryFunctionOrLogError;
    exports.graphQLResultHasError = graphQLResultHasError;
    exports.isEqual = isEqual;
    exports.maybeDeepFreeze = maybeDeepFreeze;
    exports.warnOnceInDevelopment = warnOnceInDevelopment;
    exports.stripSymbols = stripSymbols;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

});

unwrapExports(bundle_umd);

var Observable_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// === Symbol Support ===

var hasSymbols = function () {
  return typeof Symbol === 'function';
};
var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null) return undefined;

  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[getSymbol('species')];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;

  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = undefined;
  subscription._state = 'ready';
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';

  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);
    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;
      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;
      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({ type: type, value: value });
    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{ type: type, value: value }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable

    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';

    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: 'unsubscribe',
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: 'closed',
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: 'next',
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: 'error',
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: 'complete',
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: 'closed',
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = exports.Observable = function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },

          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: 'map',
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'filter',
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;

      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'concat',
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscription = void 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (sources.length === 0) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources.shift()));
              }
            }
          });
        }

        startNext(_this5);

        return function () {
          if (subscription) {
            subscription = undefined;
            subscription.unsubscribe();
          }
        };
      });
    }
  }, {
    key: 'flatMap',
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });

            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: getSymbol('observable'),
    value: function () {
      return this;
    }
  }], [{
    key: 'from',
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;

      if (x == null) throw new TypeError(x + ' is not an object');

      var method = getMethod(x, getSymbol('observable'));
      if (method) {
        var observable = method.call(x);

        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

        if (isObservable(observable) && observable.constructor === C) return observable;

        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, getSymbol('iterator'));
        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  observer.next(item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: 'of',
    value: function of() {
      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;

      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
  }, {
    key: getSymbol('species'),
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: getSymbol('observable'),
      hostReportError: hostReportError
    },
    configurabe: true
  });
}
});

unwrapExports(Observable_1);
var Observable_2 = Observable_1.Observable;

var zenObservable = Observable_1.Observable;

var bundle_umd$2 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory(exports, zenObservable);
}(commonjsGlobal, (function (exports,zenObservable$$1) {
	zenObservable$$1 = zenObservable$$1 && zenObservable$$1.hasOwnProperty('default') ? zenObservable$$1['default'] : zenObservable$$1;

	var Observable = zenObservable$$1;

	exports.default = Observable;
	exports.Observable = Observable;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

});

unwrapExports(bundle_umd$2);

var bundle_umd$4 = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    factory(exports, bundle_umd, bundle_umd$2, printer);
}(commonjsGlobal, (function (exports,apolloUtilities,Observable,printer$$1) {
    Observable = Observable && Observable.hasOwnProperty('default') ? Observable['default'] : Observable;

    var __extends = (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    function validateOperation(operation) {
        var OPERATION_FIELDS = [
            'query',
            'operationName',
            'variables',
            'extensions',
            'context',
        ];
        for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
            var key = _a[_i];
            if (OPERATION_FIELDS.indexOf(key) < 0) {
                throw new Error("illegal argument: " + key);
            }
        }
        return operation;
    }
    var LinkError = /** @class */ (function (_super) {
        __extends(LinkError, _super);
        function LinkError(message, link) {
            var _this = _super.call(this, message) || this;
            _this.link = link;
            return _this;
        }
        return LinkError;
    }(Error));
    function isTerminating(link) {
        return link.request.length <= 1;
    }
    function toPromise(observable) {
        var completed = false;
        return new Promise(function (resolve, reject) {
            observable.subscribe({
                next: function (data) {
                    if (completed) {
                        console.warn("Promise Wrapper does not support multiple results from Observable");
                    }
                    else {
                        completed = true;
                        resolve(data);
                    }
                },
                error: reject,
            });
        });
    }
    // backwards compat
    var makePromise = toPromise;
    function fromPromise(promise) {
        return new Observable(function (observer) {
            promise
                .then(function (value) {
                observer.next(value);
                observer.complete();
            })
                .catch(observer.error.bind(observer));
        });
    }
    function fromError(errorValue) {
        return new Observable(function (observer) {
            observer.error(errorValue);
        });
    }
    function transformOperation(operation) {
        var transformedOperation = {
            variables: operation.variables || {},
            extensions: operation.extensions || {},
            operationName: operation.operationName,
            query: operation.query,
        };
        // best guess at an operation name
        if (!transformedOperation.operationName) {
            transformedOperation.operationName =
                typeof transformedOperation.query !== 'string'
                    ? apolloUtilities.getOperationName(transformedOperation.query)
                    : '';
        }
        return transformedOperation;
    }
    function createOperation(starting, operation) {
        var context = __assign({}, starting);
        var setContext = function (next) {
            if (typeof next === 'function') {
                context = __assign({}, context, next(context));
            }
            else {
                context = __assign({}, context, next);
            }
        };
        var getContext = function () { return (__assign({}, context)); };
        Object.defineProperty(operation, 'setContext', {
            enumerable: false,
            value: setContext,
        });
        Object.defineProperty(operation, 'getContext', {
            enumerable: false,
            value: getContext,
        });
        Object.defineProperty(operation, 'toKey', {
            enumerable: false,
            value: function () { return getKey(operation); },
        });
        return operation;
    }
    function getKey(operation) {
        // XXX we're assuming here that variables will be serialized in the same order.
        // that might not always be true
        return printer$$1.print(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
    }

    var passthrough = function (op, forward) { return (forward ? forward(op) : Observable.of()); };
    var toLink = function (handler) {
        return typeof handler === 'function' ? new ApolloLink(handler) : handler;
    };
    var empty = function () {
        return new ApolloLink(function (op, forward) { return Observable.of(); });
    };
    var from = function (links) {
        if (links.length === 0)
            return empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    var split = function (test, left, right) {
        if (right === void 0) { right = new ApolloLink(passthrough); }
        var leftLink = toLink(left);
        var rightLink = toLink(right);
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || Observable.of()
                    : rightLink.request(operation) || Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || Observable.of()
                    : rightLink.request(operation, forward) || Observable.of();
            });
        }
    };
    // join two Links together
    var concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            console.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || Observable.of(); }) || Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || Observable.of();
                }) || Observable.of());
            });
        }
    };
    var ApolloLink = /** @class */ (function () {
        function ApolloLink(request) {
            if (request)
                this.request = request;
        }
        ApolloLink.prototype.split = function (test, left, right) {
            if (right === void 0) { right = new ApolloLink(passthrough); }
            return this.concat(split(test, left, right));
        };
        ApolloLink.prototype.concat = function (next) {
            return concat(this, next);
        };
        ApolloLink.prototype.request = function (operation, forward) {
            throw new Error('request is not implemented');
        };
        ApolloLink.empty = empty;
        ApolloLink.from = from;
        ApolloLink.split = split;
        ApolloLink.execute = execute;
        return ApolloLink;
    }());
    function execute(link, operation) {
        return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of());
    }

    exports.Observable = Observable;
    exports.createOperation = createOperation;
    exports.makePromise = makePromise;
    exports.toPromise = toPromise;
    exports.fromPromise = fromPromise;
    exports.fromError = fromError;
    exports.empty = empty;
    exports.from = from;
    exports.split = split;
    exports.concat = concat;
    exports.ApolloLink = ApolloLink;
    exports.execute = execute;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

});

unwrapExports(bundle_umd$4);

var linkToFetcher_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var apollo_link_2 = bundle_umd$4;
exports.execute = apollo_link_2.execute;
function linkToFetcher(link) {
    return function (fetcherOperation) {
        return bundle_umd$4.makePromise(bundle_umd$4.execute(link, fetcherOperation));
    };
}
exports.default = linkToFetcher;

});

unwrapExports(linkToFetcher_1);
var linkToFetcher_2 = linkToFetcher_1.execute;

var isEmptyObject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function isEmptyObject(obj) {
    if (!obj) {
        return true;
    }
    for (var key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
exports.default = isEmptyObject;

});

unwrapExports(isEmptyObject_1);

var isSpecifiedScalarType_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

// FIXME: Replace with https://github.com/graphql/graphql-js/blob/master/src/type/scalars.js#L139
exports.specifiedScalarTypes = [
    graphql$1.GraphQLString,
    graphql$1.GraphQLInt,
    graphql$1.GraphQLFloat,
    graphql$1.GraphQLBoolean,
    graphql$1.GraphQLID,
];
function isSpecifiedScalarType(type) {
    return (graphql$1.isNamedType(type) &&
        // Would prefer to use specifiedScalarTypes.some(), however %checks needs
        // a simple expression.
        (type.name === graphql$1.GraphQLString.name ||
            type.name === graphql$1.GraphQLInt.name ||
            type.name === graphql$1.GraphQLFloat.name ||
            type.name === graphql$1.GraphQLBoolean.name ||
            type.name === graphql$1.GraphQLID.name));
}
exports.default = isSpecifiedScalarType;

});

unwrapExports(isSpecifiedScalarType_1);
var isSpecifiedScalarType_2 = isSpecifiedScalarType_1.specifiedScalarTypes;

var resolveFromParentTypename_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function resolveFromParentTypename(parent, schema) {
    var parentTypename = parent['__typename'];
    if (!parentTypename) {
        throw new Error('Did not fetch typename for object, unable to resolve interface.');
    }
    var resolvedType = schema.getType(parentTypename);
    if (!(resolvedType instanceof graphql$1.GraphQLObjectType)) {
        throw new Error('__typename did not match an object type: ' + parentTypename);
    }
    return resolvedType;
}
exports.default = resolveFromParentTypename;

});

unwrapExports(resolveFromParentTypename_1);

var errors = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });


var ERROR_SYMBOL;
if ((typeof commonjsGlobal !== 'undefined' && 'Symbol' in commonjsGlobal) ||
    (typeof window !== 'undefined' && 'Symbol' in window)) {
    ERROR_SYMBOL = Symbol('subSchemaErrors');
}
else {
    ERROR_SYMBOL = '@@__subSchemaErrors';
}
exports.ErrorSymbol = ERROR_SYMBOL;
function annotateWithChildrenErrors(object, childrenErrors) {
    if (childrenErrors && childrenErrors.length > 0) {
        if (Array.isArray(object)) {
            var byIndex_1 = {};
            childrenErrors.forEach(function (error$$1) {
                if (!error$$1.path) {
                    return;
                }
                var index = error$$1.path[1];
                var current = byIndex_1[index] || [];
                current.push(__assign({}, error$$1, { path: error$$1.path.slice(1) }));
                byIndex_1[index] = current;
            });
            return object.map(function (item, index) {
                return annotateWithChildrenErrors(item, byIndex_1[index]);
            });
        }
        else {
            return __assign({}, object, (_a = {}, _a[ERROR_SYMBOL] = childrenErrors.map(function (error$$1) { return (__assign({}, error$$1, error$$1.path ? { path: error$$1.path.slice(1) } : {})); }), _a));
        }
    }
    else {
        return object;
    }
    var _a;
}
exports.annotateWithChildrenErrors = annotateWithChildrenErrors;
function getErrorsFromParent(object, fieldName) {
    var errors = (object && object[ERROR_SYMBOL]) || [];
    var childrenErrors = [];
    for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
        var error$$1 = errors_1[_i];
        if ((!error$$1.path) || (error$$1.path.length === 1 && error$$1.path[0] === fieldName)) {
            return {
                kind: 'OWN',
                error: error$$1,
            };
        }
        else if (error$$1.path[0] === fieldName) {
            childrenErrors.push(error$$1);
        }
    }
    return {
        kind: 'CHILDREN',
        errors: childrenErrors,
    };
}
exports.getErrorsFromParent = getErrorsFromParent;
var CombinedError = /** @class */ (function (_super) {
    __extends(CombinedError, _super);
    function CombinedError(message, errors) {
        var _this = _super.call(this, message) || this;
        _this.errors = errors;
        return _this;
    }
    return CombinedError;
}(Error));
function checkResultAndHandleErrors(result, info, responseKey) {
    if (!responseKey) {
        responseKey = info.fieldNodes[0].alias
            ? info.fieldNodes[0].alias.value
            : info.fieldName;
    }
    if (result.errors && (!result.data || result.data[responseKey] == null)) {
        // apollo-link-http & http-link-dataloader need the
        // result property to be passed through for better error handling.
        // If there is only one error, which contains a result property, pass the error through
        var newError = result.errors.length === 1 && hasResult(result.errors[0])
            ? result.errors[0]
            : new CombinedError(concatErrors(result.errors), result.errors);
        throw error.locatedError(newError, info.fieldNodes, graphql$1.responsePathAsArray(info.path));
    }
    else {
        var resultObject = result.data[responseKey];
        if (result.errors) {
            resultObject = annotateWithChildrenErrors(resultObject, result.errors);
        }
        return resultObject;
    }
}
exports.checkResultAndHandleErrors = checkResultAndHandleErrors;
function concatErrors(errors) {
    return errors.map(function (error$$1) { return error$$1.message; }).join('\n');
}
function hasResult(error$$1) {
    return error$$1.result || (error$$1.originalError && error$$1.originalError.result);
}

});

unwrapExports(errors);
var errors_1 = errors.ErrorSymbol;
var errors_2 = errors.annotateWithChildrenErrors;
var errors_3 = errors.getErrorsFromParent;
var errors_4 = errors.checkResultAndHandleErrors;

var defaultMergedResolver_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });



// Resolver that knows how to:
// a) handle aliases for proxied schemas
// b) handle errors from proxied schemas
var defaultMergedResolver = function (parent, args, context, info) {
    var responseKey = info.fieldNodes[0].alias
        ? info.fieldNodes[0].alias.value
        : info.fieldName;
    var errorResult = errors.getErrorsFromParent(parent, responseKey);
    if (errorResult.kind === 'OWN') {
        throw error.locatedError(new Error(errorResult.error.message), info.fieldNodes, graphql$1.responsePathAsArray(info.path));
    }
    else if (parent) {
        var result = parent[responseKey];
        // subscription result mapping
        if (!result && parent.data && parent.data[responseKey]) {
            result = parent.data[responseKey];
        }
        if (errorResult.errors) {
            result = errors.annotateWithChildrenErrors(result, errorResult.errors);
        }
        return result;
    }
    else {
        return null;
    }
};
exports.default = defaultMergedResolver;

});

unwrapExports(defaultMergedResolver_1);

var schemaRecreation = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




function recreateType(type, resolveType, keepResolvers) {
    if (type instanceof graphql$1.GraphQLObjectType) {
        var fields_1 = type.getFields();
        var interfaces_1 = type.getInterfaces();
        return new graphql$1.GraphQLObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            isTypeOf: keepResolvers ? type.isTypeOf : undefined,
            fields: function () {
                return fieldMapToFieldConfigMap(fields_1, resolveType, keepResolvers);
            },
            interfaces: function () { return interfaces_1.map(function (iface) { return resolveType(iface); }); },
        });
    }
    else if (type instanceof graphql$1.GraphQLInterfaceType) {
        var fields_2 = type.getFields();
        return new graphql$1.GraphQLInterfaceType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: function () {
                return fieldMapToFieldConfigMap(fields_2, resolveType, keepResolvers);
            },
            resolveType: keepResolvers
                ? type.resolveType
                : function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
        });
    }
    else if (type instanceof graphql$1.GraphQLUnionType) {
        return new graphql$1.GraphQLUnionType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            types: function () { return type.getTypes().map(function (unionMember) { return resolveType(unionMember); }); },
            resolveType: keepResolvers
                ? type.resolveType
                : function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
        });
    }
    else if (type instanceof graphql$1.GraphQLInputObjectType) {
        return new graphql$1.GraphQLInputObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: function () {
                return inputFieldMapToFieldConfigMap(type.getFields(), resolveType);
            },
        });
    }
    else if (type instanceof graphql$1.GraphQLEnumType) {
        var values = type.getValues();
        var newValues_1 = {};
        values.forEach(function (value) {
            newValues_1[value.name] = { value: value.name };
        });
        return new graphql$1.GraphQLEnumType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            values: newValues_1,
        });
    }
    else if (type instanceof graphql$1.GraphQLScalarType) {
        if (isSpecifiedScalarType_1.default(type)) {
            return type;
        }
        else {
            return new graphql$1.GraphQLScalarType({
                name: type.name,
                description: type.description,
                astNode: type.astNode,
                serialize: function (value) {
                    return value;
                },
                parseValue: function (value) {
                    return value;
                },
                parseLiteral: function (ast) {
                    return parseLiteral(ast);
                },
            });
        }
    }
    else {
        throw new Error("Invalid type " + type);
    }
}
exports.recreateType = recreateType;
function parseLiteral(ast) {
    switch (ast.kind) {
        case graphql$1.Kind.STRING:
        case graphql$1.Kind.BOOLEAN: {
            return ast.value;
        }
        case graphql$1.Kind.INT:
        case graphql$1.Kind.FLOAT: {
            return parseFloat(ast.value);
        }
        case graphql$1.Kind.OBJECT: {
            var value_1 = Object.create(null);
            ast.fields.forEach(function (field) {
                value_1[field.name.value] = parseLiteral(field.value);
            });
            return value_1;
        }
        case graphql$1.Kind.LIST: {
            return ast.values.map(parseLiteral);
        }
        default:
            return null;
    }
}
function fieldMapToFieldConfigMap(fields, resolveType, keepResolvers) {
    var result = {};
    Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        var type = resolveType(field.type);
        if (type !== null) {
            result[name] = fieldToFieldConfig(fields[name], resolveType, keepResolvers);
        }
    });
    return result;
}
exports.fieldMapToFieldConfigMap = fieldMapToFieldConfigMap;
function createResolveType(getType) {
    var resolveType = function (type) {
        if (type instanceof graphql$1.GraphQLList) {
            var innerType = resolveType(type.ofType);
            if (innerType === null) {
                return null;
            }
            else {
                return new graphql$1.GraphQLList(innerType);
            }
        }
        else if (type instanceof graphql$1.GraphQLNonNull) {
            var innerType = resolveType(type.ofType);
            if (innerType === null) {
                return null;
            }
            else {
                return new graphql$1.GraphQLNonNull(innerType);
            }
        }
        else if (graphql$1.isNamedType(type)) {
            return getType(graphql$1.getNamedType(type).name, type);
        }
        else {
            return type;
        }
    };
    return resolveType;
}
exports.createResolveType = createResolveType;
function fieldToFieldConfig(field, resolveType, keepResolvers) {
    return {
        type: resolveType(field.type),
        args: argsToFieldConfigArgumentMap(field.args, resolveType),
        resolve: keepResolvers ? field.resolve : defaultMergedResolver_1.default,
        subscribe: keepResolvers ? field.subscribe : null,
        description: field.description,
        deprecationReason: field.deprecationReason,
        astNode: field.astNode,
    };
}
exports.fieldToFieldConfig = fieldToFieldConfig;
function argsToFieldConfigArgumentMap(args, resolveType) {
    var result = {};
    args.forEach(function (arg) {
        var newArg = argumentToArgumentConfig(arg, resolveType);
        if (newArg) {
            result[newArg[0]] = newArg[1];
        }
    });
    return result;
}
exports.argsToFieldConfigArgumentMap = argsToFieldConfigArgumentMap;
function argumentToArgumentConfig(argument, resolveType) {
    var type = resolveType(argument.type);
    if (type === null) {
        return null;
    }
    else {
        return [
            argument.name,
            {
                type: type,
                defaultValue: argument.defaultValue,
                description: argument.description,
            },
        ];
    }
}
exports.argumentToArgumentConfig = argumentToArgumentConfig;
function inputFieldMapToFieldConfigMap(fields, resolveType) {
    var result = {};
    Object.keys(fields).forEach(function (name) {
        var field = fields[name];
        var type = resolveType(field.type);
        if (type !== null) {
            result[name] = inputFieldToFieldConfig(fields[name], resolveType);
        }
    });
    return result;
}
exports.inputFieldMapToFieldConfigMap = inputFieldMapToFieldConfigMap;
function inputFieldToFieldConfig(field, resolveType) {
    return {
        type: resolveType(field.type),
        defaultValue: field.defaultValue,
        description: field.description,
        astNode: field.astNode,
    };
}
exports.inputFieldToFieldConfig = inputFieldToFieldConfig;

});

unwrapExports(schemaRecreation);
var schemaRecreation_1 = schemaRecreation.recreateType;
var schemaRecreation_2 = schemaRecreation.fieldMapToFieldConfigMap;
var schemaRecreation_3 = schemaRecreation.createResolveType;
var schemaRecreation_4 = schemaRecreation.fieldToFieldConfig;
var schemaRecreation_5 = schemaRecreation.argsToFieldConfigArgumentMap;
var schemaRecreation_6 = schemaRecreation.argumentToArgumentConfig;
var schemaRecreation_7 = schemaRecreation.inputFieldMapToFieldConfigMap;
var schemaRecreation_8 = schemaRecreation.inputFieldToFieldConfig;

var observableToAsyncIterable_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });

function observableToAsyncIterable(observable) {
    var pullQueue = [];
    var pushQueue = [];
    var listening = true;
    var pushValue = function (_a) {
        var data = _a.data;
        if (pullQueue.length !== 0) {
            pullQueue.shift()({ value: data, done: false });
        }
        else {
            pushQueue.push({ value: data });
        }
    };
    var pushError = function (error) {
        if (pullQueue.length !== 0) {
            pullQueue.shift()({ value: { errors: [error] }, done: false });
        }
        else {
            pushQueue.push({ value: { errors: [error] } });
        }
    };
    var pullValue = function () {
        return new Promise(function (resolve) {
            if (pushQueue.length !== 0) {
                var element = pushQueue.shift();
                // either {value: {errors: [...]}} or {value: ...}
                resolve(__assign({}, element, { done: false }));
            }
            else {
                pullQueue.push(resolve);
            }
        });
    };
    var subscription = observable.subscribe({
        next: function (value) {
            pushValue(value);
        },
        error: function (err) {
            pushError(err);
        },
    });
    var emptyQueue = function () {
        if (listening) {
            listening = false;
            subscription.unsubscribe();
            pullQueue.forEach(function (resolve) { return resolve({ value: undefined, done: true }); });
            pullQueue.length = 0;
            pushQueue.length = 0;
        }
    };
    return _a = {
            next: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, listening ? pullValue() : this.return()];
                    });
                });
            },
            return: function () {
                emptyQueue();
                return Promise.resolve({ value: undefined, done: true });
            },
            throw: function (error) {
                emptyQueue();
                return Promise.reject(error);
            }
        },
        _a[iterall.$$asyncIterator] = function () {
            return this;
        },
        _a;
    var _a;
}
exports.observableToAsyncIterable = observableToAsyncIterable;

});

unwrapExports(observableToAsyncIterable_1);
var observableToAsyncIterable_2 = observableToAsyncIterable_1.observableToAsyncIterable;

var makeRemoteExecutableSchema_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });









function makeRemoteExecutableSchema(_a) {
    var schema = _a.schema, link = _a.link, fetcher = _a.fetcher, _b = _a.createResolver, customCreateResolver = _b === void 0 ? createResolver : _b;
    if (!fetcher && link) {
        fetcher = linkToFetcher_1.default(link);
    }
    var typeDefs;
    var printOptions = { commentDescriptions: true };
    if (typeof schema === 'string') {
        typeDefs = schema;
        schema = graphql$1.buildSchema(typeDefs);
    }
    else {
        // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
        typeDefs = graphql$1.printSchema(schema, printOptions);
    }
    // prepare query resolvers
    var queryResolvers = {};
    var queryType = schema.getQueryType();
    var queries = queryType.getFields();
    Object.keys(queries).forEach(function (key) {
        queryResolvers[key] = customCreateResolver(fetcher);
    });
    // prepare mutation resolvers
    var mutationResolvers = {};
    var mutationType = schema.getMutationType();
    if (mutationType) {
        var mutations = mutationType.getFields();
        Object.keys(mutations).forEach(function (key) {
            mutationResolvers[key] = customCreateResolver(fetcher);
        });
    }
    // prepare subscription resolvers
    var subscriptionResolvers = {};
    var subscriptionType = schema.getSubscriptionType();
    if (subscriptionType) {
        var subscriptions = subscriptionType.getFields();
        Object.keys(subscriptions).forEach(function (key) {
            subscriptionResolvers[key] = {
                subscribe: createSubscriptionResolver(key, link),
            };
        });
    }
    // merge resolvers into resolver map
    var resolvers = (_c = {}, _c[queryType.name] = queryResolvers, _c);
    if (!isEmptyObject_1.default(mutationResolvers)) {
        resolvers[mutationType.name] = mutationResolvers;
    }
    if (!isEmptyObject_1.default(subscriptionResolvers)) {
        resolvers[subscriptionType.name] = subscriptionResolvers;
    }
    // add missing abstract resolvers (scalar, unions, interfaces)
    var typeMap = schema.getTypeMap();
    var types = Object.keys(typeMap).map(function (name) { return typeMap[name]; });
    var _loop_1 = function (type) {
        if (type instanceof graphql$1.GraphQLInterfaceType ||
            type instanceof graphql$1.GraphQLUnionType) {
            resolvers[type.name] = {
                __resolveType: function (parent, context, info) {
                    return resolveFromParentTypename_1.default(parent, info.schema);
                },
            };
        }
        else if (type instanceof graphql$1.GraphQLScalarType) {
            if (!(type === graphql$1.GraphQLID ||
                type === graphql$1.GraphQLString ||
                type === graphql$1.GraphQLFloat ||
                type === graphql$1.GraphQLBoolean ||
                type === graphql$1.GraphQLInt)) {
                resolvers[type.name] = schemaRecreation.recreateType(type, function (name) { return null; }, false);
            }
        }
        else if (type instanceof graphql$1.GraphQLObjectType &&
            type.name.slice(0, 2) !== '__' &&
            type !== queryType &&
            type !== mutationType &&
            type !== subscriptionType) {
            var resolver_1 = {};
            Object.keys(type.getFields()).forEach(function (field) {
                resolver_1[field] = defaultMergedResolver_1.default;
            });
            resolvers[type.name] = resolver_1;
        }
    };
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        _loop_1(type);
    }
    return makeExecutableSchema_1.makeExecutableSchema({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });
    var _c;
}
exports.default = makeRemoteExecutableSchema;
function createResolver(fetcher) {
    var _this = this;
    return function (root, args, context, info) { return __awaiter(_this, void 0, void 0, function () {
        var fragments, document, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fragments = Object.keys(info.fragments).map(function (fragment) { return info.fragments[fragment]; });
                    document = {
                        kind: graphql$1.Kind.DOCUMENT,
                        definitions: [info.operation].concat(fragments),
                    };
                    return [4 /*yield*/, fetcher({
                            query: document,
                            variables: info.variableValues,
                            context: { graphqlContext: context },
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, errors.checkResultAndHandleErrors(result, info)];
            }
        });
    }); };
}
exports.createResolver = createResolver;
function createSubscriptionResolver(name, link) {
    return function (root, args, context, info) {
        var fragments = Object.keys(info.fragments).map(function (fragment) { return info.fragments[fragment]; });
        var document = {
            kind: graphql$1.Kind.DOCUMENT,
            definitions: [info.operation].concat(fragments),
        };
        var operation = {
            query: document,
            variables: info.variableValues,
            context: { graphqlContext: context },
        };
        var observable = linkToFetcher_1.execute(link, operation);
        return observableToAsyncIterable_1.observableToAsyncIterable(observable);
    };
}

});

unwrapExports(makeRemoteExecutableSchema_1);
var makeRemoteExecutableSchema_2 = makeRemoteExecutableSchema_1.createResolver;

var introspectSchema_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });


var parsedIntrospectionQuery = graphql$1.parse(graphql$1.introspectionQuery);
function introspectSchema(fetcher, linkContext) {
    return __awaiter(this, void 0, void 0, function () {
        var introspectionResult, schema;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Convert link to fetcher
                    if (fetcher.request) {
                        fetcher = linkToFetcher_1.default(fetcher);
                    }
                    return [4 /*yield*/, fetcher({
                            query: parsedIntrospectionQuery,
                            context: linkContext,
                        })];
                case 1:
                    introspectionResult = _a.sent();
                    if ((introspectionResult.errors && introspectionResult.errors.length) ||
                        !introspectionResult.data.__schema) {
                        throw introspectionResult.errors;
                    }
                    else {
                        schema = graphql$1.buildClientSchema(introspectionResult.data);
                        return [2 /*return*/, schema];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = introspectSchema;

});

unwrapExports(introspectSchema_1);

var transforms = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function applySchemaTransforms(originalSchema, transforms) {
    return transforms.reduce(function (schema, transform) {
        return transform.transformSchema ? transform.transformSchema(schema) : schema;
    }, originalSchema);
}
exports.applySchemaTransforms = applySchemaTransforms;
function applyRequestTransforms(originalRequest, transforms) {
    return transforms.reduce(function (request, transform) {
        return transform.transformRequest
            ? transform.transformRequest(request)
            : request;
    }, originalRequest);
}
exports.applyRequestTransforms = applyRequestTransforms;
function applyResultTransforms(originalResult, transforms) {
    return transforms.reduce(function (result, transform) {
        return transform.transformResult ? transform.transformResult(result) : result;
    }, originalResult);
}
exports.applyResultTransforms = applyResultTransforms;
function composeTransforms() {
    var transforms = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transforms[_i] = arguments[_i];
    }
    var reverseTransforms = transforms.slice().reverse();
    return {
        transformSchema: function (originalSchema) {
            return applySchemaTransforms(originalSchema, transforms);
        },
        transformRequest: function (originalRequest) {
            return applyRequestTransforms(originalRequest, reverseTransforms);
        },
        transformResult: function (result) {
            return applyResultTransforms(result, reverseTransforms);
        },
    };
}
exports.composeTransforms = composeTransforms;

});

unwrapExports(transforms);
var transforms_1 = transforms.applySchemaTransforms;
var transforms_2 = transforms.applyRequestTransforms;
var transforms_3 = transforms.applyResultTransforms;
var transforms_4 = transforms.composeTransforms;

var AddArgumentsAsVariables = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

var AddArgumentsAsVariablesTransform = /** @class */ (function () {
    function AddArgumentsAsVariablesTransform(schema, args) {
        this.schema = schema;
        this.args = args;
    }
    AddArgumentsAsVariablesTransform.prototype.transformRequest = function (originalRequest) {
        var _a = addVariablesToRootField(this.schema, originalRequest.document, this.args), document = _a.document, newVariables = _a.newVariables;
        var variables = __assign({}, originalRequest.variables, newVariables);
        return {
            document: document,
            variables: variables,
        };
    };
    return AddArgumentsAsVariablesTransform;
}());
exports.default = AddArgumentsAsVariablesTransform;
function addVariablesToRootField(targetSchema, document, args) {
    var operations = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.FRAGMENT_DEFINITION; });
    var variableNames = {};
    var newOperations = operations.map(function (operation) {
        var existingVariables = operation.variableDefinitions.map(function (variableDefinition) {
            return variableDefinition.variable.name.value;
        });
        var variableCounter = 0;
        var variables = {};
        var generateVariableName = function (argName) {
            var varName;
            do {
                varName = "_v" + variableCounter + "_" + argName;
                variableCounter++;
            } while (existingVariables.indexOf(varName) !== -1);
            return varName;
        };
        var type;
        if (operation.operation === 'subscription') {
            type = targetSchema.getSubscriptionType();
        }
        else if (operation.operation === 'mutation') {
            type = targetSchema.getMutationType();
        }
        else {
            type = targetSchema.getQueryType();
        }
        var newSelectionSet = [];
        operation.selectionSet.selections.forEach(function (selection) {
            if (selection.kind === graphql$1.Kind.FIELD) {
                var newArgs_1 = {};
                selection.arguments.forEach(function (argument) {
                    newArgs_1[argument.name.value] = argument;
                });
                var name_1 = selection.name.value;
                var field = type.getFields()[name_1];
                field.args.forEach(function (argument) {
                    if (argument.name in args) {
                        var variableName = generateVariableName(argument.name);
                        variableNames[argument.name] = variableName;
                        newArgs_1[argument.name] = {
                            kind: graphql$1.Kind.ARGUMENT,
                            name: {
                                kind: graphql$1.Kind.NAME,
                                value: argument.name,
                            },
                            value: {
                                kind: graphql$1.Kind.VARIABLE,
                                name: {
                                    kind: graphql$1.Kind.NAME,
                                    value: variableName,
                                },
                            },
                        };
                        existingVariables.push(variableName);
                        variables[variableName] = {
                            kind: graphql$1.Kind.VARIABLE_DEFINITION,
                            variable: {
                                kind: graphql$1.Kind.VARIABLE,
                                name: {
                                    kind: graphql$1.Kind.NAME,
                                    value: variableName,
                                },
                            },
                            type: typeToAst(argument.type),
                        };
                    }
                });
                newSelectionSet.push(__assign({}, selection, { arguments: Object.keys(newArgs_1).map(function (argName) { return newArgs_1[argName]; }) }));
            }
            else {
                newSelectionSet.push(selection);
            }
        });
        return __assign({}, operation, { variableDefinitions: operation.variableDefinitions.concat(Object.keys(variables).map(function (varName) { return variables[varName]; })), selectionSet: {
                kind: graphql$1.Kind.SELECTION_SET,
                selections: newSelectionSet,
            } });
    });
    var newVariables = {};
    Object.keys(variableNames).forEach(function (name) {
        newVariables[variableNames[name]] = args[name];
    });
    return {
        document: __assign({}, document, { definitions: newOperations.concat(fragments) }),
        newVariables: newVariables,
    };
}
function typeToAst(type) {
    if (type instanceof graphql$1.GraphQLNonNull) {
        var innerType = typeToAst(type.ofType);
        if (innerType.kind === graphql$1.Kind.LIST_TYPE ||
            innerType.kind === graphql$1.Kind.NAMED_TYPE) {
            return {
                kind: graphql$1.Kind.NON_NULL_TYPE,
                type: innerType,
            };
        }
        else {
            throw new Error('Incorrent inner non-null type');
        }
    }
    else if (type instanceof graphql$1.GraphQLList) {
        return {
            kind: graphql$1.Kind.LIST_TYPE,
            type: typeToAst(type.ofType),
        };
    }
    else {
        return {
            kind: graphql$1.Kind.NAMED_TYPE,
            name: {
                kind: graphql$1.Kind.NAME,
                value: type.toString(),
            },
        };
    }
}

});

unwrapExports(AddArgumentsAsVariables);

var implementsAbstractType_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function implementsAbstractType(schema, typeA, typeB) {
    if (typeA === typeB) {
        return true;
    }
    else if (graphql$1.isCompositeType(typeA) && graphql$1.isCompositeType(typeB)) {
        return graphql$1.doTypesOverlap(schema, typeA, typeB);
    }
    else {
        return false;
    }
}
exports.default = implementsAbstractType;

});

unwrapExports(implementsAbstractType_1);

var FilterToSchema_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });


var FilterToSchema = /** @class */ (function () {
    function FilterToSchema(targetSchema) {
        this.targetSchema = targetSchema;
    }
    FilterToSchema.prototype.transformRequest = function (originalRequest) {
        var document = filterDocumentToSchema(this.targetSchema, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return FilterToSchema;
}());
exports.default = FilterToSchema;
function filterDocumentToSchema(targetSchema, document) {
    var operations = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.FRAGMENT_DEFINITION; });
    var usedFragments = [];
    var newOperations = [];
    var newFragments = [];
    var validFragments = fragments.filter(function (fragment) {
        var typeName = fragment.typeCondition.name.value;
        return Boolean(targetSchema.getType(typeName));
    });
    var validFragmentsWithType = {};
    validFragments.forEach(function (fragment) {
        var typeName = fragment.typeCondition.name.value;
        var type = targetSchema.getType(typeName);
        validFragmentsWithType[fragment.name.value] = type;
    });
    var fragmentSet = Object.create(null);
    operations.forEach(function (operation) {
        var type;
        if (operation.operation === 'subscription') {
            type = targetSchema.getSubscriptionType();
        }
        else if (operation.operation === 'mutation') {
            type = targetSchema.getMutationType();
        }
        else {
            type = targetSchema.getQueryType();
        }
        var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, operation.selectionSet), selectionSet = _a.selectionSet, operationUsedFragments = _a.usedFragments, operationUsedVariables = _a.usedVariables;
        usedFragments = union(usedFragments, operationUsedFragments);
        var _b = collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments), collectedUsedVariables = _b.usedVariables, collectedNewFragments = _b.newFragments, collectedFragmentSet = _b.fragmentSet;
        var fullUsedVariables = union(operationUsedVariables, collectedUsedVariables);
        newFragments = collectedNewFragments;
        fragmentSet = collectedFragmentSet;
        var variableDefinitions = operation.variableDefinitions.filter(function (variable) {
            return fullUsedVariables.indexOf(variable.variable.name.value) !== -1;
        });
        newOperations.push({
            kind: graphql$1.Kind.OPERATION_DEFINITION,
            operation: operation.operation,
            name: operation.name,
            directives: operation.directives,
            variableDefinitions: variableDefinitions,
            selectionSet: selectionSet,
        });
    });
    return {
        kind: graphql$1.Kind.DOCUMENT,
        definitions: newOperations.concat(newFragments),
    };
}
function collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments) {
    var usedVariables = [];
    var newFragments = [];
    var _loop_1 = function () {
        var nextFragmentName = usedFragments.pop();
        var fragment = validFragments.find(function (fr) { return fr.name.value === nextFragmentName; });
        if (fragment) {
            var name_1 = nextFragmentName;
            var typeName = fragment.typeCondition.name.value;
            var type = targetSchema.getType(typeName);
            var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, fragment.selectionSet), selectionSet = _a.selectionSet, fragmentUsedFragments = _a.usedFragments, fragmentUsedVariables = _a.usedVariables;
            usedFragments = union(usedFragments, fragmentUsedFragments);
            usedVariables = union(usedVariables, fragmentUsedVariables);
            if (!fragmentSet[name_1]) {
                fragmentSet[name_1] = true;
                newFragments.push({
                    kind: graphql$1.Kind.FRAGMENT_DEFINITION,
                    name: {
                        kind: graphql$1.Kind.NAME,
                        value: name_1,
                    },
                    typeCondition: fragment.typeCondition,
                    selectionSet: selectionSet,
                });
            }
        }
    };
    while (usedFragments.length !== 0) {
        _loop_1();
    }
    return {
        usedVariables: usedVariables,
        newFragments: newFragments,
        fragmentSet: fragmentSet,
    };
}
function filterSelectionSet(schema, type, validFragments, selectionSet) {
    var usedFragments = [];
    var usedVariables = [];
    var typeStack = [type];
    // Should be rewritten using visitWithSchema
    var filteredSelectionSet = graphql$1.visit(selectionSet, (_a = {},
        _a[graphql$1.Kind.FIELD] = {
            enter: function (node) {
                var parentType = resolveType(typeStack[typeStack.length - 1]);
                if (parentType instanceof graphql$1.GraphQLObjectType ||
                    parentType instanceof graphql$1.GraphQLInterfaceType) {
                    var fields = parentType.getFields();
                    var field = node.name.value === '__typename'
                        ? graphql$1.TypeNameMetaFieldDef
                        : fields[node.name.value];
                    if (!field) {
                        return null;
                    }
                    else {
                        typeStack.push(field.type);
                    }
                    var argNames_1 = (field.args || []).map(function (arg) { return arg.name; });
                    if (node.arguments) {
                        var args = node.arguments.filter(function (arg) {
                            return argNames_1.indexOf(arg.name.value) !== -1;
                        });
                        if (args.length !== node.arguments.length) {
                            return __assign({}, node, { arguments: args });
                        }
                    }
                }
                else if (parentType instanceof graphql$1.GraphQLUnionType &&
                    node.name.value === '__typename') {
                    typeStack.push(graphql$1.TypeNameMetaFieldDef.type);
                }
            },
            leave: function () {
                typeStack.pop();
            },
        },
        _a[graphql$1.Kind.FRAGMENT_SPREAD] = function (node) {
            if (node.name.value in validFragments) {
                var parentType = resolveType(typeStack[typeStack.length - 1]);
                var innerType = validFragments[node.name.value];
                if (!implementsAbstractType_1.default(schema, parentType, innerType)) {
                    return null;
                }
                else {
                    usedFragments.push(node.name.value);
                    return;
                }
            }
            else {
                return null;
            }
        },
        _a[graphql$1.Kind.INLINE_FRAGMENT] = {
            enter: function (node) {
                if (node.typeCondition) {
                    var innerType = schema.getType(node.typeCondition.name.value);
                    var parentType = resolveType(typeStack[typeStack.length - 1]);
                    if (implementsAbstractType_1.default(schema, parentType, innerType)) {
                        typeStack.push(innerType);
                    }
                    else {
                        return null;
                    }
                }
            },
            leave: function (node) {
                typeStack.pop();
            },
        },
        _a[graphql$1.Kind.VARIABLE] = function (node) {
            usedVariables.push(node.name.value);
        },
        _a));
    return {
        selectionSet: filteredSelectionSet,
        usedFragments: usedFragments,
        usedVariables: usedVariables,
    };
    var _a;
}
function resolveType(type) {
    var lastType = type;
    while (lastType instanceof graphql$1.GraphQLNonNull ||
        lastType instanceof graphql$1.GraphQLList) {
        lastType = lastType.ofType;
    }
    return lastType;
}
function union() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var cache = {};
    var result = [];
    arrays.forEach(function (array) {
        array.forEach(function (item) {
            if (!cache[item]) {
                cache[item] = true;
                result.push(item);
            }
        });
    });
    return result;
}

});

unwrapExports(FilterToSchema_1);

var AddTypenameToAbstract_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

var AddTypenameToAbstract = /** @class */ (function () {
    function AddTypenameToAbstract(targetSchema) {
        this.targetSchema = targetSchema;
    }
    AddTypenameToAbstract.prototype.transformRequest = function (originalRequest) {
        var document = addTypenameToAbstract(this.targetSchema, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return AddTypenameToAbstract;
}());
exports.default = AddTypenameToAbstract;
function addTypenameToAbstract(targetSchema, document) {
    var typeInfo = new graphql$1.TypeInfo(targetSchema);
    return graphql$1.visit(document, graphql$1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql$1.Kind.SELECTION_SET] = function (node) {
            var parentType = typeInfo.getParentType();
            var selections = node.selections;
            if (parentType &&
                (parentType instanceof graphql$1.GraphQLInterfaceType ||
                    parentType instanceof graphql$1.GraphQLUnionType) &&
                !selections.find(function (_) {
                    return _.kind === graphql$1.Kind.FIELD &&
                        _.name.value === '__typename';
                })) {
                selections = selections.concat({
                    kind: graphql$1.Kind.FIELD,
                    name: {
                        kind: graphql$1.Kind.NAME,
                        value: '__typename',
                    },
                });
            }
            if (selections !== node.selections) {
                return __assign({}, node, { selections: selections });
            }
        },
        _a)));
    var _a;
}

});

unwrapExports(AddTypenameToAbstract_1);

var CheckResultAndHandleErrors_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var CheckResultAndHandleErrors = /** @class */ (function () {
    function CheckResultAndHandleErrors(info, fieldName) {
        this.info = info;
        this.fieldName = fieldName;
    }
    CheckResultAndHandleErrors.prototype.transformResult = function (result) {
        return errors.checkResultAndHandleErrors(result, this.info, this.fieldName);
    };
    return CheckResultAndHandleErrors;
}());
exports.default = CheckResultAndHandleErrors;

});

unwrapExports(CheckResultAndHandleErrors_1);

var delegateToSchema_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });






function delegateToSchema(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (options instanceof graphql$1.GraphQLSchema) {
        throw new Error('Passing positional arguments to delegateToSchema is a deprecated. ' +
            'Please pass named parameters instead.');
    }
    return delegateToSchemaImplementation(options);
}
exports.default = delegateToSchema;
function delegateToSchemaImplementation(options) {
    return __awaiter(this, void 0, void 0, function () {
        var info, _a, args, operation, rawDocument, rawRequest, transforms$$1, processedRequest, errors, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    info = options.info, _a = options.args, args = _a === void 0 ? {} : _a;
                    operation = options.operation || info.operation.operation;
                    rawDocument = createDocument(options.fieldName, operation, info.fieldNodes, Object.keys(info.fragments).map(function (fragmentName) { return info.fragments[fragmentName]; }), info.operation.variableDefinitions, info.operation.name);
                    rawRequest = {
                        document: rawDocument,
                        variables: info.variableValues,
                    };
                    transforms$$1 = (options.transforms || []).concat([
                        new AddArgumentsAsVariables.default(options.schema, args),
                        new FilterToSchema_1.default(options.schema),
                        new AddTypenameToAbstract_1.default(options.schema),
                        new CheckResultAndHandleErrors_1.default(info, options.fieldName),
                    ]);
                    processedRequest = transforms.applyRequestTransforms(rawRequest, transforms$$1);
                    if (!options.skipValidation) {
                        errors = graphql$1.validate(options.schema, processedRequest.document);
                        if (errors.length > 0) {
                            throw errors;
                        }
                    }
                    if (!(operation === 'query' || operation === 'mutation')) return [3 /*break*/, 2];
                    _b = transforms.applyResultTransforms;
                    return [4 /*yield*/, graphql$1.execute(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];
                case 1: return [2 /*return*/, _b.apply(void 0, [_c.sent(),
                        transforms$$1])];
                case 2:
                    if (operation === 'subscription') {
                        // apply result processing ???
                        return [2 /*return*/, graphql$1.subscribe(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createDocument(targetField, targetOperation, originalSelections, fragments, variables, operationName) {
    var selections = [];
    var args = [];
    originalSelections.forEach(function (field) {
        var fieldSelections = field.selectionSet
            ? field.selectionSet.selections
            : [];
        selections = selections.concat(fieldSelections);
        args = args.concat(field.arguments || []);
    });
    var selectionSet = null;
    if (selections.length > 0) {
        selectionSet = {
            kind: graphql$1.Kind.SELECTION_SET,
            selections: selections,
        };
    }
    var rootField = {
        kind: graphql$1.Kind.FIELD,
        alias: null,
        arguments: args,
        selectionSet: selectionSet,
        name: {
            kind: graphql$1.Kind.NAME,
            value: targetField,
        },
    };
    var rootSelectionSet = {
        kind: graphql$1.Kind.SELECTION_SET,
        selections: [rootField],
    };
    var operationDefinition = {
        kind: graphql$1.Kind.OPERATION_DEFINITION,
        operation: targetOperation,
        variableDefinitions: variables,
        selectionSet: rootSelectionSet,
        name: operationName,
    };
    return {
        kind: graphql$1.Kind.DOCUMENT,
        definitions: [operationDefinition].concat(fragments),
    };
}

});

unwrapExports(delegateToSchema_1);

var typeFromAST_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var backcompatOptions = { commentDescriptions: true };
function typeFromAST(node, getType) {
    switch (node.kind) {
        case graphql$1.Kind.OBJECT_TYPE_DEFINITION:
            return makeObjectType(node, getType);
        case graphql$1.Kind.INTERFACE_TYPE_DEFINITION:
            return makeInterfaceType(node, getType);
        case graphql$1.Kind.ENUM_TYPE_DEFINITION:
            return makeEnumType(node, getType);
        case graphql$1.Kind.UNION_TYPE_DEFINITION:
            return makeUnionType(node, getType);
        case graphql$1.Kind.SCALAR_TYPE_DEFINITION:
            return makeScalarType(node, getType);
        case graphql$1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
            return makeInputObjectType(node, getType);
        default:
            return null;
    }
}
exports.default = typeFromAST;
function makeObjectType(node, getType) {
    return new graphql$1.GraphQLObjectType({
        name: node.name.value,
        fields: function () { return makeFields(node.fields, getType); },
        interfaces: function () {
            return node.interfaces.map(function (iface) { return getType(iface.name.value, 'interface'); });
        },
        description: getDescription(node, backcompatOptions),
    });
}
function makeInterfaceType(node, getType) {
    return new graphql$1.GraphQLInterfaceType({
        name: node.name.value,
        fields: function () { return makeFields(node.fields, getType); },
        description: getDescription(node, backcompatOptions),
        resolveType: function (parent, context, info) {
            return resolveFromParentTypename_1.default(parent, info.schema);
        },
    });
}
function makeEnumType(node, getType) {
    var values = {};
    node.values.forEach(function (value) {
        values[value.name.value] = {
            description: getDescription(value, backcompatOptions),
        };
    });
    return new graphql$1.GraphQLEnumType({
        name: node.name.value,
        values: values,
        description: getDescription(node, backcompatOptions),
    });
}
function makeUnionType(node, getType) {
    return new graphql$1.GraphQLUnionType({
        name: node.name.value,
        types: function () {
            return node.types.map(function (type) { return resolveType(type, getType, 'object'); });
        },
        description: getDescription(node, backcompatOptions),
        resolveType: function (parent, context, info) {
            return resolveFromParentTypename_1.default(parent, info.schema);
        },
    });
}
function makeScalarType(node, getType) {
    return new graphql$1.GraphQLScalarType({
        name: node.name.value,
        description: getDescription(node, backcompatOptions),
        serialize: function () { return null; },
        // Note: validation calls the parse functions to determine if a
        // literal value is correct. Returning null would cause use of custom
        // scalars to always fail validation. Returning false causes them to
        // always pass validation.
        parseValue: function () { return false; },
        parseLiteral: function () { return false; },
    });
}
function makeInputObjectType(node, getType) {
    return new graphql$1.GraphQLInputObjectType({
        name: node.name.value,
        fields: function () { return makeValues(node.fields, getType); },
        description: getDescription(node, backcompatOptions),
    });
}
function makeFields(nodes, getType) {
    var result = {};
    nodes.forEach(function (node) {
        result[node.name.value] = {
            type: resolveType(node.type, getType, 'object'),
            args: makeValues(node.arguments, getType),
            description: getDescription(node, backcompatOptions),
        };
    });
    return result;
}
function makeValues(nodes, getType) {
    var result = {};
    nodes.forEach(function (node) {
        var type = resolveType(node.type, getType, 'input');
        result[node.name.value] = {
            type: type,
            defaultValue: graphql$1.valueFromAST(node.defaultValue, type),
            description: getDescription(node, backcompatOptions),
        };
    });
    return result;
}
function resolveType(node, getType, type) {
    switch (node.kind) {
        case graphql$1.Kind.LIST_TYPE:
            return new graphql$1.GraphQLList(resolveType(node.type, getType, type));
        case graphql$1.Kind.NON_NULL_TYPE:
            return new graphql$1.GraphQLNonNull(resolveType(node.type, getType, type));
        default:
            return getType(node.name.value, type);
    }
}
// Code below temporarily copied from graphql/graphql-js pending PR
// https://github.com/graphql/graphql-js/pull/1165
// MIT License
// Copyright (c) 2015-present, Facebook, Inc.
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function getDescription(node, options) {
    if (node.description) {
        return node.description.value;
    }
    if (options && options.commentDescriptions) {
        var rawValue = getLeadingCommentBlock(node);
        if (rawValue !== undefined) {
            return blockStringValue('\n' + rawValue);
        }
    }
}
function getLeadingCommentBlock(node) {
    var loc = node.loc;
    if (!loc) {
        return;
    }
    var comments = [];
    var token = loc.startToken.prev;
    while (token &&
        token.kind === 'Comment' &&
        token.next &&
        token.prev &&
        token.line + 1 === token.next.line &&
        token.line !== token.prev.line) {
        var value = String(token.value);
        comments.push(value);
        token = token.prev;
    }
    return comments.reverse().join('\n');
}
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
    // Expand a block string's raw value into independent lines.
    var lines = rawString.split(/\r\n|[\n\r]/g);
    // Remove common indentation from all lines but first.
    var commonIndent = null;
    for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var indent = leadingWhitespace(line);
        if (indent < line.length &&
            (commonIndent === null || indent < commonIndent)) {
            commonIndent = indent;
            if (commonIndent === 0) {
                break;
            }
        }
    }
    if (commonIndent) {
        for (var i = 1; i < lines.length; i++) {
            lines[i] = lines[i].slice(commonIndent);
        }
    }
    // Remove leading and trailing blank lines.
    while (lines.length > 0 && isBlank(lines[0])) {
        lines.shift();
    }
    while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
        lines.pop();
    }
    // Return a string of the lines joined with U+000A.
    return lines.join('\n');
}
function leadingWhitespace(str) {
    var i = 0;
    while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
        i++;
    }
    return i;
}
function isBlank(str) {
    return leadingWhitespace(str) === str.length;
}

});

unwrapExports(typeFromAST_1$1);

var visitSchema_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var VisitSchemaKind;
(function (VisitSchemaKind) {
    VisitSchemaKind["TYPE"] = "VisitSchemaKind.TYPE";
    VisitSchemaKind["SCALAR_TYPE"] = "VisitSchemaKind.SCALAR_TYPE";
    VisitSchemaKind["ENUM_TYPE"] = "VisitSchemaKind.ENUM_TYPE";
    VisitSchemaKind["COMPOSITE_TYPE"] = "VisitSchemaKind.COMPOSITE_TYPE";
    VisitSchemaKind["OBJECT_TYPE"] = "VisitSchemaKind.OBJECT_TYPE";
    VisitSchemaKind["INPUT_OBJECT_TYPE"] = "VisitSchemaKind.INPUT_OBJECT_TYPE";
    VisitSchemaKind["ABSTRACT_TYPE"] = "VisitSchemaKind.ABSTRACT_TYPE";
    VisitSchemaKind["UNION_TYPE"] = "VisitSchemaKind.UNION_TYPE";
    VisitSchemaKind["INTERFACE_TYPE"] = "VisitSchemaKind.INTERFACE_TYPE";
    VisitSchemaKind["ROOT_OBJECT"] = "VisitSchemaKind.ROOT_OBJECT";
    VisitSchemaKind["QUERY"] = "VisitSchemaKind.QUERY";
    VisitSchemaKind["MUTATION"] = "VisitSchemaKind.MUTATION";
    VisitSchemaKind["SUBSCRIPTION"] = "VisitSchemaKind.SUBSCRIPTION";
})(VisitSchemaKind = exports.VisitSchemaKind || (exports.VisitSchemaKind = {}));
function visitSchema(schema, visitor, stripResolvers) {
    var types = {};
    var resolveType = schemaRecreation.createResolveType(function (name) {
        if (typeof types[name] === 'undefined') {
            throw new Error("Can't find type " + name + ".");
        }
        return types[name];
    });
    var queryType = schema.getQueryType();
    var mutationType = schema.getMutationType();
    var subscriptionType = schema.getSubscriptionType();
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).map(function (typeName) {
        var type = typeMap[typeName];
        if (graphql$1.isNamedType(type) && graphql$1.getNamedType(type).name.slice(0, 2) !== '__') {
            var specifiers = getTypeSpecifiers(type, schema);
            var typeVisitor = getVisitor(visitor, specifiers);
            if (typeVisitor) {
                var result = typeVisitor(type, schema);
                if (typeof result === 'undefined') {
                    types[typeName] = schemaRecreation.recreateType(type, resolveType, !stripResolvers);
                }
                else if (result === null) {
                    types[typeName] = null;
                }
                else {
                    types[typeName] = schemaRecreation.recreateType(result, resolveType, !stripResolvers);
                }
            }
            else {
                types[typeName] = schemaRecreation.recreateType(type, resolveType, !stripResolvers);
            }
        }
    });
    return new graphql$1.GraphQLSchema({
        query: queryType ? types[queryType.name] : null,
        mutation: mutationType
            ? types[mutationType.name]
            : null,
        subscription: subscriptionType
            ? types[subscriptionType.name]
            : null,
        types: Object.keys(types).map(function (name) { return types[name]; }),
    });
}
exports.visitSchema = visitSchema;
function getTypeSpecifiers(type, schema) {
    var specifiers = [VisitSchemaKind.TYPE];
    if (type instanceof graphql$1.GraphQLObjectType) {
        specifiers.unshift(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.OBJECT_TYPE);
        var query = schema.getQueryType();
        var mutation = schema.getMutationType();
        var subscription = schema.getSubscriptionType();
        if (type === query) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.QUERY);
        }
        else if (type === mutation) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.MUTATION);
        }
        else if (type === subscription) {
            specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.SUBSCRIPTION);
        }
    }
    else if (type instanceof graphql$1.GraphQLInputObjectType) {
        specifiers.push(VisitSchemaKind.INPUT_OBJECT_TYPE);
    }
    else if (type instanceof graphql$1.GraphQLInterfaceType) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.INTERFACE_TYPE);
    }
    else if (type instanceof graphql$1.GraphQLUnionType) {
        specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.UNION_TYPE);
    }
    else if (type instanceof graphql$1.GraphQLEnumType) {
        specifiers.push(VisitSchemaKind.ENUM_TYPE);
    }
    else if (type instanceof graphql$1.GraphQLScalarType) {
        specifiers.push(VisitSchemaKind.SCALAR_TYPE);
    }
    return specifiers;
}
function getVisitor(visitor, specifiers) {
    var typeVisitor = null;
    var stack = specifiers.slice();
    while (!typeVisitor && stack.length > 0) {
        var next = stack.pop();
        typeVisitor = visitor[next];
    }
    return typeVisitor;
}

});

unwrapExports(visitSchema_1);
var visitSchema_2 = visitSchema_1.VisitSchemaKind;
var visitSchema_3 = visitSchema_1.visitSchema;

var resolvers = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function generateProxyingResolvers(targetSchema, transforms, mapping) {
    var result = {};
    Object.keys(mapping).forEach(function (name) {
        result[name] = {};
        var innerMapping = mapping[name];
        Object.keys(innerMapping).forEach(function (from) {
            var to = innerMapping[from];
            var resolverType = to.operation === 'subscription' ? 'subscribe' : 'resolve';
            result[name][from] = (_a = {},
                _a[resolverType] = createProxyingResolver(targetSchema, to.operation, to.name, transforms),
                _a);
            var _a;
        });
    });
    return result;
}
exports.generateProxyingResolvers = generateProxyingResolvers;
function generateSimpleMapping(targetSchema) {
    var query = targetSchema.getQueryType();
    var mutation = targetSchema.getMutationType();
    var subscription = targetSchema.getSubscriptionType();
    var result = {};
    if (query) {
        result[query.name] = generateMappingFromObjectType(query, 'query');
    }
    if (mutation) {
        result[mutation.name] = generateMappingFromObjectType(mutation, 'mutation');
    }
    if (subscription) {
        result[subscription.name] = generateMappingFromObjectType(subscription, 'subscription');
    }
    return result;
}
exports.generateSimpleMapping = generateSimpleMapping;
function generateMappingFromObjectType(type, operation) {
    var result = {};
    var fields = type.getFields();
    Object.keys(fields).forEach(function (fieldName) {
        result[fieldName] = {
            name: fieldName,
            operation: operation,
        };
    });
    return result;
}
exports.generateMappingFromObjectType = generateMappingFromObjectType;
function createProxyingResolver(schema, operation, fieldName, transforms) {
    return function (parent, args, context, info) { return delegateToSchema_1.default({
        schema: schema,
        operation: operation,
        fieldName: fieldName,
        args: {},
        context: context,
        info: info,
        transforms: transforms,
    }); };
}

});

unwrapExports(resolvers);
var resolvers_1 = resolvers.generateProxyingResolvers;
var resolvers_2 = resolvers.generateSimpleMapping;
var resolvers_3 = resolvers.generateMappingFromObjectType;

var transformSchema_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




function transformSchema(targetSchema, transforms$$1) {
    var schema = visitSchema_1.visitSchema(targetSchema, {}, true);
    var mapping = resolvers.generateSimpleMapping(targetSchema);
    var resolvers$$1 = resolvers.generateProxyingResolvers(targetSchema, transforms$$1, mapping);
    makeExecutableSchema_1.addResolveFunctionsToSchema({
        schema: schema,
        resolvers: resolvers$$1,
        resolverValidationOptions: {
            allowResolversNotInSchema: true,
        },
    });
    schema = transforms.applySchemaTransforms(schema, transforms$$1);
    schema.transforms = transforms$$1;
    return schema;
}
exports.default = transformSchema;

});

unwrapExports(transformSchema_1);

var ReplaceFieldWithFragment_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

var ReplaceFieldWithFragment = /** @class */ (function () {
    function ReplaceFieldWithFragment(targetSchema, fragments) {
        this.targetSchema = targetSchema;
        this.mapping = {};
        for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
            var _a = fragments_1[_i], field = _a.field, fragment = _a.fragment;
            var parsedFragment = parseFragmentToInlineFragment(fragment);
            var actualTypeName = parsedFragment.typeCondition.name.value;
            this.mapping[actualTypeName] = this.mapping[actualTypeName] || {};
            this.mapping[actualTypeName][field] = parsedFragment;
        }
    }
    ReplaceFieldWithFragment.prototype.transformRequest = function (originalRequest) {
        var document = replaceFieldsWithFragments(this.targetSchema, originalRequest.document, this.mapping);
        return __assign({}, originalRequest, { document: document });
    };
    return ReplaceFieldWithFragment;
}());
exports.default = ReplaceFieldWithFragment;
function replaceFieldsWithFragments(targetSchema, document, mapping) {
    var typeInfo = new graphql$1.TypeInfo(targetSchema);
    return graphql$1.visit(document, graphql$1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql$1.Kind.SELECTION_SET] = function (node) {
            var parentType = typeInfo.getParentType();
            if (parentType) {
                var parentTypeName_1 = parentType.name;
                var selections_1 = node.selections;
                if (mapping[parentTypeName_1]) {
                    node.selections.forEach(function (selection) {
                        if (selection.kind === graphql$1.Kind.FIELD) {
                            var name_1 = selection.name.value;
                            var fragment = mapping[parentTypeName_1][name_1];
                            if (fragment) {
                                selections_1 = selections_1.concat(fragment);
                            }
                        }
                    });
                }
                if (selections_1 !== node.selections) {
                    return __assign({}, node, { selections: selections_1 });
                }
            }
        },
        _a)));
    var _a;
}
function parseFragmentToInlineFragment(definitions) {
    if (definitions.trim().startsWith('fragment')) {
        var document_1 = graphql$1.parse(definitions);
        for (var _i = 0, _a = document_1.definitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            if (definition.kind === graphql$1.Kind.FRAGMENT_DEFINITION) {
                return {
                    kind: graphql$1.Kind.INLINE_FRAGMENT,
                    typeCondition: definition.typeCondition,
                    selectionSet: definition.selectionSet,
                };
            }
        }
    }
    var query = graphql$1.parse("{" + definitions + "}")
        .definitions[0];
    for (var _b = 0, _c = query.selectionSet.selections; _b < _c.length; _b++) {
        var selection = _c[_b];
        if (selection.kind === graphql$1.Kind.INLINE_FRAGMENT) {
            return selection;
        }
    }
    throw new Error('Could not parse fragment');
}

});

unwrapExports(ReplaceFieldWithFragment_1);

var RenameTypes_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });



var RenameTypes = /** @class */ (function () {
    function RenameTypes(renamer, options) {
        this.renamer = renamer;
        this.reverseMap = {};
        var _a = options || {}, _b = _a.renameBuiltins, renameBuiltins = _b === void 0 ? false : _b, _c = _a.renameScalars, renameScalars = _c === void 0 ? true : _c;
        this.renameBuiltins = renameBuiltins;
        this.renameScalars = renameScalars;
    }
    RenameTypes.prototype.transformSchema = function (originalSchema) {
        var _this = this;
        return visitSchema_1.visitSchema(originalSchema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
                if (isSpecifiedScalarType_1.default(type) && !_this.renameBuiltins) {
                    return undefined;
                }
                if (type instanceof graphql$1.GraphQLScalarType && !_this.renameScalars) {
                    return undefined;
                }
                var newName = _this.renamer(type.name);
                if (newName && newName !== type.name) {
                    _this.reverseMap[newName] = type.name;
                    var newType = Object.assign(Object.create(type), type);
                    newType.name = newName;
                    return newType;
                }
            },
            _a[visitSchema_1.VisitSchemaKind.ROOT_OBJECT] = function (type) {
                return undefined;
            },
            _a));
        var _a;
    };
    RenameTypes.prototype.transformRequest = function (originalRequest) {
        var _this = this;
        var newDocument = graphql$1.visit(originalRequest.document, (_a = {},
            _a[graphql$1.Kind.NAMED_TYPE] = function (node) {
                var name = node.name.value;
                if (name in _this.reverseMap) {
                    return __assign({}, node, { name: {
                            kind: graphql$1.Kind.NAME,
                            value: _this.reverseMap[name],
                        } });
                }
            },
            _a));
        return {
            document: newDocument,
            variables: originalRequest.variables,
        };
        var _a;
    };
    RenameTypes.prototype.transformResult = function (result) {
        if (result.data) {
            var data = this.renameTypes(result.data, 'data');
            if (data !== result.data) {
                return __assign({}, result, { data: data });
            }
        }
        return result;
    };
    RenameTypes.prototype.renameTypes = function (value, name) {
        var _this = this;
        if (name === '__typename') {
            return this.renamer(value);
        }
        if (value && typeof value === 'object') {
            var newValue_1 = Array.isArray(value) ? []
                // Create a new object with the same prototype.
                : Object.create(Object.getPrototypeOf(value));
            var returnNewValue_1 = false;
            Object.keys(value).forEach(function (key) {
                var oldChild = value[key];
                var newChild = _this.renameTypes(oldChild, key);
                newValue_1[key] = newChild;
                if (newChild !== oldChild) {
                    returnNewValue_1 = true;
                }
            });
            if (returnNewValue_1) {
                return newValue_1;
            }
        }
        return value;
    };
    return RenameTypes;
}());
exports.default = RenameTypes;

});

unwrapExports(RenameTypes_1);

var FilterTypes_1 = createCommonjsModule(function (module, exports) {
/* tslint:disable:no-unused-expression */
Object.defineProperty(exports, "__esModule", { value: true });

var FilterTypes = /** @class */ (function () {
    function FilterTypes(filter) {
        this.filter = filter;
    }
    FilterTypes.prototype.transformSchema = function (schema) {
        var _this = this;
        return visitSchema_1.visitSchema(schema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
                if (_this.filter(type)) {
                    return undefined;
                }
                else {
                    return null;
                }
            },
            _a));
        var _a;
    };
    return FilterTypes;
}());
exports.default = FilterTypes;

});

unwrapExports(FilterTypes_1);

var TransformRootFields_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });




var TransformRootFields = /** @class */ (function () {
    function TransformRootFields(transform) {
        this.transform = transform;
    }
    TransformRootFields.prototype.transformSchema = function (originalSchema) {
        var _this = this;
        return visitSchema_1.visitSchema(originalSchema, (_a = {},
            _a[visitSchema_1.VisitSchemaKind.QUERY] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Query', fieldName, field);
                });
            },
            _a[visitSchema_1.VisitSchemaKind.MUTATION] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Mutation', fieldName, field);
                });
            },
            _a[visitSchema_1.VisitSchemaKind.SUBSCRIPTION] = function (type) {
                return transformFields(type, function (fieldName, field) {
                    return _this.transform('Subscription', fieldName, field);
                });
            },
            _a));
        var _a;
    };
    return TransformRootFields;
}());
exports.default = TransformRootFields;
function transformFields(type, transformer) {
    var resolveType = schemaRecreation.createResolveType(function (name, originalType) {
        return originalType;
    });
    var fields = type.getFields();
    var newFields = {};
    Object.keys(fields).forEach(function (fieldName) {
        var field = fields[fieldName];
        var newField = transformer(fieldName, field);
        if (typeof newField === 'undefined') {
            newFields[fieldName] = schemaRecreation.fieldToFieldConfig(field, resolveType, true);
        }
        else if (newField !== null) {
            if (newField.name) {
                newFields[newField.name] = newField.field;
            }
            else {
                newFields[fieldName] = newField;
            }
        }
    });
    if (isEmptyObject_1.default(newFields)) {
        return null;
    }
    else {
        return new graphql$1.GraphQLObjectType({
            name: type.name,
            description: type.description,
            astNode: type.astNode,
            fields: newFields,
        });
    }
}

});

unwrapExports(TransformRootFields_1);

var RenameRootFields_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var RenameRootFields = /** @class */ (function () {
    function RenameRootFields(renamer) {
        var resolveType = schemaRecreation.createResolveType(function (name, type) { return type; });
        this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
            return {
                name: renamer(operation, fieldName, field),
                field: schemaRecreation.fieldToFieldConfig(field, resolveType, true),
            };
        });
    }
    RenameRootFields.prototype.transformSchema = function (originalSchema) {
        return this.transformer.transformSchema(originalSchema);
    };
    return RenameRootFields;
}());
exports.default = RenameRootFields;

});

unwrapExports(RenameRootFields_1);

var FilterRootFields_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var FilterRootFields = /** @class */ (function () {
    function FilterRootFields(filter) {
        this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
            if (filter(operation, fieldName, field)) {
                return undefined;
            }
            else {
                return null;
            }
        });
    }
    FilterRootFields.prototype.transformSchema = function (originalSchema) {
        return this.transformer.transformSchema(originalSchema);
    };
    return FilterRootFields;
}());
exports.default = FilterRootFields;

});

unwrapExports(FilterRootFields_1);

var ExpandAbstractTypes_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });


var ExpandAbstractTypes = /** @class */ (function () {
    function ExpandAbstractTypes(transformedSchema, targetSchema) {
        this.targetSchema = targetSchema;
        this.mapping = extractPossibleTypes(transformedSchema, targetSchema);
        this.reverseMapping = flipMapping(this.mapping);
    }
    ExpandAbstractTypes.prototype.transformRequest = function (originalRequest) {
        var document = expandAbstractTypes(this.targetSchema, this.mapping, this.reverseMapping, originalRequest.document);
        return __assign({}, originalRequest, { document: document });
    };
    return ExpandAbstractTypes;
}());
exports.default = ExpandAbstractTypes;
function extractPossibleTypes(transformedSchema, targetSchema) {
    var typeMap = transformedSchema.getTypeMap();
    var mapping = {};
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        if (graphql$1.isAbstractType(type)) {
            var targetType = targetSchema.getType(typeName);
            if (!graphql$1.isAbstractType(targetType)) {
                var implementations = transformedSchema.getPossibleTypes(type);
                mapping[typeName] = implementations
                    .filter(function (impl) { return targetSchema.getType(impl.name); })
                    .map(function (impl) { return impl.name; });
            }
        }
    });
    return mapping;
}
function flipMapping(mapping) {
    var result = {};
    Object.keys(mapping).forEach(function (typeName) {
        var toTypeNames = mapping[typeName];
        toTypeNames.forEach(function (toTypeName) {
            if (!result[toTypeName]) {
                result[toTypeName] = [];
            }
            result[toTypeName].push(typeName);
        });
    });
    return result;
}
function expandAbstractTypes(targetSchema, mapping, reverseMapping, document) {
    var operations = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.OPERATION_DEFINITION; });
    var fragments = document.definitions.filter(function (def) { return def.kind === graphql$1.Kind.FRAGMENT_DEFINITION; });
    var existingFragmentNames = fragments.map(function (fragment) { return fragment.name.value; });
    var fragmentCounter = 0;
    var generateFragmentName = function (typeName) {
        var fragmentName;
        do {
            fragmentName = "_" + typeName + "_Fragment" + fragmentCounter;
            fragmentCounter++;
        } while (existingFragmentNames.indexOf(fragmentName) !== -1);
        return fragmentName;
    };
    var newFragments = [];
    var fragmentReplacements = {};
    fragments.forEach(function (fragment) {
        newFragments.push(fragment);
        var possibleTypes = mapping[fragment.typeCondition.name.value];
        if (possibleTypes) {
            fragmentReplacements[fragment.name.value] = [];
            possibleTypes.forEach(function (possibleTypeName) {
                var name = generateFragmentName(possibleTypeName);
                existingFragmentNames.push(name);
                var newFragment = {
                    kind: graphql$1.Kind.FRAGMENT_DEFINITION,
                    name: {
                        kind: graphql$1.Kind.NAME,
                        value: name,
                    },
                    typeCondition: {
                        kind: graphql$1.Kind.NAMED_TYPE,
                        name: {
                            kind: graphql$1.Kind.NAME,
                            value: possibleTypeName,
                        },
                    },
                    selectionSet: fragment.selectionSet,
                };
                newFragments.push(newFragment);
                fragmentReplacements[fragment.name.value].push({
                    fragmentName: name,
                    typeName: possibleTypeName,
                });
            });
        }
    });
    var newDocument = __assign({}, document, { definitions: operations.concat(newFragments) });
    var typeInfo = new graphql$1.TypeInfo(targetSchema);
    return graphql$1.visit(newDocument, graphql$1.visitWithTypeInfo(typeInfo, (_a = {},
        _a[graphql$1.Kind.SELECTION_SET] = function (node) {
            var newSelections = node.selections.slice();
            var parentType = graphql$1.getNamedType(typeInfo.getParentType());
            node.selections.forEach(function (selection) {
                if (selection.kind === graphql$1.Kind.INLINE_FRAGMENT) {
                    var possibleTypes = mapping[selection.typeCondition.name.value];
                    if (possibleTypes) {
                        possibleTypes.forEach(function (possibleType) {
                            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(possibleType))) {
                                newSelections.push({
                                    kind: graphql$1.Kind.INLINE_FRAGMENT,
                                    typeCondition: {
                                        kind: graphql$1.Kind.NAMED_TYPE,
                                        name: {
                                            kind: graphql$1.Kind.NAME,
                                            value: possibleType,
                                        },
                                    },
                                    selectionSet: selection.selectionSet,
                                });
                            }
                        });
                    }
                }
                else if (selection.kind === graphql$1.Kind.FRAGMENT_SPREAD) {
                    var fragmentName = selection.name.value;
                    var replacements = fragmentReplacements[fragmentName];
                    if (replacements) {
                        replacements.forEach(function (replacement) {
                            var typeName = replacement.typeName;
                            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(typeName))) {
                                newSelections.push({
                                    kind: graphql$1.Kind.FRAGMENT_SPREAD,
                                    name: {
                                        kind: graphql$1.Kind.NAME,
                                        value: replacement.fragmentName,
                                    },
                                });
                            }
                        });
                    }
                }
            });
            if (parentType && reverseMapping[parentType.name]) {
                newSelections.push({
                    kind: graphql$1.Kind.FIELD,
                    name: {
                        kind: graphql$1.Kind.NAME,
                        value: '__typename',
                    },
                });
            }
            if (newSelections.length !== node.selections.length) {
                return __assign({}, node, { selections: newSelections });
            }
        },
        _a)));
    var _a;
}

});

unwrapExports(ExpandAbstractTypes_1);

var ExtractField_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

var ExtractField = /** @class */ (function () {
    function ExtractField(_a) {
        var from = _a.from, to = _a.to;
        this.from = from;
        this.to = to;
    }
    ExtractField.prototype.transformRequest = function (originalRequest) {
        var fromSelection;
        var ourPathFrom = JSON.stringify(this.from);
        var ourPathTo = JSON.stringify(this.to);
        var fieldPath = [];
        graphql$1.visit(originalRequest.document, (_a = {},
            _a[graphql$1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathFrom === JSON.stringify(fieldPath)) {
                        fromSelection = node.selectionSet;
                        return graphql$1.BREAK;
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                },
            },
            _a));
        fieldPath = [];
        var newDocument = graphql$1.visit(originalRequest.document, (_b = {},
            _b[graphql$1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPathTo === JSON.stringify(fieldPath) && fromSelection) {
                        return __assign({}, node, { selectionSet: fromSelection });
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                },
            },
            _b));
        return __assign({}, originalRequest, { document: newDocument });
        var _a, _b;
    };
    return ExtractField;
}());
exports.default = ExtractField;

});

unwrapExports(ExtractField_1);

var WrapQuery_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });

var WrapQuery = /** @class */ (function () {
    function WrapQuery(path, wrapper, extractor) {
        this.path = path;
        this.wrapper = wrapper;
        this.extractor = extractor;
    }
    WrapQuery.prototype.transformRequest = function (originalRequest) {
        var _this = this;
        var document = originalRequest.document;
        var fieldPath = [];
        var ourPath = JSON.stringify(this.path);
        var newDocument = graphql$1.visit(document, (_a = {},
            _a[graphql$1.Kind.FIELD] = {
                enter: function (node) {
                    fieldPath.push(node.name.value);
                    if (ourPath === JSON.stringify(fieldPath)) {
                        var selection = _this.wrapper(node.selectionSet);
                        return __assign({}, node, { selectionSet: {
                                kind: graphql$1.Kind.SELECTION_SET,
                                selections: [selection],
                            } });
                    }
                },
                leave: function (node) {
                    fieldPath.pop();
                },
            },
            _a));
        return __assign({}, originalRequest, { document: newDocument });
        var _a;
    };
    WrapQuery.prototype.transformResult = function (originalResult) {
        var data = originalResult.data;
        if (data) {
            var path = this.path.slice();
            while (path.length > 1) {
                var next = path.unshift();
                if (data[next]) {
                    data = data[next];
                }
            }
            data[path[0]] = this.extractor(data[path[0]]);
        }
        return {
            data: data,
            errors: originalResult.errors,
        };
    };
    return WrapQuery;
}());
exports.default = WrapQuery;

});

unwrapExports(WrapQuery_1);

var transforms$2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.transformSchema = transformSchema_1.default;

exports.AddArgumentsAsVariables = AddArgumentsAsVariables.default;

exports.CheckResultAndHandleErrors = CheckResultAndHandleErrors_1.default;

exports.ReplaceFieldWithFragment = ReplaceFieldWithFragment_1.default;

exports.AddTypenameToAbstract = AddTypenameToAbstract_1.default;

exports.FilterToSchema = FilterToSchema_1.default;

exports.RenameTypes = RenameTypes_1.default;

exports.FilterTypes = FilterTypes_1.default;

exports.TransformRootFields = TransformRootFields_1.default;

exports.RenameRootFields = RenameRootFields_1.default;

exports.FilterRootFields = FilterRootFields_1.default;

exports.ExpandAbstractTypes = ExpandAbstractTypes_1.default;

exports.ExtractField = ExtractField_1.default;

exports.WrapQuery = WrapQuery_1.default;

});

unwrapExports(transforms$2);
var transforms_1$1 = transforms$2.transformSchema;
var transforms_2$1 = transforms$2.AddArgumentsAsVariables;
var transforms_3$1 = transforms$2.CheckResultAndHandleErrors;
var transforms_4$1 = transforms$2.ReplaceFieldWithFragment;
var transforms_5 = transforms$2.AddTypenameToAbstract;
var transforms_6 = transforms$2.FilterToSchema;
var transforms_7 = transforms$2.RenameTypes;
var transforms_8 = transforms$2.FilterTypes;
var transforms_9 = transforms$2.TransformRootFields;
var transforms_10 = transforms$2.RenameRootFields;
var transforms_11 = transforms$2.FilterRootFields;
var transforms_12 = transforms$2.ExpandAbstractTypes;
var transforms_13 = transforms$2.ExtractField;
var transforms_14 = transforms$2.WrapQuery;

var mergeSchemas_1 = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });








function mergeSchemas(_a) {
    var schemas = _a.schemas, onTypeConflict = _a.onTypeConflict, resolvers = _a.resolvers, schemaDirectives = _a.schemaDirectives;
    var visitType = defaultVisitType;
    if (onTypeConflict) {
        console.warn('`onTypeConflict` is deprecated. Use schema transforms to customize merging logic.');
        visitType = createVisitTypeFromOnTypeConflict(onTypeConflict);
    }
    return mergeSchemasImplementation({ schemas: schemas, visitType: visitType, resolvers: resolvers, schemaDirectives: schemaDirectives });
}
exports.default = mergeSchemas;
function mergeSchemasImplementation(_a) {
    var schemas = _a.schemas, visitType = _a.visitType, resolvers = _a.resolvers, schemaDirectives = _a.schemaDirectives;
    var allSchemas = [];
    var typeCandidates = {};
    var types = {};
    var extensions = [];
    var fragments = [];
    if (!visitType) {
        visitType = defaultVisitType;
    }
    var resolveType = schemaRecreation.createResolveType(function (name) {
        if (types[name] === undefined) {
            throw new Error("Can't find type " + name + ".");
        }
        return types[name];
    });
    var createNamedStub = function (name, type) {
        var constructor;
        if (type === 'object') {
            constructor = graphql$1.GraphQLObjectType;
        }
        else if (type === 'interface') {
            constructor = graphql$1.GraphQLInterfaceType;
        }
        else {
            constructor = graphql$1.GraphQLInputObjectType;
        }
        return new constructor({
            name: name,
            fields: {
                __fake: {
                    type: graphql$1.GraphQLString,
                },
            },
        });
    };
    schemas.forEach(function (schema) {
        if (schema instanceof graphql$1.GraphQLSchema) {
            allSchemas.push(schema);
            var queryType_1 = schema.getQueryType();
            var mutationType_1 = schema.getMutationType();
            var subscriptionType_1 = schema.getSubscriptionType();
            if (queryType_1) {
                addTypeCandidate(typeCandidates, 'Query', {
                    schema: schema,
                    type: queryType_1,
                });
            }
            if (mutationType_1) {
                addTypeCandidate(typeCandidates, 'Mutation', {
                    schema: schema,
                    type: mutationType_1,
                });
            }
            if (subscriptionType_1) {
                addTypeCandidate(typeCandidates, 'Subscription', {
                    schema: schema,
                    type: subscriptionType_1,
                });
            }
            var typeMap_1 = schema.getTypeMap();
            Object.keys(typeMap_1).forEach(function (typeName) {
                var type = typeMap_1[typeName];
                if (graphql$1.isNamedType(type) &&
                    graphql$1.getNamedType(type).name.slice(0, 2) !== '__' &&
                    type !== queryType_1 &&
                    type !== mutationType_1 &&
                    type !== subscriptionType_1) {
                    addTypeCandidate(typeCandidates, type.name, {
                        schema: schema,
                        type: type,
                    });
                }
            });
        }
        else if (typeof schema === 'string') {
            var parsedSchemaDocument = graphql$1.parse(schema);
            parsedSchemaDocument.definitions.forEach(function (def) {
                var type = typeFromAST_1$1.default(def, createNamedStub);
                if (type) {
                    addTypeCandidate(typeCandidates, type.name, {
                        type: type,
                    });
                }
            });
            var extensionsDocument = makeExecutableSchema_1.extractExtensionDefinitions(parsedSchemaDocument);
            if (extensionsDocument.definitions.length > 0) {
                extensions.push(extensionsDocument);
            }
        }
        else if (Array.isArray(schema)) {
            schema.forEach(function (type) {
                addTypeCandidate(typeCandidates, type.name, {
                    type: type,
                });
            });
        }
        else {
            throw new Error("Invalid schema passed");
        }
    });
    var mergeInfo = createMergeInfo(allSchemas, fragments);
    if (!resolvers) {
        resolvers = {};
    }
    else if (typeof resolvers === 'function') {
        console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
        resolvers = resolvers(mergeInfo);
    }
    else if (Array.isArray(resolvers)) {
        resolvers = resolvers.reduce(function (left, right) {
            if (typeof right === 'function') {
                console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
                right = right(mergeInfo);
            }
            return mergeDeep_1.default(left, right);
        }, {});
    }
    var generatedResolvers = {};
    Object.keys(typeCandidates).forEach(function (typeName) {
        var resultType = visitType(typeName, typeCandidates[typeName]);
        if (resultType === null) {
            types[typeName] = null;
        }
        else {
            var type = void 0;
            var typeResolvers = void 0;
            if (graphql$1.isNamedType(resultType)) {
                type = resultType;
            }
            else if (resultType.type) {
                type = resultType.type;
                typeResolvers = resultType.resolvers;
            }
            else {
                throw new Error("Invalid visitType result for type " + typeName);
            }
            types[typeName] = schemaRecreation.recreateType(type, resolveType, false);
            if (typeResolvers) {
                generatedResolvers[typeName] = typeResolvers;
            }
        }
    });
    var mergedSchema = new graphql$1.GraphQLSchema({
        query: types.Query,
        mutation: types.Mutation,
        subscription: types.Subscription,
        types: Object.keys(types).map(function (key) { return types[key]; }),
    });
    extensions.forEach(function (extension) {
        mergedSchema = graphql$1.extendSchema(mergedSchema, extension, {
            commentDescriptions: true,
        });
    });
    if (!resolvers) {
        resolvers = {};
    }
    else if (Array.isArray(resolvers)) {
        resolvers = resolvers.reduce(mergeDeep_1.default, {});
    }
    Object.keys(resolvers).forEach(function (typeName) {
        var type = resolvers[typeName];
        if (type instanceof graphql$1.GraphQLScalarType) {
            return;
        }
        Object.keys(type).forEach(function (fieldName) {
            var field = type[fieldName];
            if (field.fragment) {
                fragments.push({
                    field: fieldName,
                    fragment: field.fragment,
                });
            }
        });
    });
    makeExecutableSchema_1.addResolveFunctionsToSchema({
        schema: mergedSchema,
        resolvers: mergeDeep_1.default(generatedResolvers, resolvers),
    });
    forEachField(mergedSchema, function (field) {
        if (field.resolve) {
            var fieldResolver_1 = field.resolve;
            field.resolve = function (parent, args, context, info) {
                var newInfo = __assign({}, info, { mergeInfo: mergeInfo });
                return fieldResolver_1(parent, args, context, newInfo);
            };
        }
        if (field.subscribe) {
            var fieldResolver_2 = field.subscribe;
            field.subscribe = function (parent, args, context, info) {
                var newInfo = __assign({}, info, { mergeInfo: mergeInfo });
                return fieldResolver_2(parent, args, context, newInfo);
            };
        }
    });
    if (schemaDirectives) {
        schemaVisitor.SchemaDirectiveVisitor.visitSchemaDirectives(mergedSchema, schemaDirectives);
    }
    return mergedSchema;
}
function createMergeInfo(allSchemas, fragments) {
    return {
        delegate: function (operation, fieldName, args, context, info, transforms) {
            console.warn('`mergeInfo.delegate` is deprecated. ' +
                'Use `mergeInfo.delegateToSchema and pass explicit schema instances.');
            var schema = guessSchemaByRootField(allSchemas, operation, fieldName);
            var expandTransforms = new transforms$2.ExpandAbstractTypes(info.schema, schema);
            var fragmentTransform = new transforms$2.ReplaceFieldWithFragment(schema, fragments);
            return delegateToSchema_1.default({
                schema: schema,
                operation: operation,
                fieldName: fieldName,
                args: args,
                context: context,
                info: info,
                transforms: (transforms || []).concat([
                    expandTransforms,
                    fragmentTransform,
                ]),
            });
        },
        delegateToSchema: function (options) {
            return delegateToSchema_1.default(__assign({}, options, { transforms: (options.transforms || []).concat([
                    new transforms$2.ExpandAbstractTypes(options.info.schema, options.schema),
                    new transforms$2.ReplaceFieldWithFragment(options.schema, fragments),
                ]) }));
        },
    };
}
function guessSchemaByRootField(schemas, operation, fieldName) {
    for (var _i = 0, schemas_1 = schemas; _i < schemas_1.length; _i++) {
        var schema = schemas_1[_i];
        var rootObject = void 0;
        if (operation === 'subscription') {
            rootObject = schema.getSubscriptionType();
        }
        else if (operation === 'mutation') {
            rootObject = schema.getMutationType();
        }
        else {
            rootObject = schema.getQueryType();
        }
        if (rootObject) {
            var fields = rootObject.getFields();
            if (fields[fieldName]) {
                return schema;
            }
        }
    }
    throw new Error("Could not find subschema with field `{operation}.{fieldName}`");
}
function createDelegatingResolver(schema, operation, fieldName) {
    return function (root, args, context, info) {
        return info.mergeInfo.delegateToSchema({
            schema: schema,
            operation: operation,
            fieldName: fieldName,
            args: args,
            context: context,
            info: info,
        });
    };
}
function forEachField(schema, fn) {
    var typeMap = schema.getTypeMap();
    Object.keys(typeMap).forEach(function (typeName) {
        var type = typeMap[typeName];
        if (!graphql$1.getNamedType(type).name.startsWith('__') &&
            type instanceof graphql$1.GraphQLObjectType) {
            var fields_1 = type.getFields();
            Object.keys(fields_1).forEach(function (fieldName) {
                var field = fields_1[fieldName];
                fn(field, typeName, fieldName);
            });
        }
    });
}
function addTypeCandidate(typeCandidates, name, typeCandidate) {
    if (!typeCandidates[name]) {
        typeCandidates[name] = [];
    }
    typeCandidates[name].push(typeCandidate);
}
function createVisitTypeFromOnTypeConflict(onTypeConflict) {
    return function (name, candidates) {
        return defaultVisitType(name, candidates, function (cands) {
            return cands.reduce(function (prev, next) {
                var type = onTypeConflict(prev.type, next.type, {
                    left: {
                        schema: prev.schema,
                    },
                    right: {
                        schema: next.schema,
                    },
                });
                if (prev.type === type) {
                    return prev;
                }
                else if (next.type === type) {
                    return next;
                }
                else {
                    return {
                        schemaName: 'unknown',
                        type: type,
                    };
                }
            });
        });
    };
}
var defaultVisitType = function (name, candidates, candidateSelector) {
    if (!candidateSelector) {
        candidateSelector = function (cands) { return cands[cands.length - 1]; };
    }
    var resolveType = schemaRecreation.createResolveType(function (_, type) { return type; });
    if (name === 'Query' || name === 'Mutation' || name === 'Subscription') {
        var fields_2 = {};
        var operationName_1;
        switch (name) {
            case 'Query':
                operationName_1 = 'query';
                break;
            case 'Mutation':
                operationName_1 = 'mutation';
                break;
            case 'Subscription':
                operationName_1 = 'subscription';
                break;
            default:
                break;
        }
        var resolvers_1 = {};
        var resolverKey_1 = operationName_1 === 'subscription' ? 'subscribe' : 'resolve';
        candidates.forEach(function (_a) {
            var candidateType = _a.type, schema = _a.schema;
            var candidateFields = candidateType.getFields();
            fields_2 = __assign({}, fields_2, candidateFields);
            Object.keys(candidateFields).forEach(function (fieldName) {
                resolvers_1[fieldName] = (_a = {},
                    _a[resolverKey_1] = createDelegatingResolver(schema, operationName_1, fieldName),
                    _a);
                var _a;
            });
        });
        var type = new graphql$1.GraphQLObjectType({
            name: name,
            fields: schemaRecreation.fieldMapToFieldConfigMap(fields_2, resolveType, false),
        });
        return {
            type: type,
            resolvers: resolvers_1,
        };
    }
    else {
        var candidate = candidateSelector(candidates);
        return candidate.type;
    }
};

});

unwrapExports(mergeSchemas_1);

var stitching = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

exports.makeRemoteExecutableSchema = makeRemoteExecutableSchema_1.default;
exports.defaultCreateRemoteResolver = makeRemoteExecutableSchema_1.createResolver;

exports.introspectSchema = introspectSchema_1.default;

exports.mergeSchemas = mergeSchemas_1.default;

exports.delegateToSchema = delegateToSchema_1.default;

exports.defaultMergedResolver = defaultMergedResolver_1.default;

});

unwrapExports(stitching);
var stitching_1 = stitching.makeRemoteExecutableSchema;
var stitching_2 = stitching.defaultCreateRemoteResolver;
var stitching_3 = stitching.introspectSchema;
var stitching_4 = stitching.mergeSchemas;
var stitching_5 = stitching.delegateToSchema;
var stitching_6 = stitching.defaultMergedResolver;

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(makeExecutableSchema_1);
__export(mock);
__export(stitching);
__export(transforms$2);

exports.SchemaDirectiveVisitor = schemaVisitor.SchemaDirectiveVisitor;

});

var tools = unwrapExports(dist);
var dist_1 = dist.SchemaDirectiveVisitor;

class graphqlfaas {
  constructor (typeDefs, resolvers, endpointURL) {
    const schema = tools.makeExecutableSchema({ typeDefs, resolvers });
    this.options = {
      endpointURL,
      schema
    };
  }

  server (req) {
    return gqlServerCore(this.options, req)
  }
}

module.exports = graphqlfaas;
