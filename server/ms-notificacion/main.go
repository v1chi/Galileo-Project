package main

import (
    "log"
    "net/http"
    "ms-notificacion/handlers"
    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/notify", handlers.NotifyPurchase).Methods("POST")
    log.Println("Server started at :8080")
    log.Fatal(http.ListenAndServe(":8080", r))
}