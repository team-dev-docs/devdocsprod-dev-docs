# Suggestions for other Startups: Check your DMARC

## Our recent experience with DMARC

Today, I realized the importance of securing our email domain. Implementing a DMARC (Domain-based Message Authentication, Reporting, and Conformance) policy was crucial, yet it's often overlooked when setting up Google Workspace with a custom domain.

## Our DMARC Implementation Process

1. **Checked SPF and DKIM**: First, I ensured our SPF and DKIM were correctly set up in Google Workspace.

2. **Created a DMARC Record**: I started with a minimal policy:

   ```
   v=DMARC1; p=none; rua=mailto:dmarc-reports@ourdomain.com
   ```

3. **Published the Record**: I added this to our domain's DNS settings.

4. **Monitored Reports**: We began receiving and analyzing reports to understand our email traffic.

5. **Gradually Tightened Policy**: Over time, I moved from 'p=none' to 'p=quarantine', and finally to 'p=reject'.

## Lessons Learned

* Start with a lenient policy and tighten gradually.

* Don't forget about third-party services sending emails on your behalf.

* Regularly review DMARC reports to catch issues early.

## Why It's Worth It

Implementing DMARC early on has helped us:

* Build trust with customers and partners

* Protect our brand reputation from the start

* Improve email deliverability

* Gain visibility into our email ecosystem

## Advice for Fellow Startups

Don't overlook email security when setting up your custom domain with Google Workspace. Implementing DMARC might seem technical, but the benefits far outweigh the effort. Start early, stay vigilant, and keep monitoring. Your future self will thank you for laying this secure foundation from the beginning.
