package main

import (
	"log"
	"ms-notificacion/handlers"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/notify", handlers.NotifyPurchase).Methods("POST")

	// Configurar CORS
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Cambia '*' por dominios específicos si es necesario
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})

	// Aplicar el middleware de CORS
	handler := c.Handler(r)

	log.Println("Server started at :3005")
	log.Fatal(http.ListenAndServe(":3005", handler))
}
