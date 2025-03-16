package middleware

import (
	"fmt"

	"encore.dev/beta/errs"
	"encore.dev/middleware"
	"encore.dev/rlog"
	"github.com/go-playground/validator/v10"
)

var validate = validator.New()

//encore:middleware global target=all
func ValidationMiddleware(req middleware.Request, next middleware.Next) middleware.Response {
	rlog.Debug("ValidationMiddleware called")
	payload := req.Data().Payload
	if payload == nil {
		rlog.Debug("ValidationMiddleware: no payload")
		return next(req)
	}

	rlog.Debug("ValidationMiddleware: validating payload", "payload", payload)
	rlog.Debug(fmt.Sprintf("ValidationMiddleware: validating payload: %+v", payload))

	if err := validate.Struct(payload); err != nil {
		rlog.Debug("ValidationMiddleware: validation failed", "error", err)
		err = errs.WrapCode(err, errs.InvalidArgument, "validation failed")
		return middleware.Response{Err: err}
	}

	return next(req)
}
