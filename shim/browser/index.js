/**
 * JSON schema validator
 * @module aschema
 * @version 3.1.0
 */
'use strict';

var ASchema = require('./aschema');

var create = require('./create');

var lib = create.bind(void 0);
Object.assign(lib, ASchema, {
  create: create,
  ASchema: ASchema
});
module.exports = lib;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFTY2hlbWEiLCJyZXF1aXJlIiwiY3JlYXRlIiwibGliIiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQSxJQUFJRSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxRQUFWO0FBRUFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxHQUFkLEVBQW1CSCxPQUFuQixFQUE0QjtBQUMxQkUsRUFBQUEsTUFBTSxFQUFOQSxNQUQwQjtBQUUxQkYsRUFBQUEsT0FBTyxFQUFQQTtBQUYwQixDQUE1QjtBQUtBTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJMLEdBQWpCIiwic291cmNlUm9vdCI6Ii4uLy4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSlNPTiBzY2hlbWEgdmFsaWRhdG9yXG4gKiBAbW9kdWxlIGFzY2hlbWFcbiAqIEB2ZXJzaW9uIDMuMS4wXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBBU2NoZW1hID0gcmVxdWlyZSgnLi9hc2NoZW1hJylcbmNvbnN0IGNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlJylcblxubGV0IGxpYiA9IGNyZWF0ZS5iaW5kKHRoaXMpXG5cbk9iamVjdC5hc3NpZ24obGliLCBBU2NoZW1hLCB7XG4gIGNyZWF0ZSxcbiAgQVNjaGVtYVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBsaWJcbiJdfQ==