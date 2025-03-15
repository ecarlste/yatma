// The boards service allows for the management of board entities within the system.
package boards

// Board represents a board entity with basic identification and properties.
type Board struct {
	// Id is a unique identifier for the board.
	Id int `json:"id"`

	// Name must be a valid string and unique across boards.
	Name string `json:"name"`
}
