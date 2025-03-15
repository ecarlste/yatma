package boards

import "context"

// Update modifies the details of an existing board.
// 
// Path Parameters:
//  - boardId: the unique identifier of the board to update
// 
// Errors:
//  - NotFound:           Returned if no board exists with the given boardId
//  - FailedPrecondition: Returned if the update request violates system constraints
// 
//encore:api auth method=PUT path=/boards/:boardId
func Update(ctx context.Context, boardId int, req *UpdateBoardRequest) (*Board, error) {
    panic("not yet implemented")
}

// UpdateBoardRequest contains the attributes that can be updated for a board.
type UpdateBoardRequest struct {
  // Name must be a valid string and unique across boards.
  Name string `json:"name"`
}