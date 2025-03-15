package auth

import (
	"context"

	"encore.dev/beta/auth"
)

type Data struct {
    Username string
}

//encore:authhandler
func AuthHandler(ctx context.Context, token string) (auth.UID, *Data, error) {
    panic("not yet implemented")
}