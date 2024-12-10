package models

type Purchase struct {
    UserEmail string `json:"user_email"`
    Summary   string `json:"summary"`
}