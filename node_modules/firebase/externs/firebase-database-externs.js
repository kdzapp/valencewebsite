/**
 * @fileoverview Firebase Database API.
 * Version: 3.0.2
 *
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @externs
 */

/**
 * Access the Database service for the default App (or a given app).
 *
 * Usage (either):
 *
 *   firebase.database()
 *   firebase.database(app)
 *
 * @namespace
 * @param {!firebase.app.App=} app
 * @return {!firebase.database.Database}
 */
firebase.database = function(app) {};

/**
 * Access the Database service from an App instance.
 *
 * Usage:
 *
 *   app.database()
 *
 * @return {!firebase.database.Database}
 */
firebase.app.App.prototype.database = function() {};


/**
 * The Firebase Database service interface.
 *
 * Do not call this constructor directly - use firebase.database() instead.
 * @interface
 */
firebase.database.Database = function() {};

/**
 * Log debugging information to the console.
 *
 * @param {(boolean|*)=} logger
 * @param {boolean=} persistent Remembers the logging state between page
 *     refreshes if true.
 */
firebase.database.enableLogging = function(logger, persistent) {};

/**
 * When saved in the database, this value will be converted to the actual time
 * when synchronized with the server.
 *
 * @const {{
 *   TIMESTAMP: !Object
 * }}
 */
firebase.database.ServerValue;

/**
 * @const {string}
 */
firebase.database.SDK_VERSION;


/**
 * The App associated with the Database service instance.
 *
 * @type {!firebase.app.App}
 */
firebase.database.Database.prototype.app;

/**
 * Returns a reference to the root or the specified path.
 *
 * @param {string=} path
 * @return {!firebase.database.Reference} Firebase reference.
 */
firebase.database.Database.prototype.ref = function(path) {};

/**
 * Returns a reference to the root or the path specified in url. An exception is
 * thrown if the url is not in the same domain as the current database.
 *
 * @param {string} url
 * @return {!firebase.database.Reference} Firebase reference.
 */
firebase.database.Database.prototype.refFromURL = function(url) {};

/**
 * Disconnect from the server (all database operations will be completed
 * offline).
 */
firebase.database.Database.prototype.goOffline = function() {};

/**
 * (Re)connect to the server and synchronize the offline database state
 * with the server state.
 */
firebase.database.Database.prototype.goOnline = function() {};

/**
 * A reference to a database location.
 *
 * @interface
 * @extends {firebase.database.Query}
 */
firebase.database.Reference = function() {};

/**
 * @type {string|null}
 */
firebase.database.Reference.prototype.key;


/**
 * @param {string} path
 * @return {!firebase.database.Reference}
 */
firebase.database.Reference.prototype.child = function(path) {};


/**
 * The parent reference of a given reference.
 *
 * @type {?firebase.database.Reference}
 */
firebase.database.Reference.prototype.parent;


/**
 * @type {!firebase.database.Reference}
 */
firebase.database.Reference.prototype.root;


/**
 * @param {*} newVal
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.Reference.prototype.set = function(newVal, onComplete) {};


/**
 * @param {!Object} objectToMerge
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.Reference.prototype.update =
    function(objectToMerge, onComplete) {};


/**
 * @param {*} newVal
 * @param {string|number|null} newPriority
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.Reference.prototype.setWithPriority =
    function(newVal, newPriority, onComplete) {};


/**
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.Reference.prototype.remove = function(onComplete) {};


/**
 * @param {function(*): *} transactionUpdate
 * @param {(function(?Error, boolean,
 *                   ?firebase.database.DataSnapshot))=} onComplete
 * @param {boolean=} applyLocally
 * @return {!firebase.Promise<{
 *   committed: boolean,
 *   snapshot: ?firebase.database.DataSnapshot
 * }>}
 */
firebase.database.Reference.prototype.transaction =
    function(transactionUpdate, onComplete, applyLocally) {};


/**
 * @param {string|number|null} priority
 * @param {function(?Error)} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.Reference.prototype.setPriority =
    function(priority, onComplete) {};


/**
 * @interface
 * @extends {firebase.database.Reference}
 * @extends {firebase.Thenable<void>}
 */
firebase.database.ThenableReference = function() {};


/**
 * @param {*=} value
 * @param {function(?Error)=} onComplete
 * @return {!firebase.database.ThenableReference}
 */
firebase.database.Reference.prototype.push = function(value, onComplete) {};


/**
 * @return {!firebase.database.OnDisconnect}
 */
firebase.database.Reference.prototype.onDisconnect = function() {};


/**
 * @interface
 */
firebase.database.Query = function() {}


/**
 * @type {!firebase.database.Reference}
 */
firebase.database.Query.prototype.ref;


/**
 * @param {!string} eventType
 * @param {!function(firebase.database.DataSnapshot, string=)} callback
 * @param {(function(Error)|Object)=} cancelCallbackOrContext
 * @param {Object=} context
 * @return {!function(firebase.database.DataSnapshot, string=)}
 */
firebase.database.Query.prototype.on =
    function(eventType, callback, cancelCallbackOrContext, context) {};


/**
 * @param {string=} eventType
 * @param {function(!firebase.database.DataSnapshot, ?string=)=} callback
 * @param {Object=} context
 */
firebase.database.Query.prototype.off =
    function(eventType, callback, context) {};


/**
 * @param {!string} eventType
 * @param {!function(!firebase.database.DataSnapshot, string=)} userCallback
 * @return {!firebase.Promise<*>}
 */
firebase.database.Query.prototype.once = function(eventType, userCallback) {};


/**
 * @param {!number} limit
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.limitToFirst = function(limit) {};


/**
 * @param {!number} limit
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.limitToLast = function(limit) {};


/**
 * @param {!string} path
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.orderByChild = function(path) {};


/**
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.orderByKey = function() {};


/**
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.orderByPriority = function() {};


/**
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.orderByValue = function() {};


/**
 * @param {number|string|boolean|null} value
 * @param {string=} key
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.startAt = function(value, key) {};


/**
 * @param {number|string|boolean|null} value
 * @param {string=} key
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.endAt = function(value, key) {};


/**
 * @param {number|string|boolean|null} value
 * @param {string=} key
 * @return {!firebase.database.Query}
 */
firebase.database.Query.prototype.equalTo = function(value, key) {};


/**
 * @return {string} URL for this location.
 * @override
 */
firebase.database.Query.prototype.toString = function() {};



/**
 * Data returned via Reference.on() methods is encapsulated in DataSnapshot.
 * @interface
 */
firebase.database.DataSnapshot = function() {};


/**
 * Convert the DataSnapshot to a Javascript value (number, boolean, string,
 * Object, Array or null).
 *
 * @return {*}
 */
firebase.database.DataSnapshot.prototype.val = function() {};


/**
 * @return {*}
 */
firebase.database.DataSnapshot.prototype.exportVal = function() {};


/**
 * @return {boolean}
 */
firebase.database.DataSnapshot.prototype.exists = function() {};


/**
 * @param {string} path
 * @return {!firebase.database.DataSnapshot}
 */
firebase.database.DataSnapshot.prototype.child = function(path) {};


/**
 * @param {string} path
 * @return {boolean}
 */
firebase.database.DataSnapshot.prototype.hasChild = function(path) {};


/**
 * @return {string|number|null}
 */
firebase.database.DataSnapshot.prototype.getPriority = function() {};


/**
 * Enumerate the top-level children in the DataSnapshot.
 * @param {function(!firebase.database.DataSnapshot): boolean} action
 * @return {boolean}
 */
firebase.database.DataSnapshot.prototype.forEach = function(action) {};


/**
 * @return {boolean}
 */
firebase.database.DataSnapshot.prototype.hasChildren = function() {};


/**
 * @type {string|null}
 */
firebase.database.DataSnapshot.prototype.key;


/**
 * @return {number}
 */
firebase.database.DataSnapshot.prototype.numChildren = function() {};


/**
 * @type {!firebase.database.Reference}
 */
firebase.database.DataSnapshot.prototype.ref;



/**
 * @interface
 */
firebase.database.OnDisconnect = function() {};


/**
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.OnDisconnect.prototype.cancel = function(onComplete) {};


/**
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.OnDisconnect.prototype.remove = function(onComplete) {};

/**
 * @param {*} value
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.OnDisconnect.prototype.set =
    function(value, onComplete) {};


/**
 * @param {*} value
 * @param {number|string|null} priority
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.OnDisconnect.prototype.setWithPriority =
    function(value, priority, onComplete) {};


/**
 * @param {!Object} objectToMerge
 * @param {function(?Error)=} onComplete
 * @return {!firebase.Promise<void>}
 */
firebase.database.OnDisconnect.prototype.update =
    function(objectToMerge, onComplete) {};
