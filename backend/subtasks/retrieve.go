package subtasks

import "context"

// Retrieve fetches a subtask by subtaskId.
// 
// Path Parameters:
//  - subtaskId: the unique identifier of the subtask to be retrieved
// 
// Errors:
//  - NotFound: Returned if the subtask with the given subtaskId does not
//              exist
// 
//encore:api auth method=GET path=/subtasks/:subtaskId
func Retrieve(ctx context.Context, subtaskId int) (*Subtask, error) {
    panic("not yet implemented")
}

