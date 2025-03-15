package boards

import "context"

// Create adds a new board with specified attributes.
//
// Errors:
//   - AlreadyExists:      Returned if a board with the same name already exists.
//   - FailedPrecondition: Returned if the board creation request is malformed or
//     violates system constraints.
//
//encore:api auth method=POST path=/boards
func Create(ctx context.Context, req *CreateBoardRequest) (*Board, error) {
	panic("not yet implemented")
}

// CreateBoardRequest contains the attributes required to create a board.
type CreateBoardRequest struct {
	// Name must be unique and can only contain alphanumeric characters.
	Name string `json:"name"`
}
