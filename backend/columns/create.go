package columns

import "context"

// Create adds a new column to the specified board.
//
//encore:api auth method=POST path=/columns
func Create(ctx context.Context, req *CreateColumnRequest) (*Column, error) {
	panic("not yet implemented")
}

// CreateColumnRequest contains the attributes needed to create a column
type CreateColumnRequest struct {
	// Name identifies the column within the board. It must be unique per board
	Name string `json:"name"`

	// BoardID associates the column to a specific board
	BoardID int `json:"boardID"`
}
