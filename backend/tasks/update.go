package tasks

import "context"

// Update modifies an existing task identified by the taskId.
// 
// Path Parameters:
//  - taskId: the id of the task to update
// 
// Errors:
//  - NotFound:           Returned if the task with the given ID does not exist
//  - FailedPrecondition: Returned if the task cannot be updated due to unmet
//                        conditions
// 
//encore:api auth method=PUT path=/tasks/:taskId
func Update(ctx context.Context, taskId int, req *UpdateTaskRequest) (*Task, error) {
    panic("not yet implemented")
}

// UpdateTaskRequest contains information needed to update an existing task
type UpdateTaskRequest struct {
  // Title must be present and not exceed 100 characters
  Title string `json:"title"`

  // Description provides details about the task and can be up to 255
  // characters
  Description string `json:"description"`

  // ColumnId refers to the ID of the column where the task belongs
  ColumnId int `json:"columnId"`
}