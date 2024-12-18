# Part one

Make a walkMap() function that goes through the map, rotating and moving the guard until they are out of bounds

# Part two

The only approach I can think of is to keep trying different obstacle positions and walking the map for a certain number of steps, checking for loops every time.

We'd probably only want to put obstacles next to the original path the guard walked - can we figure out spots where the guard would change rotation due to the obstacle? Putting an obstacle next to a straight line will not ultimately change the outcome so is a bit pointless

So we need a way to detect a loop and we need to amend the walkMap() function so it can do X steps at a time

This feels extremely tricky and I'm noticing that I'm putting off getting started because I don't feel confident I can do it

I think visualising things would help

Could I animate this in the terminal?
