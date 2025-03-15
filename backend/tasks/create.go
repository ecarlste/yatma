package tasks

import "context"

// Create adds a new task with an Id, Title, Description, and ColumnId.
// 
// Errors:
//  - AlreadyExists:      Returned if a task with the same ID already exists
//  - FailedPrecondition: Returned if the task cannot be created due to unmet
//                        conditions
// 
//encore:api auth method=POST path=/tasks
func Create(ctx context.Context, req *CreateTaskRequest) (*Task, error) {
    panic("not yet implemented")
}

// CreateTaskRequest contains information needed to create a new task
type CreateTaskRequest struct {
  // Title must be present and not exceed 100 characters
  Title string `json:"title"`

  // Description provides details about the task and can be up to 255
  // characters
  Description string `json:"description"`

  // ColumnId refers to the ID of the column where the task belongs
  ColumnId int `json:"columnId"`
}

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