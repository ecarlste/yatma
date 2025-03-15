package columns

import "context"

// Delete removes a column by its id.
// 
// Path Parameters:
//  - columnId: the ID of the column to delete
// 
// Errors:
//  - NotFound: Returned if the column with the specified ID does not exist
// 
//encore:api auth method=DELETE path=/columns/:columnId
func Delete(ctx context.Context, columnId int) error {
    panic("not yet implemented")
}

