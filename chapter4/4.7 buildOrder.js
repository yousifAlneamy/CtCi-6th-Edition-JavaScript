/**
 * 2.7
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
 * projects, where the second project is dependent on the first project). All of a project's dependencies
 * must be built before the project is. Find a build order that will allow the projects to be built. If there
 * is no valid build order, return an error.
 * EXAMPLE
 * Input:
 * projects: a, b, c, d, e, f
 * dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, e, a, b, d, c
 * @param {array} projects
 * @param {array[]} dependencies
 * To understand the idea of this solution, watch this youtube video: https://youtu.be/ddTC4Zovtbc
 */
function buildOrder(projects, dependencies) {
	let graph = {};

	for (let project of projects) {
		graph[project] = { name: project, children: [] };
	}

	for (let dependency of dependencies) {
		graph[dependency[0]].children.push(dependency[1]);
	}

	let visited = {};
	let stack = [];
	for (let key in graph) {
		console.log(key);
		if (visited[key]) {
			continue;
		}
		const node = graph[key];

		topSortUtil({ node, visited, stack, graph });
	}
	return stack;
}
function topSortUtil({ node, visited, stack, graph }) {
	console.log(node);

	visited[node.name] = true;

	for (let child of node.children) {
		if (visited[child]) {
			continue;
		}

		topSortUtil({ node: graph[child], visited, stack, graph });
	}

	stack.push(node.name);
}

let a = "a",
	b = "b",
	c = "c",
	d = "d",
	e = "e",
	f = "f";

console.log("stack", buildOrder([a, b, c, d, e, f], [[a, d], [f, b], [b, d], [f, a], [d, c]]));
