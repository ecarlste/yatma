// The boards service allows for the management of board entities within the system.
package boards

import "encore.dev/storage/sqldb"

// Board represents a board entity with basic identification and properties.
type Board struct {
	// Id is a unique identifier for the board.
	Id string `json:"id"`

	// Name must be a valid string and unique across boards.
	Name string `json:"name"`
}

type BoardList struct {
	// Boards is a list of board entities.
	Boards []*Board `json:"boards"`
}

var db = sqldb.NewDatabase("boards", sqldb.DatabaseConfig{
	Migrations: "./migrations",
})
