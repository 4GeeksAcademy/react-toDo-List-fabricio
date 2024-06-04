import React, { useState } from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	}

	const addTask = (e) => {
		if (e.key === "Enter") {
			setTasks([...tasks, inputValue]);
			setInputValue(" ");
		}
	}

	const deleteTask = (index) => {
		setTasks(tasks.filter((_, newIndex) => newIndex !== index))
	}

	return (
		<section>
			<h1>TO DO LIST </h1>
			<input
				value={inputValue}
				onChange={(e) => handleChange(e)}
				onKeyDown={(e) => addTask(e)}
				type="text" className="form-control" placeholder="Tareas pendientes" aria-label="Username" aria-describedby="basic-addon1" />
			<ul>
				{
					tasks.map((task, index) => (<li>{task} <button onClick={() => deleteTask(index)} className="btn btn-danger"><i class="fas fa-trash"></i></button> </li>))
				}

			</ul>

		</section>

	);
};

export default Home;
