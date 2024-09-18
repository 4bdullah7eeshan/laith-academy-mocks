export default async function fetchToDos(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {mode: 'cors'});
    const data = await response.json();
    return data;
}