/// <reference types="cypress" />

describe('Provide a correct command', () => {
    it('should navigate to QATest app', () => {
        cy.visit('https://qa-task.netlify.app/')    
        cy.get('#mat-input-0').type("uname")
        cy.get('.mat-button').click()
        cy.get('pre').contains("Linux")
    })
})

describe('Provide an incorrect command', () => {
    it('should navigate to QATest app', () => {
        cy.visit('https://qa-task.netlify.app/')    
        cy.get('#mat-input-0').type("UNAME")
        cy.get('.mat-button').click()
        cy.get('pre').contains("error: command not supported.")
    })
})

describe('Provide an empty command', () => {
    it('should navigate to QATest app', () => {
        cy.visit('https://qa-task.netlify.app/')    
        cy.get('.mat-button').click()
        cy.get('pre').contains("error: no command.")
    })
})

describe('Provide an echo command', () => {
    var com = "sample"
    it('should navigate to QATest app', () => {
        cy.visit('https://qa-task.netlify.app/') 
        cy.get('#mat-input-0').type("echo " + com)
        cy.get('.mat-button').click()
        cy.get('pre').contains(com)
    })
})