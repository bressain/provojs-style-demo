// ignore css & images during tests
require.extensions['.css'] = function () { return {} }
require.extensions['.jpg'] = function () { return {} }
