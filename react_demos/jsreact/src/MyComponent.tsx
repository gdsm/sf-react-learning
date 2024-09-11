import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const MyComponent= (): JSX.Element  => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response: AxiosResponse<Todo[]>) => {
        setTodos(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default MyComponent;
