package tasks

import "context"

// Retrieve fetches a task using its taskId.
// 
// Path Parameters:
//  - taskId: the id of the task to retrieve
// 
// Errors:
//  - NotFound: Returned if the task with the given ID does not exist
// 
//encore:api auth method=GET path=/tasks/:taskId
func Retrieve(ctx context.Context, taskId int) (*Task, error) {
    panic("not yet implemented")
}

