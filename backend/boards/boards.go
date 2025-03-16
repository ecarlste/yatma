// The boards service allows for the management of board entities within the system.
package boards

import "encore.dev/storage/sqldb"

type BoardName struct {
	// Name must be unique and contain 3-50 alphanumeric characters.
	Name string `json:"name" validate:"required,min=3,max=50"`
}

// Board represents a board entity with basic identification and properties.
type Board struct {
	// Id is a unique identifier for the board.
	Id string `json:"id"`

	BoardName
}

type BoardList struct {
	// Boards is a list of board entities.
	Boards []*Board `json:"boards"`
}

var db = sqldb.NewDatabase("boards", sqldb.DatabaseConfig{
	Migrations: "./migrations",
})
