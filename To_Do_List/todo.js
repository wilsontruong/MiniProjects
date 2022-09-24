let selection = prompt("what would you like to do?");

const todoList = ["Make breakfast", "Do Dishes"]

while (selection !== "quit" && selection !== "q") {
    if (selection === "list") {
        console.log("______________________________");
        console.log("Your Current List:");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }

    } else if (selection == "new") {
        console.log("______________________________");
        const newItem = prompt("What is the new task?");
        todoList.push(newItem);
        console.log(`${newItem} added to the to-do list!`);
    } else if (selection == "delete") {
        console.log("______________________________");
        const index = parseInt(prompt("What would you like to delete?"));
        if (!Number.isNaN(index)) {
            const deleted = todoList.splice(index, 1);
            console.log(`${deleted[0]} was removed from your to-do list!`)
        } else {
            console.log("Unknown List Number");
        }    



    }
    selection = prompt("what would you like to do?");
}
console.log("______________________________");
console.log("The Todo List Has Been Quit Succesfully!")
console.log("______________________________");