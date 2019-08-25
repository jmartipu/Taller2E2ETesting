describe('Los estudiantes Busqueda Profesores', function() {
    it('Visits los estudiantes and search a teacher', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

      	cy.get('div[class="Select-placeholder"]').click()
      	cy.get('input').type("Mario Linares")
      	cy.get('div[id="react-select-required_error_checksum--option-0"]').contains("Mario Linares")


    })
})