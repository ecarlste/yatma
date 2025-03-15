package boards

import "context"

// Retrieve gets a board by boardId. Provides full details of the board.
// 
// Path Parameters:
//  - boardId: the unique identifier of the board to retrieve
// 
// Errors:
//  - NotFound: Returned if no board exists with the given boardId
// 
//encore:api auth method=GET path=/boards/:boardId
func Retrieve(ctx context.Context, boardId int) (*Board, error) {
    panic("not yet implemented")
}

