# Bankaccount commands 

One of the key differences between MinetopiaSDB v1 and v2 is the savings accounts. In the v1 version of MinetopiaSDB, a savings account wasn't more than a number saved in a players file. There was no option to share savings accounts, v2 sees the savings account nearly identical as a business account. Therefore, it's also possible to give a player multiple savings accounts and add multiple players to one savings account.

## How do I create a bankaccount?
Use the command ``/bankaccount create <Savings/Business/Government>`` to create a bankaccount. You can add players to this bankaccount with ``/bankaccount adduser <ID> <User>``. It is also possible to give players certain permissions so that, for example, they can only deposit money and not withdraw. This can be done with the following command: ``/bankaccount adduser <ID> <Player> [Withdraw/Deposit/Both]``.

## How do I use pinconsoles?
To create a payment request, use the command ``/pin set <Player> <Amount>`` after which you can click on a pinconsole, the 'purpur stairs' to actually send the payment request.
![Pinconsole create payment request](./pinconsole_setup_en.png)

If the player wants to pay for the payment request you have sent, he can do so by clicking on the pin console with a bankcard that you can get from ``/ddgitems``. If the player has clicked on the pin console with his bankcard, the transaction is completed and the money is transferred from the players account to the company's bankaccount.

If the player who sends the paymentrequest only has one bankaccount, that bankaccount gets selected automatically, if the player has multiple bankaccounts the player needs to include the ID of the bankaccount in the ``/pin set`` command.
![Pinconsole bankaccount select](./pinconsole_multiple_bankaccounts_en.png)
