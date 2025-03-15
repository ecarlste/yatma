// The tasks service allows for creating, retrieving, updating, and deleting tasks.
package tasks

// Task represents a task with its attributes in the system
type Task struct {
	// Id is the unique identifier for the task
	Id int `json:"id"`

	// Title is the name of the task
	Title string `json:"title"`

	// Description provides more information about the task
	Description string `json:"description"`

	// ColumnId is the identifier of the column associated with the task
	ColumnId int `json:"columnId"`
}
