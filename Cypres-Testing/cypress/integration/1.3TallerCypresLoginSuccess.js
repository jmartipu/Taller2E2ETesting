describe('Los estudiantes login success', function() {
    it('Visits los estudiantes and success at login', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pruebaexitosa1@example.com")
      	cy.get('.cajaLogIn').find('input[name="password"]').click().type("PruebaExitosa.01")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
	cy.get('button[id="cuenta"]').click().should('to.exist')
    })
})