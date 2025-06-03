# Suggestions for other Startups: Check your DMARC

## Our recent experience with DMARC

Today, I learned we had an issue with one of our domains, in that it was missing \_DMARC policy. DMARC (Domain-based Message Authentication, Reporting, and Conformance) policy is important, yet often overlooked when setting up Google Workspace with a custom domain. Luckily this did not have an impact on the business, and we implemented a fix today, but regardless I wanted to share my experience.

## Our DMARC Implementation Process

1. **Created a DMARC Record**: I started with a minimal policy in our dns:

   ```
   v=DMARC1; p=none; rua=mailto:dmarc-reports@{{our domain}}
   ```

2. **Published the Record**: I added this to our domain's DNS settings.

3. **Gradually Tightened Policy**: Over time, I moved from 'p=none' to 'p=reject'.

## Lessons Learned

* Start with a lenient policy and tighten gr

* Regularly review DMARC reports to catch issues early.

## Why It's Worth It

Implementing DMARC early on has helped us:

* Build trust with customers and partners

* Protecting your domain from being used by other folks outside your team

* Protect our brand reputation from the start

* Improve email deliverability

* Gain visibility into our email ecosystem

## Advice for Fellow Startups

Don't overlook email security when setting up your custom domain with Google Workspace. Implementing DMARC might seem technical, but the benefits far outweigh the effort. Start early, stay vigilant, and keep monitoring. Your future self will thank you for laying this secure foundation from the beginning.
