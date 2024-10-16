import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Lists({todoData, setTodoData}) {

    
    const handleCompleteChange = (id) => {
        const newTodoData = todoData.map((data) => {
            if (data.id === id) {
                return { ...data, completed: !data.completed };
                }
            return data;
            });
        setTodoData(newTodoData);
        };
        
    const handleClick = (id) => {
        const newTodoData = todoData.filter((data) => data.id !== id);
        console.log("newTodoData", newTodoData);
        setTodoData(newTodoData);
    };
    
    return (
        <div>
            <DragDropContext>
            <Droppable droppableId='todo'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoData.map((data, index) => (
                    <Draggable
                        key={data.id}
                        draggableId={data.id.toString()}
                        index={index}
                    >
                    {(provided, snapshot) => (
                    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                            <div className='items-center'>
                                <input
                                type="checkbox"
                                onChange={() => handleCompleteChange(data.id)}
                                defaultChecked={data.completed}
                            />{" "}
                            <span className={data.completed && "line-through"}>{data.title}</span>
                            </div>
                        <div className= "items-center">
                            <button onClick={() => handleClick(data.id)}>
                                x</button>
                            </div>
                        </div>
                    </div>
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
            </DragDropContext>
        </div>
    )
}
