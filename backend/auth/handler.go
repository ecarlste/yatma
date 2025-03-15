package auth

import (
	"context"

	"encore.dev/beta/auth"
	"encore.dev/rlog"
)

type Data struct {
	Username string
}

//encore:authhandler
func AuthHandler(ctx context.Context, token string) (auth.UID, error) {
	rlog.Info("AuthHandler called with token:", "token", token)
	// Simulate a user lookup based on the token
	// In a real application, you would verify the token and fetch user data from a database or an external service.
	return auth.UID("c02f818c-5f3c-4d38-9bc0-05a5f37854f9"), nil
}
