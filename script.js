//your JS code here. If required.
        document.addEventListener('DOMContentLoaded', function() {
            const squares = document.querySelectorAll('.square');

            squares.forEach((square, index) => {
                square.addEventListener('mouseenter', () => {
                    squares.forEach((sq, i) => {
                        if (i !== index) {
                            sq.style.backgroundColor = '#6F4E37'; // Coffee
                        }
                    });
                });

                square.addEventListener('mouseleave', () => {
                    squares.forEach(sq => {
                        sq.style.backgroundColor = '#E6E6FA'; // Lavender
                    });
                });
            });
        }); 

describe('Color Change Squares', () => {
    const baseUrl = 'http://localhost:3000'; // Update the URL if necessary

    it('changes colors on hover', () => {
        cy.visit(baseUrl);
        
        // Trigger mouseover on square1 and verify colors
        cy.get('#square1').trigger('mouseover');
        cy.get('#square1').should('have.css', 'background-color', 'rgb(230, 230, 250)'); // Lavender
        cy.get('#square2').should('have.css', 'background-color', 'rgb(111, 78, 55)'); // Coffee
        cy.get('#square3').should('have.css', 'background-color', 'rgb(111, 78, 55)'); // Coffee
        
        // Trigger mouseout on square1 and verify colors
        cy.get('#square1').trigger('mouseout');
        cy.get('#square1').should('have.css', 'background-color', 'rgb(230, 230, 250)'); // Lavender
        cy.get('#square2').should('have.css', 'background-color', 'rgb(230, 230, 250)'); // Lavender
        cy.get('#square3').should('have.css', 'background-color', 'rgb(230, 230, 250)'); // Lavender
    });
});

