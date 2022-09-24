let selection = prompt("what would you like to do?");

const todoList = ["Make breakfast", "Do Dishes"]

while (selection !== "quit" && selection !== "q") {
    if (selection === "list") {
        console.log("Your Current List:");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("______________________________");
    } else if (selection == "new") {
        const newItem = prompt("What is the new task?");
        todoList.push(newItem);
        console.log(`${newItem} added to the to-do list!`);
    } else if () {
        const index = prompt("What would you like to delete?");
        const deleted = todoList.splice(index, 1)
        console.log(`${deleted[0]} was removed from your to-do list!`)
        console.log("______________________________");

    }
    selection = prompt("what would you like to do?");
}
console.log("The Todo List Has Been Quit Succesfully!")