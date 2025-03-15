package subtasks

import "context"

// Update modifies an existing subtask by subtaskId.
// 
// Path Parameters:
//  - subtaskId: the ID of the subtask to update
// 
//encore:api auth method=PUT path=/subtasks/:subtaskId
func Update(ctx context.Context, subtaskId int, req *UpdateSubtaskRequest) (*Subtask, error) {
    panic("not yet implemented")
}

// UpdateSubtaskRequest holds the information required to update an existing
// subtask.
type UpdateSubtaskRequest struct {
  // Title is the name of the subtask. It must be updated if supplied.
  Title string `json:"title"`

  // IsCompleted indicates if the subtask has been completed.
  IsCompleted bool `json:"isCompleted"`
}