package main

import (
	"net/http"
	"text/template"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/root", "root")
	e.Static("/public", "public")

	// Routing
	e.GET("/", home)
	e.GET("/register", register)
	e.GET("/user", user)
	e.GET("/peraturan", peraturan)
	e.GET("/faq", faq)
	e.GET("/aboutUs", aboutUs)

	e.Logger.Fatal(e.Start("localhost:5000"))
}

func peraturan(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/peraturan.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func faq(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/faq.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func aboutUs(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/aboutUs.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func register(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/register.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func home(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/index.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func user(c echo.Context) error {
	tmpl, err := template.ParseFiles("views/user.html")

	if err != nil { // null
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func newUser(c echo.Context) error {
	return c.Redirect(http.StatusMovedPermanently, "/")
}
