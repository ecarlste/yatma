package boards

import (
	"context"

	"encore.dev/beta/errs"
)

// Delete removes a board from the system.
//
// Path Parameters:
//   - boardId: the unique identifier of the board to delete
//
// Response:
//   - The deleted board entity
//
// Errors:
//   - NotFound:           Returned if no board exists with the given boardId
//   - FailedPrecondition: Returned if deletion violates system constraints or is
//     otherwise not permissible
//
//encore:api auth method=DELETE path=/boards/:boardId
func Delete(ctx context.Context, boardId string) (*Board, error) {
	var board Board

	err := db.QueryRow(ctx, `
        DELETE FROM boards
        WHERE id = $1
        RETURNING id, name
    `, boardId).Scan(&board.Id, &board.Name)
	if err != nil {
		return nil, errs.Wrap(err, "failed to delete board")
	}

	return &board, nil
}
