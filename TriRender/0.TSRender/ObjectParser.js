/**
 * ObjectParser
 */
/// <reference path="Render.ts" />
/**
 * Vetex
 */
var Vetex = (function () {
    function Vetex() {
    }
    return Vetex;
})();
var ObjectParser = (function () {
    function ObjectParser() {
    }
    ObjectParser.Parse = function (fileContent) {
        var vertices = [];
        var uvs = [];
        var normals = [];
        var triangles = [];
        var lines = fileContent.split("\n");
        for (var i = 0; i < lines.length; i++) {
            var element = lines[i];
            if (element.charAt(0) == "#") {
                continue;
            }
            var words = element.split("");
            switch (words[0]) {
                case 'v':
                    {
                        if (words.length == 4) {
                            var x = parseFloat(words[1]);
                            var y = parseFloat(words[2]);
                            var z = parseFloat(words[3]);
                            var v = new Vector3(x, y, z);
                            vertices.push(v);
                        }
                        break;
                    }
                case 'vt':
                    {
                        if (words.length == 3) {
                            var x = parseFloat(words[1]);
                            var y = parseFloat(words[2]);
                            var uv = new Vector2(x, y);
                            uvs.push(uv);
                        }
                        break;
                    }
                case "vn":
                    {
                        if (words.length == 4) {
                            var x = parseFloat(words[1]);
                            var y = parseFloat(words[2]);
                            var z = parseFloat(words[3]);
                            var n = new Vector3(x, y, z);
                            normals.push(v);
                        }
                        break;
                    }
                case 'f':
                    {
                        if (words.length = 3) {
                        }
                        else if (words.length = 4) {
                        }
                    }
                default: break;
            }
        }
        return null;
    };
    return ObjectParser;
})();
