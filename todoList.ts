// Define an interface for a ToDo item
interface ToDoItem {
    id: number;
    task: string;
    completed: boolean;
}

// Define a class to manage the ToDo list
class ToDoList {
    private items: ToDoItem[] = [];
    private nextId: number = 1;

    addItem(task: string): void {
        const newItem: ToDoItem = {
            id: this.nextId++,
            task: task,
            completed: false
        };
        this.items.push(newItem);
        console.log(`Added task: ${task}`);
    }

    markAsCompleted(id: number): void {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.completed = true;
            console.log(`Marked task as completed: ${item.task}`);
        } else {
            console.log(`Task with id ${id} not found`);
        }
    }

    listItems(): void {
        console.log("To-Do List:");
        this.items.forEach(item => {
            console.log(`${item.id}. [${item.completed ? 'X' : ' '}] ${item.task}`);
        });
    }
}

// Usage example
const myToDo = new ToDoList();

myToDo.addItem("Learn TypeScript");
myToDo.addItem("Build a project");
myToDo.addItem("Share knowledge");

myToDo.listItems();

myToDo.markAsCompleted(2);

myToDo.listItems();
