package subtasks

import "context"

// Create adds a new subtask to a parent task with the given details.
//
//encore:api auth method=POST path=/subtasks
func Create(ctx context.Context, req *CreateSubtaskRequest) (*Subtask, error) {
	panic("not yet implemented")
}

// CreateSubtaskRequest contains the necessary fields to create a new subtask.
type CreateSubtaskRequest struct {
	// Title is the name of the subtask. It must not be empty.
	Title string `json:"title"`

	// IsCompleted indicates whether the subtask is done. Defaults to false.
	IsCompleted bool `json:"isCompleted"`

	// TaskID refers to the parent task to which this subtask belongs. It must
	// be a valid task identifier.
	TaskID int `json:"taskID"`
}
