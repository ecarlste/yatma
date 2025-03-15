// The columns service allows managing columns within a board, including creating, retrieving, updating, and deleting columns.
package columns

// Column represents a column in a board
type Column struct {
	// ID is the unique identifier of the column
	ID int `json:"id"`

	// Name is the column's name
	Name string `json:"name"`

	// BoardID indicates which board the column belongs to
	BoardID int `json:"boardID"`
}
