"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getVertex(name, arr) {
    return arr.filter(function (v) { return v.name === name; })[0];
}
function serializeVertex(v) {
    return "{\"name\":\"" + v.name + "\", \"label\": \"" + v.name + "\"},";
}
function serializeEdge(e, arr) {
    return "{\"vertexOne\": " + serializeVertex(getVertex(e.vertexOne, arr)) + " \"vertexTwo\": " + serializeVertex(getVertex(e.vertexTwo, arr)) + " \"isDirected\": false},";
}
function graphSerializer(graph) {
    var serializedGraph = '{"isUndirected": false, "weighted": false, "vertices": [';
    if (graph.vertices.length > 0) {
        graph.vertices.forEach(function (v) { return serializedGraph = serializedGraph + serializeVertex(v); });
        serializedGraph = serializedGraph.substring(0, serializedGraph.length - 1);
    }
    serializedGraph = serializedGraph + "], \"edges\": [";
    if (graph.edges.length > 0) {
        graph.edges.forEach(function (e) { return serializedGraph = serializedGraph + serializeEdge(e, graph.vertices); });
        serializedGraph = serializedGraph.substring(0, serializedGraph.length - 1);
    }
    serializedGraph = serializedGraph + ']}';
    return serializedGraph;
}
exports.graphSerializer = graphSerializer;
//# sourceMappingURL=serializers.js.map