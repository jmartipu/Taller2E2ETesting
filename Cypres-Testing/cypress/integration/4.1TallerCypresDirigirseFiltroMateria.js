describe('Los estudiantes Dirigirse a Profesor', function() {
    it('Visits los estudiantes and go to a teacher page', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

      	cy.get('div[class="Select-placeholder"]').click()
      	cy.get('input').type("Pruebas Automaticas")
      	cy.get('div[id="react-select-required_error_checksum--option-0"]').contains("MISO4208")

    })
})