---
title: "The Pragmatic Programmer"
metaTitle: "The Pragmatic Programmer"
metaDescription: "The Pragmatic Programmer"
---

**Think** about your work.

If you’re a pragmatic programmer, you’ll share many of the following characteristics :

-	Early adopter/fast adapter.
-	Inquisitive
-	Critical thinker
-	Realistic
-	Jack of all trades

Constantly be thinking, critiquing your work in real time. The old IBM corporate motto, ::THINK!::, is the Pragmatic Programmer’s Mantra.

Great lawns need small amount of daily care, and so do great programmers.

*Kaizen* is a Japanese term that captures the concept of continously making many small improvements.

Always think beyond the immediate problem, always trying to place it in its larger context, always trying to be aware of the bigger picture.

> After all, without this larger context, how can you be pragmatic ?

Chapter 1: A pragmatic philosophy
---------------------------------

Before you approach anyone to tell them why something can’t be done, is late or is broken, stop and listen to yourself.

Instead of excuses, provide options. Don’t say it can’t be done; explain what can be done to salvage the situation.

#### Software Entropy

Don’t leave “broken windows” (bad designs, wrong decisions, or poor code) unrepaired. Fix each one soon as it is discovered.

> Help strengthhen your team by surveying your computing “neighborhood”. Choose two or three “broken windows” and discuss with your colleagues what the problems are and what could be done to fix them.
>
> Make Quality a Requirements Issue

If you give your users something to play with early, their feedback will often lead you to a better eventual solution

Don’t spoil a perfectly good program by overembellishment and over-refinement. Move on and let your code stand in its own right for a while. It may not be perfect. Don’t worry it could never be perfect

> An investment in knowledge always pays the best interest

#### Managing Knowledge Portfolios

1.	Serious investors invest regulary - as a habit
2.	Diversification is the key to long-term success
3.	Smart investors balance their portfolios between conservative and high-risk, high-reward investments
4.	Investors try to buy low and sell high for maximum return
5.	Portfolios should be reviewed and rebalanced periodically

#### Communicate

1.	Know what you want to say
2.	Plan what you want to say, Write an outline.
3.	Then ask yourself, “Does it get across whatever I’m trying to say?” Refine it until it does

4.	Know your audience

5.	What do you want them to learn?

6.	What is their interest in what you’ve got to say?

7.	How sophisticated are they?

8.	How much detail do they want?

9.	Whom do you want to own the information?

10.	How can you motivate them to listen to you?

Chapter 2 : A Pragmatic Approach
--------------------------------

#### Orthogonality

Orthogonality is a critical concept if you want to produce systems that are easy to design, build, test and extend.

In computing, the term has come to signify a kind of independence or decoupling. Two or more things are orthogonal if changes in one do not affect any of the others. In a well designed system, the database code will be orthogonal to the user interface.

> Eliminate Effects Between Unrelated Things

#### Gain Productivity

There is a fairly subtle gain in productivity when you combine orthogonal components. Assume that one component does M distinct things and another does N things. If they are orthogonal and you combine them, the result does M x N things.

#### Design

Ask yourself how decoupled your design is from changes in the real world. Are you using a telephone number as a customer identifier ? What happens when the phone company reassigns area codes ? ::Don’t rely on the properties of things you can’t control::

#### How to use Prototypes

when building a prototype, what details can you ignore ?

-	Correctness
-	Completeness
-	Robustness
-	Style

#### Tracer code Approach

-	Users get to see something working early
-	Developers build a structure to work in
-	You have an integration platform
-	You have something to demonstrate
-	You have better feel for the progress

#### Keep Track of Your Estimating Process

-	Track record of your estimates
-	When estimates turns out wrong, don’t just shrug and walk away. Find out why it differed from your guess
-	Take some time to uncover what happened. If you do, your next estimate will be better

### Estimating Project Schedules

#### Incremental Development

-	Check requirements
-	Analyze risk
-	Design, implement, integrate
-	Validate with the users

So you complete the coding and testing the initial functionality and mark this as the end of the first increment. Based on that experience, you can refine your initial guess on the number of iterations and what can be included in each.

The refinement gets better and better each time, and confidence in the schedule grows along with it.

Chapter 3 : Basic Tools
-----------------------

Many new programmers make the mistake of adopting a single power tool, such as a particular integrated development environment (IDE), and never leave its cozy interface. This is really a mistake. We need to be comfortable beyond the limits imposed by an IDE.

> You can’t be a great programmer until you become highly skilled at *Debugging*

#### The Power of Plain Text

As Pragmatic Programmers, ::our base material isn’t wood or iron, it’s knowledge::.

We gather requirements as knowledge, then express that knowledge in our designs, implementations, tests and documents. And we believe that the best format for storing knowledge persistently is plain text.

#### Shell Games

If you do all your work using GUIs, you are missing out on the full capabilities of your environment. You won’t be able to automate common tasks

#### Debugging

Before you start to loot at the bug, make sure that you are working on code that compiled cleanly - without warnings. It doesn’t make sense to waste time trying to find a problem that the compiler could find you! We need to concentrate on the harder problem at hand.

Links
---

* https://learning.oreilly.com/library/view/the-pragmatic-programmer/020161622X/
