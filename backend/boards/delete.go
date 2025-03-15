package boards

import "context"

// Delete removes a board from the system.
// 
// Path Parameters:
//  - boardId: the unique identifier of the board to delete
// 
// Errors:
//  - NotFound:           Returned if no board exists with the given boardId
//  - FailedPrecondition: Returned if deletion violates system constraints or is
//                        otherwise not permissible
// 
//encore:api auth method=DELETE path=/boards/:boardId
func Delete(ctx context.Context, boardId int) error {
    panic("not yet implemented")
}

