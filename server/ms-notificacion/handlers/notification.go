package handlers

import (
	"encoding/json"
	"ms-notificacion/models"
	"ms-notificacion/utils"
	"net/http"
)

func NotifyPurchase(w http.ResponseWriter, r *http.Request) {
	var purchase models.Purchase
	err := json.NewDecoder(r.Body).Decode(&purchase)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	subject := "Resumen de tu compra"
	body := "Gracias por tu compra. Aquí tienes el resumen:\n" + purchase.Summary

	err = utils.SendEmail(purchase.UserEmail, subject, body)
	if err != nil {
		http.Error(w, "Failed to send email", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Email sent successfully" + purchase.Summary + purchase.UserEmail))
}
