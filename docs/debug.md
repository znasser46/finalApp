## Debug Case Study:
### Debug #1:
Had to switch from the SRV connection string to access my database while coding locally. My firewall was not allowing the connection.

After many hours of testing different networking settings I had to change the conncetion string, but only for coding locally. The production .env still works with the SRV form of the connection string.



### Debug #2:
I was storing all of the entered information into the database but didnt include the user id in the budget model create function so that it would be related to the user that created it. 

This caused the entries to be stored in the database, but not be shown in the users list of saved budgets since it couldn't be stored as that users.

The fix for this was fairly simple, I just had to add the user id category to the values beind stored once the authentication was fully implemented.

Code Snippet:
```javascript
export async function create(req, res) {
    try {
        const data = {
            name: req.body.name,
            income: req.body.income,
            transportation: req.body.transportation,
            rent: req.body.rent,
            groceries: req.body.groceries,
            utility: req.body.utility,
            household: req.body.household,
            entertainment: req.body.entertainment,
            clothes: req.body.clothes,
            healthcare: req.body.healthcare,
            totalExpenses: req.body.totalExpenses,
            remaining: req.body.remaining,
            userId: req.user.userId
        };
```
