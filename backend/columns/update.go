package columns

import "context"

// Update modifies the information of an existing column.
// 
// Path Parameters:
//  - columnId: the ID of the column to update
// 
//encore:api auth method=PUT path=/columns/:columnId
func Update(ctx context.Context, columnId int, req *UpdateColumnRequest) (*Column, error) {
    panic("not yet implemented")
}

// UpdateColumnRequest contains the attributes needed to update a column
type UpdateColumnRequest struct {
  // Name is the new name of the column. Must be unique per board
  Name string `json:"name"`
}