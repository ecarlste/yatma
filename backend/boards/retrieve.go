package boards

import (
	"context"

	"encore.dev/rlog"
)

// RetrieveById gets a board by boardId. Provides full details of the board.
//
// Path Parameters:
//   - boardId: the unique identifier of the board to retrieve
//
// Errors:
//   - NotFound: Returned if no board exists with the given boardId
//
//encore:api auth method=GET path=/boards/:boardId
func RetrieveById(ctx context.Context, boardId string) (*Board, error) {
	panic("not yet implemented")
}

// Retrieve gets a list of all boards. Provides basic details of each board.
//
//encore:api auth method=GET path=/boards
func Retrieve(ctx context.Context) (*BoardList, error) {
	rows, err := db.Query(ctx, `
        SELECT id, name
        FROM boards
    `)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	boardList := &BoardList{}
	for rows.Next() {
		var board Board
		if err := rows.Scan(&board.Id, &board.Name); err != nil {
			return nil, err
		}
		rlog.Debug("Retrieved board", "board", board)
		rlog.Debug("Board ID", "id", board.Id)
		rlog.Debug("Board Name", "name", board.Name)
		boardList.Boards = append(boardList.Boards, &board)
	}

	return boardList, nil
}
