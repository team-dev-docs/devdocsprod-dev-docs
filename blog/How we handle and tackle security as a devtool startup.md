We are an AI devtool that turns your code to content, and code is something we understand is something very important to users so we do no take that responsibility lightly. So you might be wondering how do we feel about security? In a word it is a top top top, and I mean top priority for us. Just for context we try to add extra security even against ourselves including additional encryption, reviewing our code to make sure we do not have security holes, and most of all reducing our visibility around things around our users info such as the code or sensitive information.

## Reducing visibility

Now this last security principle is super important to us, AKA reducing our visibility around things around such as the code our users send or any other sensitive information. Other AI companies might want to persist and train on your code, but I will make this clear we do not. As a developer myself with a security and privacy background I am super sensitive to making sure our users have a sense of security that their data is theirs and it is safe. The way we do this is essentially we make explicitly sure to persist as little as possible including things such as what is your org or team name and other essential foundational items to the service. More importantly in our backend services, we make a point to reduce logging to almost 0 in our production user environments, in that things like logging to the console are not available to us. Transparently this makes debugging and finding bugs way that are live way harder but to us it is worth it to ensure that teams that use our service feel safe.

## What event inspired this post

At this point you have likely gathered I am paranoid and almost neurotic about security, so you might be wondering inspired this event!
