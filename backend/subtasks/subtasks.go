// The subtasks service allows CRUD operations on subtasks associated with tasks.
package subtasks

// Subtask represents a task under a higher-level task it belongs to.
type Subtask struct {
	// ID is a unique identifier for the subtask. It is used for identification
	// in the system.
	ID int `json:"id"`

	// Title is the name of the subtask.
	Title string `json:"title"`

	// IsCompleted shows whether the subtask is marked as completed.
	IsCompleted bool `json:"isCompleted"`

	// TaskID links to the parent task to which this subtask belongs.
	TaskID int `json:"taskID"`
}
