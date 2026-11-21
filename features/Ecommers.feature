Feature: Ecommers all validation
Scenario: Product place order
Given login into Ecommers appliacrion with "kavinilani@gmail.com" and "MuthuAmmu@2026"
When add "ZARA COAT 3" to Card
Then  verify product is displayed in the cart
