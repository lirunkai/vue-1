/* @flow */

// 导出配置

import {
  no,
  noop,
  identity
} from 'shared/util'

// no 返回false
// identity 返回输入
// noop 返回undefined

import { LIFECYCLE_HOOKS } from 'shared/constants' // 拿出lifecycle

export type Config = {
  // user     用户可配置
  optionMergeStrategies: { [key: string]: Function }; //
  silent: boolean;          // 取消日志和警告
  productionTip: boolean;
  performance: boolean;       // 设置为true以在浏览器开发工具启动对组件初始化，渲染和打补丁的性能跟踪
  devtools: boolean;               //是否使用vue-devtools检查
  errorHandler: ?(err: Error, vm: Component, info: string) => void; // 错误处理
  warnHandler: ?(msg: string, vm: Component, trace: string) => void;  // 报错处理
  ignoredElements: Array<string>;        // 需要忽略的元素
  keyCodes: { [key: string]: number | Array<number> };   // 键盘code值

  // platform
  isReservedTag: (x?: string) => boolean;
  isReservedAttr: (x?: string) => boolean;
  parsePlatformTagName: (x: string) => string;
  isUnknownElement: (x?: string) => boolean;
  getTagNamespace: (x?: string) => string | void;
  mustUseProp: (tag: string, type: ?string, name: string) => boolean;

  // legacy
  _lifecycleHooks: Array<string>;
};

export default ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
}: Config)
