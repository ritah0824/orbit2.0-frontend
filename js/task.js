// ✅ NEW FUNCTION: Update current task display
function updateCurrentTaskDisplay() {
    const currentTask = getCurrentTask();
    const displayElement = document.querySelector("#current-task-display");
    
    if (currentTask) {
        // Show task name with progress
        displayElement.innerHTML = `${currentTask.name} (${currentTask.finish}/${currentTask.num})`;
        displayElement.style.visibility = "visible";  // ✅ CHANGED
    } else {
        // Hide but keep the space
        displayElement.innerHTML = "";
        displayElement.style.visibility = "hidden";   // ✅ CHANGED
    }
}
