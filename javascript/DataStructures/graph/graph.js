'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}


class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addVertex(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight){
    // find the node we want to connect
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }


}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');

graph.addDirectedEdge(A,B);
graph.addDirectedEdge(A,C);
graph.addDirectedEdge(A,D);


