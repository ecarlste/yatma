package subtasks

import "context"

// Delete removes a subtask identified by subtaskId.
// 
// Path Parameters:
//  - subtaskId: the identifier of the subtask to delete
// 
// Errors:
//  - NotFound: Returned if the subtask with the given subtaskId cannot be
//              found
// 
//encore:api auth method=DELETE path=/subtasks/:subtaskId
func Delete(ctx context.Context, subtaskId int) error {
    panic("not yet implemented")
}

