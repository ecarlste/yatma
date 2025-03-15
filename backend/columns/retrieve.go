package columns

import "context"

// Retrieve gets a column by columnId.
// 
// Path Parameters:
//  - columnId: the ID of the column to retrieve
// 
// Errors:
//  - NotFound: Returned if the column with the specified ID does not exist
// 
//encore:api auth method=GET path=/columns/:columnId
func Retrieve(ctx context.Context, columnId int) (*Column, error) {
    panic("not yet implemented")
}

