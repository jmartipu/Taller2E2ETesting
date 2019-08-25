describe('Los estudiantes Registro', function() {
    it('Visits los estudiantes and Register', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

	cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("prueba")
      	cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("exitosa")
      	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebaexitosa1@example.com")
      	cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
	cy.get('.cajaSignUp').find('[type="checkbox"]').check()
      	cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      	cy.get('.cajaSignUp').find('input[name="password"]').click().type("PruebaExitosa.01")
	cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      	cy.get('.cajaSignUp').contains('Registrarse').click()
      	cy.contains('Registro exitoso')
    })
})

describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

	cy.contains('Ingresar').click()
      	cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pruebaexitosa1@example.com")
      	cy.get('.cajaLogIn').find('input[name="password"]').click().type("PruebaExitosa.01")
      	cy.get('.cajaLogIn').contains('Ingresar').click()
	cy.get('button[id="cuenta"]').click().contains('Salir')
	}  	
    })
})