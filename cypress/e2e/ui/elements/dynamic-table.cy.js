/// <reference types='Cypress' />

describe('testing dynamic table for automation testing practice', function(){

    it('retrieve chrome process value', function(){

      let cpuColumnIndexValue;
      let ChromeCpuValue;

      cy.visit('https://practice.expandtesting.com/')
      cy.get('a[href="/dynamic-table"].btn').contains('Try it out').click()
      cy.url().should('includes','/dynamic-table')

      //retrieving value of chrome cpu value and match it with yallow highlighted value
        
      cy.get('table thead th').each(($col, index) => {
        cy.log($col.text(), index)
        if($col.text() === 'CPU'){
          cpuColumnIndexValue = index;
          cy.log(`The index of CPU column is: ${index}`)
        }
      }).then(function(){
        cy.get('tbody tr').each(($row) =>{
          cy.get($row).find('td').eq(0).then(($rowValue) =>{
            if($rowValue.text() === 'Chrome'){
              cy.get($row).find('td').eq(cpuColumnIndexValue).invoke('text').then((cpuValue) =>{
                // cy.log(`The chrome process cpu value is : ${cpuValue}`)
                ChromeCpuValue = cpuValue.trim()
                cy.get('p[id="chrome-cpu"]').should('contain',ChromeCpuValue)
              })
            }else {
              // Else case: Chrome row not found
              cy.log('Chrome row not found.'); 
            }
          })
        })
      })
    })
    
})
