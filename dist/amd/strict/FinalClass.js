/*jslint newcap:true*/
/*global define*/

define([
    './Class',
    './common/randomAccessor',
    './common/checkObjectPrototype'
], function FinalClassWrapper(
    Class,
    randomAccessor,
    checkObjectPrototype
) {

    "use strict";

    checkObjectPrototype();

    var random = randomAccessor(),
        $class = '$class_' + random;

    return function FinalClass(params) {

        var def = new Class(params);
        def[$class].finalClass = true;

        return def;
    };
});