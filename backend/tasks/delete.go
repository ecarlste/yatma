package tasks

import "context"

// Delete removes a task by its taskId.
// 
// Path Parameters:
//  - taskId: the id of the task to delete
// 
// Errors:
//  - NotFound:           Returned if the task with the given ID does not exist
//  - FailedPrecondition: Returned if the task cannot be deleted due to unmet
//                        conditions
// 
//encore:api auth method=DELETE path=/tasks/:taskId
func Delete(ctx context.Context, taskId int) error {
    panic("not yet implemented")
}

